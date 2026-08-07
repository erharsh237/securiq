import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import gsap from 'gsap';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Harsh',
    title: 'FOUNDER, CEO',
    initial: 'H',
    color: 'var(--green)',
    quote: "Security shouldn't be a tab nobody opens.",
    desc: "Sets the product and company direction, obsessed with making Securiq something teams actually want to open, not just another dashboard that gets ignored."
  },
  {
    id: 2,
    name: 'Kanishka',
    title: 'CO-FOUNDER, CTO',
    initial: 'K',
    color: 'var(--accent)',
    quote: "The model should draft the fix. You should always pull the trigger.",
    desc: "Designs the AI systems and architecture behind detection, reasoning, and remediation, maintaining human approval as a hard boundary."
  },
  {
    id: 3,
    name: 'Shruti',
    title: 'CO-FOUNDER, COO',
    initial: 'S',
    color: 'var(--cyan)',
    quote: "Every early team we talk to shapes what we build next.",
    desc: "Runs operations and customer relationships, making sure the roadmap stays grounded in what teams with early access actually need."
  }
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.team-header', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );
      
      gsap.fromTo('.team-carousel-wrapper', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { opacity: 0, scale: 0.98 }, 
        { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const activeMember = teamMembers[currentIndex];

  return (
    <>
      <Navbar />
      <div className="team-page" ref={containerRef}>
        <div className="team-content">
          
          <div className="team-header">
            <p className="team-tag">WHO'S BUILDING THIS</p>
            <h1 className="team-title">Meet the team</h1>
            <p className="team-subtitle">
              We're a small team building Securiq in the open. Here's who's behind it.
            </p>
          </div>

          <div className="team-carousel-wrapper">
            {/* The Main Card */}
            <div 
              className="team-card" 
              ref={cardRef}
              style={{
                '--card-glow': activeMember.color
              }}
            >
              <div className="team-card-inner">
                <div 
                  className="team-avatar-large"
                  style={{ backgroundColor: activeMember.color }}
                >
                  {activeMember.initial}
                </div>
                
                <div className="team-details">
                  <div className="team-name-row">
                    <h2>{activeMember.name}</h2>
                    <span className="team-role-tag" style={{ color: activeMember.color, borderColor: `${activeMember.color}40`, backgroundColor: `${activeMember.color}15` }}>
                      {activeMember.title}
                    </span>
                  </div>
                  
                  <div className="team-quote">
                    <Quote className="quote-icon" size={24} />
                    <p>{activeMember.quote}</p>
                  </div>
                  
                  <p className="team-desc">
                    {activeMember.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="carousel-controls">
              <button className="carousel-arrow" onClick={handlePrev} aria-label="Previous team member">
                <ChevronLeft size={20} />
              </button>
              
              <div className="carousel-indicators">
                {teamMembers.map((member, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <div key={member.id} className="indicator-group">
                      <button aria-label="Action button"
                        className={`indicator-btn ${isActive ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                          backgroundColor: isActive ? member.color : 'transparent',
                          color: isActive ? 'white' : 'var(--text-muted)'
                        }}
                      >
                        {member.initial}
                      </button>
                      <div className={`indicator-dot ${isActive ? 'active' : ''}`}></div>
                    </div>
                  );
                })}
              </div>

              <button className="carousel-arrow" onClick={handleNext} aria-label="Next team member">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}
