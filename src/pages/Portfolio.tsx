import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Filter, Star, Calendar, Users } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'TechFlow E-Commerce Platform',
      category: 'web-development',
      description: 'Complete e-commerce solution with payment integration, inventory management, and real-time analytics.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'Payment Gateway', 'Analytics'],
      client: 'TechFlow Solutions',
      duration: '6 weeks',
      rating: 5,
      results: ['300% increase in online sales', '50% reduction in cart abandonment', '24/7 automated support'],
      testimonial: "SCAPLET transformed our business completely. The platform they built exceeded all our expectations.",
      link: '#'
    },
    {
      id: 2,
      title: 'FoodieHub Mobile App',
      category: 'app-development',
      description: 'Food ordering app with real-time tracking, payment integration, and restaurant management system.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Flutter', 'Firebase', 'Real-time Tracking', 'Payment Integration'],
      client: 'FoodieHub Restaurant Chain',
      duration: '8 weeks',
      rating: 5,
      results: ['180% increase in orders', '95% customer satisfaction', '40% faster delivery times'],
      testimonial: "The app is beautiful and functional. Our customers love the seamless ordering experience.",
      link: '#'
    },
    {
      id: 3,
      title: 'StyleCraft Brand Campaign',
      category: 'digital-marketing',
      description: 'Complete brand transformation with social media campaigns, content strategy, and influencer partnerships.',
      image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Social Media', 'Content Creation', 'Brand Strategy', 'Influencer Marketing'],
      client: 'StyleCraft Fashion',
      duration: '12 weeks',
      rating: 5,
      results: ['500% increase in engagement', '250% growth in followers', '150% boost in sales'],
      testimonial: "Our brand visibility skyrocketed. SCAPLET's creative approach is unmatched.",
      link: '#'
    },
    {
      id: 4,
      title: 'EduTech Learning Platform',
      category: 'web-development',
      description: 'Interactive learning platform with video streaming, progress tracking, and certification system.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Video Streaming', 'LMS', 'Certification'],
      client: 'EduTech Academy',
      duration: '10 weeks',
      rating: 5,
      results: ['1000+ active students', '90% course completion rate', '4.8/5 user rating'],
      testimonial: "The platform is intuitive and engaging. Our students love the interactive features.",
      link: '#'
    },
    {
      id: 5,
      title: 'HealthCare+ Mobile App',
      category: 'app-development',
      description: 'Telemedicine app with appointment booking, video consultations, and prescription management.',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Flutter', 'Video Calls', 'Healthcare', 'Appointment System'],
      client: 'HealthCare+ Clinic',
      duration: '12 weeks',
      rating: 5,
      results: ['70% reduction in wait times', '200+ daily consultations', '98% patient satisfaction'],
      testimonial: "Revolutionary solution for modern healthcare. Patients and doctors both love it.",
      link: '#'
    },
    {
      id: 6,
      title: 'GreenTech Social Strategy',
      category: 'digital-marketing',
      description: 'Sustainability-focused social media campaign with educational content and community building.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Sustainability', 'Community Building', 'Educational Content', 'Social Impact'],
      client: 'GreenTech Solutions',
      duration: '16 weeks',
      rating: 5,
      results: ['300% increase in awareness', '50K+ community members', '25% increase in eco-friendly practices'],
      testimonial: "They helped us build a movement, not just a brand. Incredible impact on our mission.",
      link: '#'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web-development', name: 'Web Development', count: projects.filter(p => p.category === 'web-development').length },
    { id: 'app-development', name: 'App Development', count: projects.filter(p => p.category === 'app-development').length },
    { id: 'digital-marketing', name: 'Digital Marketing', count: projects.filter(p => p.category === 'digital-marketing').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B0000] via-[#A0001C] to-[#E63946]">
      {/* Header */}
      <div className="bg-[#1a0000]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-yellow-300">50+</div>
                <div className="text-white/80 text-sm">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-green-300">98%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-300">30+</div>
                <div className="text-white/80 text-sm">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-red-300">2+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                activeFilter === category.id
                  ? 'bg-white text-[#8B0000] shadow-lg transform scale-105'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.name}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeFilter === category.id ? 'bg-[#8B0000]/20' : 'bg-white/20'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'web-development' ? 'bg-blue-500/80 text-white' :
                    project.category === 'app-development' ? 'bg-green-500/80 text-white' :
                    'bg-purple-500/80 text-white'
                  }`}>
                    {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center text-white/80 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    {project.client}
                    <Calendar className="h-4 w-4 ml-4 mr-1" />
                    {project.duration}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                  <div className="space-y-1">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-center text-sm text-white/70">
                        <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full mr-2"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-white/60 text-sm ml-2">({project.rating}.0)</span>
                </div>

                {/* Testimonial */}
                <blockquote className="bg-white/5 rounded-lg p-4 mb-4 border-l-4 border-yellow-300">
                  <p className="text-white/80 italic text-sm">"{project.testimonial}"</p>
                  <cite className="text-white/60 text-xs mt-2 block">— {project.client}</cite>
                </blockquote>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#8B0000] py-3 px-6 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center group">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/80 text-lg mb-6">
              Join our growing list of successful clients and transform your digital presence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#8B0000] px-8 py-4 rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contact" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 hover:border-white transition-all duration-300 inline-flex items-center justify-center"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;