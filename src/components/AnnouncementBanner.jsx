import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, ExternalLink } from 'lucide-react';

const AnnouncementBanner = () => {
  return (
    <motion.div 
      className="announcement-banner"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="banner-content">
        <div className="banner-badge">NEW MILESTONE</div>
        <motion.div 
          className="banner-text"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <PartyPopper size={18} className="animate-bounce" />
          <span>Basics of Sign Language app just hit <strong>100,000+ users!</strong></span>
          <motion.a 
            href={import.meta.env.VITE_SIGNAPP_PLAYSTORE_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="banner-link"
            whileHover={{ x: 5 }}
          >
            Check it out <ExternalLink size={14} />
          </motion.a>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .announcement-banner {
          background: var(--grad-purple);
          color: white;
          padding: 0 20px;
          height: var(--banner-height);
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2000;
          box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3);
          font-family: var(--font-body);
          padding-top: env(safe-area-inset-top);
        }
        .banner-content {
          display: flex;
          align-items: center;
          gap: 15px;
          max-width: 1200px;
          width: 100%;
          justify-content: center;
        }
        .banner-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          padding: 2px 10px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          flex-shrink: 0;
        }
        .banner-text {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .banner-text strong {
          color: #fff;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        .banner-link {
          text-decoration: underline;
          text-underline-offset: 4px;
          color: white;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: opacity 0.2s;
          margin-left: 10px;
        }
        .banner-link:hover {
          opacity: 0.8;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-bounce {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
        @media (max-width: 768px) {
          .announcement-banner {
            padding-left: 10px;
            padding-right: 10px;
          }
          .banner-badge {
            display: none;
          }
          .banner-text {
            font-size: 0.95rem;
            text-align: center;
            gap: 5px;
          }
          .banner-link {
            font-size: 0.85rem;
            margin-left: 5px;
          }
        }
      `}} />
    </motion.div>
  );
};

export default AnnouncementBanner;
