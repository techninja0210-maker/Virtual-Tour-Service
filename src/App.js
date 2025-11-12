import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import backgroundImage from './images/background.jpg';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import GoogleAnalytics from './components/GoogleAnalytics';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lenis from 'lenis';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const KeyBenefits = lazy(() => import('./components/KeyBenefits'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Downloads = lazy(() => import('./components/Downloads'));
const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '200px',
    color: '#A8D8EA',
    fontSize: '18px'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #A8D8EA',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '10px'
    }}></div>
    Loading...
  </div>
);

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Virtual Tour Development Service",
    "description": "Professional 360° virtual tour development for hotels worldwide. Create immersive experiences that increase bookings and guest confidence.",
    "provider": {
      "@type": "Organization",
      "name": "Virtual Tour Development Service",
      "founder": {
        "@type": "Person",
        "name": "Jovan Spasojevic",
        "email": "j.virtualtour.ceo@gmail.com"
      }
    },
    "serviceType": "Virtual Tour Development",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Professional virtual tour development services",
      "category": "Digital Marketing Services"
    }
  };

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      if (window.lenis === lenis) {
        delete window.lenis;
      }
    };
  }, []);

  return (
    <HelmetProvider>
      <GoogleAnalytics trackingId="GA_TRACKING_ID" />
      <SEO 
        structuredData={structuredData}
        title="Professional Virtual Tour Development Service"
        description="Transform your hotel's online presence with professional 360° virtual tours. Expert development services that increase bookings and guest confidence worldwide."
        keywords="virtual tour development, 360 hotel tours, immersive hotel experience, virtual reality tourism, hotel booking optimization, interactive property tours, professional virtual tour services"
      />
      <div 
        className="App"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <Navbar />
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <Services />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <KeyBenefits />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Downloads />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;

