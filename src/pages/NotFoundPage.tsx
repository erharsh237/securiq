import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <img src="/logo.png" alt="Securiq" className="h-8 w-auto opacity-80" />
      <span className="mt-8 font-mono text-sm text-muted">404</span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
        This page doesn't exist.
      </h1>
      <p className="mt-2 max-w-sm text-ink/60">
        The link might be broken, or the page may have moved.
      </p>
      <Link
        to="/"
        className="mt-7 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-pine-dark"
      >
        Back to home
      </Link>
    </div>
  );
}
