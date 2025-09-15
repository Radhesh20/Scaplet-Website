import React from 'react';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#8B0000] via-[#A0001C] to-[#E63946] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Sparkles className="h-8 w-8 text-white/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <Zap className="h-6 w-6 text-white/30" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-slow">
          <TrendingUp className="h-10 w-10 text-white/15" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
            <span className="text-sm font-medium">Creative Technology Startup</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-gradient">
              We Design.
            </span>
            <span className="block bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-gradient delay-300">
              We Develop.
            </span>
            <span className="block bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent animate-gradient delay-500">
              We Scale.
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light">
              SCAPLET transforms businesses through 
              <span className="font-semibold text-yellow-300"> stunning websites</span>, 
              <span className="font-semibold text-red-200"> strategic marketing</span>, and 
              <span className="font-semibold text-blue-200"> innovative apps</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-white text-[#8B0000] rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </a>
            <a 
              href="/services" 
              className="group px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              Request Quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-black text-yellow-300 mb-2">50+</div>
                <div className="text-white/80">Projects Delivered</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-black text-red-300 mb-2">30+</div>
                <div className="text-white/80">Happy Clients</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-black text-blue-300 mb-2">2+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-[#1a0000]">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;