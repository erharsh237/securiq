import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Problem } from "../components/Problem";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { Trust } from "../components/Trust";
import { ClosingCta } from "../components/ClosingCta";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <>
      <SEO
        title="Securiq — Autonomous AI Security Engineer"
        description="Securiq watches your AWS and GitHub for misconfigurations and leaked secrets, drafts the fix, and waits for your sign-off before touching anything. Built for teams running real infrastructure without a security hire."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Securiq",
          url: "https://securiq.co/",
          logo: "https://securiq.co/logo.png",
          description:
            "Securiq watches AWS and GitHub for misconfigurations and leaked secrets, drafts a remediation plan, and waits for human approval before executing any change.",
          sameAs: [],
        }}
      />
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Trust />
      <ClosingCta />
      <Footer />
    </>
  );
}
