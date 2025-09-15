import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'TechStartup India', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Fashion Forward', logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'GreenTech Solutions', logo: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Global Consulting', logo: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Local Restaurant Chain', logo: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'EdTech Startup', logo: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'FinTech Solutions', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Healthcare Plus', logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100' },
  ];

  return (
    <section className="py-20 bg-[#2a0000] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join the growing list of successful businesses that trust SCAPLET for their digital transformation
          </p>
        </div>

        {/* Scrolling Clients */}
        <div className="relative">
          {/* First Row - Left to Right */}
          <div className="flex animate-scroll-left mb-8">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="w-24 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white/80 font-semibold text-sm text-center">
                      {client.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex animate-scroll-right">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="w-24 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white/80 font-semibold text-sm text-center">
                      {client.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white/80 font-medium">Ready to join them?</span>
            <a 
              href="#contact" 
              className="ml-4 bg-white text-[#8B0000] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;