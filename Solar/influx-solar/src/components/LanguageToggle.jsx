import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaChevronDown, FaCheck } from 'react-icons/fa';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update current language when i18n language changes
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <FaGlobe className="text-white text-lg" />
        <span className="text-white font-medium">
          {languages.find(lang => lang.code === currentLanguage)?.name}
        </span>
        <FaChevronDown className={`text-white text-xs transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      <div
        className={`absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-200 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 pointer-events-none'}`}
      >
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`w-full text-left px-4 py-3 flex items-center justify-between hover:bg-gray-100 transition-colors ${currentLanguage === language.code ? 'bg-primaryBlue/5 text-primaryBlue font-medium' : 'text-gray-700'}`}
          >
            <span>{language.name}</span>
            {currentLanguage === language.code && <FaCheck className="text-primaryBlue" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageToggle;