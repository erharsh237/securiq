import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Brain, 
  Code2, 
  Zap, 
  ShieldCheck, 
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  Terminal,
  AlertCircle,
  FileCode,
  Shield
} from 'lucide-react';
import './TimelineSection.css';

const steps = [
  {
    id: 'detect',
    number: '01',
    title: 'Detect',
    tag: 'CONTINUOUS SCANNING',
    subtitle: 'Real-time Drift Detection',
    description: 'Continuous monitoring across AWS, GitHub, and multi-cloud accounts to catch active drifts and misconfigurations instantly.',
    snippetHeader: 'detect.log',
    snippetCode: 'CRITICAL: s3-bucket-public-read in production-us-east-1',
    icon: Search,
    color: '#38bdf8',
  },
  {
    id: 'understand',
    number: '02',
    title: 'Understand',
    tag: 'AI CONTEXT ENGINE',
    subtitle: 'Blast-Radius Analysis',
    description: 'AI contextualizes vulnerability severity, code dependencies, and IAM permissions to eliminate scanner noise.',
    snippetHeader: 'analysis.json',
    snippetCode: '{ "blastRadius": "High", "falsePositive": false, "impact": "Public Data" }',
    icon: Brain,
    color: '#c084fc',
  },
  {
    id: 'plan',
    number: '03',
    title: 'Plan',
    tag: 'TERRAFORM SYNTHESIS',
    subtitle: 'Automated IaC Fixes',
    description: 'Generates ready-to-merge, production-safe Infrastructure-as-Code (Terraform) remediations aligned with your repository rules.',
    snippetHeader: 'remediation.tf',
    snippetCode: 'resource "aws_s3_bucket_public_access_block" "fix" {\n  block_public_acls = true\n}',
    icon: Code2,
    color: '#60a5fa',
  },
  {
    id: 'execute',
    number: '04',
    title: 'Execute',
    tag: 'EPHEMERAL EXECUTION',
    subtitle: '1-Click Zero Standing Access',
    description: 'Executes the approved patch securely using short-lived credentials, eliminating permanent admin access.',
    snippetHeader: 'execution.sh',
    snippetCode: 'SUCCESS: Applied 1 IaC change via ephemeral session token',
    icon: Zap,
    color: '#facc15',
  },
  {
    id: 'verify',
    number: '05',
    title: 'Verify',
    tag: 'HEALTH VERIFICATION',
    subtitle: 'Automated Synthetic Health',
    description: 'Performs instant post-remediation health checks to confirm vulnerability elimination while keeping production 100% operational.',
    snippetHeader: 'health_check.py',
    snippetCode: 'STATUS 200: All synthetic tests passed. Production healthy.',
    icon: ShieldCheck,
    color: '#34d399',
  },
  {
    id: 'rollback',
    number: '06',
    title: 'Rollback',
    tag: '1-CLICK SAFEGUARD',
    subtitle: 'Instant State Recovery',
    description: 'One-click state rollback safeguards your production infrastructure with zero data loss if any anomaly is detected.',
    snippetHeader: 'rollback.lock',
    snippetCode: 'READY: 1-click snapshot rollback locked & available',
    icon: RotateCcw,
    color: '#f43f5e',
  },
];

export default function TimelineSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="timeline-section" id="timeline">
      <div className="timeline-container">
        
        {/* Header & Problem Statement */}
        <motion.div 
          className="timeline-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="timeline-pill-tag">THE LIFECYCLE</span>
          <h2 className="timeline-main-title">Securiq, Reimagined</h2>
          <p className="timeline-problem-text">
            Traditional scanners flood engineering teams with endless alerts, zero context, and no actionable fixes. 
            SecurIQ automates the entire remediation lifecycle from instant detection to verified 1-click rollback.
          </p>
        </motion.div>

        {/* Redesigned Pipeline Grid & Interactive Showcase */}
        <div className="pipeline-grid-layout">
          
          {/* Left Column: Interactive Stepper Pipeline */}
          <div className="pipeline-stepper">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isActive = activeStep === idx;

              return (
                <motion.div 
                  key={step.id}
                  className={`pipeline-step-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <div 
                    className="step-badge-indicator"
                    style={{ 
                      borderColor: isActive ? step.color : 'rgba(255,255,255,0.1)',
                      background: isActive ? `${step.color}1a` : '#0d1322'
                    }}
                  >
                    <IconComponent size={20} color={isActive ? step.color : '#64748b'} />
                  </div>

                  <div className="step-text-wrapper">
                    <div className="step-meta">
                      <span className="step-number-tag" style={{ color: step.color }}>{step.number}</span>
                      <span className="step-tag-pill">{step.tag}</span>
                    </div>
                    <h3 className="step-title-name">{step.title}</h3>
                  </div>

                  {isActive && (
                    <motion.div 
                      layoutId="activePointer"
                      className="active-indicator-bar" 
                      style={{ background: step.color }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Detailed Card Showcase */}
          <div className="pipeline-showcase-panel">
            <AnimatePresence mode="wait">
              {(() => {
                const current = steps[activeStep];
                const IconComp = current.icon;

                return (
                  <motion.div
                    key={current.id}
                    className="showcase-card-box"
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="showcase-card-header">
                      <div className="showcase-badge-icon" style={{ background: `${current.color}1a`, borderColor: `${current.color}40` }}>
                        <IconComp size={26} color={current.color} />
                      </div>
                      <div>
                        <span className="showcase-step-num" style={{ color: current.color }}>STEP {current.number} OF 06</span>
                        <h3 className="showcase-title">{current.title}</h3>
                      </div>
                    </div>

                    <p className="showcase-description">{current.description}</p>

                    {/* Interactive Code Terminal Snippet */}
                    <div className="showcase-terminal-box">
                      <div className="terminal-top">
                        <div className="terminal-dots">
                          <span className="dot dot-red" />
                          <span className="dot dot-yellow" />
                          <span className="dot dot-green" />
                        </div>
                        <span className="terminal-filename">{current.snippetHeader}</span>
                      </div>
                      <pre className="terminal-code">
                        <code>{current.snippetCode}</code>
                      </pre>
                    </div>

                    {/* Stepper Navigation */}
                    <div className="showcase-footer-nav">
                      <button 
                        disabled={activeStep === 0} 
                        onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                        className="btn-step-nav"
                      >
                        Previous
                      </button>

                      <div className="step-dots-group">
                        {steps.map((_, i) => (
                          <span 
                            key={i} 
                            className={`dot-indicator ${i === activeStep ? 'active' : ''}`} 
                            style={{ background: i === activeStep ? current.color : 'rgba(255,255,255,0.15)' }}
                            onClick={() => setActiveStep(i)}
                          />
                        ))}
                      </div>

                      <button 
                        disabled={activeStep === steps.length - 1} 
                        onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                        className="btn-step-nav"
                      >
                        Next
                      </button>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
