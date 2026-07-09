import { Radar, Brain, ClipboardCheck, UserCheck2, Zap, BadgeCheck } from "lucide-react";

const loopStages = [
  { label: "Detect", desc: "Provider-native findings from Security Hub, Config, secret scanning.", icon: Radar },
  { label: "Reason", desc: "The model explains what's wrong in plain language.", icon: Brain },
  { label: "Plan", desc: "A concrete, reviewable remediation is drafted.", icon: ClipboardCheck },
  { label: "Approve", desc: "Nothing executes until a human says go.", icon: UserCheck2 },
  { label: "Execute", desc: "The fix is applied to the real resource.", icon: Zap },
  { label: "Verify", desc: "Services are checked, rolled back if anything breaks.", icon: BadgeCheck },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 max-w-lg">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          How it works
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink">
          One loop, every time. No shortcuts, no silent changes.
        </h2>
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-8">
          {loopStages.map((s, i) => {
            const Icon = s.icon;
            const isApprove = s.label === "Approve";
            return (
              <div key={s.label} className="relative">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                    isApprove
                      ? "border-coral/30 bg-coral/10 text-coral"
                      : "border-pine/25 bg-pine/8 text-pine"
                  }`}
                >
                  <Icon size={19} strokeWidth={2.1} />
                </div>
                <h3 className="mt-3.5 font-display text-lg font-semibold text-ink">
                  {s.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/65">{s.desc}</p>
                <span className="mt-2 block font-mono text-[11px] text-muted">
                  {String(i + 1).padStart(2, "0")} / 06
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-14 border-t border-ink/8 pt-6 text-sm text-ink/60">
          Verification loops back into detection — every incident that's fixed
          becomes a check against regressions later.
        </p>
      </div>
    </section>
  );
}
