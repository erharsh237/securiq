import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";

export function FaqPage() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-ink/8">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Securiq" loading="lazy" className="h-7 w-auto" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-medium text-ink/60 hover:text-ink"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </div>
      </header>

      <Faq />
      <Footer />
    </div>
  );
}
