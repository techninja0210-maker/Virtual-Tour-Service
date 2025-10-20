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
            It leads from the online world to the physical space
          </p>
          <h1 className="hero-title">
          Boost Your Booking Conversion Rate!
          </h1>
          <p className="hero-subtitle">
            We create personalized virtual tours that bring your clients directly into your space. Stand out from the competition and grab the attention of your target audience!
          </p>
          <button 
            className="btn btn-red"
            onClick={() => scrollToSection('contact')}
          >
            CONTACT
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

