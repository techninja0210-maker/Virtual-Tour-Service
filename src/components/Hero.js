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
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-tagline">
            Professional 360° Virtual Tour Development for Hotels Worldwide
          </p>
          <h1 className="hero-title">
            Boost Your Hotel Booking Conversion Rate with Immersive Virtual Tours!
          </h1>
          <p className="hero-subtitle">
            We create personalized 360° virtual tours that bring your guests directly into your hotel space. Stand out from the competition with interactive virtual reality experiences that increase bookings and guest confidence. Professional virtual tour development services for luxury resorts, boutique hotels, and budget accommodations worldwide.
          </p>
          <button 
            className="btn btn-red"
            onClick={() => scrollToSection('contact')}
            aria-label="Contact us for virtual tour development services"
          >
            GET YOUR VIRTUAL TOUR
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

