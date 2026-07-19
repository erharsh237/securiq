import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <div className="nav-logo">
          <Link to="/">
            <img src={theme === 'light' ? '/logo-light.png' : '/logo-dark.png'} alt="SECURIQ" className="logo-img" height="52" decoding="async" fetchpriority="high" />
          </Link>
        </div>
        
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/security" className="nav-link" onClick={() => setMenuOpen(false)}>Security</Link></li>
          <li><Link to="/pricing" className="nav-link" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
          
          <li 
            className="nav-dropdown"
            onMouseEnter={() => setCompanyDropdownOpen(true)}
            onMouseLeave={() => setCompanyDropdownOpen(false)}
          >
            <button 
              className="nav-link dropdown-trigger" 
              aria-haspopup="true" 
              aria-expanded={companyDropdownOpen}
              onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
              style={{ background: 'none', border: 'none', font: 'inherit', color: 'inherit', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
            >
              Company <ChevronDown size={14} style={{ marginLeft: '4px' }} />
            </button>
            {companyDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/about" className="dropdown-item" onClick={() => { setMenuOpen(false); setCompanyDropdownOpen(false); }}>About</Link>
                <Link to="/team" className="dropdown-item" onClick={() => { setMenuOpen(false); setCompanyDropdownOpen(false); }}>Team</Link>
                <Link to="/contact" className="dropdown-item" onClick={() => { setMenuOpen(false); setCompanyDropdownOpen(false); }}>Contact</Link>
              </div>
            )}
          </li>
          
          <li><Link to="/faq" className="nav-link" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
        </ul>

        <div className="nav-actions">
          <a href="https://app.securiq.co" target="_blank" rel="noopener noreferrer" className="nav-login">Sign In</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
