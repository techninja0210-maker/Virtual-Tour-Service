import React from 'react';

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Pricing</h2>
          <p>Flexible pricing options to fit your project needs</p>
        </div>
        <div className="pricing-content">
          <div className="pricing-card fade-in-up">
            <h3>Virtual Tour Development</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">10-20</span>
              <span className="period">per image</span>
            </div>
            <p>Depending on the level of detail required</p>
          </div>
          <div className="pricing-card fade-in-up">
            <h3>Professional Photography</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">10-50</span>
              <span className="period">per image</span>
            </div>
            <p>Based on quality requirements - from basic to premium</p>
          </div>
        </div>
        <div className="pricing-note">
          <p>
            <i className="fas fa-info-circle"></i>
            {' '}We offer flexible pricing to fit your project needs while ensuring excellent results. Contact us for a customized quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

