import * as Sentry from "@sentry/react";

const SENTRY_DSN =
  "https://ecd1c644af22b7ea857e13b52fa6c8e2@o4511704938643456.ingest.de.sentry.io/4511704946704464";

/**
 * Initializes Sentry error reporting. Must be called once, before the React
 * app mounts, so that errors during initial render are also captured.
 *
 * Deliberately conservative here: no session replay, no performance tracing,
 * and PII sending is off. This is a marketing site with a waitlist form —
 * the goal is "tell us when something breaks," not detailed user analytics
 * (that's what the consent-gated GA4 integration is for).
 *
 * `environment` uses Vercel's VERCEL_ENV (production/preview/development)
 * rather than Vite's build MODE, since MODE is "production" for any
 * `vite build` — including staging — and would make staging errors
 * indistinguishable from real production errors in the Sentry dashboard.
 */
export function initErrorReporting() {
  Sentry.init({
    dsn: SENTRY_DSN,
    sendDefaultPii: false,
    tracesSampleRate: 0,
    environment: import.meta.env.VITE_VERCEL_ENV ?? "local",
  });
}

export { Sentry };
