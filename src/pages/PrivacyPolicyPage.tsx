import { LegalLayout } from "../components/LegalLayout";
import { SEO } from "../components/SEO";

export function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Securiq's privacy policy: what information we collect through our website and waitlist, how we use it, and how third-party processors like Formspree and Google Analytics are involved."
        path="/privacy"
      />
      <LegalLayout title="Privacy Policy" updated="July 9, 2026">
      <p>
        This policy explains what information Securiq ("we", "us") collects
        through this website and waitlist, and how we use it. Securiq is
        pre-launch; this policy will be expanded as the product ships and will
        be updated to reflect our data handling practices for customer
        infrastructure at that time.
      </p>

      <h2>What we collect</h2>
      <p>
        When you join our waitlist, we collect the email address you provide.
        We do not currently collect any other personal information through
        this site. We use standard web hosting logs (IP address, browser
        type, pages visited) for security and operational purposes.
      </p>

      <h2>How we use it</h2>
      <p>
        We use your email address to notify you about early access, product
        updates, and launch announcements related to Securiq. We do not sell
        or rent your email address to third parties.
      </p>

      <h2>Third-party processors</h2>
      <p>
        Waitlist submissions are processed through Formspree, a third-party
        form service. Their handling of submitted data is governed by their
        own privacy policy, available at formspree.io. If you accept
        cookies, site usage data is processed by Google Analytics; see the
        Cookies and analytics section below for details.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        We use Google Analytics 4 to understand how visitors use this site —
        which pages are viewed, how people arrive here, and general usage
        patterns. This is only enabled if you accept cookies via the banner
        shown on your first visit. If you decline, no analytics cookies are
        set and no usage data is sent to Google from your visit.
      </p>
      <p>
        Google Analytics may set cookies that persist on your device and can
        transmit data to Google's servers, including an approximation of
        your location derived from your IP address. We have IP anonymization
        enabled. You can review Google's own privacy practices at{" "}
        <a
          href="https://policies.google.com/privacy"
          className="text-pine underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          policies.google.com/privacy
        </a>
        . You can withdraw consent at any time by clearing your browser's
        site data for securiq.co, which will cause the consent banner to
        reappear on your next visit.
      </p>

      <h2>Your rights</h2>
      <p>
        You can request removal from our waitlist at any time by contacting
        us. We will delete your email address from our records within a
        reasonable time of your request.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        As Securiq moves from waitlist to product, this policy will be
        updated to cover how we handle access to connected cloud accounts,
        repositories, and any data processed on your behalf. We'll notify
        waitlist subscribers when that update happens.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href="mailto:privacy@securiq.co" className="text-pine underline">
          privacy@securiq.co
        </a>
        .
      </p>
    </LegalLayout>
    </>
  );
}
