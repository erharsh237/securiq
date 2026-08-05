import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, Lock, ShieldCheck, Zap, Building } from 'lucide-react';
import './PricingPage.css';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    tagline: 'Ideal for startups & small dev teams securing initial cloud infrastructure.',
    badge: null,
    isPopular: false,
    color: '#0284c7',
    features: [
      'Up to 5 Cloud Accounts & Repositories',
      'Continuous Vulnerability & Drift Detection',
      '1 Click Terraform Remediation Drafts',
      'Standard Slack & Email Support',
      'Weekly Automated Security Audits',
    ],
  },
  {
    name: 'Growth',
    icon: ShieldCheck,
    tagline: 'For fast growing engineering orgs requiring automated multi cloud defense.',
    badge: 'MOST POPULAR',
    isPopular: true,
    color: '#7c3aed',
    features: [
      'Up to 25 Cloud Accounts & Repositories',
      'AI Contextual Investigation & Blast Radius',
      'Shadow Sandbox Simulation Testing',
      'Synthetic Health Verification Engine',
      'Priority 24/7 Security Engineering Support',
    ],
  },
  {
    name: 'Enterprise',
    icon: Building,
    tagline: 'For security teams needing custom compliance, SSO & dedicated SLA.',
    badge: 'CUSTOM SCALE',
    isPopular: false,
    color: '#2563eb',
    features: [
      'Unlimited Cloud Accounts & Monorepos',
      'Custom IaC Rules & Granular RBAC',
      'Zero Standing Access (ZSA) Ephemeral Tokens',
      'Dedicated Security Lead & Custom SLA',
      'SOC2 & ISO Compliance Mapping',
    ],
  },
];

export default function PricingPage({ onOpenModal }) {
  return (
    <div className="pricing-page-wrapper">
      <div className="pricing-page-container">
        
        {/* Main Hero Header */}
        <motion.div 
          className="pricing-page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="pricing-pill-tag">TRANSPARENT SCALE</span>
          <h1 className="pricing-page-title">Pricing Preview</h1>
          <p className="pricing-page-subtitle">
            Simple, predictable tiers built to scale with your infrastructure growth.
          </p>
        </motion.div>

        {/* 3 Tier Cards Grid (No Price Tags) */}
        <div className="pricing-cards-grid">
          {plans.map((plan, idx) => {
            const IconComp = plan.icon;

            return (
              <motion.div
                key={plan.name}
                className={`pricing-card-page ${plan.isPopular ? 'popular-card' : ''}`}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {plan.badge && (
                  <div className="pricing-badge-page">
                    <Sparkles size={12} />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="card-top-icon" style={{ background: `${plan.color}12`, borderColor: `${plan.color}25` }}>
                  <IconComp size={24} color={plan.color} />
                </div>

                <h2 className="plan-title-page">{plan.name}</h2>
                <p className="plan-tagline-page">{plan.tagline}</p>

                <div className="plan-divider-page" />

                <ul className="plan-features-page">
                  {plan.features.map((feat) => (
                    <li key={feat} className="feature-item-page">
                      <Check size={16} className="check-icon-page" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button className={`btn-plan-cta ${plan.isPopular ? 'btn-popular' : ''}`} onClick={onOpenModal}>
                  <span>Get Early Access</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Launch Announcement Footer */}
        <motion.div 
          className="pricing-announcement-box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="announcement-text">
            <Lock size={16} className="lock-icon" />
            <span>Pricing will be announced after launch.</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
