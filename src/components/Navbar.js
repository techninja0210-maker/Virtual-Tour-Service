import React, { useState, useEffect } from 'react';
import smoothScrollTo from '../utils/smoothScrollTo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    smoothScrollTo(sectionId);
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = ['home', 'about', 'services', 'portfolio', 'downloads', 'contact'];
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Check if user is at the top of the page (home section)
      setIsAtTop(currentScrollY <= 100);
      
      // Handle navbar visibility based on scroll direction with throttling
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      
      if (scrollDifference > 5) { // Only trigger if scroll difference is significant
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          // Scrolling down and past 80px - hide navbar
          setIsNavbarVisible(false);
        } else if (currentScrollY < lastScrollY || currentScrollY <= 80) {
          // Scrolling up or near top - show navbar
          setIsNavbarVisible(true);
        }
      }
      
      // Update active section
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
      
      // Set timeout to update lastScrollY after a brief delay
      const timeout = setTimeout(() => {
        setLastScrollY(currentScrollY);
      }, 10);
      
      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${!isNavbarVisible ? 'navbar-hidden' : ''} ${isAtTop ? 'navbar-at-top' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/images/Service_logo.png" alt="VirtualTour Pro" className="logo-img" />
          <h2>VirtualTour Pro</h2>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

