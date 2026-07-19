import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const PUBLIC_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
  'aol.com', 'icloud.com', 'protonmail.com', 'live.com', 'msn.com'
];

export default function WaitlistForm({ showDetailed = true, buttonText = "Get early access" }) {
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('securiq_waitlist_submitted') === 'true') {
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const email = e.target.email.value.toLowerCase();
    const domain = email.split('@')[1];
    
    if (PUBLIC_DOMAINS.includes(domain)) {
      setError('Please use your official company email to request access.');
      return;
    }
    
    setIsSubmitting(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xwvddeyk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        localStorage.setItem('securiq_waitlist_submitted', 'true');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="waitlist-success-message" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <CheckCircle2 size={64} style={{ color: 'var(--green)', margin: '0 auto 1.5rem auto' }} />
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>Form successfully submitted</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Team Securiq will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form className="waitlist-form-detailed" onSubmit={handleSubmit}>
      
      {error && <div className="form-error" style={{ color: 'var(--danger)', marginBottom: '1.5rem', fontSize: '0.9rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>{error}</div>}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Jane Smith" required disabled={isSubmitting} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Work email</label>
          <input type="email" id="email" name="email" placeholder="you@company.com" required disabled={isSubmitting} />
        </div>
      </div>

      {showDetailed && (
        <>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company-size">Company size</label>
              <select id="company-size" name="company-size" defaultValue="" required disabled={isSubmitting}>
                <option value="" disabled>Select...</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="tools">What do you use today</label>
              <select id="tools" name="tools" defaultValue="" required disabled={isSubmitting}>
                <option value="" disabled>Select...</option>
                <option value="wiz">Wiz / Orca</option>
                <option value="native">AWS Native (Security Hub, etc)</option>
                <option value="open-source">Open Source</option>
                <option value="none">Nothing yet</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="headache">Biggest cloud security headache right now? (optional)</label>
            <textarea 
              id="headache" 
              name="headache"
              placeholder="e.g. we have no idea what's public in our S3 buckets"
              rows={3}
              disabled={isSubmitting}
            ></textarea>
          </div>
        </>
      )}

      <div className="form-checkbox">
        <input type="checkbox" id="agree" name="agree" required disabled={isSubmitting} />
        <label htmlFor="agree">
          I agree to be contacted about Securiq early access and product updates. See our <a href="#">Privacy Policy</a>.
        </label>
      </div>

      <button type="submit" className="form-submit-btn" disabled={isSubmitting} style={{ color: '#ffffff' }}>
        {isSubmitting ? 'Submitting...' : buttonText} {isSubmitting ? '' : <span>→</span>}
      </button>
      
      {showDetailed && (
        <p className="form-footer-note">
          We're onboarding a small group of early teams and shaping v1 around their feedback.
        </p>
      )}
    </form>
  );
}
