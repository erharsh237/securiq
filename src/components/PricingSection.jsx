import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, Lock } from 'lucide-react';
import './PricingSection.css';

const plans = [
  {
    name: 'Starter',
    tagline: 'Ideal for startups & small dev teams securing initial cloud infrastructure.',
    badge: null,
    isPopular: false,
    features: [
      'Up to 5 Cloud Accounts & Repositories',
      'Continuous Vulnerability & Drift Detection',
      '1 Click Terraform Remediation Drafts',
      'Standard Slack & Email Support',
    ],
  },
  {
    name: 'Growth',
    tagline: 'For fast growing engineering orgs requiring automated multi cloud defense.',
    badge: 'MOST POPULAR',
    isPopular: true,
    features: [
      'Up to 25 Cloud Accounts & Repositories',
      'AI Investigation & Blast Radius Engine',
      'Shadow Sandbox Simulation & Verification',
      'Priority 24/7 Security Support',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For security teams needing custom compliance, SSO & dedicated SLA.',
    badge: 'CUSTOM SCALE',
    isPopular: false,
    features: [
      'Unlimited Cloud Accounts & Monorepos',
      'Custom IaC Rules & Granular RBAC',
      'Zero Standing Access (ZSA) Execution',
      'Dedicated Security Lead & Custom SLA',
    ],
  },
];

export default function PricingSection({ onOpenModal }) {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        
        {/* Section Header */}
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="pricing-pill-tag">TRANSPARENT SCALE</span>
          <h2 className="pricing-title">Pricing Preview</h2>
          <p className="pricing-subtitle">
            Simple, predictable tiers built to scale with your infrastructure growth.
          </p>
        </motion.div>

        {/* 3 Simple Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${plan.isPopular ? 'popular-card' : ''}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {plan.badge && (
                <div className="pricing-badge">
                  <Sparkles size={12} />
                  <span>{plan.badge}</span>
                </div>
              )}

              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-tagline">{plan.tagline}</p>

              <div className="plan-divider" />

              <ul className="plan-features">
                {plan.features.map((feat) => (
                  <li key={feat} className="feature-item">
                    <Check size={16} className="feature-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Action Button & Announcement */}
        <motion.div 
          className="pricing-action-box"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <button className="btn-pricing-view" onClick={onOpenModal}>
            <span>View Pricing</span>
            <ArrowRight size={18} />
          </button>
          
          <p className="pricing-announcement">
            <Lock size={14} className="lock-icon" />
            <span>Detailed pricing plans will be announced after launch.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
