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
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`timeline-content glass ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <h4 className="company-name">{exp.company}</h4>
              </div>
              <div className="exp-meta">
                <span><Calendar size={14} /> {exp.period}</span>
                <span><MapPin size={14} /> {exp.location}</span>
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
        .timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }
        .timeline::after {
          content: '';
          position: absolute;
          width: 2px;
          background: var(--glass-border);
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        .timeline-item {
          padding: 1rem 0;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          position: relative;
        }
        .timeline-item:nth-child(even) {
          justify-content: flex-start;
        }
        .timeline-content {
          width: 45%;
          padding: 2rem;
          position: relative;
        }
        .timeline-content::after {
          content: '';
          position: absolute;
          width: 12px;
          height: 12px;
          background: var(--primary);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        .timeline-content.left::after {
          right: -5.5%;
        }
        .timeline-content.right::after {
          left: -5.5%;
        }
        .company-name {
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        .exp-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .exp-meta span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .exp-list {
          list-style: none;
        }
        .exp-list li {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          position: relative;
          padding-left: 1.2rem;
        }
        .exp-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .timeline::after {
            left: 20px;
          }
          .timeline-item, .timeline-item:nth-child(even) {
            justify-content: flex-start;
            padding-left: 45px;
          }
          .timeline-content {
            width: 100%;
          }
          .timeline-content.left::after, .timeline-content.right::after {
            left: -32px;
          }
        }
      `}} />
    </div>
  );
};

export default Experience;
