import React, { useState } from 'react';
import { Globe, Share2, TrendingUp, Smartphone, Clock, IndianRupee, Send, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    projectType: '',
    features: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFeatureChange = (feature: string) => {
    const updatedFeatures = formData.features.includes(feature)
      ? formData.features.filter(f => f !== feature)
      : [...formData.features, feature];
    
    setFormData({
      ...formData,
      features: updatedFeatures
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request! We\'ll get back to you within 24 hours.');
  };

  const services = [
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      gradient: 'from-blue-500 to-purple-600',
      items: [
        { name: 'Dynamic Website', price: '₹12,000–₹20,000', delivery: '1 week', features: ['Responsive Design', 'CMS Integration', 'SEO Ready'] },
        { name: 'Landing Page Design', price: '₹5,000–₹8,000', delivery: '3 days', features: ['High Conversion', 'Mobile Optimized', 'Fast Loading'] },
        { name: 'SEO Optimization', price: '₹3,000–₹6,000', delivery: 'Ongoing', features: ['Keyword Research', 'On-page SEO', 'Analytics'] },
        { name: 'Hosting + Database Setup', price: '₹3,000–₹6,000', delivery: '1 day', features: ['Cloud Hosting', 'SSL Certificate', 'Backup'] },
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Campaigns',
      description: 'Engaging content that builds your brand and drives engagement.',
      gradient: 'from-pink-500 to-red-600',
      items: [
        { name: 'Post & Story Creation + Posting', price: '₹3,000–₹8,000/month', delivery: 'Ongoing', features: ['Content Calendar', 'Brand Consistency', 'Engagement'] },
        { name: 'Content Strategy Planning', price: 'Custom Quote', delivery: '1 week', features: ['Market Research', 'Competitor Analysis', 'Strategy Document'] },
        { name: 'Brand Guidelines Creation', price: 'Custom Quote', delivery: '1 week', features: ['Logo Design', 'Color Palette', 'Typography'] },
      ]
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that grow your online presence.',
      gradient: 'from-green-500 to-teal-600',
      items: [
        { name: 'Posts & Stories (Content + Graphics)', price: '₹3,000–₹8,000/month', delivery: 'Ongoing', features: ['Custom Graphics', 'Copywriting', 'Scheduling'] },
        { name: 'Followers Interaction (DMs & Comments)', price: '₹5,000–₹12,000/month', delivery: 'Ongoing', features: ['Community Management', 'Response Templates', 'Engagement Tracking'] },
        { name: 'Analytics & Reporting', price: 'Included', delivery: 'Monthly', features: ['Performance Metrics', 'Growth Analysis', 'Recommendations'] },
      ]
    },
    {
      icon: Smartphone,
      title: 'App Design & Development',
      description: 'Custom mobile applications that deliver exceptional user experiences.',
      gradient: 'from-orange-500 to-yellow-600',
      items: [
        { name: 'Mobile App UI/UX Design', price: '₹10,000–₹25,000', delivery: '2 weeks', features: ['User Research', 'Wireframes', 'Prototypes'] },
        { name: 'Basic App Development (Flutter/Hybrid)', price: '₹20,000–₹45,000', delivery: '4-6 weeks', features: ['Cross-platform', 'API Integration', 'Testing'] },
        { name: 'App Store Submission', price: '₹2,000', delivery: '1 week', features: ['Store Optimization', 'Screenshots', 'Description'] },
      ]
    }
  ];

  const modifications = [
    { type: 'Basic Modifications', price: '₹2,500', description: 'Minor content updates, color changes', features: ['Text Updates', 'Image Replacement', 'Color Adjustments'] },
    { type: 'Intermediate Changes', price: '₹3,000–₹5,000', description: 'Layout adjustments, new sections', features: ['Layout Changes', 'New Sections', 'Feature Updates'] },
    { type: 'Full Revamp', price: '₹5,000–₹8,000', description: 'Complete redesign and restructure', features: ['Complete Redesign', 'New Architecture', 'Modern UI/UX'] },
  ];

  const additionalFeatures = [
    'E-commerce Integration', 'Payment Gateway', 'User Authentication', 'Admin Dashboard',
    'Real-time Chat', 'Push Notifications', 'Analytics Integration', 'Social Media Integration',
    'Multi-language Support', 'API Development', 'Database Design', 'Cloud Deployment'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B0000] via-[#A0001C] to-[#E63946]">
      {/* Header */}
      <div className="bg-[#1a0000]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the digital age
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${service.gradient} rounded-full p-4 mr-4`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-lg">{item.name}</h4>
                        <div className="flex items-center text-sm text-white/60 mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {item.delivery}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-yellow-300 text-lg">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-white/10 text-white/80 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Website Modifications */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Website Modifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {modifications.map((mod, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <h4 className="text-xl font-semibold text-white mb-3">
                  {mod.type}
                </h4>
                <div className="text-3xl font-bold text-yellow-300 mb-4">
                  {mod.price}
                </div>
                <p className="text-white/70 mb-4">
                  {mod.description}
                </p>
                <div className="space-y-2">
                  {mod.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-white/60">
                      <CheckCircle className="h-3 w-3 mr-2 text-green-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Quote Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Get Custom Quote
            </h3>
            <p className="text-white/80 text-lg">
              Tell us about your project and we'll provide a detailed quote within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
                  placeholder="+91 XXX XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
                  placeholder="Your Company"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Service Type *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white"
                >
                  <option value="">Select Service</option>
                  <option value="web-development">Web Design & Development</option>
                  <option value="social-media">Social Media Campaigns</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="app-development">App Development</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white"
                >
                  <option value="">Select Budget</option>
                  <option value="5000-15000">₹5,000 - ₹15,000</option>
                  <option value="15000-30000">₹15,000 - ₹30,000</option>
                  <option value="30000-50000">₹30,000 - ₹50,000</option>
                  <option value="50000+">₹50,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white"
                >
                  <option value="">Select Timeline</option>
                  <option value="asap">ASAP (Rush Job)</option>
                  <option value="1-2weeks">1-2 Weeks</option>
                  <option value="1month">1 Month</option>
                  <option value="2-3months">2-3 Months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            {/* Additional Features */}
            <div>
              <label className="block text-sm font-medium text-white mb-4">
                Additional Features (Optional)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {additionalFeatures.map((feature, index) => (
                  <label key={index} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeatureChange(feature)}
                      className="sr-only"
                    />
                    <div className={`flex items-center px-3 py-2 rounded-lg border transition-all duration-300 ${
                      formData.features.includes(feature)
                        ? 'bg-yellow-300/20 border-yellow-300 text-yellow-300'
                        : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10'
                    }`}>
                      <CheckCircle className={`h-4 w-4 mr-2 ${
                        formData.features.includes(feature) ? 'text-yellow-300' : 'text-white/40'
                      }`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Project Description *
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50 resize-none"
                placeholder="Describe your project in detail. Include your goals, target audience, specific requirements, and any reference websites or apps you like..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#8B0000] py-4 px-6 rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg"
            >
              <Send className="mr-2 h-5 w-5" />
              Request Custom Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;