import { Link } from "react-router-dom";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Securiq — home" className="h-8 w-auto md:h-9" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          <a href="#features" className="hover:text-ink">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-ink">
            How it works
          </a>
          <a href="#trust" className="hover:text-ink">
            Safety
          </a>
          <a href="#faq" className="hover:text-ink">
            FAQ
          </a>
          <a href="#waitlist" className="hover:text-ink">
            Waitlist
          </a>
        </nav>
        <a
          href="#waitlist"
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-pine-dark"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}
