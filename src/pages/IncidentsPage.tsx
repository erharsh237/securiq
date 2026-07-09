import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";
import { mockIncidents } from "../data/mockData";
import { SeverityBadge, StatusBadge } from "../components/Badges";
import { ProviderTag } from "../components/ProviderTag";
import type { Severity, IncidentStatus } from "../types";

const severityOrder: Record<Severity, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
  info: 4,
};

const statusFilters: { value: IncidentStatus | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "pending_approval", label: "Awaiting approval" },
  { value: "executing", label: "Executing" },
  { value: "verified", label: "Verified" },
  { value: "failed", label: "Failed" },
];

function timeAgo(iso: string) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const hrs = Math.floor(diffMs / 3_600_000);
  if (hrs < 1) return "just now";
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export function IncidentsPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<IncidentStatus | "all">("all");

  const filtered = useMemo(() => {
    return mockIncidents
      .filter((i) => statusFilter === "all" || i.status === statusFilter)
      .filter((i) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return (
          i.title.toLowerCase().includes(q) ||
          i.resourceId.toLowerCase().includes(q) ||
          i.findingType.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);
  }, [query, statusFilter]);

  const criticalCount = mockIncidents.filter(
    (i) => i.severity === "critical" && !["verified", "rejected"].includes(i.status)
  ).length;
  const pendingCount = mockIncidents.filter((i) => i.status === "pending_approval").length;

  return (
    <div className="mx-auto max-w-5xl px-8 py-8">
      <header className="mb-8">
        <h1 className="text-xl font-semibold tracking-tight text-base-100">Incidents</h1>
        <p className="mt-1 text-sm text-base-300">
          Findings from AWS and GitHub, normalized into a single review queue.
        </p>

        <div className="mt-5 flex gap-3">
          <div className="rounded-lg border border-base-700 bg-base-900 px-4 py-3">
            <div className="font-mono text-2xl font-semibold text-signal-critical">
              {criticalCount}
            </div>
            <div className="text-2xs uppercase tracking-wider text-base-400">
              Open critical
            </div>
          </div>
          <div className="rounded-lg border border-base-700 bg-base-900 px-4 py-3">
            <div className="font-mono text-2xl font-semibold text-signal-medium">
              {pendingCount}
            </div>
            <div className="text-2xs uppercase tracking-wider text-base-400">
              Awaiting approval
            </div>
          </div>
        </div>
      </header>

      <div className="mb-4 flex items-center gap-3">
        <div className="relative flex-1">
          <Search
            size={15}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-base-400"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, resource, or finding type"
            className="w-full rounded-md border border-base-700 bg-base-900 py-2 pl-9 pr-3 text-sm text-base-100 placeholder:text-base-400 focus:border-signal-low"
          />
        </div>
      </div>

      <div className="mb-5 flex gap-1.5">
        {statusFilters.map((f) => (
          <button
            key={f.value}
            onClick={() => setStatusFilter(f.value)}
            className={`rounded-full px-3 py-1 text-2xs font-mono font-medium transition-colors ${
              statusFilter === f.value
                ? "bg-base-100 text-base-950"
                : "bg-base-800 text-base-300 hover:bg-base-700 hover:text-base-100"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-lg border border-base-700">
        {filtered.length === 0 ? (
          <div className="px-5 py-10 text-center text-sm text-base-400">
            No incidents match this filter.
          </div>
        ) : (
          filtered.map((incident, idx) => (
            <button
              key={incident.id}
              onClick={() => navigate(`/incidents/${incident.id}`)}
              className={`flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-base-800 ${
                idx !== filtered.length - 1 ? "border-b border-base-700" : ""
              } bg-base-900`}
            >
              <SeverityBadge severity={incident.severity} />

              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-base-100">
                  {incident.title}
                </div>
                <div className="mt-0.5 flex items-center gap-3">
                  <ProviderTag provider={incident.provider} />
                  <span className="truncate font-mono text-2xs text-base-400">
                    {incident.resourceId}
                  </span>
                </div>
              </div>

              <div className="flex flex-shrink-0 items-center gap-4">
                <span className="text-2xs text-base-400">{timeAgo(incident.detectedAt)}</span>
                <StatusBadge status={incident.status} />
                <ChevronRight size={16} className="text-base-500" />
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
