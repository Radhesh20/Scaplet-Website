import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#8B0000]">
      <Header />
      <Hero />
      <About />
      <Clients />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;