import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FaSun, 
  FaTimes, 
  FaBars,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope
} from 'react-icons/fa';
import { MdSolarPower } from 'react-icons/md';
import logo from '../assets/images/logo.png';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect and resize
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { path: '/', label: t('navbar.home') },
    { path: '/services', label: t('navbar.services') },
    { path: '/projects', label: t('navbar.projects') },
    { path: '/about', label: t('navbar.about') },
    { path: '/contact', label: t('navbar.contact') },
  ];

  const contactItems = [
    { icon: <FaPhoneAlt />, text: '9890888138', href: 'tel:9890888138' },
    { icon: <FaWhatsapp />, text: t('contact.whatsapp'), href: 'https://wa.me/9890888138' },
    { icon: <FaEnvelope />, text: 'info@influxsolar.com', href: 'mailto:info@influxsolar.com' }
  ];

  return (
    <>
      {/* Top Contact Bar - Hidden on mobile */}
      <div className="bg-primaryBlue text-white text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 hidden md:block z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4 mb-1 sm:mb-0">
            {contactItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="flex items-center hover:text-accentYellow transition-colors whitespace-nowrap"
              >
                <span className="mr-1 sm:mr-2">{item.icon}</span>
                {item.text}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="flex items-center text-xs sm:text-sm">
              <MdSolarPower className="mr-1 text-accentYellow" />
              {t('footer.certifications').split(' | ')[0]}
            </span>
            <LanguageToggle />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-primaryBlue to-secondaryGreen shadow-xl py-1 sm:py-2' : 'bg-gradient-to-r from-primaryBlue/95 to-secondaryGreen/95 py-2 sm:py-2 z-30'}`}>
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1 sm:space-x-2">
              <img
                src={logo}
                alt={t('navbar.logoAlt') || "Influx Solar Logo"}
                className="h-10 sm:h-14 md:h-16 object-contain"
              />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Influx Solar</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 sm:py-2 px-1 text-white hover:text-accentYellow transition-colors duration-300 group text-sm sm:text-base ${
                    location.pathname === link.path ? 'text-accentYellow font-semibold' : ''
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-accentYellow transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              <Link className="ml-2 sm:ml-4 bg-accentYellow text-primaryBlue px-3 sm:px-6 py-1 sm:py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base" to="/contact">
                { 'Free Consultation'}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none z-50 p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={t('navbar.toggleMenu') || "Toggle menu"}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden fixed inset-0 bg-gradient-to-b from-primaryBlue to-secondaryGreen transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} pt-20 px-4 z-40`}>
            <div className="flex flex-col space-y-4 sm:space-y-6 overflow-y-auto h-full pb-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl sm:text-2xl font-medium py-2 px-4 rounded-lg transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-white/10 text-accentYellow' 
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <h3 className="text-white/80 font-medium text-lg sm:text-xl">{t('footer.contactUs')}:</h3>
                {contactItems.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="flex items-center text-white py-2 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors text-base sm:text-lg"
                  >
                    <span className="mr-3 text-accentYellow">{item.icon}</span>
                    {item.text}
                  </a>
                ))}
              </div>

              <div className="mt-6 sm:mt-8">
                <button className="w-full bg-accentYellow text-primaryBlue px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors shadow-lg text-base sm:text-lg">
                  {t('navbar.freeConsultation') || 'Free Consultation'}
                </button>
              </div>

              <div className="mt-6 sm:mt-8 flex justify-center">
                <LanguageToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;