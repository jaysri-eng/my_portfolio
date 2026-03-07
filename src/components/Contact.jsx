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
    <div className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="contact-intro">Let's work together! Whether you have a question or just want to say hi, my inbox is always open.</p>
          <div className="info-items">
            <div className="info-item">
              <Mail className="icon" size={24} />
              <div>
                <h4>Email</h4>
                <p>jayanthsrinivasan1011@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="icon" size={24} />
              <div>
                <h4>Phone</h4>
                <p>+91 7358407871</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="icon" size={24} />
              <div>
                <h4>Location</h4>
                <p>Chennai / Remote</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form 
          onSubmit={onSubmit}
          className="contact-form glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Your email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"} <Send size={18} />
          </button>
          {result && (
            <p className={`form-status ${status}`}>{result}</p>
          )}
        </motion.form>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }
        .contact-intro {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .info-item .icon {
          color: var(--primary);
        }
        .info-item h4 {
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }
        .info-item p {
          color: var(--text-muted);
        }
        .contact-form {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        .form-group input, .form-group textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          padding: 0.8rem 1rem;
          border-radius: 0.5rem;
          color: white;
          font-family: inherit;
          transition: border-color 0.3s;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
        }
        .submit-btn {
          margin-top: 1rem;
          background: var(--primary);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 0.5rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background 0.3s;
        }
        .submit-btn:hover {
          background: var(--primary-hover);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .form-status {
          margin-top: 1rem;
          font-size: 0.9rem;
          text-align: center;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }
        .form-status.success {
          background: rgba(34, 197, 94, 0.1);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }
        .form-status.error {
          background: rgba(239, 68, 68, 0.1);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}} />
    </div>
  );
};

export default Contact;
