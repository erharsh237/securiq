import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer({ 
  onOpenModal, 
  onOpenContactModal, 
  onOpenSecurityModal, 
  onOpenFeatureModal,
  onOpenSignInModal,
  onNavigate 
}) {
  const handleNavClick = (e, targetView, selector) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetView);
    }
    setTimeout(() => {
      if (selector) {
        const elem = document.querySelector(selector);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
          elem.classList.add('highlight-target-card');
          setTimeout(() => elem.classList.remove('highlight-target-card'), 2200);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="stunning-footer">
      
      {/* Top Hero CTA Banner */}
      <div className="footer-cta-banner">
        <div className="footer-banner-container">
          <motion.div 
            className="footer-banner-text"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="banner-title">Ready to automate your cloud security?</h2>
            <p className="banner-subtitle">
              Map infrastructure flaws, draft verified Terraform fixes, and execute with zero standing access.
            </p>
          </motion.div>

          <motion.button 
            className="btn-footer-cta"
            onClick={onOpenModal}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span>Get Early Access</span>
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>

      {/* Main 5-Column Navigation Grid */}
      <div className="footer-main-content">
        <div className="footer-grid-container">
          
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo-box" onClick={(e) => handleNavClick(e, 'home', null)}>
              <img src="/footer-logo.png" alt="SECURIQ Logo" className="footer-logo" />
            </div>
            <p className="footer-brand-desc">
              Your AI Security Engineer. Autonomous vulnerability detection, contextual analysis, and Terraform remediation for modern cloud infrastructure.
            </p>
          </div>

          {/* Column 1: Product */}
          <div className="footer-nav-col">
            <h3 className="footer-col-heading">Product</h3>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home', null)}>Overview</a></li>
              <li><a href="#timeline" onClick={(e) => handleNavClick(e, 'home', '#timeline')}>Remediation Pipeline</a></li>
              <li><a href="#features" onClick={(e) => handleNavClick(e, 'home', '#features')}>Features</a></li>
              <li><a href="#workflow" onClick={(e) => handleNavClick(e, 'home', '#workflow')}>Engine Architecture</a></li>
              <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing', null)}>Pricing Preview</a></li>
            </ul>
          </div>

          {/* Column 2: Security & Trust */}
          <div className="footer-nav-col">
            <h3 className="footer-col-heading">Security & Trust</h3>
            <ul className="footer-links-list">
              <li><a href="#security-overview" onClick={(e) => handleNavClick(e, 'security', '#security-overview')}>Security Overview</a></li>
              <li><a href="#zsa" onClick={(e) => handleNavClick(e, 'security', '#zsa')}>Zero Standing Access</a></li>
              <li><a href="#iam-oidc" onClick={(e) => handleNavClick(e, 'security', '#iam-oidc')}>IAM & OIDC Tokens</a></li>
              <li><a href="#compliance-roadmap" onClick={(e) => handleNavClick(e, 'security', '#compliance-roadmap')}>SOC 2 Roadmap</a></li>
              <li><button type="button" className="footer-btn-link" onClick={onOpenSecurityModal}>Report Vulnerability</button></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-nav-col">
            <h3 className="footer-col-heading">Resources</h3>
            <ul className="footer-links-list">
              <li><a href="#faq" onClick={(e) => handleNavClick(e, 'faq', null)}>FAQ</a></li>
              <li>
                <button type="button" className="footer-btn-link" onClick={() => onOpenFeatureModal && onOpenFeatureModal('cloud-integrations')}>
                  Cloud Integrations
                </button>
              </li>
              <li>
                <button type="button" className="footer-btn-link" onClick={() => onOpenFeatureModal && onOpenFeatureModal('terraform-engine')}>
                  Terraform Fix Engine
                </button>
              </li>
              <li>
                <button type="button" className="footer-btn-link" onClick={() => onOpenFeatureModal && onOpenFeatureModal('synthetic-verification')}>
                  Synthetic Verification
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="footer-nav-col">
            <h3 className="footer-col-heading">Company</h3>
            <ul className="footer-links-list">
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about', null)}>About Us</a></li>
              <li><button type="button" className="footer-btn-link" onClick={onOpenContactModal}>Contact Us</button></li>
              <li><button type="button" className="footer-btn-link" onClick={onOpenSecurityModal}>Security Team</button></li>
              <li>
                <button 
                  type="button" 
                  className="footer-btn-link highlight-link border-none bg-transparent cursor-pointer"
                  onClick={onOpenSignInModal}
                >
                  Sign In (App)
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © 2026 SECURIQ Inc. All rights reserved. Built with precision for Cloud Security Teams.
          </p>

          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => handleNavClick(e, 'security', '#what-we-store')}>Privacy Policy</a>
            <span className="dot-divider">•</span>
            <a href="#terms" onClick={(e) => handleNavClick(e, 'security', '#zsa')}>Terms of Service</a>
            <span className="dot-divider">•</span>
            <button type="button" className="footer-btn-link" onClick={onOpenSecurityModal}>Responsible Disclosure</button>
          </div>
        </div>
      </div>

    </footer>
  );
}
