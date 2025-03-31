import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import {
  FaArrowRight,
  FaUsers,
  FaSolarPanel,
  FaMoneyBillWave,
  FaPhoneAlt,
  FaBolt,
  FaHome,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";
import bg1 from "../assets/images/hero-bg1.jpg";
import bg2 from "../assets/images/hero-bg2.jpg";
import bg3 from "../assets/images/hero-bg3.jpg";
import adani from "../assets/images/adani-logo.png";
import waree from "../assets/images/waaree-logo.png";
import poly from "../assets/images/polycab-logo.png";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Features from "../components/Features";
import Custumer from "../components/Custumer";
import Team from "../components/Team";
import Contact from "../components/Contact";
import InstallationProcess from "../components/InstallationProcess";

const Home = () => {
  const { t } = useTranslation();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array of carousel images with unique IDs and captions
  const carouselImages = [
    { id: 1, src: bg1, caption: "Powering the Future with Solar Energy" },
    { id: 2, src: bg2, caption: "Sustainable Solutions for Every Home" },
    { id: 3, src: bg3, caption: "Empowering Businesses with Clean Energy" },
  ];

  const processSteps = [
    {
      step: "Consultation",
      description:
        "We assess your energy needs and site conditions to determine the best solar solution.",
      image:
        "https://plus.unsplash.com/premium_photo-1661908759956-93c29efea72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      step: "Design",
      description:
        "Our team creates a custom solar system design tailored to your property and energy goals.",
      image:
        "https://plus.unsplash.com/premium_photo-1716999684705-2c648f62a8fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      step: "Installation",
      description:
        "Professional installation with minimal disruption, ensuring safety and quality at every step.",
      image:
        "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      step: "Activation",
      description:
        "We connect and test your system to ensure it’s running at optimal performance.",
      image:
        "https://plus.unsplash.com/premium_photo-1716932156898-9b7bccacfb22?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      step: "Support",
      description:
        "Ongoing maintenance and support to keep your solar system performing at its best.",
      image:
        "https://plus.unsplash.com/premium_photo-1716824502184-f5f8816ed2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <div style={{ bottom: "30px" }}>
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
      <Hero />
      <Mission />
      <Features />

      {/* Stats Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-primaryBlue/20 filter blur-3xl animate-[float_12s_infinite]"></div>
          <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-secondaryGreen/20 filter blur-3xl animate-[float_15s_infinite]"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-accentYellow/15 filter blur-3xl animate-[float_8s_infinite]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 lg:mb-24">
            <div className="inline-flex items-center bg-primaryBlue/5 px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-primaryBlue uppercase tracking-wider">
                Making a Difference
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondaryGreen to-accentYellow">
                Impact
              </span>
            </h2>
            <p className="text-lg md:text-xl text-darkGray/90 max-w-2xl mx-auto">
              Transforming energy consumption with sustainable solar solutions
              that make a measurable difference
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <FaUsers className="text-3xl md:text-4xl" />,
                value: "500+",
                title: "Happy Customers",
                description:
                  "Satisfied clients enjoying clean energy with 98% satisfaction rate",
                color: "from-blue-100 to-blue-50",
                iconColor: "text-blue-500",
              },
              {
                icon: <FaBuilding className="text-3xl md:text-4xl" />,
                value: "250+",
                title: "Commercial Installations",
                description:
                  "Businesses powered with average 40% energy cost reduction",
                color: "from-green-100 to-green-50",
                iconColor: "text-green-500",
              },
              {
                icon: <FaHome className="text-3xl md:text-4xl" />,
                value: "1000+",
                title: "Residential Installations",
                description:
                  "Homes transformed with solar, averaging 90% energy independence",
                color: "from-amber-100 to-amber-50",
                iconColor: "text-amber-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 hover:border-transparent transition-all duration-500"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Animated shine effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-y-full -inset-x-20 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shine_1.5s_forwards]"></div>
                </div>

                <div className="relative z-10 p-8 md:p-10 h-full">
                  {/* Icon with animated border */}
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6 mx-auto border-2 ${stat.iconColor}/20 group-hover:border-${stat.iconColor} transition-all duration-500`}
                  >
                    <div className={stat.iconColor}>{stat.icon}</div>
                  </div>

                  {/* Stat value with counter animation */}
                  <h3 className="text-5xl md:text-6xl font-extrabold text-center mb-3 text-gray-900">
                    <span className="inline-block min-w-[4.5rem]">
                      {stat.value}
                    </span>
                  </h3>

                  <h4 className="text-xl md:text-2xl font-semibold text-center mb-2 text-gray-800">
                    {stat.title}
                  </h4>

                  <p className="text-gray-600 text-center text-sm md:text-base">
                    {stat.description}
                  </p>

                  {/* Animated underline */}
                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto group-hover:via-current group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional impact metrics */}
          <div className="mt-16 md:mt-20 lg:mt-24 bg-white rounded-3xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "5MW+", label: "Total Capacity" },
                { value: "3.2K+", label: "Tons CO2 Reduced" },
                { value: "25", label: "Cities Served" },
                { value: "10+", label: "Years Experience" },
              ].map((metric, index) => (
                <div key={index} className="p-4">
                  <p className="text-3xl md:text-4xl font-bold text-primaryBlue mb-2">
                    {metric.value}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add these animations to your global CSS */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-20px) translateX(10px);
            }
          }
          @keyframes shine {
            100% {
              transform: translateX(200%);
            }
          }
        `}</style>
      </section>

      <InstallationProcess steps={processSteps} />

      {/* Why Choose Us Section */}
      {/* Why Choose Us Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Decorative elements - moved behind content */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-primaryBlue/20 filter blur-3xl animate-[float_12s_infinite]"></div>
          <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-secondaryGreen/20 filter blur-3xl animate-[float_15s_infinite]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header - improved spacing and responsive text */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center bg-primaryBlue/10 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-semibold text-primaryBlue uppercase tracking-wider">
                Our Advantages
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primaryBlue mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondaryGreen to-accentYellow">
                Influx Solar?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the difference that comes with working with solar energy
              experts
            </p>
          </div>

          {/* Benefits Grid - improved responsive behavior */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 ">
            {[
              {
                icon: <FaSolarPanel className="text-2xl sm:text-3xl" />,
                title: "Premium Solar Panels",
                description:
                  "We use top-tier solar panels from industry leaders like Adani, Waaree, and Polycab with 25-year performance warranties",
                color: "bg-blue-500",
                stats: "22-24% Efficiency",
              },
              {
                icon: <FaMoneyBillWave className="text-2xl sm:text-3xl" />,
                title: "Significant Savings",
                description:
                  "Clients save 80-90% on electricity bills with ROI in 3-5 years through our optimized solar solutions",
                color: "bg-green-500",
                stats: "90% Savings",
              },
              {
                icon: <FaUsers className="text-2xl sm:text-3xl" />,
                title: "Certified Experts",
                description:
                  "Our MNRE-certified team handles everything from consultation to maintenance with 500+ successful installations",
                color: "bg-amber-500",
                stats: "10+ Years Experience",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -inset-y-full -inset-x-20 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_forwards]"></div>
                </div>

                {/* Floating icon - improved positioning */}
                <div
                  className={`absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2 ${benefit.color} text-white rounded-full p-3 sm:p-4 shadow-md group-hover:scale-105 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>

                {/* Content - improved padding and spacing */}
                <div className="pt-16 pb-8 px-6 sm:px-8 lg:pt-20 lg:px-10 lg:pb-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-primaryBlue mb-3 sm:mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base text-center mb-4 sm:mb-6">
                    {benefit.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-50 rounded-full text-xs sm:text-sm font-medium text-gray-800 group-hover:bg-gray-100 transition-colors">
                      {benefit.stats}
                    </span>
                  </div>
                </div>

                {/* Animated border bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-current transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Trust badges - improved responsive behavior */}
          <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            {[
              "MNRE Certified",
              "ISO 9001:2015",
              "5-Star Rated",
              "10-Year Warranty",
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center bg-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-full shadow-xs sm:shadow-sm border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <FaCheckCircle className="text-green-500 text-sm sm:text-base mr-1.5 sm:mr-2" />
                <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Animation styles */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-20px) translateX(10px);
            }
          }
          @keyframes shine {
            100% {
              transform: translateX(200%);
            }
          }
        `}</style>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-primaryBlue/10 px-4 py-1.5 rounded-full mb-4">
              <span className="text-xs sm:text-sm font-semibold text-primaryBlue uppercase tracking-wider">
                Trusted Partners
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primaryBlue mb-4">
              {t("home.brands")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primaryBlue to-secondaryGreen rounded-full mx-auto"></div>
          </div>

          {/* Brands Marquee */}
          <div className="relative">
            {/* Gradient overlays - improved visibility */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent z-10"></div>

            {/* Marquee Container */}
            <div className="flex items-center overflow-hidden py-4">
              {/* First Marquee Set */}
              <div className="flex animate-infinite-scroll whitespace-nowrap">
                {[adani, waree, poly].map((brand, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center justify-center mx-8 md:mx-12 lg:mx-16 px-2"
                  >
                    <div className="relative group">
                      <img
                        src={brand}
                        alt={`Brand ${index}`}
                        className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                      />
                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-primaryBlue/10 blur-md -z-10 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Duplicate for seamless looping */}
              <div
                className="flex animate-infinite-scroll whitespace-nowrap"
                aria-hidden="true"
              >
                {[adani, waree, poly].map((brand, index) => (
                  <div
                    key={`dup-${index}`}
                    className="inline-flex items-center justify-center mx-8 md:mx-12 lg:mx-16 px-2"
                  >
                    <div className="relative group">
                      <img
                        src={brand}
                        alt=""
                        className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-primaryBlue/10 blur-md -z-10 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style jsx>{`
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-infinite-scroll {
            display: flex;
            width: fit-content;
            animation: infinite-scroll 30s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      <Custumer />
      <Team />

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
                {t("home.about")}
              </h2>
              <div className="relative w-3/4 mx-auto">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primaryBlue to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondaryGreen animate-underline-expand"></div>
              </div>
            </div>

            {/* Content with staggered animation */}
            <div className="mb-14">
              <p className="text-lg sm:text-xl md:text-2xl text-darkGray leading-relaxed mb-8 animate-fade-in-up">
                {t("home.aboutText")}
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

      <Contact />
    </div>
  );
};

export default Home;
