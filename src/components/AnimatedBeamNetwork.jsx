import React from 'react';
import { User, Cloud, Server } from 'lucide-react';
import './AnimatedBeamNetwork.css';

const GithubIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#0f172a" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function AnimatedBeamNetwork() {
  return (
    <div className="beam-network-container">
      {/* preserveAspectRatio="none" ensures paths stretch 1:1 to exact node locations */}
      <svg className="beam-svg" viewBox="0 0 800 400" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Blue Electric Gradient */}
          <linearGradient id="blueBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0055ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d2ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#0055ff" stopOpacity="0" />
          </linearGradient>

          {/* Glow Filter for Lightning effect */}
          <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- BASE STATIC PATHS --- */}
        {/* User (120, 200) -> Square-S (400, 200) */}
        <path d="M 120 200 C 240 200, 280 200, 400 200" className="base-path" />
        
        {/* Square-S (400, 200) -> AWS (680, 80) */}
        <path d="M 400 200 C 520 200, 560 80, 680 80" className="base-path" />
        
        {/* Square-S (400, 200) -> GitHub (680, 200) */}
        <path d="M 400 200 C 520 200, 560 200, 680 200" className="base-path" />
        
        {/* Square-S (400, 200) -> Azure (680, 320) */}
        <path d="M 400 200 C 520 200, 560 320, 680 320" className="base-path" />


        {/* --- ANIMATED LIGHTNING BLUE BEAMS --- */}
        {/* Beam 1: User -> Square-S */}
        <path 
          d="M 120 200 C 240 200, 280 200, 400 200" 
          className="pulse-beam beam-delay-1" 
        />

        {/* Beam 2: Square-S -> AWS */}
        <path 
          d="M 400 200 C 520 200, 560 80, 680 80" 
          className="pulse-beam beam-delay-2" 
        />

        {/* Beam 3: Square-S -> GitHub */}
        <path 
          d="M 400 200 C 520 200, 560 200, 680 200" 
          className="pulse-beam beam-delay-3" 
        />

        {/* Beam 4: Square-S -> Azure */}
        <path 
          d="M 400 200 C 520 200, 560 320, 680 320" 
          className="pulse-beam beam-delay-4" 
        />
      </svg>

      {/* --- NODES (HTML OVERLAY) --- */}
      {/* Left Node: User */}
      <div className="network-node node-user" style={{ left: '15%', top: '50%' }}>
        <div className="node-circle">
          <User size={28} color="#1e293b" />
        </div>
      </div>

      {/* Center Node: Square-S (Securiq) */}
      <div className="network-node node-center" style={{ left: '50%', top: '50%' }}>
        <div className="node-circle center-circle">
          <img src="/logo.png" alt="Securiq" width="40" height="40" loading="lazy" decoding="async" className="node-logo-img" />
        </div>
      </div>

      {/* Right Node 1: AWS */}
      <div className="network-node node-cloud" style={{ left: '85%', top: '20%' }}>
        <div className="node-circle">
          <Cloud size={28} color="#f59e0b" />
        </div>
        <span className="node-label">AWS</span>
      </div>

      {/* Right Node 2: GitHub */}
      <div className="network-node node-cloud" style={{ left: '85%', top: '50%' }}>
        <div className="node-circle">
          <GithubIcon />
        </div>
        <span className="node-label">GitHub</span>
      </div>

      {/* Right Node 3: Azure */}
      <div className="network-node node-cloud" style={{ left: '85%', top: '80%' }}>
        <div className="node-circle">
          <Server size={28} color="#0284c7" />
        </div>
        <span className="node-label">Azure</span>
      </div>
    </div>
  );
}
