import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#contact' },
      { name: 'Blog', href: '#' }
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Social Media', href: '#services' },
      { name: 'Digital Marketing', href: '#services' },
      { name: 'App Development', href: '#services' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  return (
    <footer className="bg-[#0d0000] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">SCAPLET</div>
            <p className="text-white/70 mb-6 leading-relaxed">
              We Design. We Develop. We Market. We Scale. Your trusted partner 
              for digital transformation and business growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1CxHgPNzpz/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/scapletofficial?igsh=MWM4amhnOWNtYmxuaw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://x.com/scapletofficial?t=V3PaTBCtxe2aIPe1t8m95w&s=09" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/scaplet/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-yellow-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-yellow-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-yellow-300 mr-2" />
                <a 
                  href="mailto:scapletofficial@gmail.com" 
                  className="text-white/70 hover:text-yellow-300 transition-colors text-sm"
                >
                  scapletofficial@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-yellow-300 mr-2" />
                <span className="text-white/70 text-sm">+91 XXX XXX XXXX</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Support</h4>
              <ul className="space-y-1">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-yellow-300 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} SCAPLET. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-yellow-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-300 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;