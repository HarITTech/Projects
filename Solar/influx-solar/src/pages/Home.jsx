import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { FaArrowRight, FaUsers, FaSolarPanel, FaMoneyBillWave, FaPhoneAlt, FaBolt } from 'react-icons/fa';
import bg1 from '../assets/images/hero-bg1.jpg';
import bg2 from '../assets/images/hero-bg2.jpg';
import bg3 from '../assets/images/hero-bg3.jpg';
import adani from '../assets/images/adani-logo.png';
import waaree from '../assets/images/waaree-logo.png';
import polycab from '../assets/images/polycab-logo.png';

const Home = () => {
  const { t } = useTranslation();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array of carousel images with unique IDs and captions
  const carouselImages = [
    { id: 1, src: bg1, caption: 'Powering the Future with Solar Energy' },
    { id: 2, src: bg2, caption: 'Sustainable Solutions for Every Home' },
    { id: 3, src: bg3, caption: 'Empowering Businesses with Clean Energy' },
  ];

  // Preload images to ensure they load properly
  useEffect(() => {
    const loadImages = async () => {
      const promises = carouselImages.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = resolve;
          img.onerror = resolve;
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
    speed: 1000, // Smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds per slide for better readability
    arrows: true,
    fade: true,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div style={{ bottom: '30px' }}>
        <ul className="flex justify-center space-x-4">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-5 h-5 bg-white rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer shadow-md"></div>
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
      <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] w-full">
        {!imagesLoaded ? (
          <div className="h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] flex items-center justify-center bg-gray-200">
            <p className="text-darkGray text-lg font-semibold animate-pulse">Loading...</p>
          </div>
        ) : (
          <Slider {...settings}>
            {carouselImages.map((image) => (
              <div key={image.id}>
                <div
                  className="h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] w-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${image.src})` }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white animate-fadeIn">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight drop-shadow-2xl tracking-tight">
                        {t('home.heroTitle')}
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-[90%] sm:max-w-[80%] md:max-w-3xl lg:max-w-4xl mx-auto opacity-90 font-light">
                        {image.caption}
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center space-x-2 sm:space-x-3 bg-accentYellow text-darkGray py-3 px-6 sm:py-4 sm:px-8 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-secondaryGreen hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryBlue text-center mb-8 sm:mb-12 md:mb-16">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <div className="p-6 sm:p-8 bg-gradient-to-br from-lightGray to-white rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
              <FaUsers className="text-3xl sm:text-4xl md:text-5xl text-secondaryGreen mx-auto mb-4 sm:mb-6 animate-bounce" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primaryBlue mb-2 sm:mb-4">
                {t('home.stats.happyCustomers')}
              </h3>
              <p className="text-darkGray text-sm sm:text-base md:text-lg">
                Satisfied clients across the region
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-gradient-to-br from-lightGray to-white rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
              <FaSolarPanel className="text-3xl sm:text-4xl md:text-5xl text-secondaryGreen mx-auto mb-4 sm:mb-6 animate-bounce" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primaryBlue mb-2 sm:mb-4">
                {t('home.stats.commercialInstallations')}
              </h3>
              <p className="text-darkGray text-sm sm:text-base md:text-lg">
                Powering businesses with solar energy
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-gradient-to-br from-lightGray to-white rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
              <FaSolarPanel className="text-3xl sm:text-4xl md:text-5xl text-secondaryGreen mx-auto mb-4 sm:mb-6 animate-bounce" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primaryBlue mb-2 sm:mb-4">
                {t('home.stats.residentialInstallations')}
              </h3>
              <p className="text-darkGray text-sm sm:text-base md:text-lg">
                Bringing solar to homes everywhere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-lightGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryBlue text-center mb-8 sm:mb-12 md:mb-16">
            Why Choose Influx Solar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <div className="relative text-center p-6 sm:p-8 bg-white rounded-2xl shadow-xl border-t-4 border-secondaryGreen transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-secondaryGreen text-white rounded-full p-4">
                <FaSolarPanel className="text-2xl sm:text-3xl md:text-4xl" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primaryBlue mt-8 sm:mt-10 mb-3 sm:mb-4">
                High-Quality Panels
              </h3>
              <p className="text-darkGray text-sm sm:text-base md:text-lg">
                We use top-tier solar panels from trusted brands like Adani, Waaree, and Polycab.
              </p>
            </div>
            <div className="relative text-center p-6 sm:p-8 bg-white rounded-2xl shadow-xl border-t-4 border-secondaryGreen transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-secondaryGreen text-white rounded-full p-4">
                <FaMoneyBillWave className="text-2xl sm:text-3xl md:text-4xl" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primaryBlue mt-8 sm:mt-10 mb-3 sm:mb-4">
                Cost Savings
              </h3>
              <p className="text-darkGray text-sm sm:text-base md:text-lg">
                Save up to 90% on electricity bills with our efficient solar solutions.
              </p>
            </div>
            <div className="relative text-center p-6 sm:p-8 bg-white rounded-2xl shadow-xl border-t-4 border-secondaryGreen transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-secondaryGreen text-white rounded-full p-4">
                <FaUsers className="text-2xl sm:text-3xl md:text-4xl" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primaryBlue mt-8 sm:mt-10 mb-3 sm:mb-4">
                Expert Team
              </h3>
              <p className="text-darkGray text-sm sm:text-base md:text-lg">
                Our experienced team ensures seamless installation and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryBlue mb-8 sm:mb-12 md:mb-16">
            {t('home.brands')}
          </h2>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            <img
              src={adani}
              alt="Adani"
              className="h-14 sm:h-16 md:h-20 lg:h-24 transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src={waaree}
              alt="Waaree"
              className="h-14 sm:h-16 md:h-20 lg:h-24 transform hover:scale-110 transition-transform duration-300"
            />
            <img
              src={polycab}
              alt="Polycab"
              className="h-14 sm:h-16 md:h-20 lg:h-24 transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-lightGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryBlue mb-6 sm:mb-8 md:mb-12">
            {t('home.about')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-darkGray max-w-[90%] sm:max-w-[80%] md:max-w-3xl lg:max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10">
            {t('home.aboutText')}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-primaryBlue text-white py-3 px-6 sm:py-4 sm:px-8 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-secondaryGreen transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Learn More</span>
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r bg-green-400 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
            <FaBolt className="text-4xl sm:text-5xl md:text-6xl animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
            Ready to Go Solar?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-[90%] sm:max-w-[80%] md:max-w-3xl lg:max-w-4xl mx-auto">
            Contact us today to get a free quote and start saving with solar energy!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-accentYellow text-darkGray py-3 px-6 sm:py-4 sm:px-8 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-white hover:text-primaryBlue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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