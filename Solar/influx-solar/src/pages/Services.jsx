import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHome, FaBuilding } from 'react-icons/fa';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12 bg-lightGray">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primaryBlue text-center mb-8">
          {t('services.title')}
        </h1>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <FaHome className="text-4xl text-secondaryGreen mx-auto mb-4" />
            <img
              src="/assets/images/residential.jpg"
              alt="Residential Installation"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-primaryBlue">
              {t('services.residential')}
            </h2>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <FaBuilding className="text-4xl text-secondaryGreen mx-auto mb-4" />
            <img
              src="/assets/images/commercial.jpg"
              alt="Commercial Installation"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-primaryBlue">
              {t('services.commercial')}
            </h2>
          </div>
        </div>

        {/* Subsidies Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-primaryBlue mb-4">
            {t('services.subsidies')}
          </h2>
          <ul className="list-disc list-inside text-darkGray space-y-2">
            {t('services.subsidyDetails', { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;