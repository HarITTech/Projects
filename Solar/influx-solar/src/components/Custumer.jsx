import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`relative bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-xl min-w-full md:min-w-[calc(33.33%-1rem)] mx-2 transition-all duration-500 ease-out ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accentYellow/5 rounded-full filter blur-lg transform translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Quote icon */}
      <FaQuoteLeft className="absolute top-6 left-6 text-white/10 text-4xl sm:text-5xl" />
      
      <div className="relative z-10">
        {/* Testimonial text */}
        <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-light">
          "{testimonial.quote}"
        </p>

        {/* Star Rating */}
        <div className="flex mt-4 sm:mt-6 space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-lg sm:text-xl md:text-2xl transition-all duration-300 ${i < testimonial.rating ? 'text-accentYellow' : 'text-white/30'}`}
              style={{ 
                animation: i < testimonial.rating ? 'pulse 1.5s infinite' : 'none',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Client info */}
        <div className="mt-6 sm:mt-8 flex items-center">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white/20 object-cover transition-all duration-300 group-hover:border-secondaryGreen"
              loading="lazy"
            />
            {isActive && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-accentYellow rounded-full border-2 border-white animate-ping-once"></div>
            )}
          </div>
          <div className="ml-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{testimonial.name}</h3>
            <p className="text-xs sm:text-sm text-white/70">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Customer = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      quote: "The solar panels have significantly reduced our energy bills. The installation was professional and the team was knowledgeable.",
      name: "John Doe",
      role: "Homeowner",
      rating: 5,
      image: "https://storage.googleapis.com/a1aa/image/8bs4PKQUX0aLaNbPsu8adm9Yv3a3NKhPXUpHJzI1iLY.jpg",
    },
    {
      quote: "Excellent service from start to finish. We've seen a 60% reduction in our electricity costs since installation.",
      name: "Jane Smith",
      role: "Business Owner",
      rating: 4,
      image: "https://storage.googleapis.com/a1aa/image/8bs4PKQUX0aLaNbPsu8adm9Yv3a3NKhPXUpHJzI1iLY.jpg",
    },
    {
      quote: "Impressed with the product quality and after-sales support. Highly recommend for commercial installations.",
      name: "Michael Brown",
      role: "Entrepreneur",
      rating: 5,
      image: "https://storage.googleapis.com/a1aa/image/8bs4PKQUX0aLaNbPsu8adm9Yv3a3NKhPXUpHJzI1iLY.jpg",
    },
    {
      quote: "The team was professional and the installation was completed ahead of schedule. Very happy with the results.",
      name: "Sarah Johnson",
      role: "Property Manager",
      rating: 5,
      image: "https://storage.googleapis.com/a1aa/image/8bs4PKQUX0aLaNbPsu8adm9Yv3a3NKhPXUpHJzI1iLY.jpg",
    },
    {
      quote: "Great value for money. The monitoring system is particularly helpful for tracking our energy production.",
      name: "David Wilson",
      role: "Tech Enthusiast",
      rating: 4,
      image: "https://storage.googleapis.com/a1aa/image/8bs4PKQUX0aLaNbPsu8adm9Yv3a3NKhPXUpHJzI1iLY.jpg",
    },
  ];

  // Auto-slide effect with pause on hover
  useEffect(() => {
    if (isHovering) return;
    
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [testimonials.length, isHovering]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primaryBlue to-secondaryGreen overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accentYellow/30 filter blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/20 filter blur-3xl animate-float-slow-reverse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6">
            <FaStar className="text-accentYellow text-lg sm:text-xl mr-2 animate-spin-slow" />
            <span className="text-white font-medium text-sm sm:text-base">
              {t('testimonials.badge') || 'Client Feedback'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('testimonials.title') || 'Customer Testimonials'}
          </h2>
          <p className="text-lg sm:text-xl text-white/90">
            {t('testimonials.subtitle') || 'Hear what our satisfied customers say about our services'}
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => !isMobile && setIsHovering(true)}
          onMouseLeave={() => !isMobile && setIsHovering(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden px-2 sm:px-4">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isActive={currentSlide === index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 sm:mt-10 space-x-2 sm:space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-accentYellow w-6 sm:w-8 scale-110' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
        }
        @keyframes float-slow-reverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 10px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes ping-once {
          0% { transform: scale(0.8); opacity: 0.8; }
          70% { transform: scale(1.3); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-float-slow-reverse {
          animation: float-slow-reverse 15s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-ping-once {
          animation: ping-once 1s cubic-bezier(0,0,0.2,1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Customer;