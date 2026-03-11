import { motion } from 'framer-motion';
import { Linkedin, PenTool } from 'lucide-react';

const LinkedInPosts = () => {
  const posts = [
    {
      title: "Most people learning DSA are fooling themselves.",
      date: "March 2026",
      preview: "Understanding the core concepts of DSA is more important than just solving problems..."
    },
    // {
    //   title: "The Power of Flutter in Education",
    //   date: "Feb 2026",
    //   preview: "How cross-platform development enabled rapid iteration for the Sign Language app..."
    // }
  ];

  return (
    <div className="linkedin-section">
      <h2 className="section-title">
        <span className="terminal-prompt">jayanth@portfolio:~$</span>
        <span>cat recent_writeups.md</span>
      </h2>

      <div className="posts-grid">
        {posts.map((post, idx) => (
          <motion.div 
            key={idx}
            className="post-card glass"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="post-header">
              <PenTool size={16} className="text-primary" />
              <span className="post-date">{post.date}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.preview}</p>
          </motion.div>
        ))}
      </div>

      <div className="linkedin-footer">
        <a 
          href={import.meta.env.VITE_LINKEDIN_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-cta"
        >
          View all posts on LinkedIn <Linkedin size={18} />
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        .post-card {
          padding: 1.5rem;
          border-radius: 0.5rem;
          transition: transform 0.3s ease;
        }
        .post-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }
        .post-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .post-date {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .post-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: var(--text-main);
        }
        .post-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .linkedin-footer {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }
        .linkedin-cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(10, 102, 194, 0.1);
          border: 1px solid rgba(10, 102, 194, 0.2);
          color: #0a66c2;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        @media (max-width: 768px) {
          .posts-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .linkedin-section {
            padding: 0;
          }
        }
      `}} />
    </div>
  );
};

export default LinkedInPosts;
