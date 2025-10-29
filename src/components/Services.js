import React, { useState } from 'react';

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
      description: 'Professional panoramic photography capturing every detail of your hotel\'s spaces with high-quality imagery. Expert virtual tour photography services for luxury resorts, boutique hotels, and budget accommodations worldwide.'
    },
    {
      image: '/images/services/interactive-navigation.png',
      title: 'Interactive Navigation',
      description: 'Seamless <strong>keyboard and mouse navigation</strong> with smooth transitions between scenes for intuitive exploration. Advanced virtual tour navigation that enhances guest experience and increases booking conversion rates.'
    },
    {
      image: '/images/services/multimedia.png',
      title: 'Multimedia Integration',
      description: 'Background sounds, narrations, and multimedia elements that enhance the immersive virtual tour experience. Professional audio and visual integration for engaging hotel virtual tours.'
    },
    {
      image: '/images/services/cross-platform.png',
      title: 'Cross-Platform',
      description: 'Fully responsive virtual tours that work perfectly on desktops, tablets, and mobile devices. Mobile-optimized virtual tour development for maximum accessibility and guest engagement.'
    },
    {
      image: '/images/services/custom-branding.png',
      title: 'Custom Branding',
      description: 'Tailored design and branding that matches your hotel\'s unique identity and website aesthetic. Custom virtual tour branding services for luxury resorts and boutique hotels.'
    },
    {
      image: '/images/services/easy-integration.png',
      title: 'Easy Integration',
      description: 'Seamless integration into your existing website without changing design or requiring technical expertise. Professional virtual tour integration services for hotels of all sizes.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Professional Virtual Tour Development Services</h2>
          <p>Comprehensive 360° virtual tour solutions for luxury resorts, boutique hotels, budget accommodations, and bed & breakfast establishments worldwide. Our expert virtual tour development services help hotels increase bookings and guest confidence.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in-up">
              <div 
                className="service-image"
                onClick={() => openModal(service.image, service.title)}
              >
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: service.description }}></p>
            </div>
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

