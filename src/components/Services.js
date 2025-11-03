import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (image, title) => {
    setSelectedImage({ image, title });
    setIsModalOpen(true);
    setIsClosing(false);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsClosing(true);
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedImage(null);
      setIsClosing(false);
      document.body.style.overflow = 'unset'; // Restore scrolling
    }, 400); // Match the animation duration
  };

  const services = [
    {
      image: '/images/services/360-camera.png',
      title: '360° Photography',
      description: 'Professional panoramic photography capturing every detail of your hotel\'s spaces with high-quality imagery.(hotel side)'
    },
    {
      image: '/images/services/interactive-navigation.png',
      title: 'Interactive Navigation',
      description: 'Seamless <strong>keyboard and mouse navigation</strong> with smooth transitions between scenes for intuitive exploration.'
    },
    {
      image: '/images/services/multimedia.png',
      title: 'Multimedia Integration',
      description: 'Background sounds, narrations, and multimedia elements that enhance the immersive experience.'
    },
    {
      image: '/images/services/cross-platform.png',
      title: 'Cross-Platform',
      description: 'Fully responsive tours that work perfectly on desktops, tablets, and mobile devices.'
    },
    {
      image: '/images/services/custom-branding.png',
      title: 'Custom Branding',
      description: 'Tailored design and branding that matches your hotel\'s unique identity and website aesthetic.'
    },
    {
      image: '/images/services/easy-integration.png',
      title: 'Easy Integration',
      description: 'Seamless integration into your existing website without changing design or requiring technical expertise.'
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
    <section id="services" className="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2>Our Services</h2>
          <p>Comprehensive virtual tour solutions for all types of hotels</p>
        </motion.div>
        <div className="services-grid" ref={containerRef}>
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="service-image"
                onClick={() => openModal(service.image, service.title)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={service.image} alt={service.title} />
              </motion.div>
              <h3>{service.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: service.description }}></p>
            </motion.div>
          ))}
        </div>

        {/* Full Screen Modal */}
        {isModalOpen && selectedImage && (
          <div 
            className={`modal-overlay ${isClosing ? 'modal-closing' : ''}`} 
            onClick={closeModal}
          >
            <div 
              className={`modal-content ${isClosing ? 'modal-content-closing' : ''}`} 
              onClick={(e) => e.stopPropagation()}
            >
              <button className={`modal-close ${isClosing ? 'modal-close-closing' : ''}`} onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              <div className="modal-image-container">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className={`modal-image ${isClosing ? 'modal-image-closing' : ''}`}
                />
              </div>
              <div className={`modal-info ${isClosing ? 'modal-info-closing' : ''}`}>
                <h3>{selectedImage.title}</h3>
                <p>Click outside or press the X to close</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;

