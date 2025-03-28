import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUsers, FaUserTie } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12 bg-lightGray">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primaryBlue text-center mb-8 flex items-center justify-center space-x-2">
          <FaUsers className="text-secondaryGreen" />
          <span>{t('about.title')}</span>
        </h1>
        <p className="text-lg text-darkGray text-center mb-8 max-w-3xl mx-auto">
          {t('about.mission')}
        </p>

        {/* Why Choose Us */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-primaryBlue mb-4">
            {t('about.whyChooseUs')}
          </h2>
          <p className="text-darkGray">{t('about.whyChooseUsText')}</p>
        </div>

        {/* Directors */}
        <h2 className="text-3xl font-bold text-primaryBlue text-center mb-8 flex items-center justify-center space-x-2">
          <FaUserTie className="text-secondaryGreen" />
          <span>{t('about.directors')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/images/director1.jpg"
              alt="Director 1"
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-lg font-bold text-darkGray">{t('about.director1')}</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/images/director2.jpg"
              alt="Director 2"
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-lg font-bold text-darkGray">{t('about.director2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;