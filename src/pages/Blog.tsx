import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Design: Trends to Watch in 2025',
      excerpt: 'Discover the latest web design trends that will shape the digital landscape in 2025, from AI-powered interfaces to sustainable design practices.',
      content: 'Full article content would go here...',
      author: 'SCAPLET Team',
      date: '2024-12-15',
      category: 'Web Design',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Web Design', 'Trends', '2025', 'UI/UX']
    },
    {
      id: 2,
      title: 'Social Media Marketing Strategies That Actually Work',
      excerpt: 'Learn proven social media strategies that drive engagement, build brand awareness, and convert followers into customers.',
      content: 'Full article content would go here...',
      author: 'SCAPLET Team',
      date: '2024-12-10',
      category: 'Digital Marketing',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Social Media', 'Marketing', 'Strategy', 'Engagement']
    },
    {
      id: 3,
      title: 'Mobile App Development: Flutter vs React Native',
      excerpt: 'A comprehensive comparison of Flutter and React Native to help you choose the right framework for your mobile app project.',
      content: 'Full article content would go here...',
      author: 'SCAPLET Team',
      date: '2024-12-05',
      category: 'App Development',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Mobile Apps', 'Flutter', 'React Native', 'Development']
    },
    {
      id: 4,
      title: 'SEO Best Practices for Small Businesses in 2024',
      excerpt: 'Essential SEO strategies that small businesses can implement to improve their search rankings and drive organic traffic.',
      content: 'Full article content would go here...',
      author: 'SCAPLET Team',
      date: '2024-11-28',
      category: 'SEO',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['SEO', 'Small Business', 'Organic Traffic', 'Rankings']
    },
    {
      id: 5,
      title: 'Building Brand Identity: A Complete Guide',
      excerpt: 'Everything you need to know about creating a strong brand identity that resonates with your target audience and drives business growth.',
      content: 'Full article content would go here...',
      author: 'SCAPLET Team',
      date: '2024-11-20',
      category: 'Branding',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Branding', 'Identity', 'Design', 'Strategy']
    },
    {
      id: 6,
      title: 'E-commerce Website Optimization Tips',
      excerpt: 'Proven techniques to optimize your e-commerce website for better user experience, higher conversions, and increased sales.',
      content: 'Full article content would go here...',
      author: 'SCAPLET Team',
      date: '2024-11-15',
      category: 'E-commerce',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['E-commerce', 'Optimization', 'Conversion', 'UX']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'Web Design', name: 'Web Design', count: blogPosts.filter(post => post.category === 'Web Design').length },
    { id: 'Digital Marketing', name: 'Digital Marketing', count: blogPosts.filter(post => post.category === 'Digital Marketing').length },
    { id: 'App Development', name: 'App Development', count: blogPosts.filter(post => post.category === 'App Development').length },
    { id: 'SEO', name: 'SEO', count: blogPosts.filter(post => post.category === 'SEO').length },
    { id: 'Branding', name: 'Branding', count: blogPosts.filter(post => post.category === 'Branding').length },
    { id: 'E-commerce', name: 'E-commerce', count: blogPosts.filter(post => post.category === 'E-commerce').length },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B0000] via-[#A0001C] to-[#E63946]">
      {/* Header */}
      <div className="bg-[#1a0000]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SCAPLET Blog
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, tips, and trends from the world of digital design, development, and marketing
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                  selectedCategory === category.id
                    ? 'bg-white text-[#8B0000] shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'
                }`}
              >
                <Tag className="h-4 w-4 mr-2" />
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id ? 'bg-[#8B0000]/20' : 'bg-white/20'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              {/* Post Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-300 text-[#8B0000] px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <p className="text-white/70 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-white/10 text-white/80 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#8B0000] py-3 px-6 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center group">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md mx-auto">
              <Search className="h-12 w-12 text-white/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-white/70">Try adjusting your search terms or category filter.</p>
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest insights, tips, and trends delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
              />
              <button className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#8B0000] px-6 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;