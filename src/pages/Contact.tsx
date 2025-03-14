import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Linkedin, ExternalLink, Facebook, Twitter, Instagram, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const contactBackground = new URL('../assets/images/contact.jpg', import.meta.url).href;

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const mailtoLink = `mailto:info@forexbot.gr?subject=${encodeURIComponent(
        language === 'en' ? `Contact Form Submission from ${formData.name}` : `Υποβολή Φόρμας Επικοινωνίας από ${formData.name}`
      )}&body=${encodeURIComponent(
        `${language === 'en' ? 'Name' : 'Όνομα'}: ${formData.name}\n${language === 'en' ? 'Email' : 'Email'}: ${formData.email}\n\n${language === 'en' ? 'Message' : 'Μήνυμα'}:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setStatus('success');
    } catch (error) {
      setStatus('error');
      console.error('Error sending message:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      {/* Hero Section - Add parallax effect */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 transform transition-transform duration-1000 hover:scale-110"
          style={{
            backgroundImage: `url(${contactBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed' // Add parallax
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        </div>

        {/* Content with fade-in animation */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              {language === 'en' ? 'Contact Me' : 'Επικοινωνήστε Μαζί Μου'}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delayed leading-relaxed">
              {language === 'en'
                ? "Interested in learning more about our Forex trading partnership? I'm here to answer your questions and provide detailed information."
                : 'Ενδιαφέρεστε να μάθετε περισσότερα για τη συνεργασία μας στις συναλλαγές Forex; Είμαι εδώ για να απαντήσω στις ερωτήσεις σας και να παρέχω λεπτομερείς πληροφορίες.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form with hover effect */}
            <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Send className="w-6 h-6 text-blue-600" />
                  {language === 'en' ? 'Send a Message' : 'Στείλτε Μήνυμα'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Full Name' : 'Ονοματεπώνυμο'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === 'en' ? "Enter your full name" : "Εισάγετε το ονοματεπώνυμό σας"}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 
                        ${status === 'sending' ? 'border-gray-300 group-hover:border-blue-300' : 'border-gray-300 group-hover:border-blue-300'}`}
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Email Address' : 'Διεύθυνση Email'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={language === 'en' ? "Enter your email address" : "Εισάγετε τη διεύθυνση email σας"}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 
                        ${status === 'sending' ? 'border-gray-300 group-hover:border-blue-300' : 'border-gray-300 group-hover:border-blue-300'}`}
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Your Message' : 'Το Μήνυμά σας'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={language === 'en' 
                        ? "Tell me about your trading goals and how I can help you..."
                        : "Πείτε μου για τους στόχους των συναλλαγών σας και πώς μπορώ να σας βοηθήσω..."}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 
                        ${status === 'sending' ? 'border-gray-300 group-hover:border-blue-300' : 'border-gray-300 group-hover:border-blue-300'}`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full bg-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold 
                             flex items-center justify-center gap-2 hover:bg-blue-700 transition-all duration-200
                             shadow-lg hover:shadow-xl active:transform active:scale-[0.99]
                             ${status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                  >
                    {status === 'sending' 
                      ? (language === 'en' ? 'Sending...' : 'Αποστολή...')
                      : (language === 'en' ? 'Send Message' : 'Αποστολή Μηνύματος')}
                    <Send className="w-5 h-5" />
                  </button>
                </form>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="mt-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {language === 'en' ? 'Thank you! I will get back to you soon.' : 'Ευχαριστώ! Θα επικοινωνήσω μαζί σας σύντομα.'}
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    {language === 'en' ? 'There was an error sending your message. Please try again.' : 'Υπήρξε ένα σφάλμα κατά την αποστολή του μηνύματός σας. Παρακαλώ δοκιμάστε ξανά.'}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information with staggered animation */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px]">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                  {language === 'en' ? 'Contact Information' : 'Στοιχεία Επικοινωνίας'}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === 'en' ? 'Email' : 'Email'}
                      </h3>
                      <a 
                        href="mailto:info@forexbot.gr"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        info@forexbot.gr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === 'en' ? 'Social Media' : 'Κοινωνικά Δίκτυα'}
                      </h3>
                      <div className="flex gap-6 mt-4">
                        <a 
                          href="https://www.facebook.com/forexbot" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#4267B2] transition-colors duration-300"
                        >
                          <Facebook className="w-6 h-6" />
                        </a>
                        <a 
                          href="https://twitter.com/forexbot" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300"
                        >
                          <Twitter className="w-6 h-6" />
                        </a>
                        <a 
                          href="https://www.instagram.com/forexbot" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#C13584] transition-colors duration-300"
                        >
                          <Instagram className="w-6 h-6" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/company/forexbot" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#0077B5] transition-colors duration-300"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px]">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  {language === 'en' ? 'Response Time' : 'Χρόνος Απόκρισης'}
                </h2>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'I typically respond to inquiries within 24 hours during business days. For urgent matters, please reach out via Telegram for the fastest response.'
                    : 'Συνήθως απαντώ στα αιτήματα εντός 24 ωρών κατά τις εργάσιμες ημέρες. Για επείγοντα θέματα, παρακαλώ επικοινωνήστε μέσω Telegram για την ταχύτερη απόκριση.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add animations styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-in-delayed {
          opacity: 0;
          animation: fadeIn 1s ease-out 0.5s forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        /* Improve mobile responsiveness */
        @media (max-width: 768px) {
          .grid {
            gap: 2rem;
          }

          .rounded-2xl {
            border-radius: 1rem;
          }

          .p-8 {
            padding: 1.5rem;
          }
        }

        /* Add smooth transitions */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }

        /* Add hover effects */
        .hover\:shadow-xl:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .hover\:translate-y-\[-4px\]:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
};

export default Contact; 