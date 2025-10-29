import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Twitter, Sparkles, Zap, Star, CheckCircle2 } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const Contact = () => {
  const { services } = useAdmin();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceCategories = Array.from(new Set(services.map(service => service.category)));

  const additionalFeatures = [
    'E-commerce Integration',
    'Payment Gateway',
    'User Authentication',
    'Admin Dashboard',
    'Real-time Chat',
    'Push Notifications',
    'Multi-language Support',
    'API Development',
    'Analytics Integration',
    'Social Media Integration',
    'Database Design',
    'Cloud Deployment'
  ];

  const budgetRanges = [
    'Under ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    'Above ₹1,00,000'
  ];

  const timelines = [
    '1-2 weeks',
    '2-4 weeks',
    '1-2 months',
    '2-3 months',
    '3+ months'
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('service');
    if (serviceId) {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setFormData(prev => ({ ...prev, serviceType: service.category }));
      }
    }
  }, [services]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Quote Request:', {
      ...formData,
      selectedFeatures
    });

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your request! We\'ll provide a detailed quote within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      setSelectedFeatures([]);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#2a0000] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500/10 to-yellow-300/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Sparkles className="h-6 w-6 text-white/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <Zap className="h-4 w-4 text-yellow-300/30" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-slow">
          <Star className="h-5 w-5 text-white/15" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
            <span className="text-sm font-medium text-white">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to start your digital transformation? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Sparkles className="h-6 w-6 text-yellow-300 mr-2" />
                  Let's Start a Conversation
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  We're here to help you grow your business. Whether you need a new website, 
                  want to improve your social media presence, or need a custom app, 
                  we're ready to bring your vision to life.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="group flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full p-3 mr-4 group-hover:scale-110 transition-transform">
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
                  
                  <div className="group flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full p-3 mr-4 group-hover:scale-110 transition-transform">
                      <Phone className="h-5 w-5 text-[#8B0000]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-white/70">+91 9487240051 / +91 9791903451</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full p-3 mr-4 group-hover:scale-110 transition-transform">
                      <MapPin className="h-5 w-5 text-[#8B0000]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-white/70">India</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Social Media Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Star className="h-5 w-5 text-yellow-300 mr-2" />
                    Follow Our Journey
                  </h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/share/1CxHgPNzpz/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 hover:border-yellow-300"
                    >
                      <Facebook className="h-5 w-5 group-hover:text-yellow-300 transition-colors" />
                    </a>
                    <a 
                      href="https://www.instagram.com/scapletofficial?igsh=MWM4amhnOWNtYmxuaw==" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 hover:border-yellow-300"
                    >
                      <Instagram className="h-5 w-5 group-hover:text-yellow-300 transition-colors" />
                    </a>
                    <a 
                      href="https://x.com/scapletofficial?t=V3PaTBCtxe2aIPe1t8m95w&s=09" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 hover:border-yellow-300"
                    >
                      <Twitter className="h-5 w-5 group-hover:text-yellow-300 transition-colors" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/scaplet/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 hover:border-yellow-300"
                    >
                      <Linkedin className="h-5 w-5 group-hover:text-yellow-300 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
              <div className="absolute top-4 right-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full p-3">
                      <Star className="h-6 w-6 text-[#8B0000]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get Your Custom Quote
                  </h3>
                  <p className="text-white/70">
                    Tell us about your project and we'll provide a detailed quote within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
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
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50 group-hover:bg-white/15"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="group">
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
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50 group-hover:bg-white/15"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50 group-hover:bg-white/15"
                        placeholder="+91 9487240051"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50 group-hover:bg-white/15"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="group">
                      <label htmlFor="serviceType" className="block text-sm font-medium text-white mb-2">
                        Service Type *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white group-hover:bg-white/15"
                      >
                        <option value="">Select Service</option>
                        {serviceCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="group">
                      <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white group-hover:bg-white/15"
                      >
                        <option value="">Select Budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="group">
                      <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white group-hover:bg-white/15"
                      >
                        <option value="">Select Timeline</option>
                        {timelines.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      Additional Features (Optional)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {additionalFeatures.map((feature) => (
                        <button
                          key={feature}
                          type="button"
                          onClick={() => handleFeatureToggle(feature)}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                            selectedFeatures.includes(feature)
                              ? 'bg-yellow-300/20 border-2 border-yellow-300 text-white'
                              : 'bg-white/10 border border-white/30 text-white/70 hover:bg-white/15'
                          }`}
                        >
                          <span className="text-xs">{feature}</span>
                          {selectedFeatures.includes(feature) && (
                            <CheckCircle2 className="h-4 w-4 text-yellow-300 ml-1" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50 resize-none group-hover:bg-white/15"
                      placeholder="Describe your project in detail. Include your goals, target audience, specific requirements, and any reference websites or apps you like..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#8B0000] py-4 px-6 rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#8B0000] mr-2"></div>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Request Custom Quote
                      </>
                    )}
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