import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { SEO } from "../components/SEO";

export function FaqPage() {
  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about how Securiq scans AWS and GitHub, how remediation approval works, what data we access, and how pricing and onboarding work."
        path="/faq"
      />
      <Nav />

      <Faq />
      <Footer />
    </div>
  );
}
