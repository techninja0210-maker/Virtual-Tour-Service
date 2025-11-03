import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      icon: 'fas fa-hotel',
      title: 'Hotel Monte Cristo Paris',
      description: 'Luxury hotel showcasing elegant rooms and amenities',
      link: 'https://my.matterport.com/show/?m=L51uMHKx5db'
    },
    {
      icon: 'fas fa-building',
      title: 'The Londoner',
      description: 'Modern hotel with contemporary design and city views',
      link: 'https://my.matterport.com/show/?m=UvmnK4JXPT8&play=1&tour=3&ts=3&hl=0&pin=0'
    },
    {
      icon: 'fas fa-tree',
      title: 'Vythiri Village Resort',
      description: 'Nature resort with stunning views and outdoor amenities',
      link: 'https://www.p4panorama.com/gallery-item/the-vythiri-village-resort-wayanad/'
    },
    {
      icon: 'fas fa-sun',
      title: 'Canary Santa Barbara',
      description: 'Beachfront hotel with coastal charm and modern amenities',
      link: 'https://visitingmedia.com/tt8/?ttid=kimpton-canary-hotel#/3d-model'
    },
    {
      icon: 'fas fa-cube',
      title: 'W Rome',
      description: 'Interactive 3D virtual tour experience with immersive navigation',
      link: 'https://my.matterport.com/show/?m=L51uMHKx5db'
    },
    {
      icon: 'fas fa-camera',
      title: 'Abu Dhabi, Classic 2 Bedroom',
      description: 'Professional architectural photography and virtual tour portfolio',
      link: 'https://my.matterport.com/show/?m=UvmnK4JXPT8&play=1&tour=3&ts=3&hl=0&pin=0'
    }
  ];

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

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2>Virtual Tour Now!</h2>
          <p>Explore some of our virtual tour projects</p>
        </motion.div>
        <div className="portfolio-grid" ref={containerRef}>
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="portfolio-item"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div 
                className="portfolio-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/images/walking.png" alt="Virtual Tour" />
              </motion.div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="portfolio-link"
                >
                  View Tour <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

