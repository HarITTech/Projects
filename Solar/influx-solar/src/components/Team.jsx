import React from 'react';
import solar from '../assets/images/solarfou.jpg';
import { FaLinkedin, FaTwitter, FaQuoteLeft } from 'react-icons/fa';

const Team = () => {
  const founder = {
    name: "Er. Kishor Dhore",
    role: "Founder & CEO",
    bio: "Solar industry veteran with 15+ years of experience in renewable energy solutions. Passionate about making sustainable energy accessible to all.",
    social: {
      linkedin: "#",
      twitter: "#"
    },
    quote: "Our mission is to power India's future with clean, affordable solar energy for every home and business."
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-primaryBlue/20 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondaryGreen/20 filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center bg-primaryBlue/10 px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs sm:text-sm font-semibold text-primaryBlue uppercase tracking-wider">
              Leadership
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primaryBlue mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondaryGreen to-accentYellow">Founder</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            The visionary behind Influx Solar's renewable energy mission
          </p>
        </div>

        {/* Founder Card */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Founder Photo */}
            <div className="lg:w-2/5 relative group overflow-hidden">
              <img
                alt={founder.name}
                className="w-full h-64 sm:h-80 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={solar}
                loading="lazy"
              />
              {/* Social Links */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href={founder.social.linkedin} 
                  className="bg-white p-2 rounded-full shadow-md hover:bg-primaryBlue/10 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin className="text-primaryBlue text-lg" />
                </a>
                <a 
                  href={founder.social.twitter} 
                  className="bg-white p-2 rounded-full shadow-md hover:bg-primaryBlue/10 transition-all duration-300 hover:scale-110"
                  aria-label="Twitter profile"
                >
                  <FaTwitter className="text-primaryBlue text-lg" />
                </a>
              </div>
            </div>

            {/* Founder Info */}
            <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-primaryBlue">
                  {founder.name}
                </h3>
                <p className="text-secondaryGreen font-medium">{founder.role}</p>
              </div>
              
              <div className="flex-grow">
                <p className="text-gray-600 mb-6">{founder.bio}</p>
                
                {/* Quote */}
                <div className="relative bg-gray-50/50 p-4 sm:p-6 rounded-lg border-l-4 border-secondaryGreen">
                  <FaQuoteLeft className="absolute -top-3 -left-3 text-secondaryGreen/20 text-4xl" />
                  <p className="text-sm sm:text-base italic text-gray-700 relative z-10">
                    "{founder.quote}"
                  </p>
                </div>
              </div>

              {/* Decorative divider */}
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-secondaryGreen to-accentYellow rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primaryBlue/5 to-secondaryGreen/5 p-6 sm:p-8 rounded-xl max-w-4xl mx-auto border border-gray-100">
          <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-4 text-center">
            Our Vision
          </h3>
          <p className="text-center text-gray-700">
            To make sustainable solar energy accessible and affordable for every home and business in India, 
            reducing carbon footprints while maximizing energy independence.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primaryBlue to-secondaryGreen rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;