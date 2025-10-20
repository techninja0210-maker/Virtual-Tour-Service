import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      icon: 'fas fa-hotel',
      title: 'Hotel Monte Cristo Paris',
      description: 'Luxury hotel showcasing elegant rooms and amenities',
      link: 'https://www.hotelmontecristoparis.com/virtual-tour'
    },
    {
      icon: 'fas fa-building',
      title: 'The Londoner',
      description: 'Modern hotel with contemporary design and city views',
      link: 'https://www.thelondoner.com/about-us/virtual-tour'
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
      link: 'https://visitingmedia.com/tt8/?ttid=kimpton-canary-hotel#/360?group=0&tour=0'
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Virtual Tour Now</h2>
          <p>Explore some of our recent virtual tour projects</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item fade-in-up">
              <div className="portfolio-image">
                <img src="/images/walking.png" alt="Virtual Tour" />
              </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

