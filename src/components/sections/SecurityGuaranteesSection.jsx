import { Lock, Eye, RefreshCcw, Key, FileText, BadgeCheck } from 'lucide-react';
import FeatureListItem from '../ui/FeatureListItem';

const guaranteeFeatures = [
  {
    id: 'logging',
    icon: Eye,
    title: 'Every action is logged',
    description: 'Detection, reasoning, approval, execution, and verification are all timestamped and attributable.',
  },
  {
    id: 'rollback',
    icon: RefreshCcw,
    title: 'Verified or rolled back',
    description: 'After a fix is applied, we check services still work. If anything breaks, it\'s reverted automatically.',
  },
  {
    id: 'least-privilege',
    icon: Key,
    title: 'Strictly scoped access',
    description: 'Scoped IAM roles and a GitHub App with only the permissions each integration needs.',
  },
  {
    id: 'read-first',
    icon: FileText,
    title: 'Read access by default',
    description: 'We don\'t store secret values or file contents. We only retain what is needed to describe and remediate a finding.',
  },
  {
    id: 'compliance',
    icon: BadgeCheck,
    title: 'Compliance, as we grow',
    description: 'Built with SOC 2 and ISO 27001 readiness in mind from day one.',
    borderNone: true,
  }
];

export default function SecurityGuaranteesSection() {
  return (
    <section className="section-safety">
      <div className="section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="timeline-tag">SAFETY, BY DESIGN</p>
        <h2 className="timeline-main-title" style={{ marginBottom: '1.5rem' }}>
          The model never touches your<br />infrastructure alone.
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', marginBottom: '4rem', lineHeight: '1.6' }}>
          No hallucinations in detection. We use deterministic rules to find drift. LLMs only step in to draft the Terraform fix. You hold the keys.
        </p>
        
        <div className="safety-grid">
          <div className="safety-card-main">
            <div className="safety-icon-wrap accent">
              <Lock size={20} />
            </div>
            <h3 className="safety-title-main">A human always approves</h3>
            <p className="safety-desc">
              The model reasons and drafts. It does not act. Every single remediation waits for explicit sign off. Zero exceptions.
            </p>
          </div>
          
          <div className="safety-list-card">
            {guaranteeFeatures.map((feature) => (
              <FeatureListItem 
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                borderNone={feature.borderNone}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
