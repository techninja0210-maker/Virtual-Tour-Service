import React from 'react';

const Hero = () => {
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
    <section id="home" className="hero" role="banner">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-tagline">
            It leads from the online world to the physical space
          </p>
          <h1 className="hero-title">
            Professional 360° Virtual Tour Development for Hotels - Boost Your Booking Conversion Rate!
          </h1>
          <p className="hero-subtitle">
            We create immersive 360° virtual tours that bring your hotel guests directly into your space. Our professional virtual tour development service helps hotels worldwide increase bookings, reduce cancellations, and stand out from the competition with interactive hotel experiences.
          </p>
          <button 
            className="btn btn-red"
            onClick={() => scrollToSection('contact')}
            aria-label="Contact us for virtual tour development services"
          >
            Get Your Virtual Tour Quote
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;

