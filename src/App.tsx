import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { CookieConsent } from "./components/CookieConsent";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import { SecurityOverviewPage } from "./pages/SecurityOverviewPage";
import { SecurityDisclosurePage } from "./pages/SecurityDisclosurePage";
import { PricingPage } from "./pages/PricingPage";
import { TeamPage } from "./pages/TeamPage";
import { ContactPage } from "./pages/ContactPage";
import { FaqPage } from "./pages/FaqPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <HelmetProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-paper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/security" element={<SecurityOverviewPage />} />
            <Route path="/security/disclosure" element={<SecurityDisclosurePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <CookieConsent />
      </BrowserRouter>
    </ErrorBoundary>
    </HelmetProvider>
  );
}
