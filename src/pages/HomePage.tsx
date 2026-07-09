import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Problem } from "../components/Problem";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { Trust } from "../components/Trust";
import { UseCases } from "../components/UseCases";
import { Roadmap } from "../components/Roadmap";
import { Team } from "../components/Team";
import { Faq } from "../components/Faq";
import { ClosingCta } from "../components/ClosingCta";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Trust />
      <UseCases />
      <Roadmap />
      <Team />
      <Faq />
      <ClosingCta />
      <Footer />
    </>
  );
}
