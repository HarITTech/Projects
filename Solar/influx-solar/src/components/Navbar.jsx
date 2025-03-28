import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaSun } from 'react-icons/fa'; // Icon for the logo
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className="gradient-bg sticky top-0 z-50 shadow-lg py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <FaSun className="text-accentYellow text-3xl" />
          <span className="text-2xl font-bold text-white">Influx Solar</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className={`text-white hover:text-accentYellow transition-colors duration-300 ${
              location.pathname === '/' ? 'border-b-2 border-accentYellow' : ''
            }`}
          >
            {t('navbar.home')}
          </Link>
          <Link
            to="/services"
            className={`text-white hover:text-accentYellow transition-colors duration-300 ${
              location.pathname === '/services' ? 'border-b-2 border-accentYellow' : ''
            }`}
          >
            {t('navbar.services')}
          </Link>
          <Link
            to="/projects"
            className={`text-white hover:text-accentYellow transition-colors duration-300 ${
              location.pathname === '/projects' ? 'border-b-2 border-accentYellow' : ''
            }`}
          >
            {t('navbar.projects')}
          </Link>
          <Link
            to="/about"
            className={`text-white hover:text-accentYellow transition-colors duration-300 ${
              location.pathname === '/about' ? 'border-b-2 border-accentYellow' : ''
            }`}
          >
            {t('navbar.about')}
          </Link>
          <Link
            to="/contact"
            className={`text-white hover:text-accentYellow transition-colors duration-300 ${
              location.pathname === '/contact' ? 'border-b-2 border-accentYellow' : ''
            }`}
          >
            {t('navbar.contact')}
          </Link>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;