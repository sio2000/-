import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Linkedin, ExternalLink, Facebook, Twitter, Instagram } from 'lucide-react';

const contactBackground = new URL('../assets/images/contact.jpg', import.meta.url).href;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${contactBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark Overlay - made lighter by reducing opacity */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Contact Me
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delayed leading-relaxed">
              Interested in learning more about our Forex trading partnership? I'm here to answer your questions and provide detailed information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Send className="w-6 h-6 text-blue-600" />
                  Send a Message
                </h2>
                
                {isSubmitted && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Thank you! I will get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 
                        ${errors.name ? 'border-red-500' : 'border-gray-300 group-hover:border-blue-300'}`}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 
                        ${errors.email ? 'border-red-500' : 'border-gray-300 group-hover:border-blue-300'}`}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your trading goals and how I can help you..."
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 
                        ${errors.message ? 'border-red-500' : 'border-gray-300 group-hover:border-blue-300'}`}
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold 
                             flex items-center justify-center gap-2 hover:bg-blue-700 transition-all duration-200
                             shadow-lg hover:shadow-xl active:transform active:scale-[0.99]"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <a 
                        href="mailto:info@forexbot.gr"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        info@forexbot.gr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Telegram</h3>
                      <a 
                        href="https://t.me/forexbot_pro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 flex items-center gap-1"
                      >
                        @forexbot_pro
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                      <a 
                        href="https://linkedin.com/in/forexbot-pro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#0A66C2] hover:text-blue-700 flex items-center gap-1"
                      >
                        View Profile
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Follow Us</h3>
                  <div className="flex gap-6">
                    <a 
                      href="https://facebook.com" 
                      className="bg-[#1877F2] p-3 rounded-lg text-white hover:bg-[#1864F2] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      className="bg-[#1DA1F2] p-3 rounded-lg text-white hover:bg-[#1D8FF2] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      className="bg-[#E4405F] p-3 rounded-lg text-white hover:bg-[#D4304F] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      className="bg-[#0A66C2] p-3 rounded-lg text-white hover:bg-[#0955A2] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Response Time
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  I typically respond to inquiries within 24 hours during business days. 
                  For urgent matters, please reach out via Telegram for the fastest response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 