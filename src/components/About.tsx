import React, { useState } from 'react';
import { Target, Eye, Users, Lightbulb, Shield, Zap, TrendingUp, Sparkles } from 'lucide-react';

const About = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const values = [
    { 
      icon: Lightbulb, 
      title: 'Innovation', 
      description: 'Cutting-edge solutions for modern challenges',
      color: 'from-yellow-400 to-orange-500'
    },
    { 
      icon: Shield, 
      title: 'Transparency', 
      description: 'Clear communication and honest practices',
      color: 'from-blue-400 to-cyan-500'
    },
    { 
      icon: Zap, 
      title: 'Creativity', 
      description: 'Unique designs that stand out',
      color: 'from-purple-400 to-pink-500'
    },
    { 
      icon: TrendingUp, 
      title: 'Growth', 
      description: 'Focused on scaling your business',
      color: 'from-green-400 to-emerald-500'
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#1a0000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About SCAPLET
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A digital-first creative studio founded by a passionate two-man team, 
            dedicated to empowering businesses through innovative digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Target className="h-6 w-6 text-yellow-300 mr-2" />
              Our Mission
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              At SCAPLET, our mission is to empower businesses and creators with digital-first 
              solutions that are visually stunning, strategically effective, and scalable. 
              We aim to be more than just a service provider—we are your growth partner.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Eye className="h-6 w-6 text-yellow-300 mr-2" />
              Our Vision
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Our vision is to become a leading digital innovation studio in India and beyond, 
              helping businesses compete globally through creativity, technology, and strategy.
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer"
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className={`relative bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border border-white/20 transition-all duration-500 transform group-hover:scale-110 ${
                  hoveredValue === index ? 'shadow-2xl' : ''
                }`}>
                  {hoveredValue === index && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-full opacity-20 animate-pulse`}></div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {hoveredValue === index && (
                      <Sparkles className="absolute h-4 w-4 text-yellow-300 animate-spin" style={{ top: '10%', right: '10%' }} />
                    )}
                  </div>
                  <value.icon className={`h-8 w-8 transition-all duration-300 ${
                    hoveredValue === index ? 'text-yellow-300 scale-110' : 'text-white'
                  }`} />
                </div>
                <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  hoveredValue === index ? 'text-yellow-300' : 'text-white'
                }`}>
                  {value.title}
                </h4>
                <p className="text-white/70 transition-all duration-300 group-hover:text-white/90">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-[#8B0000] to-[#E63946] text-white rounded-2xl p-8 border border-white/20">
            <Users className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-4">
              Founded by Passionate Innovators
            </h3>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              SCAPLET was founded as a digital-first creative studio by a dedicated two-man team 
              with a vision to transform how businesses approach their digital presence. 
              We combine technical expertise with creative vision to deliver exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;