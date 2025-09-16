import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Send, Briefcase, GraduationCap, Star } from 'lucide-react';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null
  });

  const jobs = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      type: 'Full-time',
      location: 'Remote',
      salary: '₹8-15 LPA',
      experience: '3-5 years',
      description: 'We are looking for an experienced full-stack developer to join our growing team. You will work on exciting projects for clients across various industries.',
      requirements: [
        'Strong experience with React, Node.js, and modern web technologies',
        'Experience with databases (MongoDB, PostgreSQL)',
        'Knowledge of cloud platforms (AWS, Azure)',
        'Strong problem-solving skills and attention to detail',
        'Excellent communication skills'
      ],
      responsibilities: [
        'Develop and maintain web applications using modern technologies',
        'Collaborate with designers and other developers',
        'Write clean, maintainable, and well-documented code',
        'Participate in code reviews and technical discussions',
        'Mentor junior developers'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote',
      salary: '₹5-10 LPA',
      experience: '2-4 years',
      description: 'Join our creative team as a UI/UX Designer and help create beautiful, user-friendly interfaces for web and mobile applications.',
      requirements: [
        'Proficiency in design tools (Figma, Adobe Creative Suite)',
        'Strong understanding of user-centered design principles',
        'Experience with responsive and mobile-first design',
        'Knowledge of HTML/CSS is a plus',
        'Portfolio showcasing your best work'
      ],
      responsibilities: [
        'Create wireframes, prototypes, and high-fidelity designs',
        'Conduct user research and usability testing',
        'Collaborate with developers to ensure design implementation',
        'Maintain design systems and style guides',
        'Present design concepts to clients and stakeholders'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      type: 'Full-time',
      location: 'Remote',
      salary: '₹4-8 LPA',
      experience: '1-3 years',
      description: 'We are seeking a creative and data-driven Digital Marketing Specialist to help our clients grow their online presence.',
      requirements: [
        'Experience with social media marketing and content creation',
        'Knowledge of SEO, SEM, and Google Analytics',
        'Familiarity with marketing automation tools',
        'Strong analytical and communication skills',
        'Creative mindset with attention to detail'
      ],
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Create engaging content for social media platforms',
        'Analyze campaign performance and optimize for better results',
        'Manage client social media accounts',
        'Stay updated with latest marketing trends and tools'
      ]
    }
  ];

  const internships = [
    {
      id: 1,
      title: 'Web Development Intern',
      duration: '3-6 months',
      stipend: '₹10,000-20,000/month',
      description: 'Learn modern web development technologies while working on real client projects.',
      requirements: [
        'Basic knowledge of HTML, CSS, JavaScript',
        'Familiarity with React or other frontend frameworks',
        'Eagerness to learn and grow',
        'Good communication skills'
      ]
    },
    {
      id: 2,
      title: 'Design Intern',
      duration: '3-6 months',
      stipend: '₹8,000-15,000/month',
      description: 'Work alongside our design team to create stunning visual experiences for web and mobile.',
      requirements: [
        'Basic knowledge of design principles',
        'Familiarity with Figma or Adobe Creative Suite',
        'Portfolio of personal or academic projects',
        'Creative thinking and attention to detail'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Intern',
      duration: '3-6 months',
      stipend: '₹8,000-12,000/month',
      description: 'Gain hands-on experience in digital marketing, social media management, and content creation.',
      requirements: [
        'Understanding of social media platforms',
        'Basic knowledge of digital marketing concepts',
        'Good writing and communication skills',
        'Analytical mindset'
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData({
        ...applicationData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationData);
    alert('Thank you for your application! We\'ll review it and get back to you soon.');
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      portfolio: '',
      coverLetter: '',
      resume: null
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B0000] via-[#A0001C] to-[#E63946]">
      {/* Header */}
      <div className="bg-[#1a0000]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Be part of a passionate team that's transforming businesses through innovative digital solutions
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                activeTab === 'jobs'
                  ? 'bg-white text-[#8B0000] shadow-lg'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Full-time Jobs
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center ${
                activeTab === 'internships'
                  ? 'bg-white text-[#8B0000] shadow-lg'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <GraduationCap className="h-4 w-4 mr-2" />
              Internships
            </button>
          </div>
        </div>

        {/* Jobs Tab */}
        {activeTab === 'jobs' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job Listings */}
            <div className="lg:col-span-2 space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-white/70">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="bg-yellow-300 text-[#8B0000] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                    >
                      {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>

                  <p className="text-white/80 mb-4">{job.description}</p>

                  {selectedJob === job.id && (
                    <div className="space-y-4 border-t border-white/20 pt-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="text-white/70 text-sm flex items-start">
                              <Star className="h-3 w-3 mr-2 mt-1 text-yellow-300 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Responsibilities:</h4>
                        <ul className="space-y-1">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="text-white/70 text-sm flex items-start">
                              <Star className="h-3 w-3 mr-2 mt-1 text-yellow-300 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Application Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-fit">
              <h3 className="text-xl font-bold text-white mb-6">Apply Now</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={applicationData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={applicationData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="+91 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Position *</label>
                  <select
                    name="position"
                    required
                    value={applicationData.position}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white"
                  >
                    <option value="">Select Position</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Experience</label>
                  <input
                    type="text"
                    name="experience"
                    value={applicationData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="e.g., 3 years"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Portfolio URL</label>
                  <input
                    type="url"
                    name="portfolio"
                    value={applicationData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50"
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Resume *</label>
                  <input
                    type="file"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:bg-yellow-300 file:text-[#8B0000] file:font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Cover Letter *</label>
                  <textarea
                    name="coverLetter"
                    required
                    rows={4}
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-300 text-white placeholder-white/50 resize-none"
                    placeholder="Tell us why you're perfect for this role..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#8B0000] py-3 px-6 rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center"
                >
                  Submit Application
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Internships Tab */}
        {activeTab === 'internships' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship) => (
              <div key={internship.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{internship.title}</h3>
                
                <div className="space-y-2 mb-4 text-sm text-white/70">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {internship.duration}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {internship.stipend}
                  </div>
                </div>

                <p className="text-white/80 mb-4">{internship.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {internship.requirements.map((req, index) => (
                      <li key={index} className="text-white/70 text-sm flex items-start">
                        <Star className="h-3 w-3 mr-2 mt-1 text-yellow-300 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#8B0000] py-3 px-6 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300">
                  Apply for Internship
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Company Culture */}
        <div className="mt-20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Work at SCAPLET?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-[#8B0000]" />
                </div>
                <h4 className="font-semibold text-white mb-2">Collaborative Team</h4>
                <p className="text-white/70 text-sm">Work with passionate professionals who support each other's growth</p>
              </div>
              <div>
                <div className="bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-[#8B0000]" />
                </div>
                <h4 className="font-semibold text-white mb-2">Growth Opportunities</h4>
                <p className="text-white/70 text-sm">Continuous learning and career advancement in a growing company</p>
              </div>
              <div>
                <div className="bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-[#8B0000]" />
                </div>
                <h4 className="font-semibold text-white mb-2">Exciting Projects</h4>
                <p className="text-white/70 text-sm">Work on diverse, challenging projects for clients across industries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;