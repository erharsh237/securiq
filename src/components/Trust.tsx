import { Lock, Eye, RotateCcw, KeyRound, Database, BadgeCheck } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    title: "A human always approves",
    desc: "The model reasons and drafts. It never decides to touch production on its own. Every remediation waits for explicit sign-off.",
  },
  {
    icon: Eye,
    title: "Every action is logged",
    desc: "Detection, reasoning, approval, execution, verification — all timestamped and attributable, so you have a real audit trail.",
  },
  {
    icon: RotateCcw,
    title: "Verified or rolled back",
    desc: "After a fix is applied, we check that services still work. If anything breaks, the change is reverted automatically.",
  },
  {
    icon: KeyRound,
    title: "Least-privilege access",
    desc: "We connect through scoped IAM roles and a GitHub App with only the permissions each integration needs — not standing admin credentials.",
  },
  {
    icon: Database,
    title: "Read-first by default",
    desc: "Securiq reads configuration and metadata to detect issues. We don't store secret values or file contents — only what's needed to describe and remediate a finding.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance, as we grow",
    desc: "We're building with SOC 2 and ISO 27001 readiness in mind from day one, and will pursue formal certification as we move toward general availability.",
  },
];

export function Trust() {
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

        <div className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-paper/15 bg-paper/5">
                  <Icon size={19} strokeWidth={2} className="text-paper/90" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-paper/60">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

