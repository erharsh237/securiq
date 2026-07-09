import { Link } from "react-router-dom";
import { mockAuditEvents, mockIncidents } from "../data/mockData";

function formatTime(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function AuditLogPage() {
  const allEvents = Object.values(mockAuditEvents)
    .flat()
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return (
    <div className="mx-auto max-w-4xl px-8 py-8">
      <header className="mb-8">
        <h1 className="text-xl font-semibold tracking-tight text-base-100">Audit log</h1>
        <p className="mt-1 text-sm text-base-300">
          Every detection, decision, and action across all incidents, in order.
        </p>
      </header>

      <div className="overflow-hidden rounded-lg border border-base-700">
        {allEvents.map((ev, idx) => {
          const incident = mockIncidents.find((i) => i.id === ev.incidentId);
          return (
            <div
              key={ev.id}
              className={`flex items-center gap-4 px-5 py-3.5 bg-base-900 ${
                idx !== allEvents.length - 1 ? "border-b border-base-700" : ""
              }`}
            >
              <span className="w-36 flex-shrink-0 font-mono text-2xs text-base-400">
                {formatTime(ev.timestamp)}
              </span>
              <span className="w-44 flex-shrink-0 rounded bg-base-800 px-2 py-0.5 text-center font-mono text-2xs uppercase tracking-wider text-base-300">
                {ev.eventType}
              </span>
              <span className="min-w-0 flex-1 truncate text-sm text-base-200">{ev.detail}</span>
              {incident && (
                <Link
                  to={`/incidents/${incident.id}`}
                  className="flex-shrink-0 font-mono text-2xs text-signal-low hover:underline"
                >
                  {incident.id}
                </Link>
              )}
              <span className="w-36 flex-shrink-0 truncate text-right font-mono text-2xs text-base-400">
                {ev.actor}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
