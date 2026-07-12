// scripts/prerender.mjs
//
// Post-build prerendering for the Vite SPA. Runs after `vite build`.
//
// Why this exists: the app is a client-side-rendered React SPA. Googlebot
// renders JS well enough to index it, but many other crawlers and
// link-preview bots (Slack, LinkedIn, older/simpler bots) only read raw
// HTML and never execute JavaScript — they'd see the same generic
// fallback tags from index.html on every route.
//
// This script launches a real browser (Playwright/Chromium) against the
// built app for each known route, waits for React + react-helmet-async to
// finish updating <title>/<meta>, then writes the fully rendered HTML to
// dist/<route>/index.html. Static hosts (Vercel, Netlify) serve that file
// automatically when a crawler requests the route directly, while real
// users still get the normal SPA experience with client-side routing.
//
// Usage: node scripts/prerender.mjs  (run automatically via `npm run build`)

import puppeteer from "puppeteer-core";
import { createServer } from "node:http";
import handler from "serve-handler";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");
const PORT = 4173;

// Resolve a local Chrome/Chromium executable. Works with:
// - CHROME_PATH env var, if set (recommended in CI)
// - Puppeteer's own downloaded Chrome cache (after `npx puppeteer browsers install chrome`)
// - Common system install paths as a last resort
async function resolveExecutablePath() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  try {
    const { execSync } = await import("node:child_process");
    const puppeteerCachePath = execSync(
      "find ~/.cache/puppeteer -maxdepth 4 -type f \\( -name 'chrome' -o -name 'chrome-headless-shell' \\) 2>/dev/null | head -1"
    )
      .toString()
      .trim();
    if (puppeteerCachePath) return puppeteerCachePath;
  } catch {
    // fall through to system paths below
  }
  const candidates = [
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
  ];
  for (const path of candidates) {
    try {
      const { accessSync } = await import("node:fs");
      accessSync(path);
      return path;
    } catch {
      /* not found, try next */
    }
  }
  throw new Error(
    "No Chrome/Chromium executable found. Set CHROME_PATH, or run: npx puppeteer browsers install chrome"
  );
}

// Keep this in sync with the routes defined in src/App.tsx.
// Intentionally excludes the app-only routes (/incidents, /audit-log, etc.)
// if/when those are added — this list is for the public marketing site only.
const ROUTES = [
  "/",
  "/about",
  "/pricing",
  "/faq",
  "/team",
  "/contact",
  "/security",
  "/security/disclosure",
  "/privacy",
  "/terms",
];

// index.html ships static <title>/<meta description>/<link canonical>/OG/Twitter
// tags as a no-JS fallback (see the comment above them in index.html).
// react-helmet-async injects its own correct per-route tags at runtime, but
// verified directly against real Puppeteer captures: injection order is NOT
// consistent across tag types (Helmet's <title> lands before the static
// one; its canonical and description land after). Relying on "first" or
// "last" produced wrong results for at least one tag type every time it was
// tried. This instead removes tags matching the exact static fallback
// VALUES from index.html, regardless of position, which is unambiguous
// because those values are the one thing guaranteed not to change per
// route (every real route sets a different title/description/canonical).
const STATIC_FALLBACK = {
  title: "Securiq — Autonomous AI Security Engineer",
  description:
    "Securiq watches your AWS and GitHub for misconfigurations and leaked secrets, drafts the fix, and waits for your sign-off before touching anything. Built for teams running real infrastructure without a security hire.",
  canonical: "https://securiq.co/",
  ogTitle: "Securiq — Autonomous AI Security Engineer",
  ogDescription:
    "Autonomous detection and remediation for AWS and GitHub misconfigurations — with a human approval gate before anything changes.",
  ogUrl: "https://securiq.co/",
  twitterTitle: "Securiq — Autonomous AI Security Engineer",
  twitterDescription:
    "Autonomous detection and remediation for AWS and GitHub misconfigurations — with a human approval gate before anything changes.",
};

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function stripDuplicateHeadTags(html, route) {
  const isHomepage = route === "/";

  // On the homepage, the static fallback values ARE the correct values —
  // don't strip anything there, only dedupe if there happen to be two
  // identical tags (there won't be, but this keeps the function safe to
  // call unconditionally).
  if (isHomepage) return html;

  const removeIfStatic = (tagRegexSource, staticValue) => {
    const pattern = new RegExp(tagRegexSource.replace("__VALUE__", escapeRegExp(staticValue)));
    html = html.replace(pattern, "");
  };

  removeIfStatic(`<title>__VALUE__</title>`, STATIC_FALLBACK.title);
  removeIfStatic(`<meta name="description" content="__VALUE__">`, STATIC_FALLBACK.description);
  removeIfStatic(`<link rel="canonical" href="__VALUE__">`, STATIC_FALLBACK.canonical);
  removeIfStatic(`<meta property="og:title" content="__VALUE__">`, STATIC_FALLBACK.ogTitle);
  removeIfStatic(`<meta property="og:description" content="__VALUE__">`, STATIC_FALLBACK.ogDescription);
  removeIfStatic(`<meta property="og:url" content="__VALUE__">`, STATIC_FALLBACK.ogUrl);
  removeIfStatic(`<meta name="twitter:title" content="__VALUE__">`, STATIC_FALLBACK.twitterTitle);
  removeIfStatic(`<meta name="twitter:description" content="__VALUE__">`, STATIC_FALLBACK.twitterDescription);

  return html;
}

async function main() {
  const server = createServer((req, res) =>
    handler(req, res, {
      public: DIST_DIR,
      cleanUrls: true,
      rewrites: [{ source: "**", destination: "/index.html" }],
    })
  );
  await new Promise((resolve) => server.listen(PORT, resolve));

  const executablePath = await resolveExecutablePath();
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route === "/" ? "" : route}`;
    await page.goto(url, { waitUntil: "networkidle0" });

    // react-helmet-async updates <title>/<meta> after React mounts and
    // effects run — a short settle wait avoids racing that update.
    await new Promise((r) => setTimeout(r, 150));

    const html = await page.content();
    const cleanedHtml = stripDuplicateHeadTags(html, route);

    const outDir = route === "/" ? DIST_DIR : join(DIST_DIR, route);
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, "index.html"), cleanedHtml, "utf-8");

    console.log(`Prerendered ${route} -> ${join(outDir, "index.html").replace(DIST_DIR, "dist")}`);
  }

  await browser.close();
  server.close();
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
