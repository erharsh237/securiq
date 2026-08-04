import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { AnimatedGridBackgroundSection } from './components/AnimatedGridBackground';
import HeroLayout from './components/HeroLayout';
import ValuePropSection from './components/ValuePropSection';
import TimelineSection from './components/TimelineSection';
import FeaturesSection from './components/FeaturesSection';
import WorkflowSection from './components/WorkflowSection';
import PricingPage from './pages/PricingPage';
import FaqPage from './pages/FaqPage';
import SecurityPage from './pages/SecurityPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import EarlyAccessModal from './components/EarlyAccessModal';
import ContactModal from './components/ContactModal';
import SecurityTeamModal from './components/SecurityTeamModal';
import FeatureDetailModal from './components/FeatureDetailModal';
import SignInNoticeModal from './components/SignInNoticeModal';

// UI Error & System Fallback States
import { ErrorBoundary } from './components/ui-states/ErrorBoundary';
import NoInternetBanner from './components/ui-states/NoInternetBanner';
import NotFound from './components/ui-states/NotFound';
import { 
  LoadingSpinner, 
  LoadingSkeleton, 
  SlowNetworkLoading, 
  EmptyState, 
  PermissionDeniedState 
} from './components/ui-states/UiStateComponents';

import { Cloud, ShieldCheck, Code2 } from 'lucide-react';
import './App.css';

const FEATURE_MODAL_DATA = {
  'cloud-integrations': {
    title: 'Cloud Integrations',
    badge: 'MULTI-CLOUD',
    icon: Cloud,
    color: '#0284c7',
    description: 'SecurIQ provides unified visibility and automated protection across AWS, GitHub, GCP, Azure, and multi-cloud code repositories without agent installation.',
    highlights: [
      'Scoped IAM Role & OIDC Token Authentication',
      'GitHub App integration for automated secret scanning',
      'Zero agent installation required in your codebase',
      'Real-time multi-cloud asset & vulnerability discovery'
    ]
  },
  'synthetic-verification': {
    title: 'Synthetic Verification',
    badge: 'VERIFIED',
    icon: ShieldCheck,
    color: '#10b981',
    description: 'Automated post-fix health checks that verify vulnerabilities are patched in production without causing service disruptions.',
    highlights: [
      'Automated regression checks upon deployment',
      'Dry-run plan validation prior to terraform apply',
      'Zero production downtime guarantees',
      'Synthetic API endpoint health & policy probes'
    ]
  },
  'terraform-engine': {
    title: 'Terraform Fix Engine',
    badge: 'AUTOMATED',
    icon: Code2,
    color: '#7c3aed',
    description: 'SecurIQ automatically generates, formats, and tests precise HCL Terraform code patches to remediate security drifts.',
    highlights: [
      'Context-aware HCL patch generation',
      'Automatic state lock & terraform plan verification',
      'Human-in-the-loop 1-click execution',
      'Automated Git branch creation & Pull Request opening'
    ]
  }
};

function getInitialView() {
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
  if (path === '' || path === '/') return 'home';
  if (path === '/about') return 'about';
  if (path === '/pricing') return 'pricing';
  if (path === '/faq') return 'faq';
  if (path === '/security') return 'security';
  if (path === '/team') return 'team';
  if (path === '/500') return '500';
  if (path === '/empty') return 'empty';
  if (path === '/loading') return 'loading';
  if (path === '/restricted') return 'restricted';
  return '404';
}

