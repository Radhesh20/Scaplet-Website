import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ReadyToJoin from './components/ReadyToJoin';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Pages
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import AboutPage from './pages/About';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Careers from './pages/Careers';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Clients />
      <Testimonials />
      <ReadyToJoin />
      <FAQ />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#8B0000]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;