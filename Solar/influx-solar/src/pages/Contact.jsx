import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12 bg-lightGray">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primaryBlue text-center mb-8 flex items-center justify-center space-x-2">
          <FaMapMarkerAlt className="text-secondaryGreen" />
          <span>{t('contact.title')}</span>
        </h1>

        {/* Contact Form */}
        <ContactForm />

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-primaryBlue mb-4">
            {t('contact.address')}
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.123456789!2d78.123456789!3d20.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzI1LjQiTiA3OMKwMDcnMjMuOCJF!5e0!3m2!1sen!2sin!4v1634567891234!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="mb-8 rounded-lg shadow-lg"
          ></iframe>
          <a
            href="https://wa.me/9890888138"
            className="inline-flex items-center space-x-2 bg-secondaryGreen text-white py-3 px-6 rounded-full hover:bg-accentYellow hover:text-darkGray transition-all duration-300"
          >
            <FaWhatsapp />
            <span>{t('contact.whatsapp')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;