function ComponentThatThrows() {
  throw new Error("Simulated 500 Component Crash Test");
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSecurityTeamModalOpen, setIsSecurityTeamModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [activeFeatureKey, setActiveFeatureKey] = useState(null);
  const [currentView, setCurrentView] = useState(getInitialView);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getInitialView());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view) => {
    setCurrentView(view);
    const newPath = view === 'home' ? '/' : `/${view}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <div className="app-container">
        {/* Offline / No Internet Warning Banner */}
        <NoInternetBanner />

        <Header 
          onOpenModal={() => setIsModalOpen(true)} 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onOpenSignInModal={() => setIsSignInModalOpen(true)}
          currentView={currentView}
          onNavigate={handleNavigate}
        />

        <main>
          {currentView === 'about' ? (
            <AboutPage 
              onOpenModal={() => setIsModalOpen(true)}
              onOpenContactModal={() => setIsContactModalOpen(true)}
            />
          ) : currentView === 'pricing' ? (
            <PricingPage 
              onOpenModal={() => setIsModalOpen(true)} 
            />
          ) : currentView === 'faq' ? (
            <FaqPage 
              onOpenModal={() => setIsModalOpen(true)} 
            />
          ) : currentView === 'security' ? (
            <SecurityPage 
              onOpenModal={() => setIsSecurityTeamModalOpen(true)} 
            />
          ) : currentView === 'team' ? (
            <TeamPage 
              onOpenContactModal={() => setIsContactModalOpen(true)}
            />
          ) : currentView === '404' ? (
            <NotFound 
              onGoHome={() => handleNavigate('home')} 
            />
          ) : currentView === '500' ? (
            <ComponentThatThrows />
          ) : currentView === 'empty' ? (
            <div style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px', margin: '0 auto' }}>
              <EmptyState 
                title="No Active Drift Remediation Logs"
                description="Your cloud infrastructure is 100% compliant with zero pending policy drifts."
                actionText="Run Manual Security Scan"
                onAction={() => alert("Triggered Manual Security Scan")}
              />
            </div>
          ) : currentView === 'loading' ? (
            <div style={{ paddingTop: '140px', paddingBottom: '80px', maxWidth: '600px', margin: '0 auto' }}>
              <SlowNetworkLoading />
              <div style={{ marginTop: '40px' }}>
                <LoadingSkeleton lines={4} height={20} />
              </div>
            </div>
          ) : currentView === 'restricted' ? (
            <div style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px', margin: '0 auto' }}>
              <PermissionDeniedState 
                title="Workspace Settings Restricted"
                description="Administrative IAM role required to modify OIDC secrets or Terraform deployment pipelines."
              />
            </div>
          ) : (
            <>
              {/* Full Screen Grid Background with 4-Quadrant Hero Layout */}
              <AnimatedGridBackgroundSection>
                <HeroLayout />
              </AnimatedGridBackgroundSection>

              {/* Value Proposition Section Below Hero */}
              <ValuePropSection onOpenModal={() => setIsModalOpen(true)} />

              {/* Securiq, Reimagined Pipeline Timeline Section */}
              <TimelineSection />

              {/* Features Carousel Section (#f4f4f4 bg) */}
              <FeaturesSection />

              {/* 7-Stage Bento Grid Workflow Section (#ffffff bg) */}
              <WorkflowSection />
            </>
          )}
        </main>

        {/* Global Footer Rendered Across Every Page */}
        <Footer 
          onOpenModal={() => setIsModalOpen(true)}
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onOpenSecurityModal={() => setIsSecurityTeamModalOpen(true)}
          onOpenFeatureModal={(key) => setActiveFeatureKey(key)}
          onOpenSignInModal={() => setIsSignInModalOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* Early Access Modal Box */}
        <EarlyAccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        {/* Glassmorphism Contact Us Pop-Up Modal */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />

        {/* Glassmorphism Contact Security Team Pop-Up Modal */}
        <SecurityTeamModal
          isOpen={isSecurityTeamModalOpen}
          onClose={() => setIsSecurityTeamModalOpen(false)}
        />

        {/* Glassmorphism Feature Detail Pop-Up Modal */}
        <FeatureDetailModal
          isOpen={!!activeFeatureKey}
          onClose={() => setActiveFeatureKey(null)}
          featureData={activeFeatureKey ? FEATURE_MODAL_DATA[activeFeatureKey] : null}
          onOpenEarlyAccess={() => setIsModalOpen(true)}
        />

        {/* Glassmorphism Sign In Notice Pop-Up Modal */}
        <SignInNoticeModal
          isOpen={isSignInModalOpen}
          onClose={() => setIsSignInModalOpen(false)}
          onOpenEarlyAccess={() => setIsModalOpen(true)}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
