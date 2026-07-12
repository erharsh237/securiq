import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Nav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Section anchors only exist on the homepage. From any other page,
  // prefix the hash with "/" so the link routes back home first,
  // then jumps to the section once there.
  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Security", href: "/security" },
    { label: "Pricing", href: "/pricing" },
    { label: "Team", href: "/team" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Securiq — home" className="h-8 w-auto sm:h-8 md:h-9" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="hover:text-ink transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA Button — visible on all sizes */}
          <a
            href={sectionHref("#waitlist-full")}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-ink/90 active:bg-ink/80 sm:px-5 sm:py-2.5"
            onClick={closeMobileMenu}
          >
            Get early access
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 hover:bg-ink/5 rounded-lg transition-colors"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — Slide down from nav */}
      {mobileMenuOpen && (
        <div className="border-t border-ink/8 bg-paper/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-ink/70 hover:bg-ink/5 hover:text-ink transition-colors active:bg-ink/10"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
