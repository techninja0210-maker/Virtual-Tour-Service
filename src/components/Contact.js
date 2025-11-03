import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hotel: '',
    message: ''
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSubmit = (e) => {
    // Client-side validation; prevent native submit only when invalid
    if (!formData.name || !formData.email || !formData.hotel) {
      e.preventDefault();
      showNotification('Please fill in all required fields.', 'error');
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      e.preventDefault();
      showNotification('Please enter a valid email address.', 'error');
      return;
    }
    // Allow native submit to FormSubmit when valid
  };

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const contactItems = [
    { icon: 'fas fa-user', title: 'Jovan Spasojevic', desc: 'Lead Developer & Project Manager' },
    { icon: 'fas fa-envelope', title: 'Company Email', desc: 'jovan.spasojevic@360virtualtour.pro' },
    { icon: 'fas fa-map-marker-alt', title: 'Service Area', desc: 'Serbia' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2>Get In Touch</h2>
          <p>Ready to enhance your hotel's online presence? Let's discuss your virtual tour project</p>
        </motion.div>
        <div className="contact-content" ref={containerRef}>
          <motion.div 
            className="contact-info"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
          >
            {contactItems.map((item, index) => (
              <motion.div 
                key={index}
                className="contact-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-details">
                  <h3>{item.title}</h3>
                  <p>
                    {item.icon === 'fas fa-envelope' ? (
                      <a href="mailto:jovan.spasojevic@360virtualtour.pro">{item.desc}</a>
                    ) : (
                      item.desc
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="contact-form"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRight}
          >
            <form onSubmit={handleSubmit} action="https://formsubmit.co/jovan.spasojevic@360virtualtour.pro" method="POST">
              {/* FormSubmit options */}
              <input type="hidden" name="_subject" value="New inquiry from 360VirtualTour Pro website" />
              <input type="hidden" name="_captcha" value="false" />
              {/* Redirect back to the site after submission (optional) */}
              <input type="hidden" name="_next" value="https://360virtualtour.pro/#contact" />
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="hotel">Hotel Name *</label>
                <input
                  type="text"
                  id="hotel"
                  name="hotel"
                  value={formData.hotel}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your virtual tour project requirements..."
                />
              </div>
              <motion.button 
                type="submit" 
                className="btn-submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
        {notification && (
          <div className={`notification notification-${notification.type}`}>
            <div className="notification-content">
              <div className="notification-icon">
                {notification.type === 'success' ? '✓' : 
                 notification.type === 'error' ? '✕' : 
                 notification.type === 'warning' ? '⚠' : 'ℹ'}
              </div>
              <div className="notification-message">{notification.message}</div>
              <button 
                className="notification-close"
                onClick={() => setNotification(null)}
                aria-label="Close notification"
              >
                ×
              </button>
            </div>
            <div className="notification-progress"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

