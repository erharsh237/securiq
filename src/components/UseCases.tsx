import { Rocket, Code2, Landmark } from "lucide-react";

const cases = [
  {
    icon: Rocket,
    title: "Startups without a security hire",
    desc: "Running real production infrastructure on AWS and GitHub, with engineering doing double duty as the security function.",
  },
  {
    icon: Code2,
    title: "Engineering teams wanting safer automation",
    desc: "Teams who want misconfigurations fixed quickly, but won't accept a tool that changes infrastructure without a human checking first.",
  },
  {
    icon: Landmark,
    title: "Founders raising or selling to enterprise",
    desc: "Teams who need a credible security posture and audit trail to satisfy investor diligence or enterprise customer security reviews.",
  },
];

export function UseCases() {
  return (
    <section className="border-y border-ink/8 bg-white/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-lg">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            Who it's for
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink">
            Built for teams without a security org.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="rounded-2xl border border-ink/10 bg-paper p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage text-pine-dark">
                  <Icon size={19} strokeWidth={2.1} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
