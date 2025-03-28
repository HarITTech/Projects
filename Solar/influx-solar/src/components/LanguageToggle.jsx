import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-white hover:text-accentYellow">
        <FaGlobe />
        <span>Language</span>
      </button>
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => changeLanguage('en')}
          className="block w-full text-left px-4 py-2 text-darkGray hover:bg-lightGray"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('hi')}
          className="block w-full text-left px-4 py-2 text-darkGray hover:bg-lightGray"
        >
          Hindi
        </button>
        <button
          onClick={() => changeLanguage('mr')}
          className="block w-full text-left px-4 py-2 text-darkGray hover:bg-lightGray"
        >
          Marathi
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;