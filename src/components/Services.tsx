import React from 'react';
import { Globe, Share2, TrendingUp, Smartphone, Clock, IndianRupee } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      items: [
        { name: 'Dynamic Website', price: '₹12,000–₹20,000', delivery: '1 week' },
        { name: 'Landing Page Design', price: '₹5,000–₹8,000', delivery: '3 days' },
        { name: 'SEO Optimization', price: '₹3,000–₹6,000', delivery: 'Ongoing' },
        { name: 'Hosting + Database Setup', price: '₹3,000–₹6,000', delivery: '1 day' },
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Campaigns',
      description: 'Engaging content that builds your brand and drives engagement.',
      items: [
        { name: 'Post & Story Creation + Posting', price: '₹3,000–₹8,000/month', delivery: 'Ongoing' },
        { name: 'Content Strategy Planning', price: 'Custom Quote', delivery: '1 week' },
        { name: 'Brand Guidelines Creation', price: 'Custom Quote', delivery: '1 week' },
      ]
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that grow your online presence.',
      items: [
        { name: 'Posts & Stories (Content + Graphics)', price: '₹3,000–₹8,000/month', delivery: 'Ongoing' },
        { name: 'Followers Interaction (DMs & Comments)', price: '₹5,000–₹12,000/month', delivery: 'Ongoing' },
        { name: 'Analytics & Reporting', price: 'Included', delivery: 'Monthly' },
      ]
    },
    {
      icon: Smartphone,
      title: 'App Design & Development',
      description: 'Custom mobile applications that deliver exceptional user experiences.',
      items: [
        { name: 'Mobile App UI/UX Design', price: '₹10,000–₹25,000', delivery: '2 weeks' },
        { name: 'Basic App Development (Flutter/Hybrid)', price: '₹20,000–₹45,000', delivery: '4-6 weeks' },
        { name: 'App Store Submission', price: '₹2,000', delivery: '1 week' },
      ]
    }
  ];

  const modifications = [
    { type: 'Basic Modifications', price: '₹2,500', description: 'Minor content updates, color changes' },
    { type: 'Intermediate Changes', price: '₹3,000–₹5,000', description: 'Layout adjustments, new sections' },
    { type: 'Full Revamp', price: '₹5,000–₹8,000', description: 'Complete redesign and restructure' },
  ];

  return (
    <section id="services" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-[#E63946] rounded-full p-3 mr-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1C1C]">
                    {service.title}
                  </h3>
                  <p className="text-[#4A4A4A] mt-1">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center p-3 bg-[#F5F5F5] rounded-md">
                    <div>
                      <span className="font-medium text-[#1C1C1C]">{item.name}</span>
                      <div className="flex items-center text-sm text-[#4A4A4A] mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.delivery}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-[#E63946] text-sm">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Website Modifications Pricing */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-[#1C1C1C] mb-6 text-center">
            Website Modifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {modifications.map((mod, index) => (
              <div key={index} className="text-center p-6 border-2 border-[#F5F5F5] rounded-lg hover:border-[#E63946] transition-colors">
                <h4 className="text-lg font-semibold text-[#1C1C1C] mb-2">
                  {mod.type}
                </h4>
                <div className="text-2xl font-bold text-[#E63946] mb-3">
                  {mod.price}
                </div>
                <p className="text-[#4A4A4A] text-sm">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="bg-[#E63946] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#FF4C29] transition-colors inline-flex items-center"
          >
            <IndianRupee className="h-5 w-5 mr-2" />
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;