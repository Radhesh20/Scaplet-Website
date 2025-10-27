import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

function HomePage() {
  const { heroContent, testimonials } = useAdmin();

  const clientLogos = [
    'https://images.pexels.com/photos/5238645/pexels-photo-5238645.jpeg',
    'https://images.pexels.com/photos/6633749/pexels-photo-6633749.jpeg',
    'https://images.pexels.com/photos/5711992/pexels-photo-5711992.jpeg',
    'https://images.pexels.com/photos/7887810/pexels-photo-7887810.jpeg',
    'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg'
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '25+', label: 'Happy Clients' },
    { number: '2+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-teal-500/10 to-transparent" />
        <div className="floating-animation absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl" />
        <div className="floating-animation absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-xl" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">{heroContent.tagline}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {heroContent.valueProposition}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Changed: add hero-cta class and keep layout classes */}
            <Link to="/contact" className="btn-primary hero-cta flex items-center space-x-2">
              <span>{heroContent.primaryCTA}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/services" className="btn-secondary">
              {heroContent.secondaryCTA}
            </Link>
          </motion.div>
        </div>
        {/* Inline styles for hero primary CTA (hover gradient + contrast) */}
        <style>{`
          .hero-cta {
            background: rgba(255,255,255,0.96);
            color: #0f172a;
            border: 1px solid rgba(15,23,42,0.06);
            padding: 0.75rem 1.25rem;
            border-radius: 0.75rem;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 8px 22px rgba(2,6,23,0.12);
            transition: transform 0.32s ease, box-shadow 0.32s ease, color 0.32s ease, background 0.32s ease;
            background-size: 200% 100%;
          }

          .hero-cta svg { color: inherit; }

          .hero-cta:hover,
          .hero-cta:focus {
            background-image: linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%);
            color: #ffffff;
            transform: translateY(-4px);
            box-shadow: 0 18px 40px rgba(59,130,246,0.18);
            border-color: transparent;
          }

          .hero-cta:focus-visible {
            outline: 3px solid rgba(59,130,246,0.24);
            outline-offset: 3px;
          }
        `}</style>


      {/* Client Logos */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">Trusted by amazing companies</p>
          <div className="scroll-container">
            <div className="scroll-content flex items-center space-x-8">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="h-12 w-24 object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From stunning websites to powerful marketing campaigns, we deliver comprehensive digital solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Web Development', desc: 'Modern, responsive websites that convert visitors to customers' },
              { title: 'Digital Marketing', desc: 'Strategic campaigns that grow your online presence' },
              { title: 'App Development', desc: 'Cross-platform mobile applications that engage users' },
              { title: 'Social Media', desc: 'Creative content that builds communities and drives engagement' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 gradient-text">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">What Clients Say</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Quote className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-semibold text-gray-700">Excellence in Every Project</span>
              <Quote className="h-8 w-8 text-teal-500 rotate-180" />
            </div>
          </div>

          {/* Dual Direction Scrolling Testimonials */}
          <div className="space-y-8">
            <div className="scroll-container">
              <div className="scroll-content flex space-x-6">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-96 glass-card p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="scroll-container">
              <div className="scroll-reverse flex space-x-6">
                {[...testimonials.reverse(), ...testimonials].map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-96 glass-card p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch for a free consultation.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;