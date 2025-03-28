import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { FaArrowRight, FaUsers, FaSolarPanel, FaMoneyBillWave, FaPhoneAlt, FaBolt, FaHome, FaBuilding } from 'react-icons/fa';
import bg1 from '../assets/images/hero-bg1.jpg';
import bg2 from '../assets/images/hero-bg2.jpg';
import bg3 from '../assets/images/hero-bg3.jpg';
import adani from '../assets/images/adani-logo.png';
import waree from '../assets/images/waaree-logo.png';
import poly from '../assets/images/polycab-logo.png';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Features from '../components/Features';
import Custumer from '../components/Custumer';
import Team from '../components/Team';
import Contact from '../components/Contact';
import InstallationProcess from '../components/InstallationProcess';

const Home = () => {
  const { t } = useTranslation();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array of carousel images with unique IDs and captions
  const carouselImages = [
    { id: 1, src: bg1, caption: 'Powering the Future with Solar Energy' },
    { id: 2, src: bg2, caption: 'Sustainable Solutions for Every Home' },
    { id: 3, src: bg3, caption: 'Empowering Businesses with Clean Energy' },
  ];

  const processSteps = [
    {
      step: 'Consultation',
      description: 'We assess your energy needs and site conditions to determine the best solar solution.',
      image: 'https://plus.unsplash.com/premium_photo-1661908759956-93c29efea72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      step: 'Design',
      description: 'Our team creates a custom solar system design tailored to your property and energy goals.',
      image: 'https://plus.unsplash.com/premium_photo-1716999684705-2c648f62a8fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      step: 'Installation',
      description: 'Professional installation with minimal disruption, ensuring safety and quality at every step.',
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      step: 'Activation',
      description: 'We connect and test your system to ensure it’s running at optimal performance.',
      image: 'https://plus.unsplash.com/premium_photo-1716932156898-9b7bccacfb22?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      step: 'Support',
      description: 'Ongoing maintenance and support to keep your solar system performing at its best.',
      image: 'https://plus.unsplash.com/premium_photo-1716824502184-f5f8816ed2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
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
      {/* <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full">
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
                 
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
               
                  <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
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
      </section> */}
      <Hero/>
      <Mission/>
      <Features/>


      {/* Stats Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10">
    <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-primaryBlue/20 filter blur-3xl"></div>
    <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-secondaryGreen/20 filter blur-3xl"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primaryBlue mb-4">
        Our <span className="text-secondaryGreen">Impact</span>
      </h2>
      <p className="text-lg md:text-xl text-darkGray/90">
        Transforming energy consumption with sustainable solar solutions
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
      {/* Happy Customers */}
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue/5 to-secondaryGreen/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="p-8 md:p-10 relative z-10">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-secondaryGreen/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-secondaryGreen/20 transition-colors duration-500">
            <FaUsers className="text-3xl md:text-4xl text-secondaryGreen group-hover:scale-110 transition-transform duration-500" />
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-primaryBlue text-center mb-3">
            500+
          </h3>
          <p className="text-xl md:text-2xl font-semibold text-center text-primaryBlue mb-2">
            Happy Customers
          </p>
          <p className="text-gray-600 text-center text-sm md:text-base">
            Satisfied clients across the region enjoying clean energy
          </p>
        </div>
      </div>

      {/* Commercial Installations */}
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue/5 to-secondaryGreen/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="p-8 md:p-10 relative z-10">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-secondaryGreen/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-secondaryGreen/20 transition-colors duration-500">
            <FaBuilding className="text-3xl md:text-4xl text-secondaryGreen group-hover:scale-110 transition-transform duration-500" />
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-primaryBlue text-center mb-3">
            250+
          </h3>
          <p className="text-xl md:text-2xl font-semibold text-center text-primaryBlue mb-2">
            Commercial Installations
          </p>
          <p className="text-gray-600 text-center text-sm md:text-base">
            Powering businesses with reliable solar energy solutions
          </p>
        </div>
      </div>

      {/* Residential Installations */}
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue/5 to-secondaryGreen/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="p-8 md:p-10 relative z-10">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-secondaryGreen/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-secondaryGreen/20 transition-colors duration-500">
            <FaHome className="text-3xl md:text-4xl text-secondaryGreen group-hover:scale-110 transition-transform duration-500" />
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-primaryBlue text-center mb-3">
            1000+
          </h3>
          <p className="text-xl md:text-2xl font-semibold text-center text-primaryBlue mb-2">
            Residential Installations
          </p>
          <p className="text-gray-600 text-center text-sm md:text-base">
            Bringing solar energy to homes across the country
          </p>
        </div>
      </div>
    </div>

    {/* Animated decorative elements */}
    <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primaryBlue/5 filter blur-3xl animate-[pulse_8s_infinite]"></div>
    <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondaryGreen/5 filter blur-3xl animate-[pulse_10s_infinite]"></div>
  </div>
</section>

      <InstallationProcess steps={processSteps} />

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-lightGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
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
      <section className="py-16 bg-gray-50 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryBlue">
        {t('home.brands')}
      </h2>
      <div className="w-20 h-1 bg-primaryBlue mx-auto mt-4"></div>
    </div>

    <div className="relative">
      {/* Gradient overlays for better UX */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

      {/* Infinite sliding animation */}
      <div className="flex items-center overflow-hidden">
        <div className="flex animate-infinite-scroll space-x-16 px-4">
          {[adani, waree, poly, adani, waree, poly].map((brand, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`Brand ${index}`}
                className="h-16 md:h-20 lg:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless looping */}
        <div className="flex animate-infinite-scroll space-x-16 px-4">
          {[adani, waree, poly, adani, waree, poly].map((brand, index) => (
            <div 
              key={`dup-${index}`} 
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`Brand ${index}`}
                className="h-16 md:h-20 lg:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      <Custumer/>
      <Team/>

      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-lightGray overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-5">
    <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primaryBlue mix-blend-multiply filter blur-3xl"></div>
    <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-secondaryGreen mix-blend-multiply filter blur-3xl"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="text-center max-w-4xl mx-auto">
      {/* Section heading with animated underline */}
      <div className="inline-block mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primaryBlue mb-4">
          {t('home.about')}
        </h2>
        <div className="relative w-3/4 mx-auto">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primaryBlue to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondaryGreen animate-underline-expand"></div>
        </div>
      </div>

      {/* Content with staggered animation */}
      <div className="mb-14">
        <p className="text-lg sm:text-xl md:text-2xl text-darkGray leading-relaxed mb-8 animate-fade-in-up">
          {t('home.aboutText')}
        </p>
        <div className="animate-fade-in-up delay-100">
          <Link
            to="/about"
            className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-primaryBlue to-secondaryGreen text-white py-4 px-8 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
          >
            <span className="relative overflow-hidden">
              <span className="block group-hover:-translate-y-full transition-transform duration-300">
                Learn More
              </span>
              <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                Discover More
              </span>
            </span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

   
      <Contact/>
    </div>
  );
};

export default Home;