import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const ReadyToJoin = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleGetStarted = () => {
    setIsAnimating(true);
    setTimeout(() => {
      // Navigate to contact section
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setIsAnimating(false), 2000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-[#1a0000]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000] via-[#A0001C] to-[#E63946] opacity-20"></div>
          
          <div className="relative z-10">
            <div className={`transition-all duration-1000 ${isAnimating ? 'transform -translate-x-full opacity-0' : ''}`}>
              <div className="text-center">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-yellow-300 animate-pulse" />
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  Join our growing list of successful clients and take your digital presence to the next level.
                </p>
              </div>
            </div>

            {/* Animated Content */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
              isAnimating ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'
            }`}>
              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-[#8B0000] animate-spin" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Let's Create Something Amazing!
                </h3>
                <p className="text-white/80">
                  We're excited to work with you and bring your vision to life.
                </p>
              </div>
            </div>

            {/* Get Started Button */}
            <div className={`text-center transition-all duration-1000 ${isAnimating ? 'transform translate-x-full opacity-0' : ''}`}>
              <button
                onClick={handleGetStarted}
                className="group bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#8B0000] px-8 py-4 rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToJoin;