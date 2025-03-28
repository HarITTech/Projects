import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { FaArrowRight, FaUsers, FaSolarPanel, FaMoneyBillWave, FaPhoneAlt } from 'react-icons/fa';
import bg2 from '../assets/images/hero-bg1.jpg';
import bg1 from '../assets/images/hero-bg2.jpg';
import bg3 from '../assets/images/hero-bg3.jpg';
import adani from '../assets/images/adani-logo.png';
import waree from '../assets/images/waaree-logo.png';
import poly from '../assets/images/polycab-logo.png';

const Home = () => {
  const { t } = useTranslation();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array of carousel images with unique IDs
  const carouselImages = [
    { id: 1, src: bg1 },
    { id: 2, src: bg2 },
    { id: 3, src: bg3 },
  ];

  // Preload images to ensure they load properly
  useEffect(() => {
    const loadImages = async () => {
      const promises = carouselImages.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = resolve;
          img.onerror = resolve; // Resolve even if an image fails to load
        });
      });
      await Promise.all(promises);
      setImagesLoaded(true);
    };
    loadImages();
  }, []);

  // Carousel settings for auto-sliding
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    arrows: true,
    fade: true,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div style={{ bottom: '20px' }}>
        <ul className="flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-4 h-4 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"></div>
    ),
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="bg-lightGray">
      {/* Hero Section with Auto-Sliding Carousel */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full">
        {!imagesLoaded ? (
          <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center bg-gray-200">
            <p className="text-darkGray text-lg">Loading...</p>
          </div>
        ) : (
          <Slider {...settings}>
            {carouselImages.map((image) => (
              <div key={image.id}>
                <div
                  className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${image.src})` }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
                    <div className="text-center text-white animate-fadeIn">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-lg">
                        {t('home.heroTitle')}
                      </h1>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 md:mb-8 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-2xl mx-auto opacity-90">
                        Harness the power of the sun with Influx Solar – sustainable energy solutions for your home and business.
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center space-x-2 bg-accentYellow text-darkGray py-2 px-4 sm:py-3 sm:px-6 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:bg-secondaryGreen hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <span>{t('home.getQuote')}</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4 sm:p-6 md:p-8 bg-lightGray rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-center">
              <FaUsers className="text-2xl sm:text-3xl md:text-4xl text-secondaryGreen mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primaryBlue">
                {t('home.stats.happyCustomers')}
              </h3>
              <p className="text-darkGray mt-2 text-xs sm:text-sm md:text-base">
                Satisfied clients across the region
              </p>
            </div>
            <div className="p-4 sm:p-6 md:p-8 bg-lightGray rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-center">
              <FaSolarPanel className="text-2xl sm:text-3xl md:text-4xl text-secondaryGreen mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primaryBlue">
                {t('home.stats.commercialInstallations')}
              </h3>
              <p className="text-darkGray mt-2 text-xs sm:text-sm md:text-base">
                Powering businesses with solar energy
              </p>
            </div>
            <div className="p-4 sm:p-6 md:p-8 bg-lightGray rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-center">
              <FaSolarPanel className="text-2xl sm:text-3xl md:text-4xl text-secondaryGreen mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primaryBlue">
                {t('home.stats.residentialInstallations')}
              </h3>
              <p className="text-darkGray mt-2 text-xs sm:text-sm md:text-base">
                Bringing solar to homes everywhere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-lightGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primaryBlue text-center mb-6 sm:mb-8 md:mb-12">
            Why Choose Influx Solar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg">
              <FaSolarPanel className="text-3xl sm:text-4xl md:text-5xl text-secondaryGreen mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primaryBlue mb-2">
                High-Quality Panels
              </h3>
              <p className="text-darkGray text-xs sm:text-sm md:text-base">
                We use top-tier solar panels from trusted brands like Adani, Waaree, and Polycab.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg">
              <FaMoneyBillWave className="text-3xl sm:text-4xl md:text-5xl text-secondaryGreen mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primaryBlue mb-2">
                Cost Savings
              </h3>
              <p className="text-darkGray text-xs sm:text-sm md:text-base">
                Save up to 90% on electricity bills with our efficient solar solutions.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg">
              <FaUsers className="text-3xl sm:text-4xl md:text-5xl text-secondaryGreen mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primaryBlue mb-2">
                Expert Team
              </h3>
              <p className="text-darkGray text-xs sm:text-sm md:text-base">
                Our experienced team ensures seamless installation and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primaryBlue mb-6 sm:mb-8 md:mb-12">
            {t('home.brands')}
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
            <img
              src={adani}
              alt="Adani"
              className="h-12 sm:h-16 md:h-20 transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src={waree}
              alt="Waaree"
              className="h-12 sm:h-16 md:h-20 transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src={poly}
              alt="Polycab"
              className="h-12 sm:h-16 md:h-20 transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-lightGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primaryBlue mb-4 sm:mb-6">
            {t('home.about')}
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-darkGray max-w-[90%] sm:max-w-[80%] md:max-w-2xl lg:max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8">
            {t('home.aboutText')}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 bg-primaryBlue text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:bg-secondaryGreen transition-all duration-300"
          >
            <span>Learn More</span>
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-purple-500 to-secondaryGreen text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 max-w-[90%] sm:max-w-[80%] md:max-w-2xl mx-auto">
            Contact us today to get a free quote and start saving with solar energy!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-accentYellow text-darkGray py-2 px-4 sm:py-3 sm:px-6 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:bg-white hover:text-primaryBlue transition-all duration-300"
          >
            <FaPhoneAlt />
            <span>{t('home.getQuote')}</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;