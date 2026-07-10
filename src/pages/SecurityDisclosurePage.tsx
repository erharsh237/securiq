import { LegalLayout } from "../components/LegalLayout";

export function SecurityDisclosurePage() {
  return (
    <LegalLayout title="Responsible Disclosure" updated="July 10, 2026">
      <p>
        As a security product, we expect scrutiny of our own systems and
        welcome it. If you believe you've found a security vulnerability in
        Securiq's website, product, or infrastructure, we want to hear from
        you.
      </p>

      <h2>How to report</h2>
      <p>
        Email{" "}
        <a href="mailto:security@securiq.co" className="text-pine underline">
          security@securiq.co
        </a>{" "}
        with a description of the issue, the steps to reproduce it, and any
        relevant logs, screenshots, or proof-of-concept code. Please avoid
        including sensitive customer data in your report.
      </p>

      <h2>What to expect</h2>
      <p>
        We aim to acknowledge reports within two business days and to give
        you a plan or fix timeline within ten business days. We'll keep you
        updated as we investigate and remediate, and we'll credit
        researchers who report responsibly, if you'd like.
      </p>

      <h2>Ground rules</h2>
      <p>
        Please give us a reasonable window to fix an issue before disclosing
        it publicly. Don't access, modify, or exfiltrate data beyond what's
        needed to demonstrate the vulnerability. Don't run automated
        scanning that could degrade service for other users. Testing done in
        good faith under these guidelines won't result in legal action from
        us.
      </p>

      <h2>Out of scope</h2>
      <p>
        Since we're pre-launch, there's no live customer-connected product
        surface yet — this policy currently covers our marketing site,
        waitlist form, and public infrastructure. We'll expand scope as the
        product reaches general availability.
      </p>
    </LegalLayout>
  );
}
