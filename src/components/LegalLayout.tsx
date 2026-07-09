import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-ink/8">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Securiq" loading="lazy" className="h-7 w-auto" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-medium text-ink/60 hover:text-ink"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Updated {updated}
        </span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">{title}</h1>

        <div className="prose-legal mt-10 space-y-6 text-ink/75 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_p]:leading-relaxed">
          {children}
        </div>
      </main>
    </div>
  );
}
