import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import Custumer from '../components/Custumer';
import { FaMapMarkerAlt, FaWhatsapp, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaSolarPanel } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-lightGray">
      {/* Header Banner */}
      <div
        className="relative w-full h-64 sm:h-80 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509391367611-c231e3a04f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primaryBlue/70 to-secondaryGreen/70 flex flex-col items-center justify-center text-center p-4 sm:p-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 flex items-center space-x-3">
            <FaSolarPanel className="text-accentYellow text-4xl sm:text-5xl md:text-6xl animate-pulse" />
            <span>{t('contact.title')}</span>
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-2xl">
            Let’s power your future with solar energy! Contact us today for a free consultation or to learn more about our services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 md:py-20">
        {/* Contact Form Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-12 sm:mb-16 md:mb-20">

          <ContactForm />
        </div>

        {/* Contact Details Section */}
        <div className="bg-gradient-to-r from-primaryBlue to-secondaryGreen rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-12 sm:mb-16 md:mb-20 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 flex items-center space-x-3">
            <FaMapMarkerAlt className="text-accentYellow text-3xl sm:text-4xl animate-pulse" />
            <span>{t('contact.address')}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-accentYellow text-lg sm:text-xl" />
                <a href="tel:+919890888138" className="text-sm sm:text-base md:text-lg hover:text-white/80 transition-colors duration-300">
                  +91 9890 888 138
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-accentYellow text-lg sm:text-xl" />
                <a href="mailto:info@solarcompany.com" className="text-sm sm:text-base md:text-lg hover:text-white/80 transition-colors duration-300">
                  info@solarcompany.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-accentYellow text-lg sm:text-xl" />
                <a
                  href="https://wa.me/9890888138"
                  className="text-sm sm:text-base md:text-lg hover:text-white/80 transition-colors duration-300"
                >
                  {t('contact.whatsapp')}
                </a>
              </div>
              {/* Social Media Links */}
              <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-6">
                <a href="https://facebook.com" className="text-white hover:text-accentYellow transition-colors duration-300">
                  <FaFacebook className="text-2xl sm:text-3xl" />
                </a>
                <a href="https://twitter.com" className="text-white hover:text-accentYellow transition-colors duration-300">
                  <FaTwitter className="text-2xl sm:text-3xl" />
                </a>
                <a href="https://instagram.com" className="text-white hover:text-accentYellow transition-colors duration-300">
                  <FaInstagram className="text-2xl sm:text-3xl" />
                </a>
              </div>
            </div>
            {/* Address */}
            <div>
              <p className="text-sm sm:text-base md:text-lg opacity-90 mb-4 sm:mb-6">
                123 Solar Street, Green Energy City, Maharashtra, India 440001
              </p>
              <a
                href="https://wa.me/9890888138"
                className="inline-flex items-center space-x-2 bg-accentYellow text-darkGray py-2 px-4 sm:py-3 sm:px-6 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-white hover:text-primaryBlue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaWhatsapp />
                <span>{t('contact.whatsapp')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primaryBlue mb-4 sm:mb-6 flex items-center space-x-3">
            <FaMapMarkerAlt className="text-secondaryGreen text-3xl sm:text-4xl animate-pulse" />
            <span>Find Us on the Map</span>
          </h2>
          <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.123456789!2d78.123456789!3d20.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzI1LjQiTiA3OMKwMDcnMjMuOCJF!5e0!3m2!1sen!2sin!4v1634567891234!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        
      </div>
      <Custumer/>
    </div>
  );
};

export default Contact;