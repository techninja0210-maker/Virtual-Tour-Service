import React, { useRef } from 'react';
import './KeyBenefits.css';
import { motion, useInView } from 'framer-motion';

const KeyBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Increase guest confidence",
      description: "A virtual tour lets potential guests see exactly what the hotel looks like, building trust and reducing uncertainty about their stay. This transparency leads to more confident booking decisions.",
      image: "/images/1th.png",
      direction: "left"
    },
    {
      id: 2,
      title: "Higher Engagement and Bookings",
      description: "Guests spend more time exploring the hotel online, leading to higher booking rates and better engagement on the website. Virtual tours create an immersive experience that keeps visitors engaged longer.",
      image: "/images/2th.jpg",
      direction: "right"
    },
    {
      id: 3,
      title: "Wider Reach and Accessibility",
      description: "Guests from anywhere in the world can explore the hotel at any time, increasing the hotel's visibility to a global audience. Break down geographic barriers and reach travelers worldwide.",
      image: "/images/3th.png",
      direction: "left"
    },
    {
      id: 4,
      title: "Cost and Time Efficiency",
      description: "Virtual tours reduce the need for in-person visits, saving time and resources for both the hotel and potential guests. Provide instant access to property information 24/7.",
      image: "/images/4th.png",
      direction: "right"
    }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="key-benefits">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2>Main Benefits</h2>
          <p>Discover how our virtual tour service transforms your hotel's online presence</p>
        </motion.div>
        
        <div className="benefits-list" ref={containerRef}>
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.id} 
              className={`benefit-item ${benefit.direction}`}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <div className="benefit-content">
                <motion.div 
                  className="benefit-image"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    loading="lazy"
                  />
                </motion.div>
                <motion.div 
                  className="benefit-text"
                  variants={benefit.direction === "left" ? slideInRight : slideInLeft}
                >
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
