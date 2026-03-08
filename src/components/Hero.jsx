import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "whoami";
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
        setTimeout(() => setShowDescription(true), 500);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-content" id="hero">
      <div className="hero-terminal-body">
        <div className="command-line">
          <span className="prompt">jayanth@portfolio:~$</span>
          <span className="typed-text">{text}</span>
          <span className="cursor"></span>
        </div>
        
        {showDescription && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="terminal-output"
          >
            <div className="user-info">
              <h1 className="name-gradient">Jayanth Srinivasan</h1>
              <p className="bio">
                Full-stack developer specialized in <span className="highlight-purple">React Js, React Native</span>, 
                <span className="highlight-white">SpringBoot</span>, and <span className="highlight-purple">Flutter</span>.
                Building secure, scalable, and high-performance applications.
              </p>
            </div>

            <div className="terminal-actions">
              <div className="social-links">
                <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Github size={20} />
                </a>
                <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:jayanthsrinivasan1011@gmail.com" className="social-icon">
                  <Mail size={20} />
                </a>
              </div>
              <div className="cta-buttons">
                <a onClick={() => window.location.href = '#projects'} className="btn-primary">
                  View Projects
                </a>
                <a onClick={() => window.location.href = import.meta.env.VITE_RESUME_URL} className="btn-secondary">
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-content {
          padding: 4rem 2rem;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
        }
        .hero-terminal-body {
          width: 100%;
          max-width: 900px;
        }
        .command-line {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
        }
        .prompt {
          color: #27c93f;
          font-weight: bold;
        }
        .typed-text {
          color: #fff;
        }
        .cursor {
          width: 8px;
          height: 1.25rem;
          background: #fff;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .name-gradient {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          margin-bottom: 1.5rem;
          color: var(--text-main);
          font-weight: 800;
          font-family: var(--font-heading);
        }
        .bio {
          color: var(--text-muted);
          line-height: 1.8;
          max-width: 650px;
          margin-bottom: 3rem;
          font-size: 1.05rem;
        }
        .highlight-purple { color: var(--primary); font-weight: 600; }
        .highlight-white { color: #fff; font-weight: 600; }
        
        .terminal-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem;
          align-items: center;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        .social-icon {
          color: var(--text-muted);
          transition: all 0.2s;
        }
        .social-icon:hover {
          color: var(--primary);
          transform: translateY(-2px);
        }
        .cta-buttons {
          display: flex;
          gap: 1.25rem;
          align-items: center;
          justify-content: center;
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
          background: var(--primary);
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

