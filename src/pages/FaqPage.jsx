import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  HelpCircle, 
  Lock, 
  Plus, 
  Minus, 
  ChevronRight,
  Sparkles,
  Server,
  Key,
  Layers,
  ArrowRight
} from 'lucide-react';
import './FaqPage.css';

const faqItems = [
  {
    id: 'safe-ai',
    question: 'Is it safe to let an AI make changes to my infrastructure?',
    icon: ShieldCheck,
    answer: "We don't let AI make autonomous unmonitored changes. The agent watches your environment and drafts the fix (Terraform or API calls). But it never executes anything on its own without explicit human approval. You read the diff. You click approve. You retain absolute control.",
  },
  {
    id: 'wrong-plan',
    question: "What if the AI's plan is wrong?",
    icon: Sparkles,
    answer: "Every generated Infrastructure as Code fix undergoes dry-run simulation testing in isolated shadow environments. If a regression occurs or if you reject the plan, you can modify the HCL code or trigger a 1 click state rollback instantly.",
  },
  {
    id: 'credentials',
    question: 'Do you store our cloud credentials?',
    icon: Key,
    answer: "No standing credentials are ever stored. Securiq operates exclusively using short lived ephemeral session tokens and OIDC role-assumption. Access tokens expire immediately after execution.",
  },
  {
    id: 'environments',
    question: 'Which environments do you support?',
    icon: Server,
    answer: "Securiq seamlessly integrates across AWS (IAM, S3, EC2, EKS, Lambda), GitHub repositories, Terraform Cloud/OSS, Google Cloud Platform (GCP), and Microsoft Azure.",
  },
  {
    id: 'differentiation',
    question: 'How is this different from tools like Wiz or Orca?',
    icon: Layers,
    answer: "Traditional scanners like Wiz or Orca flood your security team with endless alerts and zero code fixes. Securiq not only detects vulnerabilities, but automatically drafts, simulates, and executes verified 1 click Terraform remediations.",
  },
  {
    id: 'access-timing',
    question: 'When can I get access?',
    icon: HelpCircle,
    answer: "We are currently onboarding selected design partners and engineering teams in our Private Early Access program. Click 'Get Early Access' to request priority onboarding for your organization.",
  },
];

export default function FaqPage({ onOpenModal }) {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const currentFaq = faqItems[activeFaqIndex];
  const IconComponent = currentFaq.icon;

  return (
    <div className="faq-page-wrapper">
      <div className="faq-page-container">
        
        {/* Header */}
        <motion.div 
          className="faq-page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="faq-pill-tag">QUESTIONS</span>
          <h1 className="faq-page-title">Things people usually ask.</h1>
          <p className="faq-page-subtitle">
            Everything you need to know about Securiq's autonomous remediation, security safeguards, and deployment options.
          </p>
        </motion.div>

        {/* 2-Column FAQ Layout (Left: Question List, Right: Active Answer Showcase) */}
        <div className="faq-split-layout">
          
          {/* Left Column: Interactive Question List */}
          <div className="faq-questions-list">
            {faqItems.map((item, idx) => {
              const isActive = activeFaqIndex === idx;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  className={`faq-question-card ${isActive ? 'active-question' : ''}`}
                  onClick={() => setActiveFaqIndex(idx)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                >
                  <span className="question-text">{item.question}</span>
                  <div className="question-icon-indicator">
                    {isActive ? <ChevronRight size={18} /> : <Plus size={18} />}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Active Answer Showcase Box */}
          <div className="faq-answer-showcase">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFaq.id}
                className="answer-card-box"
                initial={{ opacity: 0, scale: 0.97, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="answer-icon-badge">
                  <IconComponent size={24} color="#0f172a" />
                </div>

                <h2 className="answer-card-title">{currentFaq.question}</h2>

                <div className="answer-accent-line" />

                <p className="answer-card-text">{currentFaq.answer}</p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
