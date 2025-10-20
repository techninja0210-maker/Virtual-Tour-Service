import React, { useState } from 'react';

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

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to enhance your hotel's online presence? Let's discuss your virtual tour project</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="contact-details">
                <h3>Jovan Spasojevic</h3>
                <p>Lead Developer & Project Manager</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Company Email</h3>
                <p><a href="mailto:jovan.spasojevic@360virtualtour.pro">jovan.spasojevic@360virtualtour.pro</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Service Area</h3>
                <p>Serbia</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
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
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
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

