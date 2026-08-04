import React, { useState, useEffect } from 'react';
import { Shield, CreditCard, Building2, HelpCircle, Info, Users, Mail, Home } from 'lucide-react';
import './Header.css';

export default function Header({ onOpenModal, onOpenContactModal, onOpenSignInModal, currentView = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetView, selector) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetView);
    }
    if (selector && targetView === 'home') {
      setTimeout(() => {
        const elem = document.querySelector(selector);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        
        {/* Logo Click -> Home */}
        <div 
          className="logo-group" 
          onClick={(e) => handleNavClick(e, 'home', null)}
          style={{ cursor: 'pointer' }}
        >
          <img src="/logo.png" alt="SECURIQ Logo" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
        </div>

        <nav className="desktop-nav icons-nav">
          
          {/* Home */}
          <div className="nav-item group relative">
            <button 
              type="button"
              className={`nav-icon-link border-none bg-transparent cursor-pointer ${currentView === 'home' ? 'active-nav' : ''}`}
              onClick={(e) => handleNavClick(e, 'home', null)}
            >
              <Home size={20} strokeWidth={1.5} />
            </button>
            <div className="tooltip-dropdown">
              <span className="tooltip-text">Home</span>
            </div>
          </div>

          {/* Security -> Dedicated Security View */}
          <div className="nav-item group relative">
            <button 
              type="button"
              className={`nav-icon-link border-none bg-transparent cursor-pointer ${currentView === 'security' ? 'active-nav' : ''}`}
              onClick={(e) => handleNavClick(e, 'security', null)}
            >
              <Shield size={20} strokeWidth={1.5} />
            </button>
            <div className="tooltip-dropdown">
              <span className="tooltip-text">Security</span>
            </div>
          </div>

          {/* Pricing -> Dedicated Pricing View */}
          <div className="nav-item group relative">
            <button 
              type="button"
              className={`nav-icon-link border-none bg-transparent cursor-pointer ${currentView === 'pricing' ? 'active-nav' : ''}`}
              onClick={(e) => handleNavClick(e, 'pricing', null)}
            >
              <CreditCard size={20} strokeWidth={1.5} />
            </button>
            <div className="tooltip-dropdown">
              <span className="tooltip-text">Pricing</span>
            </div>
          </div>

          {/* Company (Dropdown) */}
          <div 
            className="nav-item group relative"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <button className={`nav-icon-link border-none bg-transparent cursor-pointer ${currentView === 'team' || currentView === 'about' ? 'active-nav' : ''}`}>
              <Building2 size={20} strokeWidth={1.5} />
            </button>
            
            <div className={`company-dropdown ${isCompanyOpen ? 'open' : ''}`}>
              <div className="dropdown-hover-bridge" />

              <div className="dropdown-header">
                <span className="tooltip-text">Company</span>
              </div>
              <div className="dropdown-links">
                <button type="button" className="dropdown-link border-none bg-transparent w-full cursor-pointer" onClick={(e) => handleNavClick(e, 'about', null)}>
                  <Info size={14} /> About
                </button>
                <button type="button" className="dropdown-link border-none bg-transparent w-full cursor-pointer" onClick={(e) => handleNavClick(e, 'team', null)}>
                  <Users size={14} /> Team
                </button>
                <button 
                  type="button" 
                  className="dropdown-link border-none bg-transparent w-full cursor-pointer" 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsCompanyOpen(false);
                    if (onOpenContactModal) onOpenContactModal();
                  }}
                >
                  <Mail size={14} /> Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* FAQ -> Dedicated FAQ View */}
          <div className="nav-item group relative">
            <button 
              type="button"
              className={`nav-icon-link border-none bg-transparent cursor-pointer ${currentView === 'faq' ? 'active-nav' : ''}`}
              onClick={(e) => handleNavClick(e, 'faq', null)}
            >
              <HelpCircle size={20} strokeWidth={1.5} />
            </button>
            <div className="tooltip-dropdown">
              <span className="tooltip-text">FAQ</span>
            </div>
          </div>

        </nav>

        <div className="header-actions">
          <button 
            type="button" 
            className="btn-solid-dark"
            onClick={(e) => {
              e.preventDefault();
              if (onOpenSignInModal) onOpenSignInModal();
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
