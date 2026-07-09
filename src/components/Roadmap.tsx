import { Check, Circle } from "lucide-react";

const roadmap = [
  { label: "AWS misconfiguration detection", status: "shipping" },
  { label: "GitHub secret scanning + remediation", status: "shipping" },
  { label: "Kubernetes and Docker connectors", status: "next" },
  { label: "Cloudflare and IdP connectors", status: "next" },
  { label: "GCP and Azure support", status: "later" },
  { label: "GitLab support", status: "later" },
];

const statusMeta = {
  shipping: { label: "v1", icon: Check, className: "text-pine bg-pine/10 border-pine/25" },
  next: { label: "Next", icon: Circle, className: "text-ink/60 bg-ink/5 border-ink/15" },
  later: { label: "Later", icon: Circle, className: "text-muted bg-ink/5 border-ink/10" },
};

export function Roadmap() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-lg">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Roadmap
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink">
          Starting focused. Built to extend.
        </h2>
        <p className="mt-4 leading-relaxed text-ink/65">
          v1 covers AWS and GitHub — the two surfaces with the most exposure
          for infrastructure-heavy startups. The same detect → plan → approve
          → execute loop is designed to plug in new providers without
          changing how you work.
        </p>
      </div>

      <div className="mx-auto max-w-2xl divide-y divide-ink/8 border-y border-ink/8">
        {roadmap.map((item) => {
          const meta = statusMeta[item.status as keyof typeof statusMeta];
          const Icon = meta.icon;
          return (
            <div key={item.label} className="flex items-center justify-between gap-4 py-4">
              <span className="text-ink/85">{item.label}</span>
              <span
                className={`flex flex-shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider ${meta.className}`}
              >
                <Icon size={11} strokeWidth={3} />
                {meta.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
