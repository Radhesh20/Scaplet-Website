import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-[#1a0000]/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">
              SCAPLET
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className={`text-white/80 hover:text-yellow-300 transition-all duration-300 pb-1 border-b-2 ${
              isActive('/') ? 'border-yellow-300 text-yellow-300' : 'border-transparent'
            }`}>
              Home
            </a>
            <a href="/about" className={`text-white/80 hover:text-yellow-300 transition-all duration-300 pb-1 border-b-2 ${
              isActive('/about') ? 'border-yellow-300 text-yellow-300' : 'border-transparent'
            }`}>
              About
            </a>
            <a href="/team" className={`text-white/80 hover:text-yellow-300 transition-all duration-300 pb-1 border-b-2 ${
              isActive('/team') ? 'border-yellow-300 text-yellow-300' : 'border-transparent'
            }`}>
              Team
            </a>
            <a href="/services" className={`text-white/80 hover:text-yellow-300 transition-all duration-300 pb-1 border-b-2 ${
              isActive('/services') ? 'border-yellow-300 text-yellow-300' : 'border-transparent'
            }`}>
              Services
            </a>
            <a href="/portfolio" className={`text-white/80 hover:text-yellow-300 transition-all duration-300 pb-1 border-b-2 ${
              isActive('/portfolio') ? 'border-yellow-300 text-yellow-300' : 'border-transparent'
            }`}>
              Portfolio
            </a>
            <a href="/blog" className={`text-white/80 hover:text-yellow-300 transition-all duration-300 pb-1 border-b-2 ${
              isActive('/blog') ? 'border-yellow-300 text-yellow-300' : 'border-transparent'
            }`}>
              Blog
            </a>
            <a href="/careers" className={`text-white/80 hover:text-yellow-300 transition-all duration-300 pb-1 border-b-2 ${
              isActive('/careers') ? 'border-yellow-300 text-yellow-300' : 'border-transparent'
            }`}>
              Careers
            </a>
            <a href="#contact" className="text-white/80 hover:text-yellow-300 transition-all duration-300 pb-1 border-b-2 border-transparent">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-yellow-300 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-white/80 hover:text-yellow-300 transition-colors">
                Home
              </a>
              <a href="/about" className="text-white/80 hover:text-yellow-300 transition-colors">
                About
              </a>
              <a href="/services" className="text-white/80 hover:text-yellow-300 transition-colors">
                Services
              </a>
              <a href="/portfolio" className="text-white/80 hover:text-yellow-300 transition-colors">
                Portfolio
              </a>
              <a href="/blog" className="text-white/80 hover:text-yellow-300 transition-colors">
                Blog
              </a>
              <a href="/careers" className="text-white/80 hover:text-yellow-300 transition-colors">
                Careers
              </a>
              <a href="#contact" className="text-white/80 hover:text-yellow-300 transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;