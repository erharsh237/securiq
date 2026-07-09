// Core domain types for Securiq
// Deliberately using flexible strings (not enums) for provider/action_type/finding_type
// so we can add GCP, Azure, GitLab, etc. later without a schema migration.
// Status IS a closed set because it drives UI state machines and workflow logic.

export type IncidentStatus =
  | "new"
  | "analyzing"
  | "plan_ready"
  | "pending_approval"
  | "approved"
  | "rejected"
  | "executing"
  | "verifying"
  | "verified"
  | "failed"
  | "rolled_back";

export type Severity = "critical" | "high" | "medium" | "low" | "info";

export interface Incident {
  id: string;
  provider: string; // "aws" | "github" | future: "gcp", "azure", "gitlab"...
  resourceType: string; // "s3_bucket" | "iam_role" | "security_group" | "secret" | "repo"...
  findingType: string; // "public_bucket" | "leaked_secret" | "overly_permissive_sg"...
  severity: Severity;
  status: IncidentStatus;
  resourceId: string; // the actual ARN, repo name, etc.
  title: string;
  description: string;
  detectedAt: string; // ISO timestamp
  updatedAt: string;
  context: Record<string, unknown>; // raw provider payload / gathered context
  dedupeKey: string; // provider + resourceType + findingType + resourceId
}

export interface RemediationAction {
  actionType: string; // "rotate_secret" | "tighten_sg_rule" | "restrict_s3_policy"...
  provider: string;
  description: string;
  before: Record<string, unknown>; // current state (for diff view)
  after: Record<string, unknown>; // proposed state (for diff view)
}

export interface Plan {
  id: string;
  incidentId: string;
  explanation: string; // human-readable, LLM-generated
  actions: RemediationAction[];
  riskLevel: Severity;
  createdAt: string;
  approvedBy?: string;
  approvedAt?: string;
  rejectedBy?: string;
  rejectedAt?: string;
  rejectionReason?: string;
}

export type AuditEventType =
  | "detected"
  | "context_gathered"
  | "plan_generated"
  | "approval_requested"
  | "approved"
  | "rejected"
  | "execution_started"
  | "execution_completed"
  | "execution_failed"
  | "verification_started"
  | "verification_passed"
  | "verification_failed"
  | "rollback_started"
  | "rollback_completed";

export interface AuditEvent {
  id: string;
  incidentId: string;
  eventType: AuditEventType;
  timestamp: string;
  actor: string; // "system" | user email
  detail: string;
  metadata?: Record<string, unknown>;
}
