import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaSpinner, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import bgImage from '../assets/3.png';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });
    setStatusMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fef839bc-9dce-445b-b477-cf6fb3274cf1',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: false });
        setStatusMessage('Thank you for your message! We will contact you soon.');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setStatus({ submitting: false, success: false, error: false });
          setStatusMessage('');
        }, 5000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: true });
      setStatusMessage(error.message || 'Failed to send message. Please try again.');
      
      setTimeout(() => {
        setStatus({ submitting: false, success: false, error: false });
        setStatusMessage('');
      }, 5000);
    }
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl text-accentYellow" />,
      title: "Call Us",
      info: "+91 9890888138",
      link: "tel:+919890888138"
    },
    {
      icon: <FaEnvelope className="text-2xl text-accentYellow" />,
      title: "Email Us",
      info: "info@influxsolar.com",
      link: "mailto:info@influxsolar.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-accentYellow" />,
      title: "Visit Us",
      info: "Head Office: Near Bus Stop, Seloo, Th. Seloo, Dist. Wardha – 442104"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primaryBlue to-secondaryBlue overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-white/20 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accentYellow/20 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Reach Out & <span className="text-accentYellow">Connect</span>
          </h2>
          <p className="text-xl text-white/90">
            Have questions about solar solutions? Our team is ready to assist you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                      {method.link ? (
                        <a href={method.link} className="text-white/80 hover:text-accentYellow transition-colors">
                          {method.info}
                        </a>
                      ) : (
                        <p className="text-white/80">{method.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Image - Hidden on mobile */}
              {!isMobile && (
                <div className="mt-10">
                  <img
                    alt="Solar installation"
                    className="w-full h-auto rounded-xl shadow-lg"
                    src={bgImage}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
              {/* Status Message */}
              {(status.success || status.error) && (
                <div className={`mb-6 p-4 rounded-lg ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  <div className="flex items-center space-x-2">
                    {status.success ? (
                      <FaCheck className="text-green-600" />
                    ) : (
                      <FaExclamationTriangle className="text-red-600" />
                    )}
                    <p>{statusMessage}</p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accentYellow"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accentYellow"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accentYellow"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full md:w-auto px-8 py-4 bg-accentYellow text-primaryBlue font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                    status.submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-400'
                  }`}
                >
                  {status.submitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;