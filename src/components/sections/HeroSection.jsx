export default function HeroSection() {
  return (
    <section id="hero" className="section">
      <div className="section-inner">
        <p className="hero-tag">Early access opening soon</p>
        <h1 className="hero-title">
          The <span style={{ color: 'var(--accent)' }}>security engineer</span><br />
          you haven't hired yet
        </h1>
        <p className="hero-subtitle">
          Find the drift. Fix the leak. Keep production running. We map your AWS and GitHub flaws, draft the Terraform fix, and wait for your click. Zero standing access.
        </p>
        <a 
          href="#waitlist" 
          className="hero-cta"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get early access <span>→</span>
        </a>
        <p className="hero-note">No credit card. We'll email you when your spot opens up.</p>
      </div>
    </section>
  );
}
