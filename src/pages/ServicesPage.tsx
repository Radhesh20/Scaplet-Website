import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';

function ServicesPage() {
  const { services } = useAdmin();
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: ''
  });

  const serviceCategories = Array.from(new Set(services.map(service => service.category)));

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleChooseService = (serviceId: string) => {
    navigate(`/contact?service=${serviceId}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedServiceNames = services
      .filter(service => selectedServices.includes(service.id))
      .map(service => service.name);
    
    console.log('Quote Request:', {
      ...formData,
      selectedServices: selectedServiceNames
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
                    <button
                      onClick={() => handleChooseService(service.id)}
                      className="w-full btn-primary"
                    >
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
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select Services (Check all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className="flex items-center space-x-3 cursor-pointer glass-effect p-3 rounded-lg hover:bg-blue-50"
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => handleServiceToggle(service.id)}
                      className="text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{service.name}</span>
                    {selectedServices.includes(service.id) && (
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
                <option value="5000-15000">₹5,000 - ₹15,000</option>
                <option value="15000-30000">₹15,000 - ₹30,000</option>
                <option value="30000-50000">₹30,000 - ₹50,000</option>
                <option value="50000+">₹50,000+</option>
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