import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const Contact = () => {
  const [result, setResult] = React.useState("");
  const [status, setStatus] = React.useState("idle"); // idle, loading, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setStatus("error");
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-content">
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="info-items">
            <motion.a 
              href="mailto:jayanthsrinivasan1011@gmail.com"
              className="info-item"
              whileHover={{ x: 5 }}
            >
              <Mail className="icon" size={20} />
              <div className="info-content">
                <span className="label">email:</span>
                <span className="value">jayanthsrinivasan1011@gmail.com</span>
              </div>
            </motion.a>
            <motion.a 
              href="tel:+917358407871"
              className="info-item"
              whileHover={{ x: 5 }}
              style={{marginTop: "1rem"}}
            >
              <Phone className="icon" size={20} />
              <div className="info-content">
                <span className="label">phone:</span>
                <span className="value">+91 7358407871</span>
              </div>
            </motion.a>
          </div>
        </motion.div>

        <motion.form 
          onSubmit={onSubmit}
          className="contact-form"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <input type="text" name="name" placeholder="name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="email" required />
          </div>
          <div className="form-group">
            <input name="subject" type="hidden" value="New Portfolio Message" />
            <textarea name="message" rows="5" placeholder="message" required></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"} <Send size={18} />
          </button>
          {result && (
            <p className={`form-status ${status}`}>
              <span className="terminal-prompt">&gt;</span> {result}
            </p>
          )}
        </motion.form>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: transparent;
          border: 1px solid var(--glass-border);
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.2s;
          font-family: var(--font-mono);
        }
        .info-item:hover {
          border-color: var(--primary);
          background: rgba(168, 85, 247, 0.05);
        }
        .info-icon {
          color: var(--primary);
        }
        .info-content {
          display: flex;
          flex-direction: column;
        }
        .info-content .label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: lowercase;
        }
        .info-content .value {
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.95rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          background: transparent;
          border: 1px solid var(--glass-border);
          padding: 1rem;
          border-radius: 0.4rem;
          color: white;
          font-family: var(--font-mono);
          font-size: 0.95rem;
          transition: all 0.2s;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.1);
        }
        .submit-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 0.4rem;
          font-weight: 700;
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .submit-btn:hover {
          background: #9333ea;
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
        }
        .form-status {
          margin-top: 1rem;
          font-size: 0.9rem;
          font-family: var(--font-mono);
        }
        .form-status.success { color: #4ade80; }
        .form-status.error { color: #f87171; }
        @media (max-width: 800px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .info-item {
            padding: 1rem;
            gap: 1rem;
          }
          .info-content .value {
            font-size: 0.85rem;
            word-break: break-all;
          }
        }
      `}} />
    </div>
  );
};

export default Contact;
