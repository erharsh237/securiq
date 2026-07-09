import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Check, X, Sparkles, Clock } from "lucide-react";
import { mockIncidents, mockPlans, mockAuditEvents } from "../data/mockData";
import { SeverityBadge, StatusBadge } from "../components/Badges";
import { ProviderTag } from "../components/ProviderTag";

function formatTime(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function DiffBlock({ label, before, after }: { label: string; before: unknown; after: unknown }) {
  return (
    <div className="rounded-md border border-base-700 bg-base-950">
      <div className="border-b border-base-700 px-3 py-1.5 text-2xs font-mono uppercase tracking-wider text-base-400">
        {label}
      </div>
      <div className="grid grid-cols-2 divide-x divide-base-700 font-mono text-2xs">
        <pre className="whitespace-pre-wrap px-3 py-2 text-signal-critical/90">
          {JSON.stringify(before, null, 2)}
        </pre>
        <pre className="whitespace-pre-wrap px-3 py-2 text-signal-verified/90">
          {JSON.stringify(after, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export function IncidentDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const incident = mockIncidents.find((i) => i.id === id);
  const plan = id ? mockPlans[id] : undefined;
  const events = id ? mockAuditEvents[id] ?? [] : [];
  const [decision, setDecision] = useState<"approved" | "rejected" | null>(null);

  if (!incident) {
    return (
      <div className="mx-auto max-w-3xl px-8 py-8">
        <p className="text-sm text-base-300">Incident not found.</p>
        <Link to="/" className="text-sm text-signal-low hover:underline">
          Back to incidents
        </Link>
      </div>
    );
  }

  const canDecide = incident.status === "pending_approval" || incident.status === "plan_ready";

  return (
    <div className="mx-auto max-w-3xl px-8 py-8">
      <button
        onClick={() => navigate("/")}
        className="mb-5 flex items-center gap-1.5 text-sm text-base-300 hover:text-base-100"
      >
        <ArrowLeft size={15} />
        Incidents
      </button>

      <div className="mb-2 flex items-center gap-2.5">
        <SeverityBadge severity={incident.severity} />
        <StatusBadge status={incident.status} />
      </div>

      <h1 className="text-xl font-semibold tracking-tight text-base-100">{incident.title}</h1>

      <div className="mt-2 flex items-center gap-3">
        <ProviderTag provider={incident.provider} />
        <span className="font-mono text-2xs text-base-400">{incident.resourceId}</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-base-200">{incident.description}</p>

      {plan && (
        <section className="mt-8">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles size={15} className="text-signal-low" />
            <h2 className="text-sm font-semibold text-base-100">Remediation plan</h2>
          </div>

          <div className="rounded-lg border border-base-700 bg-base-900 p-4">
            <p className="text-sm leading-relaxed text-base-200">{plan.explanation}</p>

            <div className="mt-4 space-y-3">
              {plan.actions.map((action, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="text-sm font-medium text-base-100">{action.description}</div>
                  <DiffBlock label={action.actionType} before={action.before} after={action.after} />
                </div>
              ))}
            </div>

            {canDecide && !decision && (
              <div className="mt-5 flex gap-2 border-t border-base-700 pt-4">
                <button
                  onClick={() => setDecision("approved")}
                  className="flex items-center gap-1.5 rounded-md bg-signal-verified px-4 py-2 text-sm font-semibold text-base-950 hover:opacity-90"
                >
                  <Check size={15} strokeWidth={2.5} />
                  Approve
                </button>
                <button
                  onClick={() => setDecision("rejected")}
                  className="flex items-center gap-1.5 rounded-md border border-base-600 px-4 py-2 text-sm font-medium text-base-200 hover:bg-base-800"
                >
                  <X size={15} strokeWidth={2.5} />
                  Reject
                </button>
              </div>
            )}

            {decision === "approved" && (
              <div className="mt-5 flex items-center gap-2 border-t border-base-700 pt-4 text-sm text-signal-verified">
                <Check size={15} />
                Plan approved. Execution will begin shortly.
              </div>
            )}
            {decision === "rejected" && (
              <div className="mt-5 flex items-center gap-2 border-t border-base-700 pt-4 text-sm text-base-300">
                <X size={15} />
                Plan rejected. No changes will be made.
              </div>
            )}
          </div>
        </section>
      )}

      {events.length > 0 && (
        <section className="mt-8">
          <div className="mb-3 flex items-center gap-2">
            <Clock size={15} className="text-base-400" />
            <h2 className="text-sm font-semibold text-base-100">Timeline</h2>
          </div>
          <ol className="space-y-0">
            {events.map((ev, idx) => (
              <li key={ev.id} className="relative flex gap-3 pb-5 last:pb-0">
                {idx !== events.length - 1 && (
                  <span className="absolute left-[5px] top-3 h-full w-px bg-base-700" />
                )}
                <span className="relative mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-signal-low" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm text-base-100">{ev.detail}</span>
                    <span className="flex-shrink-0 font-mono text-2xs text-base-400">
                      {formatTime(ev.timestamp)}
                    </span>
                  </div>
                  <span className="font-mono text-2xs text-base-400">{ev.actor}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
