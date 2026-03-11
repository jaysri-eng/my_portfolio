import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Impact', href: '#accomplishments' },
    { name: 'Experience', href: '#experience' },
    { name: 'Writeups', href: '#linkedin' },
    { name: 'DSA', href: '#dsa' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside or on a link
  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar-container"
    >
      <div className="navbar glass">
        <div className="logo">JS<span>.</span></div>
        
        {/* Desktop Links */}
        <div className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-nav open"
          >
            <div className="mobile-nav-content">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="mobile-nav-item"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .navbar-container {
          position: relative;
          display: flex;
          justify-content: center;
          z-index: 1000;
          padding: 0.5rem 1rem;
          width: 100%;
        }
        @media (max-width: 768px) {
          .navbar-container {
            padding: 0.75rem 1rem;
          }
        }
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1.5rem;
          width: 100%;
          max-width: 900px;
          background: #18181b;
          border: 1px solid var(--glass-border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          font-family: var(--font-mono);
          border-radius: 0.25rem;
        }
        .logo {
          font-weight: 700;
          font-size: 1rem;
          color: var(--primary);
        }
        .logo::before {
          content: '~/';
          color: var(--text-muted);
        }
        .nav-links {
          display: flex;
          gap: 1.25rem;
        }
        .nav-item {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.2s;
        }
        .nav-item:hover {
          color: var(--primary);
        }
        .nav-item::before {
          content: './';
          opacity: 0.5;
        }
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: white; /* High contrast */
          cursor: pointer;
        }
        .mobile-nav {
          position: absolute;
          top: 100%; /* Directly below navbar */
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 900px;
          background: rgba(24, 24, 27, 0.98);
          border-radius: 0 0 0.75rem 0.75rem;
          border: 1px solid var(--glass-border);
          border-top: none;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
          z-index: 2000;          
          display: none;
          flex-direction: column;
          padding: 0.5rem 0.5rem 0.75rem;
        }
        .mobile-nav.open {
          display: flex;
        }
        .mobile-nav-content {
          margin-top: 0.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.25rem 0.25rem 0.5rem;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          max-height: 70vh; /* Scrollable dropdown, not full screen */
          border-radius: 0 0 0.75rem 0.75rem;
        }
        .mobile-nav-item {
          font-size: 1rem;
          color: var(--text-main);
          text-decoration: none;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .mobile-nav-item:last-child {
          border-bottom: none;
        }
        .mobile-nav-item::before {
          content: '$ ';
          color: #27c93f;
        }
        .mobile-nav-item:active {
          background: rgba(168, 85, 247, 0.1);
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: block; }
        }
      `}} />
    </motion.nav>
  );
};

export default Navbar;
