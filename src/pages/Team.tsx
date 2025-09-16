import React from 'react';
import { Linkedin, Twitter, Mail, Award, Code, Palette, TrendingUp } from 'lucide-react';

const Team = () => {
  const founders = [
    {
      name: 'Co-Founder & CEO',
      role: 'Visionary Leader',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Passionate about transforming businesses through innovative digital solutions. Leads strategic vision and client relationships.',
      skills: ['Strategic Planning', 'Business Development', 'Client Relations', 'Project Management'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'founder1@scaplet.com'
      }
    },
    {
      name: 'Co-Founder & CTO',
      role: 'Technical Innovator',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in cutting-edge technologies and creative design. Ensures every project meets the highest technical standards.',
      skills: ['Full-Stack Development', 'UI/UX Design', 'Mobile Apps', 'Digital Marketing'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'founder2@scaplet.com'
      }
    }
  ];

  const values = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'We use the latest technologies and best practices to deliver superior solutions.'
    },
    {
      icon: Palette,
      title: 'Creative Innovation',
      description: 'Our designs are not just beautiful, they\'re strategically crafted to convert.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Every solution we create is designed to help your business scale and succeed.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B0000] via-[#A0001C] to-[#E63946]">
      {/* Header */}
      <div className="bg-[#1a0000]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The passionate innovators behind SCAPLET's success. We're a small but mighty team dedicated to transforming your digital presence.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Founders Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Founders</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Meet the visionary duo who founded SCAPLET with a mission to revolutionize digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
                <div className="relative mb-6">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/20 group-hover:border-yellow-300 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#8B0000]/20 to-transparent"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{founder.name}</h3>
                <p className="text-yellow-300 font-semibold mb-4">{founder.role}</p>
                <p className="text-white/70 mb-6 leading-relaxed">{founder.bio}</p>
                
                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founder.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm border border-white/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href={founder.social.linkedin} 
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors border border-white/20 hover:border-yellow-300"
                  >
                    <Linkedin className="h-4 w-4 text-white hover:text-yellow-300 transition-colors" />
                  </a>
                  <a 
                    href={founder.social.twitter} 
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors border border-white/20 hover:border-yellow-300"
                  >
                    <Twitter className="h-4 w-4 text-white hover:text-yellow-300 transition-colors" />
                  </a>
                  <a 
                    href={`mailto:${founder.social.email}`} 
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors border border-white/20 hover:border-yellow-300"
                  >
                    <Mail className="h-4 w-4 text-white hover:text-yellow-300 transition-colors" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Approach</h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              We believe in combining technical expertise with creative vision to deliver solutions that not only look great but drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#8B0000] to-[#E63946] text-white rounded-2xl p-8 border border-white/20">
            <Award className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <a 
              href="/careers" 
              className="bg-white text-[#8B0000] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;