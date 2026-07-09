import { LegalLayout } from "../components/LegalLayout";

export function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="July 9, 2026">
      <p>
        Securiq is currently in a pre-launch, waitlist stage. These terms
        cover use of this website and the waitlist. A full terms of service
        governing use of the Securiq product will be published before general
        availability.
      </p>

      <h2>Use of this site</h2>
      <p>
        This website is provided to share information about Securiq and to
        collect early access signups. You agree not to misuse the site,
        attempt to access it by means other than the interface we provide, or
        submit false information through the waitlist form.
      </p>

      <h2>No current service</h2>
      <p>
        Joining the waitlist does not create a contract for services. It does
        not guarantee access, a specific launch date, or any particular
        product functionality. Product scope and timeline may change before
        launch.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this site, including the Securiq name, logo, and
        design, is the property of Securiq and may not be reproduced without
        permission.
      </p>

      <h2>Disclaimer</h2>
      <p>
        This site and any information on it are provided "as is" without
        warranties of any kind, express or implied.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms as the product develops. Continued use of
        the site after changes constitutes acceptance of the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions can be sent to{" "}
        <a href="mailto:hello@securiq.co" className="text-pine underline">
          hello@securiq.co
        </a>
        .
      </p>
    </LegalLayout>
  );
}
