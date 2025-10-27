import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'TechStartup India' },
    { name: 'Fashion Forward' },
    { name: 'GreenTech Solutions' },
    { name: 'Global Consulting' },
    { name: 'Local Restaurant Chain' },
    { name: 'EdTech Startup' },
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

        {/* Static Grid for Now - Scrolling Version Ready for Expansion */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group-hover:border-yellow-300">
                  <div className="w-full h-16 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                    <span className="text-white/80 font-semibold text-sm text-center group-hover:text-white">
                      {client.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scrolling Version (Hidden for now, ready for expansion) */}
          <div className="hidden">
            <div className="flex animate-scroll-left">
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
        </div>
      </div>
    </section>
  );
};

export default Clients;