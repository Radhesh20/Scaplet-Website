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
    { year: '2025', title: 'Company Founded', description: 'SCAPLET was born with a vision to transform digital experiences in India' },
    { year: '2025', title: 'First Projects', description: 'Successfully launched with initial client projects' },
    { year: '2025', title: 'Growing Portfolio', description: 'Building our portfolio with diverse, successful projects' },
    { year: '2026', title: 'Expansion Plans', description: 'Planning to expand our services and client base' },
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
            <div className="space-y-4 text-white/80 text-lg leading-relaxed">
              <p>• Deliver high-quality, cost-effective, and reliable services in web, app, and digital solutions</p>
              <p>• Provide efficient mobile & laptop services ensuring customer trust and satisfaction</p>
              <p>• Create value-driven digital campaigns that enhance brand growth</p>
              <p>• Build long-term relationships with clients through innovation, transparency, and timely delivery</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-yellow-300 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              To be a trusted and innovative service provider, delivering digital solutions and 
              technical support that empower businesses and individuals to thrive in a connected world.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-white/80 text-lg max-w-4xl mx-auto">
              SCAPLET was founded in 2025 as a digital-first creative studio by a dedicated team 
              with a vision to transform how businesses approach their digital presence in India.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
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
          <div className="relative bg-gradient-to-br from-[#8B0000] via-[#A0001C] to-[#E63946] text-white rounded-2xl p-12 border border-white/20 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-[#8B0000]" />
              </div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                Ready to Transform Your Vision?
              </h3>
              <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Join the digital revolution with SCAPLET. Let's create something extraordinary together 
                and take your business to new heights in the digital landscape.
              </p>
              <a 
                href="#contact" 
                className="group bg-white text-[#8B0000] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center transform hover:scale-105 shadow-2xl"
              >
                <span className="mr-2">🚀</span>
                Start Your Journey
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;