import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Target, 
  Lock, 
  Code2, 
  ShieldCheck, 
  Activity,
  BrainCircuit,
  Cpu,
  Zap,
  Server
} from 'lucide-react';
import './WorkflowSection.css';

const enginePillars = [
  {
    id: 'qwen-model',
    title: 'Fine Tuned Qwen 2.5B Coder',
    subtitle: 'Specialized AI Code Model',
    description: 'Powered by a fine tuned Qwen 2.5B-Coder-Instruct model trained on cloud security standards for precise HCL patch generation.',
    icon: Cpu,
    color: '#2563eb',
    gridClass: 'bento-span-2',
    badgeText: 'QWEN 2.5B-CODER-INSTRUCT',
  },
  {
    id: 'reasoning-engine',
    title: 'Chain of Thought Reasoning',
    subtitle: 'Deep Analysis Before Fixes',
    description: 'Performs multi-step reasoning before generating code, evaluating blast radius and dependency safety prior to patch execution.',
    icon: BrainCircuit,
    color: '#7c3aed',
    gridClass: 'bento-span-1',
    badgeText: 'REASONING BEFORE FIXING',
  },
  {
    id: 'approval-states',
    title: 'Autonomous & Semi-Autonomous',
    subtitle: 'Flexible Approval Governance',
    description: 'Supports full auto-remediation for low risk drifts or semi-autonomous human in the loop 1 click approvals for critical assets.',
    icon: Zap,
    color: '#059669',
    gridClass: 'bento-span-1',
    badgeText: 'AUTONOMOUS / SEMI-AUTONOMOUS',
  },
  {
    id: 'topology',
    title: 'Agentless Cloud Topology',
    subtitle: 'Multi Cloud Asset Discovery',
    description: 'Discovers, inventories, and maps relationships across AWS, GCP, Azure, and GitHub without installing server agents.',
    icon: Cloud,
    color: '#0284c7',
    gridClass: 'bento-span-1',
    badgeText: 'MULTI-CLOUD DISCOVERY',
  },
  {
    id: 'zsa',
    title: 'Zero Standing Access',
    subtitle: 'Short Lived OIDC Tokens',
    description: 'Replaces dangerous persistent root keys with temporary, scoped session credentials generated dynamically per approval.',
    icon: Lock,
    color: '#d97706',
    gridClass: 'bento-span-1',
    badgeText: 'SHORT-LIVED TOKENS',
  },
  {
    id: 'audit-ledger',
    title: 'SOC 2 Audit Readiness',
    subtitle: 'Immutable Governance Trail',
    description: 'Logs every vulnerability discovery, AI reasoning trace, human approval, and Git PR to support your SOC 2 audit workflow.',
    icon: Activity,
    color: '#e11d48',
    gridClass: 'bento-span-3',
    badgeText: 'AUDIT ALIGNMENT',
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
          <span className="workflow-pill-tag">ENGINE ARCHITECTURE</span>
          <h2 className="workflow-title-dark">Built for Modern Cloud Defense</h2>
          <p className="workflow-subtitle-dark">
            Securiq combines a fine tuned Qwen 2.5B Coder, deep chain of thought reasoning, and flexible autonomous/semi-autonomous approval states.
          </p>
        </motion.div>

        {/* Bento Grid Matrix (Engine Architecture) */}
        <div className="bento-white-matrix">
          {enginePillars.map((item, idx) => {
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
                  <span className="bento-step-num" style={{ color: item.color, fontSize: '0.68rem', letterSpacing: '0.08em' }}>
                    {item.badgeText}
                  </span>
                </div>

                <div className="bento-card-body">
                  <h3 className="bento-card-title">{item.title}</h3>
                  <span className="bento-card-subtitle">{item.subtitle}</span>
                  <p className="bento-card-desc">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Tech Specifications Bar (Updated with Core MVP Specs) */}
        <div className="engine-tech-spec-bar">
          <div className="tech-spec-item">
            <span className="spec-label">AI CODE MODEL</span>
            <span className="spec-value">Fine Tuned Qwen 2.5B-Coder-Instruct</span>
          </div>
          <div className="tech-spec-item">
            <span className="spec-label">APPROVAL MODES</span>
            <span className="spec-value">Autonomous & Semi-Autonomous</span>
          </div>
          <div className="tech-spec-item">
            <span className="spec-label">REASONING ENGINE</span>
            <span className="spec-value">Chain of Thought Before Fix</span>
          </div>
          <div className="tech-spec-item">
            <span className="spec-label">IAC ENGINE</span>
            <span className="spec-value">HCL / Terraform / OpenTofu</span>
          </div>
        </div>

      </div>
    </section>
  );
}
