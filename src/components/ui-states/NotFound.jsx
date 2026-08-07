import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';
import './NotFound.css';

export default function NotFound({ onGoHome }) {
  return (
    <div className="not-found-wrapper">
      <motion.div 
        className="not-found-card"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="not-found-badge-icon">
          <ShieldAlert size={36} color="#0284c7" />
        </div>

        <span className="not-found-pill">404 ERROR</span>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-subtitle">
          The security resource or link you were looking for doesn't exist or has been moved.
        </p>

        <button aria-label="Securiq Home" className="btn-not-found-home" onClick={onGoHome}>
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
      </motion.div>
    </div>
  );
}
