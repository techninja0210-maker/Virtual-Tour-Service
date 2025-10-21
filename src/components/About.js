import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Our Virtual Tour Development Service</h2>
          <p>Led by Jovan Spasojevic, we specialize exclusively in creating immersive 360° virtual tours for hotels worldwide. Our professional virtual tour development service transforms hotel marketing and increases booking conversions.</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission: Revolutionizing Hotel Marketing with Virtual Tours</h3>
            <p>
              We began with the goal of offering an interactive and detailed look at hotels, as traditional photos 
              and descriptions often weren't enough to convince potential guests. By integrating professional 360° photography, 
              interactive navigation, and multimedia elements, we allow guests to virtually explore hotel rooms, amenities, 
              and common areas at their own pace, significantly increasing booking confidence and conversion rates.
            </p>
            
            <h3>Our Expertise in Virtual Tour Development</h3>
            <p>
              With a proven track record in transforming hotel marketing strategies, our team specializes in creating 
              immersive 360° virtual tours that boost guest engagement, drive direct bookings, and deliver a seamless, 
              interactive experience tailored to each hotel's unique offerings. We understand the hospitality industry's 
              needs and create virtual tours that showcase your property's best features.
            </p>
            
            <div className="stats">
              <div className="stat">
                <h4>5000+</h4>
                <p>Virtual Tours Tested</p>
              </div>
              <div className="stat">
                <h4>98%</h4>
                <p>Hotel Client Satisfaction</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Mobile Responsive Tours</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="team-member-image">
              <img src="/images/Jovan_Spasojevic.png" alt="Jovan Spasojevic - Virtual Tour Development Expert and Team Leader" />
              <div className="image-overlay">
                <p>Jovan Spasojevic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

