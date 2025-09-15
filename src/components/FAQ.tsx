import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Landing pages take around 3 days, while full websites can take 1–2 weeks depending on complexity. Dynamic websites with custom functionality may take 2-3 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, SCAPLET offers comprehensive maintenance, updates, and marketing support after project delivery. We provide different support packages including bug fixes, content updates, security monitoring, and performance optimization."
    },
    {
      question: "Can you handle both design and marketing?",
      answer: "Absolutely! We provide end-to-end solutions from design & development to digital marketing. Our integrated approach ensures your website, social media, and marketing campaigns work together seamlessly to achieve your business goals."
    },
    {
      question: "Do you work with startups and small businesses?",
      answer: "Yes! We specialize in helping SMEs and startups grow online. We understand the unique challenges faced by growing businesses and offer flexible pricing and payment plans to accommodate different budgets."
    },
    {
      question: "What's included in your social media campaigns?",
      answer: "Our social media campaigns include content creation (posts and stories), graphic design, scheduling and posting, community engagement, hashtag research, and monthly analytics reports. We customize packages based on your specific needs."
    },
    {
      question: "Do you offer custom app development?",
      answer: "Yes, we develop custom mobile applications using Flutter and other modern technologies. We handle everything from UI/UX design to development, testing, and app store submission."
    },
    {
      question: "What are your payment terms?",
      answer: "We typically require 50% upfront and 50% upon project completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers, UPI, and digital payments for your convenience."
    },
    {
      question: "Do you provide SEO services?",
      answer: "Yes, we offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, content optimization, and local SEO. We help improve your website's visibility and search engine rankings."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#2a0000]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/80">
            Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/10 transition-colors"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-yellow-300" />
                ) : (
                  <Plus className="h-5 w-5 text-yellow-300" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="bg-white text-[#8B0000] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;