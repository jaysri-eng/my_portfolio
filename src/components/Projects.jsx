import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, Database, Bot, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Backend API',
      tech: ['Spring Boot', 'Stripe', 'SQL'],
      desc: 'Production-ready REST API with product management, secure checkout, and order processing.',
      icon: <Database size={24} />,
      link: import.meta.env.VITE_PROJECT_ECOMMERCE_URL
    },
    {
      title: 'Trending hashtags AI Agent',
      tech: ['Python', 'SQLite', 'FAISS', 'HDBSCAN', 'Typer'],
      desc: 'Multi-stage trend→hashtag pipeline (ingestion, SQLite trend history + velocity, embedding retrieval + clustering, optional LLM refinement). Hybrid stack: SentenceTransformers, HDBSCAN, FAISS; pluggable generation (Ollama, OpenAI-compatible, rule-based) with graceful degradation. Time-series snapshots in SQLite for burst detection. Typer + Rich CLI with hybrid/simple modes and inspectable top-k trends and cluster summaries.',
      icon: <Bot size={24} />,
      link: import.meta.env.VITE_PROJECT_TRENDING_HASHTAGS_URL
    },
    {
      title: 'Blogging App Backend',
      tech: ['Spring Boot', 'Spring Security', 'JWT'],
      desc: 'Comprehensive blogging platform backend with secure user authentication and content management.',
      icon: <Code2 size={24} />,
      link: import.meta.env.VITE_PROJECT_BLOG_URL
    },
    {
      title: 'API Rate Limiting System',
      tech: ['Spring Boot', 'Redis'],
      desc: 'Dynamic rate limiting using token bucket algorithms and Redis for high performance.',
      icon: <Zap size={24} />,
      link: '#',
      status: 'Under Development'
    },
    {
      title: 'AI Behavioral Analysis',
      tech: ['Spring Boot', 'AI', 'ML'],
      desc: 'Backend system analyzing user thoughts and activities to detect behavioral patterns.',
      icon: <Code2 size={24} />,
      link: '#',
      status: 'Under Development'
    }
  ];

  return (
    <div className="projects-content">
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div 
            key={index}
            className="project-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="proj-header">
              <div className="proj-icon">{proj.icon}</div>
              <div className="proj-links">
                {!proj.status && (
                  <a href={proj.link} className="icon-link" target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
            <div className="proj-title-area">
              <h3>{proj.title}</h3>
              {proj.status && <span className="status-badge">{proj.status}</span>}
            </div>
            <p>{proj.desc}</p>
            <div className="proj-tech">
              {proj.tech.map(t => <span key={t}>{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .projects-content {
          padding-top: 1rem;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-card {
            padding: 1.5rem;
          }
        }
        .project-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          background: transparent;
          border: 1px solid var(--glass-border);
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          font-family: var(--font-mono);
        }
        .project-card:hover {
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
        }
        .proj-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }
        .proj-icon {
          color: var(--primary);
          padding: 1rem;
          background: rgba(168, 85, 247, 0.05);
          border-radius: 0.5rem;
          border: 1px solid rgba(168, 85, 247, 0.1);
        }
        .proj-links {
          display: flex;
          gap: 1rem;
        }
        .icon-link {
          color: var(--text-muted);
          transition: all 0.3s;
        }
        .icon-link:hover {
          color: var(--primary);
          transform: scale(1.1);
        }
        .proj-title-area {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .status-badge {
          font-size: 0.7rem;
          background: rgba(168, 85, 247, 0.1);
          color: var(--primary);
          padding: 0.25rem 0.75rem;
          border-radius: 0.25rem;
          border: 1px solid rgba(168, 85, 247, 0.2);
          text-transform: lowercase;
          font-family: var(--font-mono);
        }
        .project-card h3 {
          font-size: 1.25rem;
          margin: 0;
          color: var(--text-main);
          font-family: var(--font-mono);
          font-weight: 700;
        }
        .project-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .proj-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .proj-tech span {
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-muted);
          padding: 0.4rem 0.8rem;
          border-radius: 0.25rem;
          font-size: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s;
        }
        .project-card:hover .proj-tech span {
          border-color: rgba(168, 85, 247, 0.2);
          color: var(--text-main);
        }
      `}} />
    </div>
  );
};

export default Projects;
