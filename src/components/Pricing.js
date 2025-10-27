import React from 'react';

const Pricing = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Pricing</h2>
          <p>Choose the perfect plan for your virtual tour needs. No hidden fees, no surprises.</p>
        </div>
        
        <div className="pricing-content">
          <div className="pricing-card basic-plan">
            <div className="plan-header">
              <h3>Virtual Tour Development</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">10</span>
                <span className="period">- $20 per image</span>
              </div>
              <p className="plan-description">Professional 360° virtual tour creation</p>
            </div>
          </div>

          <div className="pricing-card premium-plan">
            <div className="plan-header">
              <h3>Professional Photography</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">10</span>
                <span className="period">- $50 per image</span>
              </div>
              <p className="plan-description">It depends on the quality of panoramas.</p>
            </div>
          </div>

          <div className="pricing-card 3d-model-plan">
            <div className="plan-header">
              <h3>3D Model</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">100</span>
                <span className="period">per room</span>
              </div>
              <p className="plan-description">High-quality 3D modeling for immersive experiences</p>
            </div>
          </div>

          <div className="pricing-card enterprise-plan">
            <div className="plan-header">
              <h3>Custom Solutions</h3>
              {/* <div className="price">
                <span className="currency">$</span>
                <span className="amount">Custom</span>
              </div>
              <p className="plan-description">Tailored solutions for large projects</p> */}
            </div>
            
            <div className="plan-footer">
              <button className="contact-button" onClick={scrollToContact}>
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-note">
          <div className="note-content">
            <i className="fas fa-info-circle"></i>
            <div>
              <h4>Need a custom quote?</h4>
              <p>All pricing is flexible and depends on project complexity, timeline, and specific requirements. Contact us for a personalized estimate.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

