import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, BadgeCheck, Star, ExternalLink } from 'lucide-react';
import signAppIcon from '../assets/signapp_icon.png';

const Accomplishments = () => {
  const achievements = [
    {
      title: "Basics of Sign Language (Flutter)",
      desc: "Developed, published, and managed an educational application on the Google Play Store to teach the fundamentals of sign language.",
      longDesc: "Scaled the application to attract over 75,000 users and cultivated a recurring community of 10,000 Monthly Active Users (MAU) through feature iteration and user feedback. Secured the official 'Teacher Approved' certification from Google, highlighting the app's high quality, educational merit, and adherence to best practices.",
      stats: [
        { label: "Total Users", value: "75,000+", icon: <Users size={20} /> },
        { label: "Monthly Active Users", value: "10,000", icon: <Star size={20} /> }
      ],
      tags: ["Google Play Store", "Teacher Approved", "Flutter"],
      badge: "Google Teacher Approved",
      link: import.meta.env.VITE_SIGNAPP_PLAYSTORE_URL
    }
  ];

  return (
    <div className="accomplishments-section terminal-section" id="accomplishments">
      <div className="terminal-header-bar">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
      </div>
      <h2 className="section-title">
        <span className="terminal-prompt">jayanth@portfolio:~$</span>
        <span>./show_global_impact.sh</span>
      </h2>

      <div className="achievements-container">
        {achievements.map((ach, idx) => (
          <motion.div 
            key={idx}
            className="achievement-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="ach-layout">
              <div className="ach-visual">
                <div className="app-icon-container">
                  <img src={signAppIcon} alt="Sign Language AppIcon" className="app-icon" />
                </div>
                <div className="ach-badge">
                  <BadgeCheck size={18} /> {ach.badge}
                </div>
              </div>
              
              <div className="ach-details">
                <h3>{ach.title}</h3>
                <p className="ach-desc">{ach.desc}</p>
                <p className="ach-long-desc">{ach.longDesc}</p>
                
                <div className="ach-stats">
                  {ach.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="stat-item">
                      <div className="stat-icon">{stat.icon}</div>
                      <div className="stat-info">
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="ach-actions">
                  <a href={ach.link} target="_blank" rel="noopener noreferrer" className="play-store-btn">
                     View on Play Store <ExternalLink size={18} />
                  </a>
                  <div className="ach-tags">
                    {ach.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .achievements-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        .achievement-card {
          padding: 3rem;
          position: relative;
          overflow: hidden;
          background: transparent;
          border: 1px solid var(--glass-border);
          border-radius: 0.75rem;
          transition: all 0.3s ease;
        }
        .achievement-card:hover {
          border-color: var(--primary);
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.15);
        }
        .ach-layout {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 3rem;
        }
        .ach-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .app-icon-container {
          width: 150px;
          height: 150px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease;
        }
        .achievement-card:hover .app-icon-container {
          transform: translateY(-5px);
        }
        .app-icon {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ach-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(34, 197, 94, 0.1);
          color: #4ade80;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 700;
          border: 1px solid rgba(34, 197, 94, 0.2);
          text-transform: lowercase;
          font-family: var(--font-mono);
        }
        .ach-details h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          font-family: var(--font-mono);
          font-weight: 800;
          color: var(--text-main);
          word-break: break-word;
        }
        .section-title {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: baseline;
          word-break: break-all;
          font-size: clamp(1.2rem, 5vw, 2rem);
        }
        .ach-desc {
          color: var(--primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          font-family: var(--font-mono);
        }
        .ach-long-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }
        .ach-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .stat-item {
          display: flex;
          gap: 1rem;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          padding: 1rem;
          border-radius: 0.4rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .stat-icon {
          color: var(--primary);
        }
        .stat-value {
          display: block;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          font-family: var(--font-mono);
        }
        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: lowercase;
          font-family: var(--font-mono);
        }
        .ach-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .play-store-btn {
          background: var(--primary);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.4rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.2s;
          font-family: var(--font-mono);
          font-size: 0.9rem;
        }
        .play-store-btn:hover {
          background: #9333ea;
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
        }
        .ach-tags {
          display: flex;
          gap: 0.75rem;
        }
        .tag {
          font-size: 0.8rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.4rem 0.8rem;
          border-radius: 0.25rem;
          border: 1px solid var(--glass-border);
          font-family: var(--font-mono);
        }
        @media (max-width: 900px) {
          .achievement-card {
            padding: 1.5rem;
          }
          .ach-layout {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .app-icon-container {
            width: 120px;
            height: 120px;
          }
          .ach-details h3 {
            font-size: 1.5rem;
          }
          .ach-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .ach-actions {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .ach-tags {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}} />
    </div>
  );
};

export default Accomplishments;
