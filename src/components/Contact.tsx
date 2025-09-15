import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-[#2a0000] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to start your digital transformation? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Start a Conversation
            </h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              We're here to help you grow your business. Whether you need a new website, 
              want to improve your social media presence, or need a custom app, 
              we're ready to bring your vision to life.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-yellow-300 rounded-full p-3 mr-4">
                  <Mail className="h-5 w-5 text-[#8B0000]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a 
                    href="mailto:scapletofficial@gmail.com" 
                    className="text-white/70 hover:text-yellow-300 transition-colors"
                  >
                    scapletofficial@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-yellow-300 rounded-full p-3 mr-4">
                  <Phone className="h-5 w-5 text-[#8B0000]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-white/70">+91 XXX XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-yellow-300 rounded-full p-3 mr-4">
                  <MapPin className="h-5 w-5 text-[#8B0000]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-white/70">India</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/share/1CxHgPNzpz/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/scapletofficial?igsh=MWM4amhnOWNtYmxuaw==" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://x.com/scapletofficial?t=V3PaTBCtxe2aIPe1t8m95w&s=09" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/scaplet/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="+91 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Design & Development</option>
                    <option value="social-media">Social Media Campaigns</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="app-development">App Development</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50 resize-none"
                  placeholder="Tell us about your project, goals, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#8B0000] py-4 px-6 rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;