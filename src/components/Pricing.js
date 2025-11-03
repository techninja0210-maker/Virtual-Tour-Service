import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

  const pricingCards = [
    {
      className: "basic-plan",
      title: "Virtual Tour Development",
      currency: "$",
      amount: "10",
      period: "- $20 per image",
      description: "Professional 360° virtual tour creation"
    },
    {
      className: "premium-plan",
      title: "Professional Photography",
      currency: "$",
      amount: "10",
      period: "- $50 per image",
      description: "It depends on the quality of panoramas."
    },
    {
      className: "3d-model-plan",
      title: "3D Model",
      currency: "$",
      amount: "100",
      period: "per room",
      description: "High-quality 3D modeling for immersive experiences"
    },
    {
      className: "enterprise-plan",
      title: "Custom Solutions",
      isCustom: true
    }
  ];

  return (
    <section className="pricing">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2>Pricing</h2>
          <p>Choose the perfect plan for your virtual tour needs. No hidden fees, no surprises.</p>
        </motion.div>
        
        <div className="pricing-content" ref={containerRef}>
          {pricingCards.map((card, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${card.className}`}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="plan-header">
                <h3>{card.title}</h3>
                {!card.isCustom && (
                  <>
                    <div className="price">
                      <span className="currency">{card.currency}</span>
                      <span className="amount">{card.amount}</span>
                      <span className="period">{card.period}</span>
                    </div>
                    <p className="plan-description">{card.description}</p>
                  </>
                )}
              </div>
              {card.isCustom && (
                <div className="plan-footer">
                  <motion.button 
                    className="contact-button" 
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact
                  </motion.button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="pricing-note"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <div className="note-content">
            <i className="fas fa-info-circle"></i>
            <div>
              <h4>Need a custom quote?</h4>
              <p>All pricing is flexible and depends on project complexity, timeline, and specific requirements. Contact us for a personalized estimate.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
