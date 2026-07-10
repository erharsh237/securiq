import { Link } from "react-router-dom";

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
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
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
                  <Link to="/about#team" className="text-ink/60 hover:text-ink">
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
                  <a href="mailto:hello@securiq.co" className="text-ink/60 hover:text-ink">
                    Contact
                  </a>
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
