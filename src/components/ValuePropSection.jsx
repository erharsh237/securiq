import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ValuePropSection.css';

export default function ValuePropSection({ onOpenModal }) {
  return (
    <section className="value-prop-section">
      <div className="value-prop-container">
        
        {/* Punchy Headline with Smooth Scroll Entrance */}
        <motion.h2 
          className="value-prop-headline"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          Find the drift. Fix the leak.<br />
          <span className="value-prop-highlight">Keep production running.</span>
        </motion.h2>

        {/* Supporting Body Text with Staggered Fade-Up */}
        <motion.p 
          className="value-prop-subtext"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          We map your cloud and code infrastructure flaws, draft the Terraform fix, and wait for your click.
        </motion.p>

        {/* Materialistic CTA Button with Staggered Entrance */}
        <motion.button 
          className="btn-materialistic" 
          onClick={onOpenModal}
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>Get Early Access</span>
          <ArrowRight size={18} className="btn-materialistic-arrow" />
        </motion.button>

      </div>
    </section>
  );
}
