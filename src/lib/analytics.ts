export const GA_MEASUREMENT_ID = "G-1ELY8PMZ3M";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

let initialized = false;

/**
 * Loads and initializes Google Analytics 4. Must only be called after the
 * user has explicitly granted cookie consent — this function performs no
 * checks of its own and will load GA unconditionally when called, so all
 * consent logic lives in the caller (see CookieConsent.tsx).
 */
export function loadGoogleAnalytics() {
  if (initialized || typeof window === "undefined") return;
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
