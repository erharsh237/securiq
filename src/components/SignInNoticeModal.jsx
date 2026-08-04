import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Sparkles, ArrowRight } from 'lucide-react';
import './SignInNoticeModal.css';

export default function SignInNoticeModal({ isOpen, onClose, onOpenEarlyAccess }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="signin-modal-overlay" onClick={onClose}>
        <motion.div 
          className="signin-modal-glass"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 25 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close Button */}
          <button className="signin-modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>

          {/* Animated Icon Badge */}
          <div className="signin-icon-wrapper">
            <motion.div 
              className="pulse-aura-ring"
              animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.15, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
            <div className="signin-icon-badge">
              <Lock size={30} color="#0f172a" />
            </div>
          </div>

          {/* Header & Body */}
          <div className="signin-modal-content">
            <div className="signin-pill-box">
              <Sparkles size={13} color="#0284c7" />
              <span>LAUNCH NOTICE</span>
            </div>
            
            <h2 className="signin-modal-title">Sign In Not Available Yet</h2>
            
            <p className="signin-modal-desc">
              The Securiq developer console and app dashboard are currently in private beta and will be enabled right after our public launch.
            </p>
          </div>

          {/* Footer CTA Buttons */}
          <div className="signin-modal-footer">
            <button className="btn-signin-cancel" onClick={onClose}>
              Dismiss
            </button>

            <button 
              className="btn-signin-primary"
              onClick={() => {
                onClose();
                if (onOpenEarlyAccess) onOpenEarlyAccess();
              }}
            >
              <span>Request Early Access</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
