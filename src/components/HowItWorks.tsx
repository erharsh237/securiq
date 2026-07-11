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
      <div className="mb-16 max-w-lg">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          How it works
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink">
          One loop, every time. No shortcuts, no silent changes.
        </h2>
      </div>

      {/* Desktop: horizontal connected timeline */}
      <div className="relative hidden md:block">
        <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
        <div className="grid grid-cols-6 gap-4">
          {loopStages.map((s, i) => {
            const Icon = s.icon;
            const isApprove = s.label === "Approve";
            return (
              <div key={s.label} className="relative flex flex-col items-center text-center">
                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-paper ${
                    isApprove
                      ? "border-coral text-coral"
                      : "border-pine text-pine"
                  }`}
                >
                  <Icon size={19} strokeWidth={2.2} />
                </div>
                <span className="mt-3 font-mono text-[11px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-display text-base font-semibold text-ink">
                  {s.label}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink/60">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical connected timeline */}
      <div className="relative space-y-8 md:hidden">
        <div className="absolute bottom-6 left-6 top-6 w-px bg-ink/12" />
        {loopStages.map((s, i) => {
          const Icon = s.icon;
          const isApprove = s.label === "Approve";
          return (
            <div key={s.label} className="relative flex gap-4 pl-0">
              <div
                className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 bg-paper ${
                  isApprove ? "border-coral text-coral" : "border-pine text-pine"
                }`}
              >
                <Icon size={19} strokeWidth={2.2} />
              </div>
              <div className="pt-1">
                <span className="font-mono text-[11px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-semibold text-ink">{s.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/65">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-14 border-t border-ink/8 pt-6 text-sm text-ink/60">
        Verification loops back into detection — every incident that's fixed
        becomes a check against regressions later.
      </p>
    </section>
  );
}
