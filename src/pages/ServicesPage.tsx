import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

function ServicesPage() {
  const { services } = useAdmin();
  const [selectedService, setSelectedService] = useState<string>('');
  const [additionalFeatures, setAdditionalFeatures] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: '',
    serviceType: ''
  });

  const serviceCategories = Array.from(new Set(services.map(service => service.category)));

  const serviceOptions: { [key: string]: string[] } = {
    'web-development': [
      'Dynamic Website',
      'Landing Page Design',
      'SEO Optimization',
      'Hosting + Database Setup'
    ],
    'social-media-campaigns': [
      'Post & Story Creation + Posting',
      'Content Strategy Planning',
      'Brand Guidelines Creation'
    ],
    'digital-marketing': [
      'Posts & Stories (Content + Graphics)',
      'Followers Interaction (DMs & Comments)'
    ],
    'app-design-development': [
      'Mobile App UI/UX Design',
      'Basic App Development (Flutter/Hybrid)',
      'App Store Submission'
    ],
    'website-modifications': [
      'Basic Modifications',
      'Intermediate Changes',
      'Full Revamp'
    ]
  };

  const handleServiceToggle = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Quote Request:', {
      ...formData,
      selectedService,
      additionalFeatures
    });

    alert('Quote request submitted! We\'ll get back to you soon.');
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        {serviceCategories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">{category}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter(service => service.category === category)
                .map((service, index) => (
                  <div key={service.id} className="glass-card p-6 hover:shadow-2xl transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                      <Zap className="h-6 w-6 text-blue-500" />
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Price:</span>
                        <span className="font-semibold text-green-600">{service.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Delivery:</span>
                        <span className="font-semibold text-blue-600">{service.delivery}</span>
                      </div>
                    </div>
                    <button className="w-full btn-primary">
                      Choose Service
                    </button>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}

        {/* Custom Quote Request */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mt-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="gradient-text">Request Custom Quote</span>
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Select the services you need and tell us about your project. We'll provide a personalized quote.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none glass-effect"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none glass-effect"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="your number (with country code)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none glass-effect"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none glass-effect"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Type *
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none glass-effect"
              >
                <option value="">Select service type</option>
                <option value="web-development">Web Development</option>
                <option value="social-media-campaigns">Social Media Campaigns</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="app-design-development">App Design & Development</option>
                <option value="website-modifications">Website Modifications</option>
                <option value="other">Other</option>
              </select>
            </div>

            {formData.serviceType && formData.serviceType !== 'other' && serviceOptions[formData.serviceType] && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Service
                </label>
                <div className="space-y-3">
                  {serviceOptions[formData.serviceType].map((serviceName) => (
                    <label
                      key={serviceName}
                      className="flex items-center space-x-3 cursor-pointer glass-effect p-3 rounded-lg hover:bg-blue-50"
                    >
                      <input
                        type="radio"
                        name="selectedService"
                        value={serviceName}
                        checked={selectedService === serviceName}
                        onChange={() => handleServiceToggle(serviceName)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium">{serviceName}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Additional Features (Optional)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  'E-commerce Integration',
                  'Payment Gateway',
                  'User Authentication',
                  'Admin Dashboard',
                  'Real-time Chat',
                  'Push Notifications',
                  'Analytics Integration',
                  'Social Media Integration',
                  'Multi-language Support',
                  'API Development',
                  'Database Design',
                  'Cloud Deployment'
                ].map((feature) => (
                  <label
                    key={feature}
                    className="flex items-center space-x-3 cursor-pointer glass-effect p-3 rounded-full hover:bg-blue-50"
                  >
                    <input
                      type="checkbox"
                      checked={additionalFeatures.includes(feature)}
                      onChange={() => {
                        setAdditionalFeatures(prev =>
                          prev.includes(feature)
                            ? prev.filter(f => f !== feature)
                            : [...prev, feature]
                        );
                      }}
                      className="text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{feature}</span>
                    {additionalFeatures.includes(feature) && (
                      <Check className="h-4 w-4 text-blue-600" />
                    )}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none glass-effect"
              >
                <option value="">Select budget range</option>
                <option value="below-10000">below ₹10,000</option>
                <option value="10000-25000">₹10,000 - ₹25,000</option>
                <option value="25000-50000">₹25,000 - ₹50,000</option>
                <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                <option value="100000+">₹1,00,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none glass-effect"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn-primary flex items-center space-x-2 mx-auto">
                <span>Request Quote</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesPage;