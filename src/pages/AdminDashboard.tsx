import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LogOut, 
  Home, 
  Users, 
  MessageSquare, 
  FileText,
  Settings,
  Edit3,
  Trash2,
  Plus,
  Save
} from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

function AdminDashboard() {
  const { 
    isAuthenticated, 
    logout, 
    heroContent, 
    updateHeroContent,
    services,
    updateServices,
    portfolioItems,
    updatePortfolio,
    testimonials,
    updateTestimonials,
    blogPosts,
    updateBlogPosts
  } = useAdmin();
  
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('hero');
  const [editingHero, setEditingHero] = useState(false);
  const [tempHero, setTempHero] = useState(heroContent);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const saveHeroContent = () => {
    updateHeroContent(tempHero);
    setEditingHero(false);
  };

  const tabs = [
    { id: 'hero', label: 'Hero Section', icon: Home },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'portfolio', label: 'Portfolio', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'blog', label: 'Blog Posts', icon: FileText }
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold gradient-text">SCAPLET Admin</h1>
              <span className="text-sm text-gray-500">Content Management Dashboard</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold mb-4">Dashboard Menu</h2>
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8"
            >
              {/* Hero Section Management */}
              {activeTab === 'hero' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Hero Section Content</h2>
                    <button
                      onClick={() => {
                        setEditingHero(!editingHero);
                        if (!editingHero) setTempHero(heroContent);
                      }}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span>{editingHero ? 'Cancel' : 'Edit'}</span>
                    </button>
                  </div>

                  {editingHero ? (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tagline
                        </label>
                        <input
                          type="text"
                          value={tempHero.tagline}
                          onChange={(e) => setTempHero({ ...tempHero, tagline: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Value Proposition
                        </label>
                        <textarea
                          rows={3}
                          value={tempHero.valueProposition}
                          onChange={(e) => setTempHero({ ...tempHero, valueProposition: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Primary CTA
                          </label>
                          <input
                            type="text"
                            value={tempHero.primaryCTA}
                            onChange={(e) => setTempHero({ ...tempHero, primaryCTA: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Secondary CTA
                          </label>
                          <input
                            type="text"
                            value={tempHero.secondaryCTA}
                            onChange={(e) => setTempHero({ ...tempHero, secondaryCTA: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      
                      <button
                        onClick={saveHeroContent}
                        className="btn-primary flex items-center space-x-2"
                      >
                        <Save className="h-4 w-4" />
                        <span>Save Changes</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Current Content:</h3>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p><strong>Tagline:</strong> {heroContent.tagline}</p>
                        <p><strong>Value Proposition:</strong> {heroContent.valueProposition}</p>
                        <p><strong>Primary CTA:</strong> {heroContent.primaryCTA}</p>
                        <p><strong>Secondary CTA:</strong> {heroContent.secondaryCTA}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Services Management */}
              {activeTab === 'services' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Services Management</h2>
                    <button className="btn-primary flex items-center space-x-2">
                      <Plus className="h-4 w-4" />
                      <span>Add Service</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {services.map((service) => (
                      <div key={service.id} className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{service.name}</h3>
                            <p className="text-sm text-gray-600">{service.category}</p>
                            <p className="text-sm text-green-600">{service.price}</p>
                            <p className="text-sm text-blue-600">Delivery: {service.delivery}</p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-100 rounded">
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-100 rounded">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other tabs would have similar management interfaces */}
              {activeTab === 'portfolio' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Portfolio Management</h2>
                  <p className="text-gray-600">Manage your portfolio items here.</p>
                </div>
              )}

              {activeTab === 'testimonials' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Testimonials Management</h2>
                  <p className="text-gray-600">Manage customer testimonials here.</p>
                </div>
              )}

              {activeTab === 'blog' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Blog Posts Management</h2>
                  <p className="text-gray-600">Manage blog posts and submissions here.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;