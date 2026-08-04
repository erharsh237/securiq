import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Clock, Shield, Building2 } from 'lucide-react';
import './ContactPage.css';

const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
  'icloud.com', 'aol.com', 'protonmail.com', 'proton.me', 
  'zoho.com', 'yandex.com', 'mail.com', 'gmx.com', 'live.com'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const validateEmail = (email) => {
    if (!email) return 'Work email is required.';
    const domain = email.split('@')[1]?.toLowerCase().trim();
    if (!domain) return 'Please enter a valid email address.';
    if (FREE_EMAIL_DOMAINS.includes(domain)) {
      return 'Please use your work email (personal domains like Gmail or Yahoo are not allowed).';
    }
    return '';
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, email: val }));
    if (emailError) {
      setEmailError(validateEmail(val));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validateEmail(formData.email);
    if (err) {
      setEmailError(err);
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('https://formspree.io/f/mbgrragw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', company: '', message: '' });
        setEmailError('');
      } else {
        const data = await response.json();
        setStatus({ submitting: false, success: false, error: data.error || 'Submission failed. Please try again.' });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Network error. Please try again later.' });
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-page-container">
        
        {/* Header */}
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="contact-pill-tag">GET IN TOUCH</span>
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Have questions about SecurIQ, vendor security reviews, or early access? Our security engineering team is here to help.
          </p>
        </motion.div>

        {/* Contact Split Layout */}
        <div className="contact-split-grid">
          
          {/* Left Form Box */}
          <motion.div 
            className="contact-form-box"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status.success ? (
              <div className="contact-success-state">
                <CheckCircle2 size={56} className="success-icon" />
                <h2 className="success-title">Message Sent!</h2>
                <p className="success-desc">
                  Thank you for contacting SecurIQ. A member of our security engineering team will review your message and reach out within 2 hours.
                </p>
                <button 
                  className="btn-contact-reset"
                  onClick={() => setStatus({ submitting: false, success: false, error: null })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Work Email */}
                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={emailError ? 'input-error' : ''}
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleEmailChange}
                    onBlur={() => setEmailError(validateEmail(formData.email))}
                  />
                  {emailError && (
                    <span className="field-error-text">{emailError}</span>
                  )}
                </div>

                {/* Company Name */}
                <div className="form-group">
                  <label htmlFor="company">Company / Organization *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your security infrastructure needs, vendor review, or early access questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {status.error && (
                  <div className="form-error-msg">
                    <AlertCircle size={16} />
                    <span>{status.error}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn-contact-submit"
                  disabled={status.submitting || !!emailError}
                >
                  <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={16} />
                </button>

              </form>
            )}
          </motion.div>

          {/* Right Info Cards Stack */}
          <div className="contact-info-stack">
            
            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="info-icon-badge">
                <Clock size={24} color="#0284c7" />
              </div>
              <div>
                <h3 className="info-card-title">Fast SLA Response</h3>
                <p className="info-card-desc">
                  Our security engineers respond to all technical and vendor compliance inquiries within <strong>2 business hours</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="info-icon-badge">
                <Shield size={24} color="#7c3aed" />
              </div>
              <div>
                <h3 className="info-card-title">Vendor Security Reviews</h3>
                <p className="info-card-desc">
                  Need SOC 2 Type II or ISO 27001 compliance documentation for your vendor procurement team? We're happy to walk through our architecture.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="info-icon-badge">
                <Building2 size={24} color="#059669" />
              </div>
              <div>
                <h3 className="info-card-title">Direct Contact</h3>
                <p className="info-card-desc">
                  Prefer direct email? Reach our security operations team anytime at <a href="mailto:support@securiq.co" className="info-email-link">support@securiq.co</a>.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
}
