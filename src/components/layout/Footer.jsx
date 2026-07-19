import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <Link to="/">
              <img src={theme === 'light' ? '/logo-light.png' : '/logo-dark.png'} alt="SECURIQ" className="logo-img" />
            </Link>
          </div>
          <p className="footer-mission">
            Built for teams running real infrastructure without a security hire.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>PRODUCT</h4>
          <a href="#">How it works</a>
          <Link to="/security">Safety</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        
        <div className="footer-col">
          <h4>COMPANY</h4>
          <Link to="/about">About</Link>
          <Link to="/team">Team</Link>
          <a href="#">Investor inquiries</a>
          <Link to="/contact">Contact</Link>
        </div>
        
        <div className="footer-col">
          <h4>LEGAL</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Security Overview</a>
          <a href="#">Responsible Disclosure</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Securiq.</p>
      </div>
    </footer>
  );
}
