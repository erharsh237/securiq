import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WaitlistForm from '../components/ui/WaitlistForm';
import gsap from 'gsap';
import './Pricing.css';

export default function Pricing() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-header, .pricing-intro', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
      );
      
      gsap.fromTo('.pricing-card', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.2 }
      );

      gsap.fromTo('.pricing-included, .pricing-waitlist', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.4 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pricing-page" ref={containerRef}>
        <div className="pricing-content">
        
        <div className="pricing-header" style={{ marginBottom: '4rem' }}>
          <p className="section-tag">PRICING</p>
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>We're still shaping pricing.</h1>
        </div>

        <p className="pricing-intro">
          Securiq is getting ready for launch. We're onboarding a small group of early teams to shape pricing around real usage, not the other way around. Here's the shape we're planning toward. Join the waitlist and we'll bring pricing details to you directly.
        </p>

        <div className="pricing-grid">
          {/* Starter Tier */}
          <div className="pricing-card">
            <h2>Starter</h2>
            <p className="tier-desc">For startups getting visibility for the first time.</p>
            <p className="tier-specs">ONE ENVIRONMENT</p>
            <p className="tier-status">Pricing announced at launch</p>
          </div>

          {/* Team Tier */}
          <div className="pricing-card">
            <h2>Team</h2>
            <p className="tier-desc">For teams actively remediating AWS and GitHub issues.</p>
            <p className="tier-specs">UNLIMITED ENVIRONMENTS</p>
            <p className="tier-status">Pricing announced at launch</p>
          </div>

          {/* Scale Tier */}
          <div className="pricing-card">
            <h2>Scale</h2>
            <p className="tier-desc">For teams facing SOC 2 or enterprise vendor reviews.</p>
            <p className="tier-specs">CUSTOM INTEGRATIONS & AUDITS</p>
            <p className="tier-status">Pricing announced at launch</p>
          </div>
        </div>

        {/* Included Features */}
        <div className="pricing-included">
          <h3>What's included at every tier</h3>
          <div className="included-grid">
            <div className="included-item">
              <Check className="check-icon" size={18} />
              <span>Continuous scanning across connected accounts</span>
            </div>
            <div className="included-item">
              <Check className="check-icon" size={18} />
              <span>Clear incident explanations</span>
            </div>
            <div className="included-item">
              <Check className="check-icon" size={18} />
              <span>Remediation plans requiring your approval</span>
            </div>
            <div className="included-item">
              <Check className="check-icon" size={18} />
              <span>Full audit log of every action taken</span>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="pricing-waitlist">
          <h2>Join the waitlist for early pricing.</h2>
          <p className="waitlist-subtitle">Early teams get input on pricing and a preferred rate at launch.</p>
          <WaitlistForm showDetailed={true} buttonText="Join waitlist" />
        </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
