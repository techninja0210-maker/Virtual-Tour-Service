import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Led by Jovan Spasojevic, we specialize exclusively in creating immersive virtual tours for hotels worldwide</p>
        </div>
        <div className="about-content">
          <div className="about-text">
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
              <div className="stat">
                <h4>5000+</h4>
                <p>Usability Tested</p>
              </div>
              <div className="stat">
                <h4>98%</h4>
                <p>User Satisfaction</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Mobile Responsive</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="team-member-image">
              <img src="/images/Jovan_Spasojevic.png" alt="Jovan Spasojevic - Team Leader" />
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

