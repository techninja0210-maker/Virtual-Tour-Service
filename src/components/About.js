import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
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

  const stats = [
    { value: "5000+", label: "Usability Tested" },
    { value: "98%", label: "User Satisfaction" },
    { value: "100%", label: "Mobile Responsive" }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2>About Us</h2>
          <p>Led by Jovan Spasojevic, we specialize exclusively in creating immersive virtual tours for hotels worldwide</p>
        </motion.div>
        <div className="about-content" ref={containerRef}>
          <motion.div 
            className="about-text"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
          >
            <h3>Our Mission</h3>
            <p>
              We began with the goal of offering an interactive and detailed look at hotels, as traditional photos 
              and descriptions often weren't enough. By integrating 360° photography and interactive media, we allow 
              guests to virtually explore rooms, amenities, and common areas at their own pace.
            </p>
            
            <h3>Our Expertise</h3>
            <p>
            With a proven track record in transforming hotel marketing, our team specializes in creating immersive 360° virtual tours that boost engagement, drive bookings, and deliver a seamless, interactive experience tailored to each hotel's unique offerings.
            </p>
            
            <div className="stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="about-image"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRight}
          >
            <motion.div 
              className="team-member-image"
            >
              <img src="/images/Jovan_Spasojevic.png" alt="Jovan Spasojevic - Team Leader" />
              <div className="image-overlay">
                <p>Jovan Spasojevic</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
