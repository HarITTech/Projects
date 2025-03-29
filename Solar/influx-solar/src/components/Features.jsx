import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import bgImage from '../assets/2.png';
import { BsBox, BsLightningCharge } from "react-icons/bs";
import { MdOutlineDashboard, MdEco, MdSavings } from "react-icons/md";
import { FaSolarPanel, FaShieldAlt } from "react-icons/fa";

const Features = () => {
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

  const features = [
    {
      icon: <FaSolarPanel className="text-3xl text-accentYellow" />,
      title: t('features.highEfficiency'),
      description: t('features.highEfficiencyDesc'),
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <MdSavings className="text-3xl text-accentYellow" />,
      title: t('features.costEffective'),
      description: t('features.costEffectiveDesc'),
      bgColor: "bg-green-500/10"
    },
    {
      icon: <MdEco className="text-3xl text-accentYellow" />,
      title: t('features.ecoFriendly'),
      description: t('features.ecoFriendlyDesc'),
      bgColor: "bg-teal-500/10"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-accentYellow" />,
      title: t('features.warranty'),
      description: t('features.warrantyDesc'),
      bgColor: "bg-amber-500/10"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          alt={t('features.backgroundAlt') || "Solar technology background"}
          className="w-full h-full object-cover"
          src={bgImage}
          loading="lazy"
        />
        <div className={`absolute inset-0 ${isMobile ? 'bg-primaryBlue/90' : 'bg-gradient-to-r from-primaryBlue/95 to-transparent'}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
          {/* Text Content */}
          <div className="lg:w-2/3">
            <div className="text-center lg:text-left max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <BsLightningCharge className="text-accentYellow mr-2" />
                <span className="font-medium">{t('features.advancedTechnology')}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-accentYellow">{t('features.title').split(' ')[0]}</span> {t('features.title').split(' ').slice(1).join(' ')}
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto lg:mx-0">
                {t('features.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`p-6 rounded-2xl backdrop-blur-sm ${feature.bgColor} border border-white/10 hover:border-accentYellow/30 transition-all duration-300`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-white/80">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Column - Hidden on mobile */}
          {!isMobile && (
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-accentYellow/20 rounded-3xl transform -rotate-2 scale-105" />
                <img
                  alt={t('features.imageAlt') || "Solar panel technology"}
                  className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
                  src={bgImage}
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-primaryBlue p-4 rounded-2xl shadow-lg border border-white/10">
                  <div className="flex items-center">
                    <BsLightningCharge className="text-2xl text-accentYellow mr-3" />
                    <div>
                      <p className="text-sm text-white/70">{t('features.energyProduction')}</p>
                      <p className="text-lg font-bold text-white">{t('features.energyProductionValue')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-40 h-40 rounded-full bg-accentYellow/10 blur-3xl -z-0" />
      <div className="absolute bottom-1/3 right-0 w-60 h-60 rounded-full bg-white/5 blur-3xl -z-0" />
    </section>
  );
};

export default Features;