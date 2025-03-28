import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaBolt, FaPhoneAlt, FaUsers, FaUserTie, FaLeaf, FaAward, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primaryBlue to-secondaryGreen text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-white/20 filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accentYellow/20 filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center space-x-4">
              <FaUsers className="text-accentYellow" />
              <span>{t('about.title')}</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              {t('about.mission')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-white to-gray-50 p-8 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primaryBlue mb-6 flex items-center space-x-3">
              <FaLeaf className="text-secondaryGreen text-3xl" />
              <span>{t('about.whyChooseUs')}</span>
            </h2>
            <div className="prose prose-lg text-darkGray max-w-none">
              <p className="mb-6">{t('about.whyChooseUsText')}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <FaAward className="text-secondaryGreen text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primaryBlue mb-2">Industry Experience</h3>
                    <p className="text-gray-600">10+ years of solar expertise and innovation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <FaHandshake className="text-secondaryGreen text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primaryBlue mb-2">Customer Commitment</h3>
                    <p className="text-gray-600">500+ satisfied customers across the region</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primaryBlue mb-4 flex items-center justify-center space-x-3">
              <FaUserTie className="text-secondaryGreen text-3xl" />
              <span>{t('about.directors')}</span>
            </h2>
            <p className="text-xl text-darkGray max-w-2xl mx-auto">
              Meet the visionary leaders driving our solar revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {[1, 2].map((director) => (
              <div key={director} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue/5 to-secondaryGreen/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-8 md:p-10 relative z-10">
                  <div className="w-40 h-40 mx-auto mb-6 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-white shadow-lg overflow-hidden">
                      <img
                        src='https://images.unsplash.com/photo-1713946598467-fcf9332c56ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt={`Director ${director}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondaryGreen rounded-full flex items-center justify-center text-white">
                      <FaUserTie className="text-xl" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-primaryBlue mb-2">
                    {t(`about.director${director}`)}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {t(`about.director${director}Role`)}
                  </p>
                  <p className="text-gray-700 text-center">
                    {t(`about.director${director}Bio`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-sky-800 to-green-400 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-accentYellow/20 filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/20 filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <FaBolt className="text-3xl text-accentYellow animate-pulse" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-accentYellow">Go Solar</span>?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to get a free quote and start saving with solar energy!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-accentYellow text-primaryBlue py-4 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-primaryBlue transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaPhoneAlt />
              <span>{t('home.getQuote')}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;