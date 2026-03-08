import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Valura AI',
      role: 'Mobile App Developer Intern',
      period: 'Nov 2025 - Feb 2026',
      location: 'Remote',
      points: [
        'Integrated UAE Pass authentication on iOS with deep linking and a custom Expo native module.',
        'Improved app performance using server-side filtering, debouncing, and TanStack Query.',
        'Built and optimized mobile features in React Native/Expo and connected frontend with backend APIs.'
      ]
    },
    {
      company: 'SilenceSpeaks',
      role: 'Web App Developer',
      period: 'May 2025 - Oct 2025',
      location: 'Remote',
      points: [
        'Mentored junior developers, providing guidance on best practices and fostering a positive team environment.',
        'Developed the official website of the company using Django, HTML, CSS, and JavaScript.'
      ]
    },
    {
      company: 'SilenceSpeaks',
      role: 'Mobile App Developer Intern',
      period: 'Aug 2024 - Apr 2025',
      location: 'Remote',
      points: [
        'Developed a React Native mobile app enabling sign language users and translators to communicate with restaurant owners.',
        'Developed and deployed the company\'s website using Ghost, ensuring a clean and responsive design.'
      ]
    },
    {
      company: 'Orgware Technologies',
      role: 'Mobile App Developer Intern',
      period: 'Dec 2022 - Mar 2023',
      location: 'Chennai',
      points: [
        'Developed a mobile app for controlling drones using React Native.',
        'Enhanced user experience by designing intuitive interfaces.',
        'Integrated external libraries for API calls and user experience enhancements.'
      ]
    }
  ];

  return (
    <div className="experience-content">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-dot"></div>
            <div className="exp-card">
              <div className="exp-header">
                <h3 className="role-title">{exp.role}</h3>
                <div className="exp-meta">
                  <span className="company-name">{exp.company}</span>
                  <span className="separator">|</span>
                  <span className="duration">{exp.period}</span>
                  <span className="separator">|</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              <ul className="exp-list">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .experience-content {
          padding-top: 2rem;
        }
        .timeline {
          position: relative;
          max-width: 900px;
          padding-left: 2rem;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--glass-border);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }
        .timeline-dot {
          position: absolute;
          left: -2rem;
          top: 0.5rem;
          width: 11px;
          height: 11px;
          background: #000;
          border: 2px solid var(--primary);
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        .exp-card {
          padding: 2rem;
          background: transparent;
          border: 1px solid var(--glass-border);
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          font-family: var(--font-mono);
        }
        .exp-card:hover {
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.15);
        }
        .role-title {
          font-size: 1.25rem;
          color: var(--text-main);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .exp-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .company-name {
          color: var(--primary);
          font-weight: 600;
        }
        .exp-list {
          list-style: none;
          padding: 0;
        }
        .exp-list li {
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          line-height: 1.6;
          position: relative;
          padding-left: 1.5rem;
          color: var(--text-muted);
        }
        .exp-list li::before {
          content: '>';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }
        @media (max-width: 600px) {
          .exp-meta { gap: 0.5rem; }
          .separator { display: none; }
        }
      `}} />
    </div>
  );
};

export default Experience;
