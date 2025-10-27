import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Send } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

function BlogPage() {
  const { blogPosts } = useAdmin();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [submissionForm, setSubmissionForm] = useState({
    title: '',
    content: '',
    author: '',
    email: '',
    category: 'Tech'
  });

  const categories = ['All', 'Tech', 'Design', 'Marketing', 'Stories', 'Poetry', 'Business'];
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleSubmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Article submission:', submissionForm);
    alert('Thank you for your submission! We\'ll review it and get back to you.');
    setSubmissionForm({ title: '', content: '', author: '', email: '', category: 'Tech' });
    setShowSubmissionForm(false);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Blog & Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the latest trends, insights, and stories from the world of technology, design, and creativity.
          </p>
          <button
            onClick={() => setShowSubmissionForm(true)}
            className="btn-primary"
          >
            Submit Your Article
          </button>
        </motion.div>

        {/* Submission Form Modal */}
        {showSubmissionForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <h2 className="text-2xl font-bold mb-6 gradient-text">Submit Your Article</h2>
              <p className="text-gray-600 mb-6">
                Share your knowledge, stories, or creative work with our community. 
                We welcome articles on technology, design, marketing, stories, poetry, and more.
              </p>
              
              <form onSubmit={handleSubmissionSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={submissionForm.title}
                    onChange={(e) => setSubmissionForm({ ...submissionForm, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={submissionForm.author}
                      onChange={(e) => setSubmissionForm({ ...submissionForm, author: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={submissionForm.email}
                      onChange={(e) => setSubmissionForm({ ...submissionForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={submissionForm.category}
                    onChange={(e) => setSubmissionForm({ ...submissionForm, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                  >
                    {categories.filter(cat => cat !== 'All').map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Article Content *
                  </label>
                  <textarea
                    required
                    rows={8}
                    value={submissionForm.content}
                    onChange={(e) => setSubmissionForm({ ...submissionForm, content: e.target.value })}
                    placeholder="Write your article content here..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button type="submit" className="btn-primary flex items-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Submit Article</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSubmissionForm(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                  : 'glass-effect text-gray-700 hover:bg-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No articles found in this category.</p>
          </div>
        )}

        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Share Your Story</span>
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Have insights to share? We'd love to feature your article on our blog.
          </p>
          <button
            onClick={() => setShowSubmissionForm(true)}
            className="btn-primary"
          >
            Submit Your Article
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogPage;