import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import './SecurityTeamModal.css';

const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
  'icloud.com', 'aol.com', 'protonmail.com', 'proton.me', 
  'zoho.com', 'yandex.com', 'mail.com', 'gmx.com', 'live.com'
];

export default function SecurityTeamModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'Vendor Security Review',
    message: '',
  });

  const [emailError, setEmailError] = useState('');
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  if (!isOpen) return null;

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
      const response = await fetch('https://formspree.io/f/mrpzzaqr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', company: '', inquiryType: 'Vendor Security Review', message: '' });
        setEmailError('');
      } else {
        const data = await response.json();
        setStatus({ submitting: false, success: false, error: data.error || 'Submission failed. Please try again.' });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Network error. Please try again later.' });
    }
  };

  const handleClose = () => {
    setStatus({ submitting: false, success: false, error: null });
    setEmailError('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="security-modal-overlay" onClick={handleClose}>
        <motion.div 
          className="security-modal-glass"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close Button */}
          <button className="security-modal-close" onClick={handleClose} aria-label="Close modal">
            <X size={20} />
          </button>

          {status.success ? (
            <div className="security-modal-success">
              <CheckCircle2 size={54} className="success-icon" />
              <h2 className="success-title">Security Inquiry Sent!</h2>
              <p className="success-desc">
                Thank you for contacting the SecurIQ Security Operations Team. A security engineer will review your request and reach out shortly.
              </p>
              <button className="btn-modal-done" onClick={handleClose}>
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="security-modal-header">
                <span className="security-modal-pill">SECURITY & COMPLIANCE</span>
                <h2 className="security-modal-title">Contact Security Team</h2>
                <p className="security-modal-subtitle">
                  Need to clear a vendor security review, request SOC 2 docs, or report a vulnerability? Reach out below.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="security-modal-form">
                
                <div className="sec-form-group">
                  <label htmlFor="sec-name">Full Name *</label>
                  <input
                    type="text"
                    id="sec-name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="sec-form-group">
                  <label htmlFor="sec-email">Work Email *</label>
                  <input
                    type="email"
                    id="sec-email"
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

                <div className="sec-form-group">
                  <label htmlFor="sec-company">Company / Organization *</label>
                  <input
                    type="text"
                    id="sec-company"
                    name="company"
                    required
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="sec-form-group">
                  <label htmlFor="sec-type">Inquiry Type *</label>
                  <select
                    id="sec-type"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  >
                    <option value="Vendor Security Review">Vendor Security Review</option>
                    <option value="SOC 2 / ISO Compliance">SOC 2 / ISO Compliance</option>
                    <option value="Vulnerability Report">Vulnerability Report</option>
                    <option value="General Security Inquiry">General Security Inquiry</option>
                  </select>
                </div>

                <div className="sec-form-group">
                  <label htmlFor="sec-message">Message *</label>
                  <textarea
                    id="sec-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Details about your vendor questionnaire, compliance audit, or security inquiry..."
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
                  className="btn-sec-submit"
                  disabled={status.submitting || !!emailError}
                >
                  <ShieldCheck size={18} />
                  <span>{status.submitting ? 'Sending...' : 'Submit Security Request'}</span>
                </button>

              </form>
            </>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
