export default function SectionFAQ() {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="section-number">03</p>
        <h2 className="section-title">Knowledge Base</h2>
        
        <div className="faq-grid">
          <div className="faq-card">
            <span className="faq-date">2026.07.15</span>
            <h3>How does Securiq find misconfigurations?</h3>
            <p>Securiq uses API access with read permissions to continuously scan your AWS accounts and GitHub organizations. It compares your current state against a database of known misconfigurations and security best practices.</p>
            <div className="faq-read-more">Read <span>→</span></div>
          </div>
          
          <div className="faq-card">
            <span className="faq-date">2026.07.12</span>
            <h3>What happens when a secret is leaked?</h3>
            <p>The moment Securiq detects an exposed credential, it drafts a rotation plan, identifies every service that uses the compromised secret, and prepares the necessary configuration changes.</p>
            <div className="faq-read-more">Read <span>→</span></div>
          </div>
          
          <div className="faq-card">
            <span className="faq-date">2026.07.08</span>
            <h3>Do I need to give Securiq write access?</h3>
            <p>No. Securiq operates with read only permissions by default. When you approve a fix, it requests temporary scoped write access for that specific change only, and revokes it immediately after.</p>
            <div className="faq-read-more">Read <span>→</span></div>
          </div>
          
          <div className="faq-card">
            <span className="faq-date">2026.06.30</span>
            <h3>How is Securiq different from Snyk or Wiz?</h3>
            <p>While Snyk focuses on code dependencies and Wiz on cloud posture visualization, Securiq is an autonomous security engineer that doesn't just find problems. It drafts the actual fix.</p>
            <div className="faq-read-more">Read <span>→</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
