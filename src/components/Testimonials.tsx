import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechStartup India',
      role: 'Founder & CEO',
      content: 'SCAPLET transformed our online presence completely. Their team delivered a stunning website that perfectly captures our brand essence. The increase in customer inquiries has been remarkable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Sharma',
      company: 'Fashion Forward',
      role: 'Marketing Director',
      content: 'The social media campaigns created by SCAPLET have been phenomenal. Our engagement rates increased by 250% in just two months. Their creative approach really sets them apart.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Amit Patel',
      company: 'GreenTech Solutions',
      role: 'Business Owner',
      content: 'Professional, creative, and reliable. SCAPLET delivered our mobile app ahead of schedule and it exceeded all our expectations. The user experience is fantastic.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Consulting',
      role: 'Operations Manager',
      content: 'Working with SCAPLET was a game-changer for our business. Their digital marketing strategies helped us reach new markets and significantly improved our online visibility.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Vikram Singh',
      company: 'Local Restaurant Chain',
      role: 'Owner',
      content: 'The website SCAPLET created for us is not just beautiful, it\'s functional too. Online orders have increased by 180% since the launch. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Neha Gupta',
      company: 'EdTech Startup',
      role: 'Co-founder',
      content: 'SCAPLET understood our vision perfectly and brought it to life. Their attention to detail and commitment to quality is unmatched. We couldn\'t be happier with the results.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#1a0000] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with SCAPLET
          </p>
        </div>

        {/* Center Quote */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <Quote className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-light text-white/90 italic leading-relaxed">
              "SCAPLET doesn't just deliver projects, they deliver transformation. 
              Their innovative approach and dedication to excellence sets them apart in the digital landscape."
            </blockquote>
            <div className="mt-6 text-white/60">
              — Industry Recognition
            </div>
          </div>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* First Row - Left to Right */}
          <div className="flex animate-scroll-left mb-8">
            {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 w-80">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                      <p className="text-sm text-yellow-300 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 italic leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex animate-scroll-right">
            {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 w-80">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                      <p className="text-sm text-yellow-300 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 italic leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;