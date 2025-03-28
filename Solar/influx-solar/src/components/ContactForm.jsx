import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSolarPanel, FaComment } from 'react-icons/fa';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    installationType: 'residential',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="relative bg-gradient-to-br from-primaryBlue/5 to-secondaryGreen/5 rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
      {/* Horizontal Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Side: Image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1689561800626-cc4f71cd8c7b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Solar Panels"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue/60 to-secondaryGreen/60 flex items-center justify-center p-4 sm:p-6">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 sm:mb-4 flex items-center justify-center space-x-3">
                <FaSolarPanel className="text-accentYellow text-3xl sm:text-4xl animate-pulse" />
                <span>{t('contact.title')}</span>
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg opacity-90">
                Let’s power your future with solar energy! Fill out the form to get started.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-6 sm:p-8 md:p-10 bg-white">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full p-3 sm:p-4 pt-6 sm:pt-7 border border-primaryBlue/20 rounded-lg bg-lightGray/20 text-darkGray placeholder-transparent focus:outline-none focus:ring-2 focus:ring-secondaryGreen transition-all duration-300"
                placeholder={t('contact.form.name')}
                required
              />
              <label
                htmlFor="name"
                className="absolute left-3 sm:left-4 top-1 sm:top-2 text-sm sm:text-base text-primaryBlue/70 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-placeholder-shown:text-darkGray/50 peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-sm sm:peer-focus:text-base peer-focus:text-primaryBlue transition-all duration-300 flex items-center space-x-2"
              >
                <FaUser className="text-secondaryGreen" />
                <span>{t('contact.form.name')}</span>
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full p-3 sm:p-4 pt-6 sm:pt-7 border border-primaryBlue/20 rounded-lg bg-lightGray/20 text-darkGray placeholder-transparent focus:outline-none focus:ring-2 focus:ring-secondaryGreen transition-all duration-300"
                placeholder={t('contact.form.email')}
                required
              />
              <label
                htmlFor="email"
                className="absolute left-3 sm:left-4 top-1 sm:top-2 text-sm sm:text-base text-primaryBlue/70 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-placeholder-shown:text-darkGray/50 peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-sm sm:peer-focus:text-base peer-focus:text-primaryBlue transition-all duration-300 flex items-center space-x-2"
              >
                <FaEnvelope className="text-secondaryGreen" />
                <span>{t('contact.form.email')}</span>
              </label>
            </div>

            {/* Phone Field */}
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="peer w-full p-3 sm:p-4 pt-6 sm:pt-7 border border-primaryBlue/20 rounded-lg bg-lightGray/20 text-darkGray placeholder-transparent focus:outline-none focus:ring-2 focus:ring-secondaryGreen transition-all duration-300"
                placeholder={t('contact.form.phone')}
                required
              />
              <label
                htmlFor="phone"
                className="absolute left-3 sm:left-4 top-1 sm:top-2 text-sm sm:text-base text-primaryBlue/70 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-placeholder-shown:text-darkGray/50 peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-sm sm:peer-focus:text-base peer-focus:text-primaryBlue transition-all duration-300 flex items-center space-x-2"
              >
                <FaPhone className="text-secondaryGreen" />
                <span>{t('contact.form.phone')}</span>
              </label>
            </div>

            {/* Address Field */}
            <div className="relative">
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="peer w-full p-3 sm:p-4 pt-6 sm:pt-7 border border-primaryBlue/20 rounded-lg bg-lightGray/20 text-darkGray placeholder-transparent focus:outline-none focus:ring-2 focus:ring-secondaryGreen transition-all duration-300"
                placeholder={t('contact.form.address')}
                required
              />
              <label
                htmlFor="address"
                className="absolute left-3 sm:left-4 top-1 sm:top-2 text-sm sm:text-base text-primaryBlue/70 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-placeholder-shown:text-darkGray/50 peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-sm sm:peer-focus:text-base peer-focus:text-primaryBlue transition-all duration-300 flex items-center space-x-2"
              >
                <FaMapMarkerAlt className="text-secondaryGreen" />
                <span>{t('contact.form.address')}</span>
              </label>
            </div>

            {/* Installation Type Field */}
            <div className="relative">
              <select
                id="installationType"
                name="installationType"
                value={formData.installationType}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border border-primaryBlue/20 rounded-lg bg-lightGray/20 text-darkGray focus:outline-none focus:ring-2 focus:ring-secondaryGreen transition-all duration-300 appearance-none"
              >
                <option value="residential" className="text-darkGray">{t('contact.form.residential')}</option>
                <option value="commercial" className="text-darkGray">{t('contact.form.commercial')}</option>
              </select>
              <label
                htmlFor="installationType"
                className="absolute left-3 sm:left-4 top-1 sm:top-2 text-sm sm:text-base text-primaryBlue/70 flex items-center space-x-2 pointer-events-none"
              >
                <FaSolarPanel className="text-secondaryGreen" />
                <span>{t('contact.form.installationType')}</span>
              </label>
              <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-primaryBlue/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="peer w-full p-3 sm:p-4 pt-6 sm:pt-7 border border-primaryBlue/20 rounded-lg bg-lightGray/20 text-darkGray placeholder-transparent focus:outline-none focus:ring-2 focus:ring-secondaryGreen transition-all duration-300 resize-none"
                rows="3"
                placeholder={t('contact.form.message')}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 sm:left-4 top-1 sm:top-2 text-sm sm:text-base text-primaryBlue/70 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-placeholder-shown:text-darkGray/50 peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-sm sm:peer-focus:text-base peer-focus:text-primaryBlue transition-all duration-300 flex items-center space-x-2"
              >
                <FaComment className="text-secondaryGreen" />
                <span>{t('contact.form.message')}</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primaryBlue to-secondaryGreen text-white py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:from-secondaryGreen hover:to-primaryBlue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;