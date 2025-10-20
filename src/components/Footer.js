import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/Service_logo.png" alt="VirtualTour Pro" className="footer-logo-img" />
              <h3>VirtualTour Pro</h3>
            </div>
            <p>
              Creating immersive 360° virtual tours for hotels worldwide. Transform how potential guests experience your property.
            </p>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>360° Photography</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Interactive Navigation</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Multimedia Integration</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Custom Branding</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Jovan Spasojevic</p>
            <p><a href="mailto:spaskekl@gmail.com">spaskekl@gmail.com</a></p>
            <p>Worldwide Service</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 VirtualTour Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

