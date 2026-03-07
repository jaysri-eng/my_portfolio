import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Database, ShieldCheck, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Backend API',
      tech: ['Spring Boot', 'Stripe', 'SQL'],
      desc: 'Production-ready REST API with product management, secure checkout, and order processing.',
      icon: <Database size={24} />,
      link: '#'
    },
    {
      title: 'Auth & Authorization System',
      tech: ['Spring Boot', 'JWT', 'AWS'],
      desc: 'Secure RBAC system with JWT, password encryption, and production-grade AWS deployment.',
      icon: <ShieldCheck size={24} />,
      link: '#'
    },
    {
      title: 'API Rate Limiting System',
      tech: ['Spring Boot', 'Redis'],
      desc: 'Dynamic rate limiting using token bucket algorithms and Redis for high performance.',
      icon: <Zap size={24} />,
      link: '#'
    },
    {
      title: 'AI Behavioral Analysis',
      tech: ['Spring Boot', 'AI', 'ML'],
      desc: 'Backend system analyzing user thoughts and activities to detect behavioral patterns.',
      icon: <Code2 size={24} />,
      link: '#'
    }
  ];

  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div 
            key={index}
            className="project-card glass"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="proj-header">
              <div className="proj-icon">{proj.icon}</div>
              <div className="proj-links">
                <a href={proj.link} className="icon-link"><Github size={18} /></a>
                <a href={proj.link} className="icon-link"><ExternalLink size={18} /></a>
              </div>
            </div>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="proj-tech">
              {proj.tech.map(t => <span key={t}>{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .project-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: border-color 0.3s;
        }
        .project-card:hover {
          border-color: var(--primary);
        }
        .proj-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        .proj-icon {
          color: var(--primary);
          padding: 0.75rem;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 0.75rem;
        }
        .proj-links {
          display: flex;
          gap: 0.75rem;
        }
        .icon-link {
          color: var(--text-muted);
          transition: color 0.3s;
        }
        .icon-link:hover {
          color: var(--text-main);
        }
        .project-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .project-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .proj-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .proj-tech span {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          padding: 0.2rem 0.6rem;
          border-radius: 0.3rem;
          font-size: 0.8rem;
          font-weight: 500;
        }
      `}} />
    </div>
  );
};

export default Projects;
