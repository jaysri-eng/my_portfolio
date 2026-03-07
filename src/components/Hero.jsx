import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge">Available for opportunities</span>
          <h1>
            Hi, I'm <span className="highlight">Jayanth Srinivasan</span>
          </h1>
          <p className="subtitle">
            MTech Software Engineering Graduate & Full-Stack Developer specializing in 
            <span className="accent"> React Native</span>, <span className="accent">Vite</span>, and <span className="accent">Spring Boot</span>.
          </p>
          
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:jayanthsrinivasan1011@gmail.com" className="social-btn">
              <Mail size={20} />
            </a>
          </div>

          <div className="cta-group">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a 
              href="https://docs.google.com/document/d/1A4X83p1AIJtsXrJLWmAFKq8txziSdO01MPEo8p4gwHA/export?format=pdf" 
              className="btn-secondary"
              download="Jayanth_Srinivasan_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
        }
        .hero-content {
          max-width: 800px;
        }
        .badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 2rem;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        .highlight {
          background: linear-gradient(to right, var(--primary), #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .subtitle {
          font-size: clamp(1rem, 3vw, 1.25rem);
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-inline: auto;
        }
        .accent {
          color: var(--text-main);
          font-weight: 500;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .social-btn {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          transform: translateY(-3px);
        }
        .cta-group {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          font-weight: 600;
          transition: background 0.3s;
        }
        .btn-primary:hover {
          background: var(--primary-hover);
        }
        .btn-secondary {
          background: transparent;
          color: var(--text-main);
          padding: 0.8rem 1.5rem;
          border-radius: 0.5rem;
          border: 1px solid var(--glass-border);
          font-weight: 600;
          transition: all 0.3s;
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--text-muted);
        }
      `}} />
    </div>
  );
};

export default Hero;
