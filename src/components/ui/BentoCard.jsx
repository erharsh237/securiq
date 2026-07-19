import React from 'react';

export default function BentoCard({ icon: Icon, iconColor, title, desc, large, children, className = '' }) {
  return (
    <div className={`glass-card ${large ? 'large' : ''} ${className}`}>
      <div>
        {Icon && (
          <div className={`glass-icon-wrap ${large ? 'large-icon' : ''}`}>
            <Icon size={large ? 20 : 18} style={iconColor ? { color: iconColor } : {}} />
          </div>
        )}
        {title && <h3 className={`glass-title ${large ? 'large-title' : ''}`}>{title}</h3>}
        {desc && <p className="glass-desc">{desc}</p>}
      </div>
      {children}
    </div>
  );
}
