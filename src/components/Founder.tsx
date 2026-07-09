export function Founder() {
  return (
    <section id="team" className="border-y border-ink/8 bg-white/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-sage font-display text-2xl font-semibold text-pine-dark">
            {/* PLACEHOLDER — replace with founder headshot */}
            H
          </div>

          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              Why we're building this
            </span>
            {/* PLACEHOLDER COPY — replace with real founder bio */}
            <p className="mt-3 font-display text-2xl font-medium leading-snug text-ink">
              "We kept seeing the same thing at small, fast-moving teams:
              real production infrastructure, and nobody whose job it was to
              watch it."
            </p>
            <p className="mt-5 leading-relaxed text-ink/65">
              Harsh is the founder of Securiq. [Placeholder bio — add a couple
              of sentences on relevant background: prior security, infra, or
              startup experience, and why this problem specifically.] Securiq
              is built to give small teams the security coverage of a
              dedicated engineer, without needing to hire one.
            </p>
            <p className="mt-4 font-mono text-sm text-muted">
              Harsh, Founder — Securiq
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
