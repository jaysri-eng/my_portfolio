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
          top: 1.5rem;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1000;
          padding: 0 1rem;
          gap: 0.5rem;
        }
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 2rem;
          width: 100%;
          max-width: 800px;
          border-radius: 2rem;
          position: relative;
          z-index: 1001;
        }
        .logo {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--text-main);
        }
        .logo span {
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-item {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: color 0.3s ease;
        }
        .nav-item:hover {
          color: var(--primary);
        }
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
          padding: 0.5rem;
        }
        .mobile-nav {
          display: none;
          flex-direction: column;
          width: 100%;
          max-width: 800px;
          padding: 1.5rem;
          gap: 1rem;
          border-radius: 1.5rem;
        }
        .mobile-nav-item {
          font-size: 1.1rem;
          padding: 0.75rem 1rem;
          color: var(--text-main);
          font-weight: 500;
          border-radius: 0.75rem;
          transition: background 0.3s;
        }
        .mobile-nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--primary);
        }

        @media (max-width: 640px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .mobile-nav {
            display: flex;
          }
        }
      `}} />
    </motion.nav>
  );
};

export default Navbar;
