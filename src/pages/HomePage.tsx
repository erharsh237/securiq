import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Problem } from "../components/Problem";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { Trust } from "../components/Trust";
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
      <ClosingCta />
      <Footer />
    </>
  );
}
