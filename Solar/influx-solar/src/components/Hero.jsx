import React from 'react';
import { useTranslation } from 'react-i18next';
import image from '../assets/0.png';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          alt={t('hero.imageAlt') || "Solar panels with a worker"}
          className="w-full h-full object-cover"
          src={image}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-primaryBlue/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
            <span className="text-accentYellow">{t('hero.title').split(' ')[0]}</span> {t('hero.title').split(' ').slice(1).join(' ')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up delay-100">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
            <button className="px-8 py-4 bg-accentYellow hover:bg-yellow-400 text-primaryBlue font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {t('hero.consultationButton')}
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              {t('hero.exploreButton')}
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;