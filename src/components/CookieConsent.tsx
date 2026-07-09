import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { disableGoogleAnalytics, loadGoogleAnalytics } from "../lib/analytics";

type ConsentChoice = "accepted" | "declined";

const STORAGE_KEY = "securiq-cookie-consent";

function getStoredChoice(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    // localStorage can throw in private-browsing modes on some browsers;
    // treat as "no choice recorded" rather than crashing the app.
    return null;
  }
}

function storeChoice(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // If storage fails, the banner will simply reappear next visit —
    // degraded but not broken.
  }
}

export function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = getStoredChoice();
    setChoice(stored);
    setHydrated(true);
    if (stored === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  function handleAccept() {
    storeChoice("accepted");
    setChoice("accepted");
    loadGoogleAnalytics();
  }

  function handleDecline() {
    storeChoice("declined");
    setChoice("declined");
    disableGoogleAnalytics();
  }

  // Wait for the localStorage read before deciding whether to render, so we
  // don't flash the banner for returning visitors who already chose.
  if (!hydrated || choice !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-ink/10 bg-paper/95 px-6 py-4 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p id="cookie-consent-description" className="max-w-2xl text-sm text-ink/70">
          We use cookies to understand how visitors use this site. We only set
          them if you accept — see our{" "}
          <Link to="/privacy" className="underline hover:text-ink">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex flex-shrink-0 gap-2">
          <button
            type="button"
            onClick={handleDecline}
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-pine-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
