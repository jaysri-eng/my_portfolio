import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Accomplishments from './components/Accomplishments'
import LinkedInPosts from './components/LinkedInPosts'
import DSAList from './components/DSAList'
import Contact from './components/Contact'
import AnnouncementBanner from './components/AnnouncementBanner'

function App() {
  const [activeCommand, setActiveCommand] = useState('whoami');

  useEffect(() => {
    const sectionCommands = {
      hero: 'whoami',
      accomplishments: './show_global_impact.sh',
      experience: 'history | grep "employment"',
      linkedin: 'cat recent_writeups.md',
      dsa: './list_dsa_concepts.py',
      projects: 'ls ./featured_projects',
      skills: 'cat technical_expertise.md',
      contact: 'mail -s "get_in_touch" contact@jayanth.dev'
    };

    const options = {
      root: document.querySelector('.terminal-window-body'),
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (sectionCommands[id]) {
            setActiveCommand(sectionCommands[id]);
          }
        }
      });
    }, options);

    document.querySelectorAll('section, .hero-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="header-stack">
        <AnnouncementBanner />
        <Navbar />
      </div>
      
      <div className="unified-terminal">
        <div className="terminal-header-fixed">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="current-command">
            <span className="terminal-prompt">jayanth@portfolio:~$</span>
            <span className="command">{activeCommand}</span>
          </div>
        </div>
        
        <div className="terminal-window-body">
          <section id="hero" className="hero-section">
            <Hero />
          </section>
          <section id="accomplishments" className="terminal-section-lite">
            <Accomplishments />
          </section>
          <section id="experience" className="terminal-section-lite">
            <Experience />
          </section>
          <section id="linkedin" className="terminal-section-lite">
            <LinkedInPosts />
          </section>
          <section id="dsa" className="terminal-section-lite">
            <DSAList />
          </section>
          <section id="projects" className="terminal-section-lite">
            <Projects />
          </section>
          <section id="skills" className="terminal-section-lite">
            <Skills />
          </section>
          <section id="contact" className="terminal-section-lite">
            <Contact />
          </section>
          
          <footer className="terminal-footer">
            <p>jayanth@portfolio:~$ history | tail -n 1</p>
            <p>&copy; {new Date().getFullYear()} R. Jayanth Srinivasan. exit 0;</p>
          </footer>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .terminal-header-fixed {
          flex-wrap: nowrap;
          overflow: hidden;
        }
        .current-command {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          font-size: clamp(0.7rem, 3vw, 0.9rem);
          overflow: hidden;
          white-space: nowrap;
        }
        .command {
          color: var(--primary);
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .terminal-footer {
          padding: 4rem 2rem;
          text-align: center;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          opacity: 0.7;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .header-stack {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2000;
          display: flex;
          flex-direction: column;
        }
      `}} />
    </div>
  )
}

export default App
