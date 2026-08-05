import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Code2, Cpu } from 'lucide-react';
import './TeamPage.css';

const teamMembers = [
  {
    name: 'Harshpal Singh',
    role: 'Founder & CEO',
    badge: 'FOUNDER',
    badgeClass: 'badge-dark',
    initials: 'HS',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    bio: "Leading Securiq's vision to revolutionize cloud infrastructure security through autonomous AI engineering and zero standing access posture.",
    icon: Sparkles,
    color: '#0f172a',
  },
  {
    name: 'Kanishka Sharma',
    role: 'Co-Founder & CTO',
    badge: 'CO-FOUNDER',
    badgeClass: 'badge-purple',
    initials: 'KS',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
    bio: 'Architecting context aware LLM vulnerability investigation engines and automated Terraform HCL patch synthesis algorithms.',
    icon: Cpu,
    color: '#7c3aed',
  },
  {
    name: 'Shruti Sinha',
    role: 'Co-Founder & COO',
    badge: 'CO-FOUNDER',
    badgeClass: 'badge-emerald',
    initials: 'SS',
    gradient: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
    bio: 'Directing global security operations, enterprise compliance roadmaps (SOC 2 / ISO 27001), and strategic partner ecosystems.',
    icon: ShieldCheck,
    color: '#059669',
  },
  {
    name: 'Gursimranjit Singh',
    role: 'Backend Developer',
    badge: 'ENGINEERING',
    badgeClass: 'badge-amber',
    initials: 'GS',
    gradient: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)',
    bio: 'Engineering high throughput microservices, real time cloud state scanners, and secure IAM/OIDC token pipelines.',
    icon: Code2,
    color: '#d97706',
  },
];

export default function TeamPage() {
  return (
    <div className="team-page-wrapper">
      <div className="team-page-container">
        
        {/* Main Hero Header */}
        <motion.div 
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="team-pill-tag">OUR LEADERSHIP & TEAM</span>
          <h1 className="team-title">Meet the Minds Behind Securiq.</h1>
          <p className="team-subtitle">
            A team of systems architects, security researchers, and AI developers building the next era of autonomous cloud remediation.
          </p>
        </motion.div>

        {/* 4-Member Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;

            return (
              <motion.div
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                {/* Top Badge & Icon */}
                <div className="card-top-bar">
                  <span className={`member-badge ${member.badgeClass}`}>
                    {member.badge}
                  </span>
                  <div 
                    className="card-icon-pill"
                    style={{ background: `${member.color}12`, borderColor: `${member.color}30` }}
                  >
                    <IconComponent size={18} color={member.color} />
                  </div>
                </div>

                {/* Avatar Visual Box */}
                <div className="avatar-wrapper">
                  <div 
                    className="avatar-circle"
                    style={{ background: member.gradient }}
                  >
                    <span className="avatar-initials">{member.initials}</span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
