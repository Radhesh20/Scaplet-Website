import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  FileText, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  Eye,
  LogOut,
  BarChart3,
  Calendar,
  Star
} from 'lucide-react';

interface Client {
  id: number;
  name: string;
  logo?: string;
}

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  published: boolean;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [clients, setClients] = useState<Client[]>([
    { id: 1, name: 'TechStartup India' },
    { id: 2, name: 'Fashion Forward' },
    { id: 3, name: 'GreenTech Solutions' },
  ]);
  
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'TechStartup India',
      role: 'Founder & CEO',
      content: 'SCAPLET transformed our online presence completely.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ]);

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: 'The Future of Web Design',
      excerpt: 'Discover the latest web design trends...',
      content: 'Full article content...',
      author: 'SCAPLET Team',
      date: '2024-12-15',
      category: 'Web Design',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      tags: ['Web Design', 'Trends'],
      published: true
    }
  ]);

  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [editingBlogPost, setEditingBlogPost] = useState<BlogPost | null>(null);

  // Client Management
  const addClient = () => {
    const newClient: Client = {
      id: Date.now(),
      name: 'New Client'
    };
    setClients([...clients, newClient]);
    setEditingClient(newClient);
  };

  const updateClient = (id: number, updates: Partial<Client>) => {
    setClients(clients.map(client => 
      client.id === id ? { ...client, ...updates } : client
    ));
  };

  const deleteClient = (id: number) => {
    setClients(clients.filter(client => client.id !== id));
  };

  // Testimonial Management
  const addTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: Date.now(),
      name: 'New Client',
      company: 'Company Name',
      role: 'Position',
      content: 'Testimonial content...',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    };
    setTestimonials([...testimonials, newTestimonial]);
    setEditingTestimonial(newTestimonial);
  };

  const updateTestimonial = (id: number, updates: Partial<Testimonial>) => {
    setTestimonials(testimonials.map(testimonial => 
      testimonial.id === id ? { ...testimonial, ...updates } : testimonial
    ));
  };

  const deleteTestimonial = (id: number) => {
    setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
  };

  // Blog Management
  const addBlogPost = () => {
    const newPost: BlogPost = {
      id: Date.now(),
      title: 'New Blog Post',
      excerpt: 'Post excerpt...',
      content: 'Post content...',
      author: 'SCAPLET Team',
      date: new Date().toISOString().split('T')[0],
      category: 'Web Design',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      tags: [],
      published: false
    };
    setBlogPosts([...blogPosts, newPost]);
    setEditingBlogPost(newPost);
  };

  const updateBlogPost = (id: number, updates: Partial<BlogPost>) => {
    setBlogPosts(blogPosts.map(post => 
      post.id === id ? { ...post, ...updates } : post
    ));
  };

  const deleteBlogPost = (id: number) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
  };

  const togglePublishPost = (id: number) => {
    setBlogPosts(blogPosts.map(post => 
      post.id === id ? { ...post, published: !post.published } : post
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0000] to-[#2a0000] text-white">
      {/* Header */}
      <div className="bg-[#0d0000]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">SCAPLET Admin</h1>
            </div>
            <button className="flex items-center text-white/80 hover:text-white transition-colors">
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === 'dashboard' ? 'bg-yellow-300 text-[#8B0000]' : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  <BarChart3 className="h-5 w-5 mr-3" />
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('clients')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === 'clients' ? 'bg-yellow-300 text-[#8B0000]' : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  <Users className="h-5 w-5 mr-3" />
                  Clients
                </button>
                <button
                  onClick={() => setActiveTab('testimonials')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === 'testimonials' ? 'bg-yellow-300 text-[#8B0000]' : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  <MessageSquare className="h-5 w-5 mr-3" />
                  Testimonials
                </button>
                <button
                  onClick={() => setActiveTab('blog')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === 'blog' ? 'bg-yellow-300 text-[#8B0000]' : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  <FileText className="h-5 w-5 mr-3" />
                  Blog Posts
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/70">Total Clients</p>
                        <p className="text-3xl font-bold text-yellow-300">{clients.length}</p>
                      </div>
                      <Users className="h-8 w-8 text-yellow-300" />
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/70">Testimonials</p>
                        <p className="text-3xl font-bold text-yellow-300">{testimonials.length}</p>
                      </div>
                      <MessageSquare className="h-8 w-8 text-yellow-300" />
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/70">Blog Posts</p>
                        <p className="text-3xl font-bold text-yellow-300">{blogPosts.length}</p>
                      </div>
                      <FileText className="h-8 w-8 text-yellow-300" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Clients Management */}
            {activeTab === 'clients' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-white">Clients Management</h2>
                  <button
                    onClick={addClient}
                    className="bg-yellow-300 text-[#8B0000] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Client
                  </button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {clients.map((client) => (
                    <div key={client.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                      {editingClient?.id === client.id ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            value={editingClient.name}
                            onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })}
                            className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                updateClient(client.id, editingClient);
                                setEditingClient(null);
                              }}
                              className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center"
                            >
                              <Save className="h-3 w-3 mr-1" />
                              Save
                            </button>
                            <button
                              onClick={() => setEditingClient(null)}
                              className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">{client.name}</h3>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setEditingClient(client)}
                              className="bg-blue-500 text-white px-3 py-1 rounded text-sm flex items-center"
                            >
                              <Edit className="h-3 w-3 mr-1" />
                              Edit
                            </button>
                            <button
                              onClick={() => deleteClient(client.id)}
                              className="bg-red-500 text-white px-3 py-1 rounded text-sm flex items-center"
                            >
                              <Trash2 className="h-3 w-3 mr-1" />
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials Management */}
            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-white">Testimonials Management</h2>
                  <button
                    onClick={addTestimonial}
                    className="bg-yellow-300 text-[#8B0000] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Testimonial
                  </button>
                </div>
                <div className="space-y-6">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                      {editingTestimonial?.id === testimonial.id ? (
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <input
                              type="text"
                              placeholder="Name"
                              value={editingTestimonial.name}
                              onChange={(e) => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })}
                              className="px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white"
                            />
                            <input
                              type="text"
                              placeholder="Company"
                              value={editingTestimonial.company}
                              onChange={(e) => setEditingTestimonial({ ...editingTestimonial, company: e.target.value })}
                              className="px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white"
                            />
                          </div>
                          <input
                            type="text"
                            placeholder="Role"
                            value={editingTestimonial.role}
                            onChange={(e) => setEditingTestimonial({ ...editingTestimonial, role: e.target.value })}
                            className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white"
                          />
                          <textarea
                            placeholder="Testimonial content"
                            value={editingTestimonial.content}
                            onChange={(e) => setEditingTestimonial({ ...editingTestimonial, content: e.target.value })}
                            className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white h-24 resize-none"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                updateTestimonial(testimonial.id, editingTestimonial);
                                setEditingTestimonial(null);
                              }}
                              className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center"
                            >
                              <Save className="h-3 w-3 mr-1" />
                              Save
                            </button>
                            <button
                              onClick={() => setEditingTestimonial(null)}
                              className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-center mb-4">
                            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                              <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                              <p className="text-white/70">{testimonial.role} at {testimonial.company}</p>
                            </div>
                          </div>
                          <p className="text-white/80 mb-4">"{testimonial.content}"</p>
                          <div className="flex items-center justify-between">
                            <div className="flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => setEditingTestimonial(testimonial)}
                                className="bg-blue-500 text-white px-3 py-1 rounded text-sm flex items-center"
                              >
                                <Edit className="h-3 w-3 mr-1" />
                                Edit
                              </button>
                              <button
                                onClick={() => deleteTestimonial(testimonial.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded text-sm flex items-center"
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Blog Management */}
            {activeTab === 'blog' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-white">Blog Posts Management</h2>
                  <button
                    onClick={addBlogPost}
                    className="bg-yellow-300 text-[#8B0000] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Post
                  </button>
                </div>
                <div className="space-y-6">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                      {editingBlogPost?.id === post.id ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            placeholder="Title"
                            value={editingBlogPost.title}
                            onChange={(e) => setEditingBlogPost({ ...editingBlogPost, title: e.target.value })}
                            className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white"
                          />
                          <textarea
                            placeholder="Excerpt"
                            value={editingBlogPost.excerpt}
                            onChange={(e) => setEditingBlogPost({ ...editingBlogPost, excerpt: e.target.value })}
                            className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white h-20 resize-none"
                          />
                          <textarea
                            placeholder="Content"
                            value={editingBlogPost.content}
                            onChange={(e) => setEditingBlogPost({ ...editingBlogPost, content: e.target.value })}
                            className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white h-40 resize-none"
                          />
                          <div className="grid md:grid-cols-3 gap-4">
                            <input
                              type="text"
                              placeholder="Category"
                              value={editingBlogPost.category}
                              onChange={(e) => setEditingBlogPost({ ...editingBlogPost, category: e.target.value })}
                              className="px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white"
                            />
                            <input
                              type="text"
                              placeholder="Author"
                              value={editingBlogPost.author}
                              onChange={(e) => setEditingBlogPost({ ...editingBlogPost, author: e.target.value })}
                              className="px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white"
                            />
                            <input
                              type="text"
                              placeholder="Read Time"
                              value={editingBlogPost.readTime}
                              onChange={(e) => setEditingBlogPost({ ...editingBlogPost, readTime: e.target.value })}
                              className="px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white"
                            />
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                updateBlogPost(post.id, editingBlogPost);
                                setEditingBlogPost(null);
                              }}
                              className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center"
                            >
                              <Save className="h-3 w-3 mr-1" />
                              Save
                            </button>
                            <button
                              onClick={() => setEditingBlogPost(null)}
                              className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                              <p className="text-white/70 mb-2">{post.excerpt}</p>
                              <div className="flex items-center text-sm text-white/60">
                                <Calendar className="h-4 w-4 mr-1" />
                                {post.date} • {post.author} • {post.readTime}
                              </div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                              post.published ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {post.published ? 'Published' : 'Draft'}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setEditingBlogPost(post)}
                              className="bg-blue-500 text-white px-3 py-1 rounded text-sm flex items-center"
                            >
                              <Edit className="h-3 w-3 mr-1" />
                              Edit
                            </button>
                            <button
                              onClick={() => togglePublishPost(post.id)}
                              className={`px-3 py-1 rounded text-sm flex items-center ${
                                post.published ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'
                              }`}
                            >
                              <Eye className="h-3 w-3 mr-1" />
                              {post.published ? 'Unpublish' : 'Publish'}
                            </button>
                            <button
                              onClick={() => deleteBlogPost(post.id)}
                              className="bg-red-500 text-white px-3 py-1 rounded text-sm flex items-center"
                            >
                              <Trash2 className="h-3 w-3 mr-1" />
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;