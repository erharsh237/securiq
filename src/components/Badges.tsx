import type { Severity, IncidentStatus } from "../types";

const severityStyles: Record<Severity, string> = {
  critical: "bg-signal-critical/10 text-signal-critical border-signal-critical/30",
  high: "bg-signal-high/10 text-signal-high border-signal-high/30",
  medium: "bg-signal-medium/10 text-signal-medium border-signal-medium/30",
  low: "bg-signal-low/10 text-signal-low border-signal-low/30",
  info: "bg-signal-info/10 text-signal-info border-signal-info/30",
};

export function SeverityBadge({ severity }: { severity: Severity }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-2xs font-mono font-semibold uppercase tracking-wider ${severityStyles[severity]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {severity}
    </span>
  );
}

const statusLabels: Record<IncidentStatus, string> = {
  new: "New",
  analyzing: "Analyzing",
  plan_ready: "Plan ready",
  pending_approval: "Awaiting approval",
  approved: "Approved",
  rejected: "Rejected",
  executing: "Executing",
  verifying: "Verifying",
  verified: "Verified",
  failed: "Failed",
  rolled_back: "Rolled back",
};

const statusStyles: Record<IncidentStatus, string> = {
  new: "bg-base-600 text-base-200",
  analyzing: "bg-signal-low/10 text-signal-low",
  plan_ready: "bg-signal-low/10 text-signal-low",
  pending_approval: "bg-signal-medium/10 text-signal-medium",
  approved: "bg-signal-verified/10 text-signal-verified",
  rejected: "bg-base-600 text-base-300",
  executing: "bg-signal-low/10 text-signal-low animate-pulse",
  verifying: "bg-signal-low/10 text-signal-low animate-pulse",
  verified: "bg-signal-verified/10 text-signal-verified",
  failed: "bg-signal-critical/10 text-signal-critical",
  rolled_back: "bg-signal-high/10 text-signal-high",
};

export function StatusBadge({ status }: { status: IncidentStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-2xs font-mono font-medium ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}
