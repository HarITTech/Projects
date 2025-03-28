import React from 'react'
import image from '../assets/0.png'

const Hero = () => {
  return (
    <section className="relative">
      <img
        alt="Solar panels with a worker"
        className="w-full h-[600px] object-cover"
        height="1080"
        src={image}
        width="1920"
      />
      <div className="absolute inset-0 bg-[#00000013] flex items-center justify-center">
        <div className="text-center text-[#244d6d]">
          <h1 className="text-4xl md:text-6xl font-bold text-[#244d6d]">
            Harness the Power of Solar Energy Today
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Join us in making the world a greener place.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#1F659D] hover:bg-[#16476f] text-white font-bold rounded-xl shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
