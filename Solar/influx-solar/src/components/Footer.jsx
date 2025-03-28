import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="gradient-bg text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>{t('footer.quickLinks')}</span>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-accentYellow transition-colors duration-300">
                {t('navbar.home')}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-accentYellow transition-colors duration-300">
                {t('navbar.services')}
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-accentYellow transition-colors duration-300">
                {t('navbar.projects')}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accentYellow transition-colors duration-300">
                {t('navbar.about')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accentYellow transition-colors duration-300">
                {t('navbar.contact')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <FaPhone />
            <span>{t('footer.contact')}</span>
          </h3>
          <p className="mb-2">{t('contact.address')}</p>
          <p className="mb-2">Er. Shankar Dandekar: 9890888138</p>
          <p>Er. Kishor Dhore: 8007685547</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-2xl hover:text-accentYellow transition-colors duration-300">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-accentYellow transition-colors duration-300">
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/9890888138"
              className="text-2xl hover:text-accentYellow transition-colors duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2025 Influx Solar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;