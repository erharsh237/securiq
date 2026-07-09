import { LegalLayout } from "../components/LegalLayout";

export function SecurityOverviewPage() {
  return (
    <LegalLayout title="Security Overview" updated="July 9, 2026">
      <p>
        Securiq is a security product, so how we handle access and data
        matters as much as what we detect. Here's a plain-language summary of
        our approach. This page will expand as we move toward formal
        certification.
      </p>

      <h2>Read-first, write-on-approval</h2>
      <p>
        Securiq's default posture is read access: gathering configuration and
        metadata to detect issues. Any change to your infrastructure —
        rotating a secret, tightening a policy — requires explicit human
        approval before it executes. There is no mode in which Securiq
        modifies your environment unattended.
      </p>

      <h2>Least-privilege integrations</h2>
      <p>
        AWS access is granted through scoped IAM roles limited to the
        services we monitor and remediate, not account-wide administrative
        access. GitHub access is granted through a GitHub App with only the
        permissions needed for secret scanning and repo events — not a
        personal access token, and not an agent installed in your codebase.
      </p>

      <h2>What we store</h2>
      <p>
        We store incident metadata (provider, resource type, finding type),
        generated remediation plans, approval decisions, and execution/audit
        logs. We do not store secret values, file contents, or full resource
        payloads beyond what's needed to describe and act on a finding.
      </p>

      <h2>Compliance direction</h2>
      <p>
        We're pre-launch and building with SOC 2 and ISO 27001 readiness in
        mind from the start. We'll pursue formal certification as we approach
        general availability, and will publish updates here as that
        progresses.
      </p>

      <h2>Questions</h2>
      <p>
        If you're evaluating Securiq for a security review, reach out at{" "}
        <a href="mailto:hello@securiq.co" className="text-pine underline">
          hello@securiq.co
        </a>{" "}
        and we're happy to walk through specifics.
      </p>
    </LegalLayout>
  );
}
