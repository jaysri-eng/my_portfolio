import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Impact', href: '#accomplishments' },
    { name: 'Experience', href: '#experience' },
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-nav glass"
          >
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
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .navbar-container {
          position: fixed;
          top: 1rem;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 1000;
          padding: 0 1rem;
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
          gap: 2rem;
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
          color: var(--text-main);
          cursor: pointer;
        }
        .mobile-nav {
          position: fixed;
          top: 4.5rem;
          left: 1rem;
          right: 1rem;
          background: #18181b;
          border: 1px solid var(--glass-border);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          z-index: 999;
          font-family: var(--font-mono);
          border-radius: 0.25rem;
        }
        .mobile-nav-item {
          font-size: 0.9rem;
          color: var(--text-main);
          text-decoration: none;
        }
        .mobile-nav-item::before {
          content: '$ ';
          color: #27c93f;
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
