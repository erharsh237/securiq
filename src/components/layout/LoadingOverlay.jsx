import { useState, useEffect } from 'react';

export default function LoadingOverlay({ isLoaded }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setProgress(100);
      const t = setTimeout(() => setHidden(true), 500);
      return () => clearTimeout(t);
    }
    
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 15;
        return next > 90 ? 90 : next;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <div id="loader-overlay" className={hidden ? 'hidden' : ''}>
      <div className="loader-content">
        <div className="loader-logo">SECURI<span>Q</span></div>
        <div className="loader-bar-track">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="loader-text">Initializing...</p>
      </div>
    </div>
  );
}
