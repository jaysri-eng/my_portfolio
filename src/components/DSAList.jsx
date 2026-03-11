import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, ChevronRight, ExternalLink } from 'lucide-react';

const DSAList = () => {
  const topics = [
    "Arrays & Hashing", "Sliding window",
    "Dynamic Programming"
  ];

  return (
    <div className="dsa-section terminal-section-lite" id="dsa">
      <h2 className="section-title">
        <span className="terminal-prompt">jayanth@portfolio:~$</span>
        <span>./list_dsa_concepts.py</span>
      </h2>

      <div className="dsa-content glass">
        <div className="dsa-header">
          <Code size={24} className="text-primary" />
          <div>
            <h3>Curated DSA Problems & Concepts</h3>
            <p>A collection of hand-picked problems and core concepts I've mastered.</p>
          </div>
        </div>

        <div className="topic-tags">
          {topics.map((topic, idx) => (
            <span key={idx} className="topic-tag">
              <ChevronRight size={12} /> {topic}
            </span>
          ))}
        </div>

        <a 
          href={import.meta.env.VITE_DSA_LIST_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="notion-link"
        >
          View Full List on Notion <ExternalLink size={18} />
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .dsa-content {
          padding: 2.5rem;
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          border-radius: 1rem;
        }
        .dsa-header {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          align-content: flex-start;
        }
        .dsa-header h3 {
          font-size: 1.5rem;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }
        .dsa-header p {
          color: var(--text-muted);
          font-size: 1rem;
        }
        .topic-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .topic-tag {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.4rem 0.8rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .notion-link {
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.8rem 2rem;
          background: #000;
          color: white;
          border: 1px solid var(--glass-border);
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .notion-link:hover {
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
          transform: translateX(5px);
        }
        @media (max-width: 600px) {
          .dsa-content {
            padding: 1.5rem;
          }
          .dsa-header {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}} />
    </div>
  );
};

export default DSAList;
