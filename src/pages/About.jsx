import { useEffect, useRef } from 'react';
import { Rocket, Code2, Building2, Check, Circle, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BentoCard from '../components/ui/BentoCard';
import './About.css';

export default function About() {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll('.bento-card');
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <>
      <Navbar />
      <div className="about-page relative overflow-hidden">
        
        {/* Dynamic Background Orb */}
        <div className="about-bg-glow"></div>
        
        {/* Intro Section - The Manifesto */}
        <section className="about-section-wrapper pt-20">
          <div className="about-container manifesto-layout">
            <div className="manifesto-left">
              <div className="sticky-content">
                <p className="about-tag">THE REALITY</p>
                <h1 className="about-title-large">Why we're building Securiq</h1>
              </div>
            </div>
            
            <div className="manifesto-right">
              <div className="manifesto-block">
                <div className="manifesto-number">01</div>
                <p className="manifesto-text">
                  Startups hit a wall between 10 and 200 people. Real AWS infra. Real GitHub secrets. Zero security engineers.
                </p>
                <p className="manifesto-subtext">
                  Not because of negligence. You're just busy shipping. And enterprise tools built for 50 person security teams don't work when you're already wearing three hats.
                </p>
              </div>
              
              <div className="manifesto-block">
                <div className="manifesto-number">02</div>
                <p className="manifesto-text">
                  The failure mode is identical every time. A bucket goes public. A key gets committed. A security group opens to 0.0.0.0/0.
                </p>
                <p className="manifesto-subtext">
                  It sits there. Until it blows up. Because nobody has time to stare at a dashboard all day.
                </p>
              </div>

              <div className="manifesto-block">
                <div className="manifesto-number">03</div>
                <p className="manifesto-text">
                  We write the code to fix it.
                </p>
                <p className="manifesto-subtext">
                  Detect, reason, plan, approve, execute, verify. We only touch your infrastructure after you read the diff and click approve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Audience Section - Bento Box */}
        <section className="about-section-wrapper bento-section">
          <div className="audience-container">
            <div className="section-header-center">
              <p className="about-tag">WHO IT'S FOR</p>
              <h2 className="about-title">Built for teams without a security org</h2>
            </div>
            
            <div className="bento-grid" ref={gridRef}>
              
              <BentoCard 
                large
                className="group"
                icon={Rocket}
                iconColor="var(--accent)"
                title="Startups without a security hire"
                desc="Running real production infrastructure on AWS and GitHub, with engineering doing double duty as the security function. We automate the security engineering so you can focus on shipping."
              >
                <div className="bento-glow"></div>
                <Link to="/" className="bento-footer" style={{ textDecoration: 'none' }}>
                  <span>Learn more</span>
                  <ArrowRight size={16} className="bento-arrow" />
                </Link>
              </BentoCard>

              <BentoCard 
                className="group"
                icon={Code2}
                iconColor="var(--cyan)"
                title="Engineering teams"
                desc="Teams who want misconfigurations fixed quickly, but won't accept a tool that changes infrastructure without a human checking first."
              >
                <div className="bento-glow"></div>
              </BentoCard>

              <BentoCard 
                className="group"
                icon={Building2}
                iconColor="var(--green)"
                title="Raising & Selling"
                desc="Founders who need a credible security posture and audit trail to satisfy investor diligence or enterprise customer reviews."
              >
                <div className="bento-glow"></div>
              </BentoCard>

            </div>
          </div>
        </section>

        {/* Roadmap Section - Interactive Timeline */}
        <section className="about-section-wrapper timeline-section">
          <div className="roadmap-container">
            <div className="section-header-center">
              <p className="about-tag">ROADMAP</p>
              <h2 className="about-title">Starting focused. Built to extend.</h2>
              <p className="roadmap-subtitle">
                The same detect → plan → approve → execute loop is designed to plug in new providers without changing how you work.
              </p>
            </div>

            <div className="timeline-wrapper">
              
              <div className="timeline-item active">
                <div className="timeline-node">
                  <div className="node-core"></div>
                  <div className="node-pulse"></div>
                </div>
                <div className="timeline-content glass-panel">
                  <div className="timeline-badge badge-v1"><Check size={14} strokeWidth={3} /> V1</div>
                  <h4 className="timeline-title">AWS misconfiguration detection</h4>
                  <p className="timeline-desc">Full coverage for core AWS services, IAM, S3, EC2, and VPC configurations.</p>
                </div>
              </div>

              <div className="timeline-item active">
                <div className="timeline-node">
                  <div className="node-core"></div>
                  <div className="node-pulse"></div>
                </div>
                <div className="timeline-content glass-panel">
                  <div className="timeline-badge badge-v1"><Check size={14} strokeWidth={3} /> V1</div>
                  <h4 className="timeline-title">GitHub secret scanning</h4>
                  <p className="timeline-desc">Automated PR comments and remediation for exposed credentials.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-node node-future">
                  <Circle size={12} style={{ color: 'var(--text-muted)' }} />
                </div>
                <div className="timeline-content glass-panel muted-panel">
                  <div className="timeline-badge badge-next">NEXT</div>
                  <h4 className="timeline-title">Kubernetes & Docker</h4>
                  <p className="timeline-desc">Scanning manifests and images for security best practices.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-node node-future">
                  <Clock size={12} style={{ color: 'var(--text-muted)' }} />
                </div>
                <div className="timeline-content glass-panel muted-panel">
                  <div className="timeline-badge badge-later">LATER</div>
                  <h4 className="timeline-title">GCP, Azure & GitLab</h4>
                  <p className="timeline-desc">Expanding coverage to all major cloud providers and VCS platforms.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
