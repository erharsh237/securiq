import { Target, Sparkles, GitBranch, Bell, Globe, Layers, Puzzle } from 'lucide-react';
import BentoCard from '../ui/BentoCard';

export default function UseCasesSection() {
  return (
    <section className="section-use-cases">
      <div className="section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="bento-main-title">Not just alerts. Fixes, with your sign-off.</h2>
        
        <div className="bento-grid">
          {/* Card 1 (Large) */}
          <BentoCard 
            icon={Target}
            large
            title="Always on. Not just a weekly scan."
            desc="Continuous coverage of AWS (IAM, S3, Security Groups, Secrets Manager) and GitHub (secret scanning). We catch drift the second it happens."
          >
            <div className="bento-badge">ALWAYS ON</div>
          </BentoCard>

          {/* Card 2 */}
          <BentoCard 
            icon={Sparkles}
            title="No jargon."
            desc="If a bucket is public, we say 'Your S3 bucket is public'. You don't have to decode a CVSS score to figure out what broke."
          />

          {/* Card 3 */}
          <BentoCard 
            icon={GitBranch}
            title="We draft the fix."
            desc="You read the Terraform diff line by line. Nothing executes until you click approve."
          />

          {/* Card 4 */}
          <BentoCard 
            icon={Bell}
            title="Routed to Slack."
            desc="Or email. Because you definitely don't need another security dashboard to check every morning."
          />

          {/* Card 5 */}
          <BentoCard 
            icon={Globe}
            title="AWS and GitHub side by side."
            desc="Switching contexts between infrastructure and code alerts is a waste of time. They live together here."
          />

          {/* Card 6 */}
          <BentoCard 
            icon={Layers}
            title="We don't want your code."
            desc="Zero trust by default. We only request metadata access. We never store your source code."
          />

          {/* Card 7 */}
          <BentoCard 
            icon={Puzzle}
            title="Built to extend."
            desc="Incidents carry provider metadata from day one. When we add GCP or Kubernetes, it plugs right into the same engine."
          />
        </div>
      </div>
    </section>
  );
}
