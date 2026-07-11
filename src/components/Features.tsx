import { Radar, Sparkles, Globe2, Bell, GitBranch, Layers, Puzzle } from "lucide-react";

const spotlight = {
  icon: Radar,
  title: "Continuous monitoring, not a periodic scan",
  desc: "Always-on coverage of AWS (Security Hub, Config, IAM, S3, Security Groups, Secrets Manager) and GitHub (secret scanning, repo events). Findings surface the moment something drifts — not on next week's report.",
};

const features = [
  {
    icon: Sparkles,
    title: "Plain-language explanations",
    desc: "Every finding comes with a description of what's wrong in terms a generalist can understand — no jargon-heavy alerts you have to decode yourself.",
  },
  {
    icon: GitBranch,
    title: "Reviewable remediation plans",
    desc: "Fixes are drafted as a concrete, specific plan you can read line by line before anything is decided on.",
  },
  {
    icon: Bell,
    title: "Routed to where you work",
    desc: "Incidents and plans surface in Slack or email, so you're not the one who has to remember to check a dashboard.",
  },
  {
    icon: Globe2,
    title: "Two providers, one place",
    desc: "AWS and GitHub findings live side by side, so you're not context-switching between separate tools for infra and code.",
  },
  {
    icon: Layers,
    title: "Prioritized by real impact",
    desc: "Findings are ranked by exposure and blast radius, not just severity labels, so the riskiest issues surface first.",
  },
  {
    icon: Puzzle,
    title: "Built to extend",
    desc: "Incidents and plans carry provider and action-type metadata from day one, so new connectors — Kubernetes, GCP, Azure — plug into the same core.",
  },
];

export function Features() {
  const SpotIcon = spotlight.icon;
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

      <div className="grid gap-5 md:grid-cols-3">
        {/* Spotlighted feature — spans full height of two rows on desktop */}
        <div className="relative overflow-hidden rounded-3xl border border-pine/20 bg-gradient-to-br from-pine/10 via-white to-white p-8 md:row-span-2 md:flex md:flex-col md:justify-between">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pine/10 blur-2xl" />
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pine/30 bg-pine text-paper">
              <SpotIcon size={21} strokeWidth={2.1} />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-snug text-ink">
              {spotlight.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {spotlight.desc}
            </p>
          </div>
          <span className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-full border border-pine/25 bg-white/70 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-pine">
            Always on
          </span>
        </div>

        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="rounded-2xl border border-ink/10 bg-white/60 p-6 transition-colors hover:border-ink/20 hover:bg-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink/10 bg-ink/5 text-ink/70">
                <Icon size={18} strokeWidth={2.1} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
