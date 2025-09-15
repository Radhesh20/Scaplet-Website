import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Complete e-commerce solution with payment integration and inventory management.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'Payment Gateway']
    },
    {
      title: 'Restaurant Mobile App',
      category: 'App Development',
      description: 'Food ordering app with real-time tracking and payment integration.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Flutter', 'Firebase', 'Real-time']
    },
    {
      title: 'Brand Social Campaign',
      category: 'Digital Marketing',
      description: 'Social media campaign that increased engagement by 300% in 3 months.',
      image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Social Media', 'Content Creation', 'Analytics']
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Professional corporate website with modern design and SEO optimization.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['UI/UX', 'SEO', 'Responsive']
    },
    {
      title: 'Fitness App UI/UX',
      category: 'App Design',
      description: 'Complete UI/UX design for a fitness tracking mobile application.',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['UI/UX', 'Mobile Design', 'Prototyping']
    },
    {
      title: 'Startup Landing Page',
      category: 'Web Development',
      description: 'High-converting landing page for a tech startup with A/B testing.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Landing Page', 'Conversion', 'A/B Testing']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
            Take a look at some of our recent projects and the results we've achieved for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <button className="bg-white text-[#1C1C1C] p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-[#E63946] font-semibold">{project.category}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#4A4A4A] mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-[#F5F5F5] text-[#4A4A4A] px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="bg-[#E63946] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#FF4C29] transition-colors inline-flex items-center group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;