import { Radar, Sparkles, UserCheck2, ShieldCheck, ScrollText, KeyRound, Puzzle } from "lucide-react";

const features = [
  {
    icon: Radar,
    title: "Continuous monitoring",
    desc: "Always-on coverage of AWS (Security Hub, Config, IAM, S3, Security Groups, Secrets Manager) and GitHub (secret scanning, repo events) — not a periodic scan.",
  },
  {
    icon: Sparkles,
    title: "Plain-language remediation plans",
    desc: "Every finding comes with an explanation of what's wrong and a specific, reviewable plan to fix it — no jargon-heavy alerts you have to decode yourself.",
  },
  {
    icon: UserCheck2,
    title: "Human approval by default",
    desc: "Nothing changes without sign-off. There's no configuration where Securiq silently modifies infrastructure on its own.",
  },
  {
    icon: ShieldCheck,
    title: "Safe execution with rollback",
    desc: "After a fix is applied, we run health checks. If something breaks, the change is automatically rolled back.",
  },
  {
    icon: ScrollText,
    title: "Full audit trail",
    desc: "Every incident, plan, approval, action, and verification result is logged and timestamped — a real record for compliance and trust.",
  },
  {
    icon: KeyRound,
    title: "Least-privilege access",
    desc: "Connects via scoped IAM roles and a GitHub App, not long-lived credentials or an agent installed in your codebase.",
  },
  {
    icon: Puzzle,
    title: "Built to extend",
    desc: "Incidents and plans carry provider and action-type metadata from day one, so new connectors — Kubernetes, GCP, Azure — plug into the same core.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 max-w-lg">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          What you get
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink">
          Not just alerts. Fixes, with your sign-off.
        </h2>
      </div>

      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-pine/25 bg-pine/8 text-pine">
                <Icon size={19} strokeWidth={2.1} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
