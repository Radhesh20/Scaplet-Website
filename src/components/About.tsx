import React from 'react';
import { Target, Eye, Users, Lightbulb, Shield, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'Cutting-edge solutions for modern challenges' },
    { icon: Shield, title: 'Transparency', description: 'Clear communication and honest practices' },
    { icon: Zap, title: 'Creativity', description: 'Unique designs that stand out' },
    { icon: TrendingUp, title: 'Growth', description: 'Focused on scaling your business' },
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
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <value.icon className="h-8 w-8 text-yellow-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-white/70">
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