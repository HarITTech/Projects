import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle, FaLeaf, FaSolarPanel } from "react-icons/fa";
import { MdEco } from "react-icons/md";
import bgImage from '../assets/1.png';
import popImage from '../assets/Placeholder Image 1.png';

const Mission = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {!isMobile && (
          <img
            alt={t('mission.imageAlt') || "Solar background"}
            className="w-full h-full object-cover"
            src={bgImage}
            loading="lazy"
          />
        )}
        <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-to-b from-primaryBlue to-secondaryBlue' : 'bg-gradient-to-r from-primaryBlue/90 to-transparent'}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-16">
          {/* Image Column */}
          <div className="lg:w-1/2 xl:w-2/5 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-accentYellow/20 rounded-3xl transform rotate-2 scale-105 hidden md:block" />
              <img
                alt={t('mission.imageAlt2') || "Solar panels in a field"}
                className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
                src={popImage}
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg hidden md:block">
                <div className="flex items-center">
                  <FaSolarPanel className="text-3xl text-accentYellow mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">{t('mission.since')}</p>
                    <p className="text-lg font-bold text-primaryBlue">{t('mission.trustedExperts')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:w-1/2 xl:w-3/5 text-white md:text-white">
            <div className="max-w-2xl">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <FaLeaf className="text-accentYellow mr-2" />
                <span className="font-medium">{t('mission.commitment')}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t('mission.title').split(' ').slice(0, -2).join(' ')} <span className="text-accentYellow">{t('mission.title').split(' ').slice(-2).join(' ')}</span>
              </h2>
              
              <p className="text-lg md:text-xl opacity-90 mb-8">
                {t('mission.description')}
              </p>
              
              <ul className="space-y-4 mb-10">
                {t('mission.features', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-accentYellow text-xl mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-accentYellow hover:bg-yellow-400 text-primaryBlue font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  {t('mission.assessmentButton')}
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300">
                  {t('mission.technologyButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 left-0 w-40 h-40 rounded-full bg-accentYellow/10 blur-3xl -z-0" />
          <div className="absolute bottom-1/3 right-0 w-60 h-60 rounded-full bg-white/5 blur-3xl -z-0" />
        </>
      )}
    </section>
  );
};

export default Mission;