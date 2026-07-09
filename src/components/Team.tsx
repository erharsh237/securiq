interface TeamMember {
  initial: string;
  name: string;
  role: string;
  focus: string;
}

const team: TeamMember[] = [
  { initial: "H", name: "Harsh", role: "Founder, CEO", focus: "Product & company direction" },
  { initial: "K", name: "Kanishka", role: "Co-Founder, CTO", focus: "AI systems & architecture" },
  { initial: "S", name: "Shruti", role: "Co-Founder, COO", focus: "Operations & customer relationships" },
];

export function Team() {
  return (
    <section id="team" className="border-y border-ink/8 bg-white/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-lg">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            Who's building this
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink">
            Meet the team
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.name}
              className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper p-6"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sage font-display text-lg font-semibold text-pine-dark">
                {m.initial}
              </div>
              <div className="min-w-0">
                <p className="font-display text-base font-medium text-ink">{m.name}</p>
                <p className="font-mono text-xs text-pine">{m.role}</p>
                <p className="mt-1 text-sm text-ink/60">{m.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
