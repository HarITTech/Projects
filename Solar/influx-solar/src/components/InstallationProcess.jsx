// src/components/InstallationProcess.jsx
import React from 'react';
import { FaSolarPanel } from 'react-icons/fa';

const InstallationProcess = ({ steps, title = "Our Solar Installation Process" }) => {
  return (
    <div className="relative py-12 sm:py-16 md:py-20 rounded-2xl shadow-xl mb-12 sm:mb-16 md:mb-20 overflow-hidden">
      {/* Background with Gradient and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509391367611-c231e3a04f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue/90 to-secondaryGreen/90"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-12 md:mb-16 flex items-center justify-center space-x-3">
         <span>{title}</span>
        </h2>

        {/* Timeline Line (Visible on Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform -translate-y-1/2">
          <div className="h-1 bg-accentYellow w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group text-center p-4 sm:p-6 bg-white/20 backdrop-blur-lg rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500 border border-white/30"
            >
              {/* Step Image */}
              <div className="relative w-full h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden mb-4 sm:mb-6">
                <img
                  src={step.image}
                  alt={step.step}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 sm:p-4">
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold">
                    {step.step}
                  </h3>
                </div>
              </div>

              {/* Step Number */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accentYellow text-darkGray rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Step Description */}
              <p className="text-sm sm:text-base md:text-lg opacity-90">
                {step.description}
              </p>

              {/* Timeline Dot (Visible on Desktop) */}
              <div className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-accentYellow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallationProcess;