import { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, Network, Database, BadgeCheck, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Security.css';
import { ThemeContext } from '../App';
import BentoCard from '../components/ui/BentoCard';

gsap.registerPlugin(ScrollTrigger);

export default function Security() {
  const containerRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.security-hero > *', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo('.security-card-anim',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.security-bento-grid',
            start: "top 80%",
          }
        }
      );

      gsap.fromTo('.security-cta-banner',
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.security-cta-banner',
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="security-page-wrapper" ref={containerRef}>
      <nav className="security-nav">
        <Link to="/">
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <filter id="logo-filter-dark" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                1 1 1 0 0
              " />
            </filter>
            <filter id="logo-filter-light" colorInterpolationFilters="sRGB">
              {/* 1. Remove black background */}
              <feColorMatrix type="matrix" values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                1 1 1 0 0
              " result="nobg" />
              {/* 2. Invert RGB channels */}
              <feComponentTransfer in="nobg" result="inverted">
                <feFuncR type="linear" slope="-1" intercept="1" />
                <feFuncG type="linear" slope="-1" intercept="1" />
                <feFuncB type="linear" slope="-1" intercept="1" />
              </feComponentTransfer>
              {/* 3. Hue rotate to restore orange */}
              <feColorMatrix type="hueRotate" values="180" in="inverted" />
            </filter>
          </svg>
          <img src="/logo.png" alt="SECURIQ" className="security-logo" style={{ filter: theme === 'light' ? 'url(#logo-filter-light)' : 'url(#logo-filter-dark)' }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Link to="/" className="security-back-link">
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
      </nav>

      <main className="security-content">
        <div className="security-hero">
          <p className="security-date">UPDATED JULY 9, 2026</p>
          <h1 className="security-title">Radically Transparent Security.</h1>
          <p className="security-subtitle">
            Securiq is a security product, so how we handle access and data matters as much as what we detect. There are no black boxes here.
          </p>
        </div>

        <div className="security-bento-grid">
          <BentoCard 
            large
            className="security-card-anim"
            icon={Lock}
            title="Read access first, write access on approval"
            desc="Securiq's default posture is read access: gathering configuration and metadata to detect issues. Any change to your infrastructure, such as rotating a secret or tightening a policy, requires explicit human approval before it executes. There is no mode in which Securiq modifies your environment unattended."
          />

          <BentoCard 
            className="security-card-anim"
            icon={Network}
            title="Strictly scoped integrations"
            desc="AWS access is granted through scoped IAM roles limited to the services we monitor and remediate. GitHub access is granted through a GitHub App with only the permissions needed for secret scanning. We never use a personal access token, and we never install an agent in your codebase."
          />

          <BentoCard 
            className="security-card-anim"
            icon={Database}
            title="What we store"
            desc="We store incident metadata, generated remediation plans, approval decisions, and execution logs. We do not store secret values, file contents, or full resource payloads."
          />

          <BentoCard 
            className="security-card-anim"
            icon={BadgeCheck}
            title="Compliance roadmap"
            desc="SOC 2 Type II and ISO 27001 certifications are currently in progress. While we are still in the early stages of our compliance journey, our architecture is designed from the ground up to support these frameworks."
          />

          <BentoCard 
            className="security-card-anim"
            icon={Mail}
            title="Responsible disclosure"
            desc="If you believe you have discovered a vulnerability in Securiq, please let us know immediately. We will investigate all legitimate reports and do our best to quickly fix the problem."
          >
            <a href="mailto:security@securiq.dev" className="security-link">Report a vulnerability →</a>
          </BentoCard>
        </div>

        <div className="security-cta-banner">
          <div className="cta-banner-content">
            <h2>Need to clear a vendor security review?</h2>
            <p>We've got you covered. We're happy to walk through specifics and answer any questions.</p>
          </div>
          <a href="mailto:hello@securiq.co" className="cta-banner-button">
            <Mail size={18} /> Contact Security Team
          </a>
        </div>
      </main>
    </div>
  );
}
