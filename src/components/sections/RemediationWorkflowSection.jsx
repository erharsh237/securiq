import { Target, Brain, ClipboardList, UserCheck, Zap, ShieldCheck } from 'lucide-react';
import TimelineStep from '../ui/TimelineStep';

const remediationSteps = [
  { id: '01', title: 'Detect', icon: Target, desc: 'We ingest native findings from Security Hub, Config, and secret scanners.', color: 'var(--text-primary)' },
  { id: '02', title: 'Reason', icon: Brain, desc: "We pinpoint the exact Terraform lines causing the drift.", color: 'var(--text-primary)' },
  { id: '03', title: 'Plan', icon: ClipboardList, desc: 'We draft a pull request to fix it. Review the diff before anything happens.', color: 'var(--text-primary)' },
  { id: '04', title: 'Approve', icon: UserCheck, desc: 'Nothing executes until you click go. Period.', color: '#EF4444' },
  { id: '05', title: 'Execute', icon: Zap, desc: 'We apply the fix to the live resource via temporary credentials.', color: 'var(--text-primary)' },
  { id: '06', title: 'Verify', icon: ShieldCheck, desc: 'We ping the service. Broken? Instant rollback.', color: 'var(--text-primary)' },
];

export default function RemediationWorkflowSection() {
  return (
    <section className="section-how-it-works">
      <div className="section-inner" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'left' }}>
        <p className="timeline-tag">HOW IT WORKS</p>
        <h2 className="timeline-main-title">
          One loop, every time. No shortcuts,<br />
          no silent changes.
        </h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-steps">
            {remediationSteps.map((step, stepIndex) => (
              <TimelineStep 
                key={stepIndex}
                id={step.id}
                title={step.title}
                icon={step.icon}
                description={step.desc}
                color={step.color}
              />
            ))}
          </div>
        </div>
        
        <div className="timeline-footer">
          <p>Verification loops back into detection. Every incident that gets fixed becomes a check against regressions later.</p>
        </div>
      </div>
    </section>
  );
}
