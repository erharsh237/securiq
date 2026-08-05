import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import './ContactModal.css';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  if (!isOpen) return null;

  const validateEmail = (email) => {
    if (!email) return 'Email address is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return 'Please enter a valid email address.';
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

  const handleClose = () => {
    setStatus({ submitting: false, success: false, error: null });
    setEmailError('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="contact-modal-overlay" onClick={handleClose}>
        <motion.div 
          className="contact-modal-glass"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close Button */}
          <button className="contact-modal-close" onClick={handleClose} aria-label="Close modal">
            <X size={20} />
          </button>

          {status.success ? (
            <div className="contact-modal-success">
              <CheckCircle2 size={54} className="success-icon" />
              <h2 className="success-title">Message Sent!</h2>
              <p className="success-desc">
                Thank you for reaching out. Our security engineering team will review your message and get back to you within 2 hours.
              </p>
              <button className="btn-modal-done" onClick={handleClose}>
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="contact-modal-header">
                <span className="contact-modal-pill">CONTACT US</span>
                <h2 className="contact-modal-title">Talk to Security Engineering</h2>
                <p className="contact-modal-subtitle">
                  Questions about Securiq, vendor security reviews, or early access? Send us a message below.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="contact-modal-form">
                
                <div className="modal-form-group">
                  <label htmlFor="modal-name">Full Name *</label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="modal-email">Email Address *</label>
                  <input
                    type="email"
                    id="modal-email"
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

                <div className="modal-form-group">
                  <label htmlFor="modal-company">Company / Organization *</label>
                  <input
                    type="text"
                    id="modal-company"
                    name="company"
                    required
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="modal-message">Message *</label>
                  <textarea
                    id="modal-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your infrastructure needs or vendor review questions..."
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
                  className="btn-modal-submit"
                  disabled={status.submitting || !!emailError}
                >
                  <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={16} />
                </button>

              </form>
            </>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
