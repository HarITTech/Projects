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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-primaryBlue mb-6 flex items-center space-x-2">
        <FaSolarPanel className="text-secondaryGreen" />
        <span>{t('contact.title')}</span>
      </h2>
      <div className="mb-4">
        <label className="text-darkGray mb-2 flex items-center space-x-2">
          <FaUser />
          <span>{t('contact.form.name')}</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          required
        />
      </div>
      <div className="mb-4">
        <label className="text-darkGray mb-2 flex items-center space-x-2">
          <FaEnvelope />
          <span>{t('contact.form.email')}</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          required
        />
      </div>
      <div className="mb-4">
        <label className="text-darkGray mb-2 flex items-center space-x-2">
          <FaPhone />
          <span>{t('contact.form.phone')}</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-darkGray mb-2 items-center space-x-2">
          <FaMapMarkerAlt />
          <span>{t('contact.form.address')}</span>
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-darkGray mb-2 items-center space-x-2">
          <FaSolarPanel />
          <span>{t('contact.form.installationType')}</span>
        </label>
        <select
          name="installationType"
          value={formData.installationType}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
        >
          <option value="residential">{t('contact.form.residential')}</option>
          <option value="commercial">{t('contact.form.commercial')}</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-darkGray mb-2 items-center space-x-2">
          <FaComment />
          <span>{t('contact.form.message')}</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          rows="4"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-secondaryGreen text-white py-3 rounded-lg hover:bg-accentYellow hover:text-darkGray transition-all duration-300"
      >
        {t('contact.form.submit')}
      </button>
    </form>
  );
};

export default ContactForm;