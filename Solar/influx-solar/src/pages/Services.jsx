import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHome, FaBuilding, FaTools, FaHeadset, FaSolarPanel, FaQuestionCircle, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import InstallationProcess from '../components/InstallationProcess';

const Services = () => {
  const { t } = useTranslation();

  // Array of services with Unsplash images and detailed descriptions
  const servicesData = [
    {
      icon: <FaHome className="text-4xl sm:text-5xl text-secondaryGreen mx-auto mb-4 sm:mb-6 animate-bounce" />,
      image: 'https://plus.unsplash.com/premium_photo-1715944839368-c81c52b79027?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: t('services.residential'),
      description: 'We provide tailored solar solutions for homes, helping families reduce energy bills and embrace sustainable living. Our residential installations include high-quality panels, inverters, and battery storage systems.',
    },
    {
      icon: <FaBuilding className="text-4xl sm:text-5xl text-secondaryGreen mx-auto mb-4 sm:mb-6 animate-bounce" />,
      image: 'https://images.unsplash.com/photo-1637417494521-78b4d1d33029?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: t('services.commercial'),
      description: 'Our commercial solar installations empower businesses to cut operational costs and meet sustainability goals. We handle everything from design to installation for offices, factories, and retail spaces.',
    },
    {
      icon: <FaTools className="text-4xl sm:text-5xl text-secondaryGreen mx-auto mb-4 sm:mb-6 animate-bounce" />,
      image: 'https://images.unsplash.com/photo-1719559519300-e9d2c2bf6de1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Maintenance & Support',
      description: 'Keep your solar system running efficiently with our maintenance and support services. We offer regular inspections, cleaning, and repairs to ensure optimal performance.',
    },
    {
      icon: <FaHeadset className="text-4xl sm:text-5xl text-secondaryGreen mx-auto mb-4 sm:mb-6 animate-bounce" />,
      image: 'https://plus.unsplash.com/premium_photo-1671808063354-424415d52d7c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Solar Consultation',
      description: 'Not sure where to start? Our expert consultants will assess your energy needs, evaluate your property, and design a custom solar solution that fits your budget and goals.',
    },
    {
      icon: <FaSolarPanel className="text-4xl sm:text-5xl text-white mx-auto mb-4 sm:mb-6 animate-bounce" />,
      image: 'https://plus.unsplash.com/premium_photo-1716385892347-ebf292a9a905?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Off-Grid Solutions',
      description: 'For remote locations, we offer off-grid solar systems with battery storage, ensuring you have reliable power even in areas without access to the grid.',
    },
  ];

  // Process steps for solar installation with images
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

  // Subsidies data with icons
  const subsidiesData = [
    {
      text: 'Up to 30% federal tax credit on solar installation costs.',
      icon: <FaCheckCircle className="text-secondaryGreen text-lg sm:text-xl" />,
    },
    {
      text: 'State-specific rebates for residential and commercial projects.',
      icon: <FaCheckCircle className="text-secondaryGreen text-lg sm:text-xl" />,
    },
    {
      text: 'Low-interest loans for solar financing in select regions.',
      icon: <FaCheckCircle className="text-secondaryGreen text-lg sm:text-xl" />,
    },
    {
      text: 'Net metering programs to earn credits for excess energy production.',
      icon: <FaCheckCircle className="text-secondaryGreen text-lg sm:text-xl" />,
    },
    {
      text: 'Special incentives for rural and off-grid installations.',
      icon: <FaCheckCircle className="text-secondaryGreen text-lg sm:text-xl" />,
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: 'How long does a solar installation take?',
      answer: 'A typical residential installation takes 1-3 days, depending on the system size and complexity.',
    },
    {
      question: 'What is the lifespan of a solar panel?',
      answer: 'Most solar panels have a lifespan of 25-30 years, with warranties to match.',
    },
    {
      question: 'Are there any government subsidies available?',
      answer: 'Yes, many regions offer subsidies and tax incentives for solar installations. We can help you navigate these options.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-lightGray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primaryBlue text-center mb-8 sm:mb-12 md:mb-16 flex items-center justify-center space-x-3">
           <span>{t('services.title')}</span>
        </h1>

        {/* Services Section (Improved) */}
        <div className="relative py-12 sm:py-16 md:py-20 rounded-2xl shadow-xl mb-12 sm:mb-16 md:mb-20 overflow-hidden">
          {/* Background with Gradient and Overlay */}
          <div
            className="absolute inset-1 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663126735166-5a9817186619?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          />
          <div className="absolute inset-0  bg-gradient-to-r from-primaryBlue/90 to-secondaryGreen/90"></div>

          {/* Content */}
          <div className="relative z-10 px-7">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-8 sm:mb-12 md:mb-16 flex items-center justify-center space-x-3">
              <span>We Provide</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="relative group text-center p-6 sm:p-8 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-500 border border-white/30"
                >
                  {service.icon}
                  <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden mb-4 sm:mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base md:text-lg opacity-90 mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  <a
                    href="/services-details"
                    className="inline-flex items-center space-x-2 bg-accentYellow text-darkGray py-2 px-4 rounded-full text-sm sm:text-base font-semibold hover:bg-secondaryGreen hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <span>Learn More</span>
                    <FaArrowRight />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subsidies Section (Improved) */}
        <div className="bg-white rounded-2xl shadow-xl mb-12 sm:mb-16 md:mb-20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Left Column: Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Subsidies"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 sm:p-6">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold">
                  {t('services.subsidies')}
                </h2>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primaryBlue mb-4 sm:mb-6 flex items-center space-x-3">
                <FaSolarPanel className="text-secondaryGreen text-3xl sm:text-4xl animate-pulse" />
                <span>{t('services.subsidies')}</span>
              </h2>
              <p className="text-darkGray text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                Take advantage of government incentives to make your solar investment even more affordable. We’ll guide you through the process of applying for subsidies and tax credits.
              </p>
              <ul className="space-y-4 sm:space-y-6">
                {subsidiesData.map((subsidy, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    {subsidy.icon}
                    <span className="text-darkGray text-sm sm:text-base md:text-lg">
                      {subsidy.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 sm:mt-8">
                <a
                  href="/subsidies-details"
                  className="inline-flex items-center space-x-2 bg-primaryBlue text-white py-3 px-6 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-secondaryGreen transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Explore Subsidies</span>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Process Overview Section (Using the Component) */}
        <InstallationProcess steps={processSteps} />

        {/* FAQ Section */}
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primaryBlue mb-4 sm:mb-6 flex items-center space-x-3">
            <FaQuestionCircle className="text-secondaryGreen text-3xl sm:text-4xl animate-pulse" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-lightGray pb-4 sm:pb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primaryBlue mb-2 sm:mb-3">
                  {faq.question}
                </h3>
                <p className="text-darkGray text-sm sm:text-base md:text-lg">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-accentYellow text-darkGray py-3 px-6 sm:py-4 sm:px-8 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-secondaryGreen hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Get a Free Quote Today</span>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;