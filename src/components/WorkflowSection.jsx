import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Brain, 
  Code2, 
  FlaskConical, 
  Zap, 
  ShieldCheck, 
  RotateCcw,
  CheckCircle2,
  Activity,
  Layers,
  ArrowRight
} from 'lucide-react';
import './WorkflowSection.css';

const bentoSteps = [
  {
    id: 'observe',
    step: '01',
    title: 'Observe',
    subtitle: 'Telemetry & Asset Discovery',
    description: 'Continuous deep telemetry mapping AWS, GitHub, and multi-cloud asset relationships in real time.',
    icon: Eye,
    color: '#0284c7',
    gridClass: 'bento-span-1',
    visual: (
      <div className="bento-visual-pill light-cyan">
        <Activity size={14} />
        <span>LIVE TELEMETRY ACTIVE</span>
      </div>
    ),
  },
  {
    id: 'analyze',
    step: '02',
    title: 'Analyze',
    subtitle: 'Contextual AI Investigation',
    description: 'Context-aware LLM engines evaluate IAM permissions, blast radius, and code dependencies.',
    icon: Brain,
    color: '#7c3aed',
    gridClass: 'bento-span-1',
    visual: (
      <div className="bento-visual-pill light-purple">
        <Brain size={14} />
        <span>BLAST RADIUS: HIGH</span>
      </div>
    ),
  },
  {
    id: 'plan',
    step: '03',
    title: 'Plan',
    subtitle: 'IaC Terraform Synthesis',
    description: 'Synthesizes production-ready Terraform code compliant with your repository rules.',
    icon: Code2,
    color: '#2563eb',
    gridClass: 'bento-span-1',
    visual: (
      <div className="bento-light-code">
        <code>{`resource "aws_s3_bucket" "fix" {\n  block_public = true\n}`}</code>
      </div>
    ),
  },
  {
    id: 'simulate',
    step: '04',
    title: 'Simulate',
    subtitle: 'Shadow Sandbox Testing',
    description: 'Dry-runs IaC changes in isolated shadow environments to verify zero regressions before touching production.',
    icon: FlaskConical,
    color: '#d97706',
    gridClass: 'bento-span-2',
    visual: (
      <div className="bento-visual-pill light-amber">
        <Layers size={14} />
        <span>0 REGRESSIONS DETECTED</span>
      </div>
    ),
  },
  {
    id: 'execute',
    step: '05',
    title: 'Execute',
    subtitle: '1-Click Zero Standing Access',
    description: 'Applies approved patches via short-lived session tokens with 1-click human control.',
    icon: Zap,
    color: '#ca8a04',
    gridClass: 'bento-span-1',
    visual: (
      <div className="bento-visual-pill light-yellow">
        <Zap size={14} />
        <span>1-CLICK APPROVED</span>
      </div>
    ),
  },
  {
    id: 'verify',
    step: '06',
    title: 'Verify',
    subtitle: 'Synthetic Health Checks',
    description: 'Executes automated post-fix synthetic health checks to confirm 100% production uptime.',
    icon: ShieldCheck,
    color: '#059669',
    gridClass: 'bento-span-1',
    visual: (
      <div className="bento-visual-pill light-green">
        <CheckCircle2 size={14} />
        <span>24/24 CHECKS PASSED</span>
      </div>
    ),
  },
  {
    id: 'rollback',
    step: '07',
    title: 'Rollback',
    subtitle: 'State Safeguard & Recovery',
    description: 'Instant 1-click state rollback safeguards your production infrastructure against any unexpected anomaly.',
    icon: RotateCcw,
    color: '#e11d48',
    gridClass: 'bento-span-2',
    visual: (
      <div className="bento-visual-pill light-rose">
        <RotateCcw size={14} />
        <span>STATE LOCK READY</span>
      </div>
    ),
  },
];

export default function WorkflowSection() {
  return (
    <section className="workflow-section-white" id="workflow">
      <div className="workflow-container">
        
        {/* Centered Section Header */}
        <motion.div 
          className="workflow-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="workflow-pill-tag">END-TO-END AUTOMATION</span>
          <h2 className="workflow-title-dark">Workflow</h2>
          <p className="workflow-subtitle-dark">
            An autonomous 7-stage security pipeline designed to detect, remediate, and safeguard production continuously.
          </p>
        </motion.div>

        {/* Bento Grid Matrix (White Aesthetic) */}
        <div className="bento-white-matrix">
          {bentoSteps.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                className={`bento-card-white ${item.gridClass}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="bento-card-top">
                  <div className="bento-icon-badge" style={{ background: `${item.color}10`, borderColor: `${item.color}25` }}>
                    <IconComponent size={22} color={item.color} />
                  </div>
                  <span className="bento-step-num" style={{ color: item.color }}>STEP {item.step}</span>
                </div>

                <div className="bento-card-body">
                  <h3 className="bento-card-title">{item.title}</h3>
                  <span className="bento-card-subtitle">{item.subtitle}</span>
                  <p className="bento-card-desc">{item.description}</p>
                </div>

                <div className="bento-card-footer">
                  {item.visual}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
