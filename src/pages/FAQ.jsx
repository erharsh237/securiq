import { useState, useRef, useEffect } from 'react';
import { Plus, Minus, ShieldCheck, Zap, Lock, Cloud, Cpu, Clock } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import gsap from 'gsap';
import './FAQ.css';

const faqs = [
  {
    id: 1,
    icon: <ShieldCheck size={24} />,
    question: "Is it safe to let an AI make changes to my infrastructure?",
    answer: "We don't. The agent watches your environment and drafts the fix (Terraform or API calls). But it never executes anything on its own. You read the diff. You click approve. You retain absolute control."
  },
  {
    id: 2,
    icon: <Zap size={24} />,
    question: "What if the AI's plan is wrong?",
    answer: "You reject it. Every plan comes with a simulation output and a clear explanation in plain English. If it's wrong, you discard it, tweak the code yourself, or tell the agent to try again."
  },
  {
    id: 3,
    icon: <Lock size={24} />,
    question: "Do you store our cloud credentials?",
    answer: "Never. We use AWS IAM roles across accounts. Scoped OAuth apps for GitHub. We don't want your static keys. You can revoke our access with one click in your own console."
  },
  {
    id: 4,
    icon: <Cloud size={24} />,
    question: "Which environments do you support?",
    answer: "We currently integrate with AWS and GitHub. Support for GCP, Azure, and GitLab environments is in active development and rolling out later this year."
  },
  {
    id: 5,
    icon: <Cpu size={24} />,
    question: "How is this different from tools like Wiz or Orca?",
    answer: "CSPMs like Wiz or Orca are great at generating alerts, but they leave your team to figure out the fix. Securiq picks up where they stop. We don't just alert you. We write the code to fix it."
  },
  {
    id: 6,
    icon: <Clock size={24} />,
    question: "When can I get access?",
    answer: "We are getting ready for launch. We're currently working with a handful of early teams to shape the core engine. Drop your email on the waitlist and we'll ping you when a spot opens up."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const answerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-header', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );
      
      gsap.fromTo('.faq-question-item', 
        { x: -30, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
      );

      gsap.fromTo('.faq-answer-panel', 
        { x: 30, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.5 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (answerRef.current) {
      gsap.fromTo(answerRef.current, 
        { opacity: 0, y: 10 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [activeIndex]);

  const activeFAQ = faqs[activeIndex];

  return (
    <>
      <Navbar />
      <div className="faq-page" ref={containerRef}>
        <div className="faq-content">
          
          <div className="faq-header">
            <p className="faq-tag">QUESTIONS</p>
            <h1 className="faq-title">Things people usually ask.</h1>
          </div>

          <div className="faq-layout">
            
            {/* Left Column: Questions List */}
            <div className="faq-questions-list">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                  <button aria-label="Action button" 
                    key={faq.id} 
                    className={`faq-question-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <div className="faq-question-header">
                      <h3 className="faq-question-text">{faq.question}</h3>
                      <div className="faq-icon-wrapper">
                        {isActive ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </div>
                    
                    {/* Mobile Inline Answer (Hidden on Desktop) */}
                    <div 
                      id={`faq-answer-${faq.id}`}
                      className="faq-mobile-answer"
                      style={{ 
                        height: isActive ? 'auto' : 0, 
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? '1rem' : 0,
                        visibility: isActive ? 'visible' : 'hidden'
                      }}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Answer Panel (Hidden on Mobile) */}
            <div className="faq-answer-panel">
              <div className="faq-answer-inner" ref={answerRef}>
                <div className="faq-answer-icon">
                  {activeFAQ.icon}
                </div>
                <h2>{activeFAQ.question}</h2>
                <div className="faq-answer-divider"></div>
                <p>{activeFAQ.answer}</p>
              </div>
            </div>

          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}
