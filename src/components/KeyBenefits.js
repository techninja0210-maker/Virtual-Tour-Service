import React from 'react';
import './KeyBenefits.css';

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

  return (
    <section className="key-benefits">
      <div className="container">
        <div className="section-header">
          <h2>Main Benefits</h2>
          <p>Discover how our virtual tour service transforms your hotel's online presence</p>
        </div>
        
        <div className="benefits-list">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className={`benefit-item ${benefit.direction}`}
            >
              <div className="benefit-content">
                <div className="benefit-image">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    loading="lazy"
                  />
                </div>
                <div className="benefit-text">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
