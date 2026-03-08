import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript']
    },
    {
      title: 'Backend Tools',
      skills: ['SQL', 'SpringBoot', 'MongoDB', 'Firebase', 'Supabase', 'Ghost', 'Astro']
    },
    {
      title: 'Frameworks',
      skills: ['React Native', 'Flutter', 'React JS', 'Django', 'Tailwind CSS', 'Daisy UI', 'Node JS']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <div className="skills-content">
      <div className="skills-wrapper">
        {skillCategories.map((cat, i) => (
          <div key={i} className="skill-cat">
            <h3>{cat.title}</h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="chips-container"
            >
              {cat.skills.map(skill => (
                <motion.span 
                  key={skill} 
                  variants={item}
                  className="skill-chip"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .skills-content {
          padding: 2rem 0;
        }
        .skills-wrapper {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .skill-cat h3 {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: var(--text-muted);
          text-align: center;
          text-transform: lowercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          font-family: var(--font-mono);
        }
        .skill-cat h3::before {
          content: '$ ls ';
          color: #27c93f;
        }
        .chips-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem;
        }
        .skill-chip {
          padding: 0.75rem 1.75rem;
          border-radius: 0.4rem;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
          background: transparent;
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .skill-chip:hover {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
        }
      `}} />
    </div>
  );
};

export default Skills;
