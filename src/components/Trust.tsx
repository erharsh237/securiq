import { Lock, Eye, RotateCcw, KeyRound, Database, BadgeCheck } from "lucide-react";

const spotlight = {
  icon: Lock,
  title: "A human always approves",
  desc: "The model reasons and drafts. It never decides to touch production on its own. Every remediation waits for explicit sign-off — every time, no exceptions.",
};

const pillars = [
  {
    icon: Eye,
    title: "Every action is logged",
    desc: "Detection, reasoning, approval, execution, verification — all timestamped and attributable.",
  },
  {
    icon: RotateCcw,
    title: "Verified or rolled back",
    desc: "After a fix is applied, we check services still work. If anything breaks, it's reverted automatically.",
  },
  {
    icon: KeyRound,
    title: "Least-privilege access",
    desc: "Scoped IAM roles and a GitHub App with only the permissions each integration needs.",
  },
  {
    icon: Database,
    title: "Read-first by default",
    desc: "We don't store secret values or file contents — only what's needed to describe and remediate a finding.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance, as we grow",
    desc: "Built with SOC 2 and ISO 27001 readiness in mind from day one.",
  },
];

export function Trust() {
  const SpotIcon = spotlight.icon;
  return (
    <section id="trust" className="border-y border-ink/8 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-lg">
          <span className="font-mono text-[11px] uppercase tracking-wider text-paper/50">
            Safety, by design
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight">
            The model never touches your infrastructure alone.
          </h2>
          <p className="mt-4 leading-relaxed text-paper/65">
            Detection is deterministic. Only reasoning and planning use an LLM
            — and even then, execution requires your approval every time.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Spotlighted pillar — large card on the left */}
          <div className="relative overflow-hidden rounded-3xl border border-paper/15 bg-paper/5 p-8 lg:col-span-2">
            <div className="pointer-events-none absolute -left-8 -top-8 h-36 w-36 rounded-full bg-coral/10 blur-2xl" />
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-coral/30 bg-coral/15 text-coral">
              <SpotIcon size={21} strokeWidth={2.1} />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold leading-snug">
              {spotlight.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/65">
              {spotlight.desc}
            </p>
          </div>

          {/* Remaining pillars — compact stacked rows */}
          <div className="divide-y divide-paper/10 rounded-3xl border border-paper/15 bg-paper/[0.03] lg:col-span-3">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex items-start gap-4 px-6 py-5">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-paper/15 bg-paper/5">
                    <Icon size={16} strokeWidth={2} className="text-paper/90" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-paper/60">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
