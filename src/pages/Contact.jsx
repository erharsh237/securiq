import { Mail, Shield, TrendingUp } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-container">
          
          <div className="contact-header" style={{ marginBottom: '4rem' }}>
            <p className="section-tag">CONTACT</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>Get in touch</h1>
            <p className="contact-subtitle">
              We're a small team, so email is the fastest way to reach us. Pick the right 
              inbox below and we'll get back to you personally.
            </p>
          </div>

          <div className="contact-cards-wrapper">
            
            <a href="mailto:hello@securiq.co" className="contact-card">
              <div className="contact-icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="contact-card-content">
                <h3>General & sales</h3>
                <p>Questions about the product, waitlist, or a demo.</p>
                <span className="contact-email">hello@securiq.co</span>
              </div>
            </a>

            <a href="mailto:security@securiq.co" className="contact-card">
              <div className="contact-icon-wrapper">
                <Shield size={24} />
              </div>
              <div className="contact-card-content">
                <h3>Security & disclosure</h3>
                <p>Report a vulnerability or ask about our security posture.</p>
                <span className="contact-email">security@securiq.co</span>
              </div>
            </a>

            <a href="mailto:investors@securiq.co" className="contact-card">
              <div className="contact-icon-wrapper">
                <TrendingUp size={24} />
              </div>
              <div className="contact-card-content">
                <h3>Investors</h3>
                <p>Investor inquiries and partnership conversations.</p>
                <span className="contact-email">investors@securiq.co</span>
              </div>
            </a>

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
