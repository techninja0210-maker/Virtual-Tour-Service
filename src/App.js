import React from 'react';
import './App.css';
import backgroundImage from './images/background.jpg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import KeyBenefits from './components/KeyBenefits';
import Portfolio from './components/Portfolio';
import Downloads from './components/Downloads';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
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
      <Services />
      <KeyBenefits />
      <Portfolio />
      <About />
      <Downloads />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

