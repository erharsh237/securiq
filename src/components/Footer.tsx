import { Link } from "react-router-dom";
import { X } from "lucide-react";

// Custom Instagram icon to match lucide style
function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path>
      <circle cx="17.5" cy="6.5" r="1.5"></circle>
    </svg>
  );
}

// Custom LinkedIn icon to match lucide style
function LinkedinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6 z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/8">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Securiq" loading="lazy" className="h-6 w-auto opacity-90" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-ink/60">
              Built for teams running real infrastructure without a security
              hire.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://x.com#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="p-2 rounded-lg text-ink/60 hover:text-ink hover:bg-ink/5 transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="p-2 rounded-lg text-ink/60 hover:text-ink hover:bg-ink/5 transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="p-2 rounded-lg text-ink/60 hover:text-ink hover:bg-ink/5 transition-colors"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Product
              </span>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="/#how-it-works" className="text-ink/60 hover:text-ink">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/#trust" className="text-ink/60 hover:text-ink">
                    Safety
                  </a>
                </li>
                <li>
                  <Link to="/pricing" className="text-ink/60 hover:text-ink">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-ink/60 hover:text-ink">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Company
              </span>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-ink/60 hover:text-ink">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-ink/60 hover:text-ink">
                    Team
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:investors@securiq.co"
                    className="text-ink/60 hover:text-ink"
                  >
                    Investor inquiries
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="text-ink/60 hover:text-ink">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Legal
              </span>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link to="/privacy" className="text-ink/60 hover:text-ink">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-ink/60 hover:text-ink">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="text-ink/60 hover:text-ink">
                    Security Overview
                  </Link>
                </li>
                <li>
                  <Link to="/security/disclosure" className="text-ink/60 hover:text-ink">
                    Responsible Disclosure
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-ink/8 pt-6 text-sm text-ink/60">
          © 2026 Securiq. Built for teams without a security team.
        </div>
      </div>
    </footer>
  );
}
