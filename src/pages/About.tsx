import React from 'react';
import { Target, Eye, Users, Lightbulb, Shield, Zap, TrendingUp, Award, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'Cutting-edge solutions for modern challenges' },
    { icon: Shield, title: 'Transparency', description: 'Clear communication and honest practices' },
    { icon: Zap, title: 'Creativity', description: 'Unique designs that stand out' },
    { icon: TrendingUp, title: 'Growth', description: 'Focused on scaling your business' },
  ];

  const milestones = [
    { year: '2022', title: 'Company Founded', description: 'SCAPLET was born with a vision to transform digital experiences' },
    { year: '2023', title: 'First 20 Clients', description: 'Successfully delivered projects for 20+ businesses' },
    { year: '2024', title: '50+ Projects', description: 'Expanded our portfolio with diverse, successful projects' },
    { year: '2025', title: 'Global Expansion', description: 'Planning to serve clients worldwide' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B0000] via-[#A0001C] to-[#E63946]">
      {/* Header */}
      <div className="bg-[#1a0000]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About SCAPLET
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A digital-first creative studio founded by passionate innovators, dedicated to empowering businesses through cutting-edge digital solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-yellow-300 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              At SCAPLET, our mission is to empower businesses and creators with digital-first 
              solutions that are visually stunning, strategically effective, and scalable. 
              We aim to be more than just a service provider—we are your growth partner.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-yellow-300 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              Our vision is to become a leading digital innovation studio in India and beyond, 
              helping businesses compete globally through creativity, technology, and strategy.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-white/80 text-lg max-w-4xl mx-auto">
              SCAPLET was founded as a digital-first creative studio by a dedicated two-man team 
              with a vision to transform how businesses approach their digital presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-300 text-[#8B0000] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {milestone.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:bg-white/5 p-6 rounded-xl transition-all duration-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-white/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
            <div className="text-white/80">Projects Completed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">30+</div>
            <div className="text-white/80">Happy Clients</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">2+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">98%</div>
            <div className="text-white/80">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#8B0000] to-[#E63946] text-white rounded-2xl p-8 border border-white/20">
            <Users className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <a 
              href="#contact" 
              className="bg-white text-[#8B0000] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;