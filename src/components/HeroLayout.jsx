import React, { useState, useEffect } from 'react';
import AnimatedBeamNetwork from './AnimatedBeamNetwork';
import './HeroLayout.css';

const TypewriterText = ({ text, speed = 80 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <h2 className="typewriter-title">
      {displayText}
      <span className="typewriter-cursor">|</span>
    </h2>
  );
};

export default function HeroLayout() {
  return (
    <div className="hero-4-container">
      {/* 4 Quadrants Grid Overlay */}
      <div className="hero-quadrants-grid">
        
        {/* Top Left Quadrant: Badge + Typewriter Tagline */}
        <div className="quadrant quadrant-top-left">
          <div className="quadrant-content">
            <span className="tag-badge">NEXT-GEN DEFENSE</span>
            <TypewriterText text="YOUR AI SECURITY ENGINEER" />
          </div>
        </div>

        {/* Top Right Quadrant */}
        <div className="quadrant quadrant-top-right">
          {/* Reserved */}
        </div>

        {/* Bottom Left Quadrant */}
        <div className="quadrant quadrant-bottom-left">
          {/* Reserved */}
        </div>

        {/* Bottom Right Quadrant */}
        <div className="quadrant quadrant-bottom-right">
          {/* Reserved */}
        </div>
      </div>

      {/* Beam Network Layer */}
      <div className="hero-beam-layer">
        <AnimatedBeamNetwork />
      </div>
    </div>
  );
}
