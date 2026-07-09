import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Is it safe to let an AI make changes to my infrastructure?",
    a: "The AI never makes changes on its own. It only reasons about a finding and drafts a remediation plan. A human on your team has to explicitly approve every action before anything executes — detection and execution are handled by deterministic, non-AI systems.",
  },
  {
    q: "What if the AI's plan is wrong?",
    a: "You see the full before/after diff of every proposed change before approving. If you reject a plan, nothing happens. If you approve and something still goes wrong, we verify the outcome and automatically roll back changes that fail verification.",
  },
  {
    q: "Do you store our cloud credentials?",
    a: "Securiq connects via scoped IAM roles and GitHub App permissions rather than long-lived credentials, so access can be limited to exactly what's needed and revoked at any time from your side.",
  },
  {
    q: "Which providers do you support?",
    a: "We're launching with AWS (Security Hub, Config, IAM, S3, EC2 Security Groups, Secrets Manager) and GitHub (secret scanning, repo events). The architecture is built to extend to GCP, Azure, and GitLab after v1.",
  },
  {
    q: "How is this different from tools like Wiz or Orca?",
    a: "Those platforms are built for teams with a dedicated security function to operate them — they surface findings and expect someone to triage and fix them. Securiq is built for teams without that headcount: it doesn't just detect, it drafts the fix and executes it once you approve.",
  },
  {
    q: "When can I get access?",
    a: "We're onboarding a small group of early teams before general availability. Join the waitlist and we'll reach out as spots open up.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-lg">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Questions
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink">
          Things people usually ask.
        </h2>
      </div>

      <div className="mx-auto max-w-3xl divide-y divide-ink/8 border-y border-ink/8">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          const panelId = `faq-panel-${idx}`;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="font-display text-lg font-medium text-ink">{item.q}</span>
                <Plus
                  size={18}
                  strokeWidth={2.25}
                  className={`flex-shrink-0 text-muted transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                id={panelId}
                role="region"
                className={`grid overflow-hidden transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="min-h-0 max-w-2xl leading-relaxed text-ink/65">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
