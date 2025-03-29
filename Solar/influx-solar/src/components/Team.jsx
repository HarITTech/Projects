import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Team = () => {
  const founders = [
    {
      name: "Er. Shankar Dandekar",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60",
      bio: "Solar industry veteran with 15+ years of experience in renewable energy solutions",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Er. Kishor Dhore",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
      bio: "Technical expert specializing in solar system design and energy efficiency optimization",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-primaryBlue/20 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondaryGreen/20 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primaryBlue mb-4">
            Our <span className="text-secondaryGreen">Founders</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            The visionaries who pioneered Influx Solar's renewable energy mission
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Founder Photo */}
              <div className="w-full md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                <img
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={founder.image}
                  loading="lazy"
                />
                {/* Social Links */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href={founder.social.linkedin} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <FaLinkedin className="text-primaryBlue text-lg" />
                  </a>
                  <a href={founder.social.twitter} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <FaTwitter className="text-primaryBlue text-lg" />
                  </a>
                </div>
              </div>

              {/* Founder Info */}
              <div className="w-full md:w-2/3 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-primaryBlue mb-1">
                  {founder.name}
                </h3>
                <p className="text-secondaryGreen font-medium mb-4">{founder.role}</p>
                <p className="text-gray-600 mb-6">{founder.bio}</p>
                <div className="w-12 h-1 bg-secondaryGreen group-hover:w-24 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-primaryBlue/5 to-secondaryGreen/5 p-8 md:p-10 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-primaryBlue mb-4 text-center">
            Our Shared Vision
          </h3>
          <p className="text-lg text-gray-700 text-center">
            "To make sustainable solar energy accessible and affordable for every home and business in India, 
            reducing carbon footprints while maximizing energy independence."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;