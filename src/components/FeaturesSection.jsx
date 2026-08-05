import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Brain, 
  ShieldAlert, 
  ShieldCheck, 
  RotateCcw, 
  Cloud,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './FeaturesSection.css';

const features = [
  {
    id: 'feature-card-autonomous-remediation',
    icon: Bot,
    title: 'Autonomous Remediation',
    description: 'Securiq automatically drafts, tests, and prepares Terraform code to fix infrastructure drifts with 1-click human approval.',
    badge: 'AUTOMATED',
    color: '#0055ff',
  },
  {
    id: 'feature-card-ai-investigation',
    icon: Brain,
    title: 'AI Investigation Engine',
    description: 'Context-aware LLM security engines analyze code dependencies, IAM permissions, and blast-radius to eliminate scanner noise.',
    badge: 'INTELLIGENT',
    color: '#8b5cf6',
  },
  {
    id: 'feature-card-risk-prioritization',
    icon: ShieldAlert,
    title: 'Risk Prioritization',
    description: 'Ranks threats by true exploitation likelihood and business impact, so your engineering team focuses on what actually matters.',
    badge: 'PRIORITY',
    color: '#f59e0b',
  },
  {
    id: 'feature-card-synthetic-verification',
    icon: ShieldCheck,
    title: 'Verification Engine',
    description: 'Runs automated synthetic post-fix health checks to verify that vulnerabilities are patched without breaking production.',
    badge: 'VERIFIED',
    color: '#10b981',
  },
  {
    id: 'feature-card-rollback-protection',
    icon: RotateCcw,
    title: 'Rollback Safeguard',
    description: 'Instant 1-click state rollback safeguards your infrastructure with zero data loss if any deployment anomaly occurs.',
    badge: 'SAFEGUARD',
    color: '#ef4444',
  },
  {
    id: 'feature-card-cloud-security',
    icon: Cloud,
    title: 'Cloud Security Matrix',
    description: 'Unified visibility and protection across AWS, GitHub, GCP, Azure, and multi-cloud code repositories with zero standing access.',
    badge: 'MULTI-CLOUD',
    color: '#0284c7',
  },
];

export default function FeaturesSection() {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 380;
    const container = scrollContainerRef.current;

    if (direction === 'left') {
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    } else {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };

  // Auto-scroll every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleScroll('right');
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        
        {/* Centered Header */}
        <div className="features-header-row">
          <motion.div 
            className="features-header-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="features-pill-tag">CAPABILITIES</span>
            <h2 className="features-title">Features</h2>
          </motion.div>
        </div>

        {/* Carousel Wrapper with Left & Right Flanking Navigation Buttons */}
        <div 
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button 
            type="button"
            className="btn-carousel-nav nav-left" 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleScroll('left');
            }} 
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Horizontal Carousel Track */}
          <div className="carousel-track" ref={scrollContainerRef}>
            {features.map((item) => {
              const IconComponent = item.icon;

              return (
                <div key={item.title} id={item.id} className="feature-card carousel-card">
                  <div className="card-header">
                    <div 
                      className="feature-icon-badge"
                      style={{ 
                        background: `${item.color}12`,
                        borderColor: `${item.color}30`
                      }}
                    >
                      <IconComponent size={24} color={item.color} />
                    </div>
                    <span className="card-badge" style={{ color: item.color, background: `${item.color}10` }}>
                      {item.badge}
                    </span>
                  </div>

                  <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button 
            type="button"
            className="btn-carousel-nav nav-right" 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleScroll('right');
            }} 
            aria-label="Scroll right"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  );
}
