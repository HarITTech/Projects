import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl min-w-full md:min-w-[calc(33.33%-1rem)] mx-2 transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}>
      {/* Decorative quote icon */}
      <FaQuoteLeft className="absolute top-6 left-6 text-white/10 text-5xl" />
      
      <div className="relative z-10">
        <p className="text-lg md:text-xl text-white leading-relaxed">"{testimonial.quote}"</p>

        {/* Star Rating with animation */}
        <div className="flex mt-4 space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-xl md:text-2xl transition-all duration-300 ${i < testimonial.rating ? 'text-accentYellow animate-[pulse_1.5s_infinite]' : 'text-white/30'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-secondaryGreen object-cover"
              loading="lazy"
            />
            {isActive && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accentYellow rounded-full border-2 border-white"></div>
            )}
          </div>
          <div className="ml-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">{testimonial.name}</h3>
            <p className="text-sm md:text-base text-white/80">{testimonial.role}</p>
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
    }, 6000);

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
    <section className="relative py-20 bg-gradient-to-br from-primaryBlue/90 to-secondaryGreen/90 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accentYellow/30 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/20 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
            <FaStar className="text-accentYellow text-xl mr-2 animate-[spin_5s_linear_infinite]" />
            <span className="text-white font-medium">{t('testimonials.badge') || 'Client Feedback'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('testimonials.title') || 'Customer Testimonials'}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {t('testimonials.subtitle') || 'Hear what our satisfied customers say about our services'}
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isActive={currentSlide === index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  currentSlide === index 
                    ? 'bg-accentYellow w-8 scale-110' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;