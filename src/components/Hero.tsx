import React from 'react';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-teal-50 via-sky-50 to-white text-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Sparkles className="h-8 w-8 text-slate-200" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <Zap className="h-6 w-6 text-slate-200/60" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-slow">
          <TrendingUp className="h-10 w-10 text-slate-200/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-white/30 mb-8">
            <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">Creative Technology Startup</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:justify-center md:space-x-6">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  We Design.
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  We Develop.
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:justify-center md:space-x-6">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  We Market.
                </span>
                {/* <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  We Scale.
                </span> */}
              </div>
            </div>
          </h1>
          
          {/* Subtitle (matched to image) */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              SCAPLET helps businesses build stunning websites, grow on social media, and scale through smart digital marketing and app solutions.
            </p>
          </div>

          {/* CTA Buttons (primary gradient + secondary outlined) */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 transition transform hover:-translate-y-1"
            >
              Get Started
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full text-slate-900 font-semibold text-lg bg-white border-2 border-slate-300 shadow-md hover:bg-slate-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Request a Quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/50 transition-all duration-300">
                <div className="text-3xl font-black text-blue-500 mb-2">5+</div>
                <div className="text-slate-700">Projects Delivered</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/50 transition-all duration-300">
                <div className="text-3xl font-black text-teal-400 mb-2">3+</div>
                <div className="text-slate-700">Happy Clients</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/50 transition-all duration-300">
                <div className="text-3xl font-black text-indigo-400 mb-2">1+</div>
                <div className="text-slate-700">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;