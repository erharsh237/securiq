import { useState } from 'react';
import { Shield, Database, Cpu, CheckCircle, Globe, BrainCircuit, Fingerprint, Cloud, Server } from 'lucide-react';
import './TrustArchitectureSection.css';

const tabs = [
  {
    id: 'readonly',
    icon: <Shield size={20} />,
    title: 'Read Access',
    description: 'We don\'t want your data. We connect via a dedicated IAM role limited to SecurityAudit or ViewOnlyAccess. That\'s it. Analysis and detection never require write access.'
  },
  {
    id: 'metadata',
    icon: <Database size={20} />,
    title: 'Config & Metadata Only',
    description: 'We read IAM policies and security groups. Not your databases or object contents. If a misconfig exposes data, we flag the gap, not the data inside.'
  },
  {
    id: 'ephemeral',
    icon: <Cpu size={20} />,
    title: 'Ephemeral Processing',
    description: 'Config snapshots are processed in memory to generate findings. Then they vanish. We don\'t hoard your infrastructure state.'
  },
  {
    id: 'approval',
    icon: <CheckCircle size={20} />,
    title: 'Remediation requiring human approval',
    description: 'When we eventually act, such as rotating a secret or closing a port, we do it only after you click approve. Everything is logged immutably.'
  },
  {
    id: 'agnostic',
    icon: <Globe size={20} />,
    title: 'Provider Agnostic',
    description: 'AWS, GCP, Azure, or GitLab. The model stays exactly the same: read access for detection, zero access to the data plane, and execution strictly gated by your approval.'
  },
  {
    id: 'notraining',
    icon: <BrainCircuit size={20} />,
    title: 'No Training on Configs',
    description: 'Your interaction logs help us improve. Your raw configs, secrets, and data do not. They are structurally separated from our training pipelines.'
  }
];

export default function TrustArchitectureSection() {
  const [activeTab, setActiveTab] = useState('readonly');

  return (
    <section className="section-trust">
      <div className="section-inner">
        <div className="section-header text-center">
          <h2 className="section-title">We Read Configs. Never Data.</h2>
          <p className="section-subtitle">We architect for zero standing access, even as we scale to your entire cloud estate.</p>
        </div>

        <div className="trust-container">
          <div className="trust-tabs-scroll">
            <div className="trust-tabs-list">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`trust-tab-card ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="tab-icon-wrapper">
                    {tab.icon}
                  </div>
                  <div className="tab-content">
                    <h3>{tab.title}</h3>
                    <p>{tab.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="trust-visuals-sticky">
            <div className="trust-visuals">
              {activeTab === 'readonly' && (
                <div className="visual-panel terminal-panel fade-in">
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <span className="terminal-title">securiq-iam-policy.json</span>
                  </div>
                  <div className="terminal-body">
                    <pre className="terminal-code typing-animation">
{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iam:GenerateCredentialReport",
        "s3:GetBucketAcl",
        "s3:GetBucketPolicy",
        "ec2:Describe*"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Deny",
      "Action": [
        "s3:GetObject",
        "dynamodb:GetItem",
        "rds:*"
      ],
      "Resource": "*"
    }
  ]
}`}
                    </pre>
                  </div>
                </div>
              )}

              {activeTab === 'metadata' && (
                <div className="visual-panel filter-panel fade-in">
                  <div className="data-flow-diagram">
                    <div className="flow-source">
                      <div className="flow-icon"><Database size={28} /></div>
                      <span>AWS Environment</span>
                    </div>
                    <div className="flow-lines">
                      <div className="flow-line allow-line">
                        <span className="flow-label">Infrastructure Config (VPC, IAM)</span>
                        <div className="animated-arrow green-arrow">→</div>
                      </div>
                      <div className="flow-line deny-line">
                        <span className="flow-label">Customer Application Data</span>
                        <div className="animated-block red-block">× BLOCKED</div>
                      </div>
                    </div>
                    <div className="flow-dest">
                      <div className="flow-icon"><Shield size={28} /></div>
                      <span>Securiq Engine</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ephemeral' && (
                <div className="visual-panel ephemeral-panel fade-in">
                  <div className="ephemeral-animation">
                    <div className="chip">
                      <Cpu size={48} className="chip-icon" />
                      <div className="chip-memory">
                        <span className="memory-block"></span>
                        <span className="memory-block"></span>
                        <span className="memory-block"></span>
                        <span className="memory-block"></span>
                      </div>
                    </div>
                    <div className="ephemeral-status">
                      <div className="status-indicator"></div>
                      <p>Processing in RAM. Purging after analysis.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'approval' && (
                <div className="visual-panel approval-panel fade-in">
                  <div className="approval-animation">
                    <div className="log-stream">
                      <div className="log-line"><span>[SYS]</span> Vulnerability detected: open port 22</div>
                      <div className="log-line"><span>[AI]</span> Generating remediation plan...</div>
                      <div className="log-line warning"><span>[REQ]</span> Human approval required for execution</div>
                    </div>
                    <button className="auth-button">
                      <Fingerprint size={24} className="auth-icon" />
                      Approve Remediation
                      <div className="auth-scanner"></div>
                    </button>
                    <div className="log-stream">
                      <div className="log-line success"><span>[EXEC]</span> Time-boxed credentials generated.</div>
                      <div className="log-line"><span>[EXEC]</span> Closing port 22. Fix applied.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'agnostic' && (
                <div className="visual-panel agnostic-panel fade-in">
                  <div className="agnostic-animation">
                     <div className="cloud-nodes">
                        <div className="cloud-node aws"><Cloud size={24} /> AWS</div>
                        <div className="cloud-node gcp"><Server size={24} /> GCP</div>
                        <div className="cloud-node azure"><Cloud size={24} /> Azure</div>
                     </div>
                     <div className="agnostic-center">
                        <div className="center-shield">
                           <Shield size={40} className="shield-icon" />
                           <div className="shield-pulse"></div>
                        </div>
                     </div>
                     <div className="agnostic-guarantee">
                        <CheckCircle size={16} color="#22c55e" />
                        <span>Same zero data retention guarantees everywhere.</span>
                     </div>
                  </div>
                </div>
              )}

              {activeTab === 'notraining' && (
                <div className="visual-panel notraining-panel fade-in">
                  <div className="containment-animation">
                     <div className="ai-brain">
                        <BrainCircuit size={50} className="brain-icon" />
                     </div>
                     <div className="containment-field">
                        <div className="field-barrier"></div>
                        <div className="field-label">Strict Isolation</div>
                     </div>
                     <div className="customer-data">
                        <Database size={30} className="data-icon" />
                        <div className="data-lock"><Shield size={14} /></div>
                     </div>
                  </div>
                  <p className="containment-text">Models learn from generic logs. Never your configs.</p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
