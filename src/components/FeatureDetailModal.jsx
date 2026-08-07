import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import './FeatureDetailModal.css';

export default function FeatureDetailModal({ isOpen, onClose, featureData, onOpenEarlyAccess }) {
  if (!isOpen || !featureData) return null;

  const IconComponent = featureData.icon;

  return (
    <AnimatePresence>
      <div className="feature-modal-overlay" onClick={onClose}>
        <motion.div 
          className="feature-modal-glass"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close Button */}
          <button className="feature-modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>

          {/* Header */}
          <div className="feature-modal-header">
            {IconComponent && (
              <div 
                className="feature-modal-icon-badge"
                style={{ 
                  background: `${featureData.color || '#0f172a'}12`,
                  borderColor: `${featureData.color || '#0f172a'}30`
                }}
              >
                <IconComponent size={26} color={featureData.color || '#0f172a'} />
              </div>
            )}
            
            <div className="feature-header-titles">
              {featureData.badge && (
                <span 
                  className="feature-modal-badge"
                  style={{ 
                    color: featureData.color || '#0f172a', 
                    background: `${featureData.color || '#0f172a'}12` 
                  }}
                >
                  {featureData.badge}
                </span>
              )}
              <h2 className="feature-modal-title">{featureData.title}</h2>
            </div>
          </div>

          {/* Description */}
          <p className="feature-modal-desc">
            {featureData.description}
          </p>

          {/* Bullet Point Highlights */}
          {featureData.highlights && featureData.highlights.length > 0 && (
            <div className="feature-highlights-box">
              <h4 className="highlights-heading">Key Capabilities</h4>
              <ul className="highlights-list">
                {featureData.highlights.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} color="#10b981" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Footer */}
          <div className="feature-modal-footer">
            <button aria-label="Close" className="btn-feature-close" onClick={onClose}>
              Close
            </button>

            {onOpenEarlyAccess && (
              <button aria-label="Action button" 
                className="btn-feature-cta"
                onClick={() => {
                  onClose();
                  onOpenEarlyAccess();
                }}
              >
                <span>Get Early Access</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
