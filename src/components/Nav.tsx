import { Link, useLocation } from "react-router-dom";

export function Nav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Section anchors only exist on the homepage. From any other page,
  // prefix the hash with "/" so the link routes back home first,
  // then jumps to the section once there.
  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Securiq — home" className="h-8 w-auto md:h-9" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          <Link to="/" className="hover:text-ink">
            Home
          </Link>
          <Link to="/security" className="hover:text-ink">
            Security
          </Link>
          <Link to="/pricing" className="hover:text-ink">
            Pricing
          </Link>
          <Link to="/team" className="hover:text-ink">
            Team
          </Link>
          <Link to="/faq" className="hover:text-ink">
            FAQ
          </Link>
        </nav>
        <a
          href={sectionHref("#waitlist-full")}
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-pine-dark"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}
