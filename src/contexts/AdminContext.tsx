import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  heroContent: HeroContent;
  updateHeroContent: (content: HeroContent) => void;
  services: Service[];
  updateServices: (services: Service[]) => void;
  portfolioItems: PortfolioItem[];
  updatePortfolio: (items: PortfolioItem[]) => void;
  testimonials: Testimonial[];
  updateTestimonials: (testimonials: Testimonial[]) => void;
  blogPosts: BlogPost[];
  updateBlogPosts: (posts: BlogPost[]) => void;
}

interface HeroContent {
  tagline: string;
  valueProposition: string;
  primaryCTA: string;
  secondaryCTA: string;
}

interface Service {
  id: string;
  category: string;
  name: string;
  price: string;
  delivery: string;
  description: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  liveUrl?: string;
  technologies: string[];
}

interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_PASSWORD = 'scaplet2025';

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [heroContent, setHeroContent] = useState<HeroContent>({
    tagline: "We Design. We Develop. We Market. We Scale.",
    valueProposition: "SCAPLET helps businesses build stunning websites, grow on social media, and scale through smart digital marketing and app solutions.",
    primaryCTA: "Get Started",
    secondaryCTA: "Request a Quote"
  });

  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      category: 'Web Design & Development',
      name: 'Dynamic Website',
      price: '₹12,000–₹20,000',
      delivery: '1 week',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      features: ['Responsive Design', 'CMS Integration', 'SEO Ready']
    },
    {
      id: '2',
      category: 'Web Design & Development',
      name: 'Landing Page Design',
      price: '₹5,000–₹8,000',
      delivery: '3 days',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      features: ['High Conversion', 'Mobile Optimized', 'Fast Loading']
    },
    {
      id: '3',
      category: 'Web Design & Development',
      name: 'SEO Optimization',
      price: '₹3,000–₹6,000',
      delivery: 'Ongoing',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      features: ['Keyword Research', 'On-page SEO', 'Analytics']
    },
    {
      id: '4',
      category: 'Web Design & Development',
      name: 'Hosting + Database Setup',
      price: '₹3,000–₹6,000',
      delivery: '1 day',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      features: ['Cloud Hosting', 'SSL Certificate', 'Backup']
    },
    {
      id: '5',
      category: 'Social Media Campaigns',
      name: 'Post & Story Creation + Posting',
      price: '₹3,000–₹8,000/month',
      delivery: 'Ongoing',
      description: 'Engaging content that builds your brand and drives engagement.',
      features: ['Content Calendar', 'Brand Consistency', 'Engagement']
    },
    {
      id: '6',
      category: 'Social Media Campaigns',
      name: 'Content Strategy Planning',
      price: 'Custom Quote',
      delivery: '1 week',
      description: 'Engaging content that builds your brand and drives engagement.',
      features: ['Market Research', 'Competitor Analysis', 'Strategy Document']
    },
    {
      id: '7',
      category: 'Social Media Campaigns',
      name: 'Brand Guidelines Creation',
      price: 'Custom Quote',
      delivery: '1 week',
      description: 'Engaging content that builds your brand and drives engagement.',
      features: ['Logo Design', 'Color Palette', 'Typography']
    },
    {
      id: '8',
      category: 'Digital Marketing',
      name: 'Posts & Stories (Content + Graphics)',
      price: '₹3,000–₹8,000/month',
      delivery: 'Ongoing',
      description: 'Strategic marketing campaigns that grow your online presence.',
      features: ['Custom Graphics', 'Copywriting', 'Scheduling']
    },
    {
      id: '9',
      category: 'Digital Marketing',
      name: 'Followers Interaction (DMs & Comments)',
      price: '₹5,000–₹12,000/month',
      delivery: 'Ongoing',
      description: 'Strategic marketing campaigns that grow your online presence.',
      features: ['Community Management', 'Response Templates', 'Engagement Tracking']
    },
    {
      id: '10',
      category: 'App Design & Development',
      name: 'Mobile App UI/UX Design',
      price: '₹10,000–₹25,000',
      delivery: '2 weeks',
      description: 'Custom mobile applications that deliver exceptional user experiences.',
      features: ['User Research', 'Wireframes', 'Prototypes']
    },
    {
      id: '11',
      category: 'App Design & Development',
      name: 'Basic App Development (Flutter/Hybrid)',
      price: '₹20,000–₹45,000',
      delivery: '4-6 weeks',
      description: 'Custom mobile applications that deliver exceptional user experiences.',
      features: ['Cross-platform', 'API Integration', 'Testing']
    },
    {
      id: '12',
      category: 'App Design & Development',
      name: 'App Store Submission',
      price: '₹2,000',
      delivery: '1 week',
      description: 'Custom mobile applications that deliver exceptional user experiences.',
      features: ['Store Optimization', 'Screenshots', 'Description']
    },
    {
      id: '13',
      category: 'Website Modifications',
      name: 'Basic Modifications',
      price: '₹2,500',
      delivery: 'Minor content updates, color changes',
      description: 'Minor content updates, color changes',
      features: ['Text Updates', 'Image Replacement', 'Color Adjustments']
    },
    {
      id: '14',
      category: 'Website Modifications',
      name: 'Intermediate Changes',
      price: '₹3,000–₹5,000',
      delivery: 'Layout adjustments, new sections',
      description: 'Layout adjustments, new sections',
      features: ['Layout Changes', 'New Sections', 'Feature Updates']
    },
    {
      id: '15',
      category: 'Website Modifications',
      name: 'Full Revamp',
      price: '₹5,000–₹8,000',
      delivery: 'Complete redesign and restructure',
      description: 'Complete redesign and restructure',
      features: ['Complete Redesign', 'New Architecture', 'Modern UI/UX']
    }
  ]);

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([
    {
      id: '1',
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      description: 'Modern e-commerce platform with advanced features',
      liveUrl: '#',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: '2',
      title: 'Brand Identity Design',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      description: 'Complete brand identity and marketing materials',
      technologies: ['Adobe Creative Suite', 'Figma']
    }
  ]);

  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      name: 'Rahul Sharma',
      company: 'Tech Startup',
      content: 'SCAPLET delivered an exceptional website that exceeded our expectations. Professional and reliable!',
      rating: 5
    },
    {
      id: '2',
      name: 'Priya Patel',
      company: 'Digital Agency',
      content: 'Outstanding service and support. They helped us grow our online presence significantly.',
      rating: 5
    },
    {
      id: '3',
      name: 'Arjun Kumar',
      company: 'E-commerce Brand',
      content: 'Great team with excellent technical skills. Highly recommend for any digital project.',
      rating: 5
    }
  ]);

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'The Future of Web Design in 2025',
      excerpt: 'Exploring the latest trends and technologies shaping web design.',
      content: 'Full blog post content here...',
      author: 'SCAPLET Team',
      date: '2025-01-15',
      category: 'Design'
    }
  ]);

  useEffect(() => {
    const auth = localStorage.getItem('scaplet_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('scaplet_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('scaplet_admin_auth');
  };

  const updateHeroContent = (content: HeroContent) => {
    setHeroContent(content);
  };

  const updateServices = (newServices: Service[]) => {
    setServices(newServices);
  };

  const updatePortfolio = (items: PortfolioItem[]) => {
    setPortfolioItems(items);
  };

  const updateTestimonials = (newTestimonials: Testimonial[]) => {
    setTestimonials(newTestimonials);
  };

  const updateBlogPosts = (posts: BlogPost[]) => {
    setBlogPosts(posts);
  };

  return (
    <AdminContext.Provider value={{
      isAuthenticated,
      login,
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
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}