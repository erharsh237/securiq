import { useRef, useState, useEffect, useContext } from 'react';
import useThreeScene from '../hooks/useThreeScene';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import TrustArchitectureSection from '../components/sections/TrustArchitectureSection';
import UseCasesSection from '../components/sections/UseCasesSection';
import RemediationWorkflowSection from '../components/sections/RemediationWorkflowSection';
import SecurityGuaranteesSection from '../components/sections/SecurityGuaranteesSection';
import WaitlistSection from '../components/sections/WaitlistSection';
import Footer from '../components/layout/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Infinity } from 'lucide-react';
import { ThemeContext } from '../App';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [flashDone, setFlashDone] = useState(false);
  const { theme } = useContext(ThemeContext);

  useThreeScene(canvasRef, theme);

  useEffect(() => {
    if (window.location.hash === '#waitlist') {
      setTimeout(() => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setFlashDone(true);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!flashDone) return;

    gsap.to(canvasRef.current, { opacity: 1, duration: 1.5, ease: "power2.inOut" });

    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-tag, .hero-title, .hero-subtitle, .hero-cta, .hero-note',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );

      const sections = gsap.utils.toArray('section');
      sections.forEach((sec) => {
        gsap.fromTo(sec.querySelectorAll('.section-number, .section-title'),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 80%"
            }
          }
        );
      });

      gsap.fromTo('.timeline-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.timeline-container',
            start: "top 75%"
          }
        }
      );

      gsap.fromTo('.bento-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.bento-grid, .section-safety .section-inner',
            start: "top 80%"
          }
        }
      );
      ScrollTrigger.refresh();

    }, containerRef);

    return () => ctx.revert();
  }, [flashDone]);

  return (
    <div ref={containerRef}>
      <canvas id="three-canvas" ref={canvasRef} style={{ opacity: 0 }} />
      
      <Navbar />

      <main>
        {!flashDone && (
          <div className="hero-flash-container">
            <div className="infinity-wrapper flash-animation">
              <img src={theme === 'light' ? '/logo-light.png' : '/logo-dark.png'} alt="SECURIQ" className="logo-pulse-anim" style={{ height: '250px', width: 'auto', maxWidth: '90vw' }} />
            </div>
          </div>
        )}

        <div style={{ opacity: flashDone ? 1 : 0, transition: 'opacity 0.5s' }}>
          <HeroSection />
        </div>
        
        <TrustArchitectureSection />
        <RemediationWorkflowSection />
        <UseCasesSection />
        <SecurityGuaranteesSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
