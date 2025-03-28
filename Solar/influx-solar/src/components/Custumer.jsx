import React from 'react'
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
    return (
      <div className="bg-[#ffffff3a] p-6 rounded-2xl min-w-[90%] md:min-w-0 md:w-auto snap-center">
        <p className="text-lg">"{testimonial.quote}"</p>
        
        {/* Star Rating */}
        <div className="flex mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={`text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`} 
            />
          ))}
        </div>
  
        <div className="mt-4 flex items-center">
          <img
            src={testimonial.image}
            alt="Customer photo"
            className="w-12 h-12 rounded-full"
            width="50"
            height="50"
          />
          <div className="ml-4">
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    );
  };


const Custumer = () => {

    const testimonials = [
        {
            quote: "The solar panels have significantly reduced our energy bills. Highly recommend!",
            name: "John Doe",
            role: "Homeowner",
            rating: 5, 
            image: "https://storage.googleapis.com/a1aa/image/8bs4PKQUX0aLaNbPsu8adm9Yv3a3NKhPXUpHJzI1iLY.jpg",
          },
          {
            quote: "Excellent service and support. The installation was quick and easy.",
            name: "Jane Smith",
            role: "Business Owner",
            rating: 4, 
            image: "https://storage.googleapis.com/a1aa/image/8bs4PKQUX0aLaNbPsu8adm9Yv3a3NKhPXUpHJzI1iLY.jpg",
          },
          {
            quote: "Great product quality and very professional team.",
            name: "Michael Brown",
            role: "Entrepreneur",
            rating: 3, 
            image: "https://storage.googleapis.com/a1aa/image/8bs4PKQUX0aLaNbPsu8adm9Yv3a3NKhPXUpHJzI1iLY.jpg",
          },
          {
            quote: "Excellent service and support. The installation was quick and easy.",
            name: "Jane Smith",
            role: "Business Owner",
            rating: 5, 
            image: "https://storage.googleapis.com/a1aa/image/8bs4PKQUX0aLaNbPsu8adm9Yv3a3NKhPXUpHJzI1iLY.jpg",
          },
          {
            quote: "Great product quality and very professional team.",
            name: "Michael Brown",
            role: "Entrepreneur",
            rating: 2, 
            image: "https://storage.googleapis.com/a1aa/image/8bs4PKQUX0aLaNbPsu8adm9Yv3a3NKhPXUpHJzI1iLY.jpg",
          }
        ];


  return (
    <section className="py-16 bg-[#0d2b45] text-white">
        <div className="container mx-auto px-4">
            <div className="text-center">
            <h2 className="text-3xl font-bold">Customer Testimonials</h2>
            <p className="mt-4 text-lg">
                See what our satisfied customers have to say about our services.
            </p>
            </div>

            {/* Scrollable Section */}
            <div className="mt-8 overflow-x-auto md:overflow-hidden scrollbar-hide">
            <div className="flex md:grid md:grid-cols-3 gap-8 snap-x snap-mandatory">
                {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
            </div>
        </div>
    </section>

  )
}

export default Custumer
