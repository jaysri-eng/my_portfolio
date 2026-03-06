import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, BadgeCheck, Star, ExternalLink } from 'lucide-react';

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
      link: "https://play.google.com/store/apps/details?id=com.jayanthsrinivasan.signlangapp&hl=en_IN"
    }
  ];

  return (
    <div className="accomplishments-section" id="accomplishments">
      <div className="attention-catcher">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="accent-text">Major Success</span>
          <h2 className="section-title">Global Impact</h2>
        </motion.div>
      </div>

      <div className="achievements-container">
        {achievements.map((ach, idx) => (
          <motion.div 
            key={idx}
            className="achievement-card glass highlight-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="ach-layout">
              <div className="ach-visual">
                <div className="app-icon-placeholder">
                  {/* APP ICON PLACEHOLDER */}
                  <Trophy size={60} color="var(--primary)" />
                  <span className="placeholder-text">App Icon</span>
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
        .accomplishments-section {
          padding-top: 4rem;
        }
        .attention-catcher {
          text-align: center;
          margin-bottom: 4rem;
        }
        .accent-text {
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          display: block;
        }
        .achievements-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        .achievement-card {
          padding: 3.5rem;
          position: relative;
          overflow: hidden;
          border-left: 4px solid var(--primary);
        }
        .ach-layout {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 3rem;
        }
        .ach-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .app-icon-placeholder {
          width: 180px;
          height: 180px;
          background: rgba(255, 255, 255, 0.03);
          border: 2px dashed var(--glass-border);
          border-radius: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          position: relative;
        }
        .placeholder-text {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        .ach-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 0.5rem 1.2rem;
          border-radius: 2rem;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid rgba(16, 185, 129, 0.2);
          white-space: nowrap;
        }
        .ach-details h3 {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ach-desc {
          color: var(--text-main);
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .ach-long-desc {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.7;
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
          gap: 1.2rem;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          padding: 1.2rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .stat-icon {
          color: var(--primary);
        }
        .stat-value {
          display: block;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-main);
        }
        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
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
          padding: 0.8rem 1.8rem;
          border-radius: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s;
        }
        .play-store-btn:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -10px var(--primary);
        }
        .ach-tags {
          display: flex;
          gap: 0.75rem;
        }
        .tag {
          font-size: 0.8rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.4rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid var(--glass-border);
        }
        @media (max-width: 900px) {
          .ach-layout {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .ach-visual {
            margin-bottom: 2rem;
          }
          .ach-stats {
            grid-template-columns: 1fr;
          }
          .ach-actions {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
      `}} />
    </div>
  );
};

export default Accomplishments;
