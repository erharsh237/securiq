import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import './EarlyAccessModal.css';

export default function EarlyAccessModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const validateEmail = (value) => {
    setEmail(value);
    if (!value) {
      setEmailError('');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value.trim())) {
      setEmailError('Please enter a valid email address.');
      return false;
    }

    setEmailError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xwvddeyk', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setEmail('');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setErrorMessage('');
    setEmailError('');
    setEmail('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-glass-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="modal-success-state">
            <CheckCircle2 size={56} color="#10b981" />
            <h2 className="success-title">You're on the list!</h2>
            <p className="success-subtitle">
              Thank you for applying for Securiq early access. We'll be in touch with your invite shortly.
            </p>
            <button aria-label="Close" className="btn-solid-dark" onClick={handleClose}>
              Done
            </button>
          </div>
        ) : (
          <div className="modal-body">
            <div className="modal-header">
              <h2 className="modal-title">Be first in when we open access.</h2>
              <p className="modal-subtitle">
                We're onboarding a small group of early teams before general availability, and shaping v1 around what they tell us.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Smith"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => validateEmail(e.target.value)}
                    required
                    placeholder="you@company.com"
                    className={emailError ? 'input-error' : ''}
                  />
                  {emailError && <span className="field-error-text">{emailError}</span>}
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="companySize">Company size</label>
                  <select id="companySize" name="companySize" required defaultValue="">
                    <option value="" disabled>Select...</option>
                    <option value="1-10">1 - 10 employees</option>
                    <option value="11-50">11 - 50 employees</option>
                    <option value="51-200">51 - 200 employees</option>
                    <option value="201-500">201 - 500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="toolsUsed">What do you use today?</label>
                  <select id="toolsUsed" name="toolsUsed" required defaultValue="">
                    <option value="" disabled>Select...</option>
                    <option value="Terraform">Terraform</option>
                    <option value="AWS Native Tools">AWS Native Tools</option>
                    <option value="Cloud Custodian / CSPM">Cloud Custodian / CSPM</option>
                    <option value="Manual Audits">Manual Audits</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="headache">
                  Biggest cloud security headache right now? <span className="label-optional">(optional)</span>
                </label>
                <textarea
                  id="headache"
                  name="headache"
                  rows={3}
                  placeholder="e.g. we have no idea what's public in our S3 buckets"
                />
              </div>

              <div className="form-group-checkbox">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                />
                <label htmlFor="consent">
                  I agree to be contacted about Securiq early access and product updates. See our <a href="#privacy" className="privacy-link">Privacy Policy</a>.
                </label>
              </div>

              {errorMessage && <div className="form-error-msg">{errorMessage}</div>}

              <button aria-label="Submit form" type="submit" className="btn-modal-submit" disabled={isSubmitting || !!emailError}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
