import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export function FaqPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />

      <Faq />
      <Footer />
    </div>
  );
}
