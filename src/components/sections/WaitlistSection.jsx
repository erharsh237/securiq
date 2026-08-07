import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function WaitlistSection({ onOpenEarlyAccess }) {
  return (
    <section className="section-waitlist" id="waitlist">
      <div className="waitlist-card">
        <h2 className="waitlist-title">Be first in when we open access.</h2>
        <p className="waitlist-subtitle">
          We're onboarding a small group of early teams before general availability, and shaping v1 around what they tell us.
        </p>
        <button aria-label="Action button" 
          className="hero-cta" 
          onClick={onOpenEarlyAccess}
          style={{ cursor: 'pointer', border: 'none' }}
        >
          Get early access <span>→</span>
        </button>
      </div>
    </section>
  );
}
