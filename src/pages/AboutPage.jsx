import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Cpu, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Code2, 
  Target
} from 'lucide-react';
import './AboutPage.css';

const coreValues = [
  {
    icon: Target,
    title: 'Precision Over Noise',
    description: 'Legacy scanners flood security teams with thousands of low impact alerts. Securiq prioritizes threats based on true runtime exposure.',
    badge: 'ACCURACY',
    color: '#0284c7',
  },
  {
    icon: Lock,
    title: 'Zero Standing Access',
    description: 'Security products shouldn’t be a backdoor risk. Securiq operates with short lived OIDC tokens and zero persistent write keys.',
    badge: 'SECURITY FIRST',
    color: '#7c3aed',
  },
  {
    icon: Code2,
    title: 'Code Native Fixes',
    description: 'We don’t just report problems, we write clean, formatted HCL Terraform pull requests ready for 1 click developer approval.',
    badge: 'AUTOMATED',
    color: '#059669',
  },
];

export default function AboutPage({ onOpenModal, onOpenContactModal }) {
  return (
    <div className="about-page-wrapper">
      <div className="about-page-container">
        
        {/* Main Hero Header */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="about-pill-tag">ABOUT SECURIQ</span>
          <h1 className="about-title">Reimagining Cloud Infrastructure Security.</h1>
          <p className="about-subtitle">
            Securiq was founded to bridge the gap between security detection and developer execution, transforming cloud vulnerabilities into verified, human-approved code fixes.
          </p>
        </motion.div>

        {/* 3 Column Values Bento Grid */}
        <div className="about-values-grid">
          {coreValues.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.title}
                className="about-card"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <div className="about-card-top">
                  <div 
                    className="about-icon-badge"
                    style={{ background: `${item.color}12`, borderColor: `${item.color}30` }}
                  >
                    <IconComponent size={24} color={item.color} />
                  </div>
                  <span className="about-card-badge" style={{ color: item.color, background: `${item.color}10` }}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="about-card-title">{item.title}</h3>
                <p className="about-card-desc">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Story & Philosophy Section */}
        <motion.div 
          className="about-story-section"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="story-header">
            <span className="story-pill">OUR PHILOSOPHY</span>
            <h2 className="story-title">Why Legacy Security Scanning Fails</h2>
          </div>

          <div className="story-grid">
            <div className="story-column">
              <h3 className="story-col-title">The Detection Trap</h3>
              <p className="story-text">
                Modern DevOps teams manage thousands of cloud resources across AWS, GCP, and Azure. Traditional Security Information Tools generate thousands of daily alerts, leaving engineers overwhelmed with alert fatigue and backlog debt.
              </p>
            </div>

            <div className="story-column">
              <h3 className="story-col-title">The Autonomous Solution</h3>
              <p className="story-text">
                Securiq shifts security from passive reporting to active autonomous remediation. By combining deep contextual AI with strict human in the loop approval, Securiq remediates infrastructure drifts in minutes, safely and predictably.
              </p>
            </div>
          </div>

          {/* Metric Highlights Row */}
          {/* TODO: Replace metrics below with real verified benchmark data prior to public release */}
          <div className="about-metrics-row">
            <div className="metric-box">
              <span className="metric-num">High</span>
              <span className="metric-label">Alert Noise Filtering</span>
            </div>
            <div className="metric-box">
              <span className="metric-num">1 Click</span>
              <span className="metric-label">Human Approval Model</span>
            </div>
            <div className="metric-box">
              <span className="metric-num">Rapid</span>
              <span className="metric-label">Detection to PR Generation</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
