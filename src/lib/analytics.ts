export const GA_MEASUREMENT_ID = "G-1ELY8PMZ3M";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

/**
 * True only on Vercel's Production environment (i.e. deploys from the
 * `main` branch to securiq.co). Preview deploys — staging, PR previews,
 * `vercel dev` — all read "preview" or "development" here and are excluded,
 * so test traffic never reaches the real GA property. Falls back to `false`
 * for local dev (`npm run dev`), where VITE_VERCEL_ENV is unset entirely.
 */
export const isProductionEnvironment = import.meta.env.VITE_VERCEL_ENV === "production";

let initialized = false;

/**
 * Loads and initializes Google Analytics 4. Must only be called after the
 * user has explicitly granted cookie consent — this function performs no
 * consent checks of its own, only an environment check, so consent logic
 * stays owned by the caller (see CookieConsent.tsx). On any non-production
 * deploy (staging, previews, local dev), this is a deliberate no-op even if
 * consent was granted, so test traffic never pollutes real GA data.
 */
export function loadGoogleAnalytics() {
  if (initialized || typeof window === "undefined" || !isProductionEnvironment) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
  });
}

/**
 * Removes GA's cookies and prevents further tracking. Called when a user
 * who previously consented later withdraws consent. Note: this cannot
 * un-send data already transmitted to Google, only stop future collection.
 */
export function disableGoogleAnalytics() {
  const cookiesToClear = document.cookie
    .split(";")
    .map((c) => c.trim().split("=")[0])
    .filter((name) => name.startsWith("_ga"));

  for (const name of cookiesToClear) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
  }

  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
}
