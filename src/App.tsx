import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AdminProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/*" element={
              <>
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AdminProvider>
  );
}

export default App;