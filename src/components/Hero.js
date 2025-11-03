import React from 'react';
import { motion } from 'framer-motion';

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-tagline" variants={fadeInUp}>
            It leads from the online world to the physical space
          </motion.p>
          <motion.h1 className="hero-title" variants={fadeInUp}>
          Boost Your Booking Conversion Rate!
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            We create personalized virtual tours that bring your clients directly into your space. Stand out from the competition and grab the attention of your target audience!
          </motion.p>
          <motion.button 
            className="btn btn-red"
            onClick={() => scrollToSection('contact')}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator" 
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;

