import React from 'react';
import './KeyBenefits.css';

const KeyBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Increase Guest Confidence with Virtual Tours",
      description: "Professional 360° virtual tours let potential guests see exactly what your hotel looks like, building trust and reducing uncertainty about their stay. This transparency leads to more confident booking decisions and higher conversion rates for luxury resorts, boutique hotels, and budget accommodations.",
      image: "/images/1th.png",
      direction: "left"
    },
    {
      id: 2,
      title: "Higher Engagement and Booking Conversion Rates",
      description: "Guests spend more time exploring your hotel online with immersive virtual tour experiences, leading to higher booking rates and better engagement on your website. Virtual tours create an interactive experience that keeps visitors engaged longer and increases the likelihood of booking.",
      image: "/images/2th.jpg",
      direction: "right"
    },
    {
      id: 3,
      title: "Wider Reach and Global Accessibility",
      description: "Guests from anywhere in the world can explore your hotel at any time with 360° virtual tours, increasing your hotel's visibility to a global audience. Break down geographic barriers and reach international travelers worldwide with professional virtual tour development services.",
      image: "/images/3th.png",
      direction: "left"
    },
    {
      id: 4,
      title: "Cost and Time Efficiency for Hotels",
      description: "Virtual tours reduce the need for in-person visits, saving time and resources for both the hotel and potential guests. Provide instant access to property information 24/7 with professional virtual tour development that works for all hotel types.",
      image: "/images/4th.png",
      direction: "right"
    }
  ];

  return (
    <section className="key-benefits">
      <div className="container">
        <div className="section-header">
          <h2>Key Benefits of Virtual Tour Development for Hotels</h2>
          <p>Discover how our professional 360° virtual tour development services transform your hotel's online presence, increase booking conversion rates, and enhance guest confidence. Proven results for luxury resorts, boutique hotels, and budget accommodations worldwide.</p>
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
