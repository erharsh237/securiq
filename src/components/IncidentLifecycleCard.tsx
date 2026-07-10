import { useEffect, useState } from "react";
import { AlertTriangle, Search, Sparkles, UserCheck, Wrench, ShieldCheck } from "lucide-react";

const stages = [
  { key: "detected", label: "Detected", icon: AlertTriangle, tone: "coral" },
  { key: "analyzing", label: "Gathering context", icon: Search, tone: "muted" },
  { key: "planned", label: "Plan drafted", icon: Sparkles, tone: "pine" },
  { key: "approval", label: "Awaiting your approval", icon: UserCheck, tone: "coral" },
  { key: "executing", label: "Applying fix", icon: Wrench, tone: "pine" },
  { key: "verified", label: "Verified", icon: ShieldCheck, tone: "pine" },
] as const;

const toneClasses: Record<string, string> = {
  coral: "bg-coral/10 text-coral border-coral/30",
  pine: "bg-pine/10 text-pine border-pine/30",
  muted: "bg-muted/10 text-muted border-muted/25",
};

export function IncidentLifecycleCard() {
  const [stageIdx, setStageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStageIdx((i) => (i + 1) % stages.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const stage = stages[stageIdx];
  const Icon = stage.icon;
  const isApproval = stage.key === "approval";

  return (
    <div className="w-full max-w-sm rounded-2xl border border-ink/10 bg-white/70 p-5 shadow-[0_1px_0_rgba(20,23,28,0.04)] backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          inc_0417
        </span>
        <span className="rounded-full bg-coral/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-coral">
          critical
        </span>
      </div>

      <p className="mt-3 font-display text-[17px] font-medium leading-snug text-ink">
        S3 bucket publicly readable
      </p>
      <p className="mt-1 font-mono text-[11px] text-muted">arn:aws:s3:::prod-user-uploads</p>

      <div
        key={stage.key}
        className={`mt-4 flex items-center gap-2 rounded-lg border px-3 py-2.5 transition-all duration-500 ${toneClasses[stage.tone]}`}
      >
        <Icon size={16} strokeWidth={2.25} className="flex-shrink-0" />
        <span className="text-[13px] font-medium">{stage.label}</span>
        {isApproval && (
          <span className="ml-auto flex gap-1.5">
            <span className="rounded-md bg-pine px-2 py-1 font-mono text-[10px] font-semibold text-paper">
              Approve
            </span>
            <span className="rounded-md border border-ink/15 px-2 py-1 font-mono text-[10px] font-semibold text-ink/60">
              Reject
            </span>
          </span>
        )}
      </div>

      <div className="mt-4 flex gap-1">
        {stages.map((s, i) => (
          <span
            key={s.key}
            className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
              i <= stageIdx ? "bg-pine" : "bg-sage-dark"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
