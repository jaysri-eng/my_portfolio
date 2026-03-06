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
    <div className="skills-section">
      <h2 className="section-title">Technical Expertise</h2>
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
                  className="skill-chip glass"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .skills-wrapper {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .skill-cat h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--primary);
          text-align: center;
        }
        .chips-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        .skill-chip {
          padding: 0.8rem 1.5rem;
          border-radius: 100px;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s;
          cursor: default;
        }
        .skill-chip:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }
      `}} />
    </div>
  );
};

export default Skills;
