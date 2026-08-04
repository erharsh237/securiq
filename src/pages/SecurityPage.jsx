import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Database, 
  AlertTriangle,
  Mail,
  ArrowRight,
  FileCheck
} from 'lucide-react';
import './SecurityPage.css';

export default function SecurityPage({ onOpenModal }) {
  return (
    <div className="security-page-wrapper" id="security-overview">
      <div className="security-page-container">
        
        {/* Main Hero Header */}
        <motion.div 
          className="security-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="security-pill-tag">UPDATED AUGUST 2026</span>
          <h1 className="security-title">Radically Transparent Security.</h1>
          <p className="security-subtitle">
            SecuriQ is a security product, so how we handle access and data matters as much as what we detect. 
            There are no black boxes here.
          </p>
        </motion.div>

        {/* Trendy Light Bento Grid Architecture */}
        <div className="security-bento-grid">
          
          {/* Card 1: Zero Standing Access (#zsa) */}
          <motion.div 
            id="zsa"
            className="security-card card-featured-left"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="security-card-header">
              <div className="icon-badge badge-blue">
                <Lock size={24} color="#0284c7" />
              </div>
              <span className="card-badge-pill pill-blue">ZERO STANDING ACCESS (ZSA)</span>
            </div>

            <h2 className="security-card-title">Read access first, write access on approval</h2>
            <p className="security-card-desc">
              Securiq's default posture is read access: gathering configuration and metadata to detect issues. 
              Any change to your infrastructure, such as rotating a secret or tightening a policy, 
              requires explicit human approval before it executes. There is no mode in which Securiq modifies your environment unattended.
            </p>

            <div className="featured-visual-box">
              <div className="visual-status-item">
                <ShieldCheck size={16} color="#10b981" />
                <span>Zero Unattended Environment Mutations</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="security-right-stack">
            
            {/* Card 2: IAM & OIDC Tokens (#iam-oidc) */}
            <motion.div 
              id="iam-oidc"
              className="security-card"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="security-card-header">
                <div className="icon-badge badge-purple">
                  <Key size={22} color="#7c3aed" />
                </div>
                <span className="card-badge-pill pill-purple">IAM & OIDC TOKENS</span>
              </div>

              <h3 className="security-card-title">Strictly scoped integrations</h3>
              <p className="security-card-desc">
                AWS access is granted through scoped IAM roles limited to the services we monitor and remediate. 
                GitHub access is granted through a GitHub App with only the permissions needed for secret scanning. 
                We never use a personal access token, and we never install an agent in your codebase.
              </p>
            </motion.div>

            {/* Card 3: What We Store (#what-we-store) */}
            <motion.div 
              id="what-we-store"
              className="security-card"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="security-card-header">
                <div className="icon-badge badge-amber">
                  <Database size={22} color="#d97706" />
                </div>
                <span className="card-badge-pill pill-amber">DATA PRIVACY</span>
              </div>

              <h3 className="security-card-title">What we store</h3>
              <p className="security-card-desc">
                We store incident metadata, generated remediation plans, approval decisions, and execution logs. 
                We never store secret values, raw code files, or full resource payloads.
              </p>
            </motion.div>

          </div>

          {/* Card 4: SOC 2 & ISO Compliance Roadmap (#compliance-roadmap) */}
          <motion.div 
            id="compliance-roadmap"
            className="security-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="security-card-header">
              <div className="icon-badge badge-emerald">
                <FileCheck size={22} color="#059669" />
              </div>
              <span className="card-badge-pill pill-emerald">SOC 2 ROADMAP</span>
            </div>

            <h3 className="security-card-title">Compliance roadmap</h3>
            <p className="security-card-desc">
              SOC 2 Type II and ISO 27001 certifications are currently in progress. 
              While we are still in the early stages of our compliance journey, our architecture is designed from the ground up to support these frameworks.
            </p>
          </motion.div>

          {/* Card 5: Responsible Disclosure (#responsible-disclosure) */}
          <motion.div 
            id="responsible-disclosure"
            className="security-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="security-card-header">
              <div className="icon-badge badge-rose">
                <AlertTriangle size={22} color="#e11d48" />
              </div>
              <span className="card-badge-pill pill-rose">DISCLOSURE</span>
            </div>

            <h3 className="security-card-title">Responsible disclosure</h3>
            <p className="security-card-desc">
              If you believe you have discovered a vulnerability in Securiq, please let us know immediately. 
              We will investigate all legitimate reports and do our best to quickly fix the problem.
            </p>

            <button className="security-text-link" onClick={onOpenModal}>
              <span>Report a vulnerability</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>

        </div>

        {/* Bottom Banner Card: Vendor Security Review */}
        <motion.div 
          id="vendor-review"
          className="security-vendor-banner"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="vendor-banner-content">
            <h2 className="vendor-title">Need to clear a vendor security review?</h2>
            <p className="vendor-desc">
              We've got you covered. We're happy to walk through specifics, provide architecture diagrams, and answer any questions.
            </p>
          </div>

          <button className="btn-vendor-cta" onClick={onOpenModal}>
            <Mail size={18} />
            <span>Contact Security Team</span>
          </button>
        </motion.div>

      </div>
    </div>
  );
}
