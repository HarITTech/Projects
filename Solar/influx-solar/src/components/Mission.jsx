import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import bgImage from '../assets/1.png'
import popImage from '../assets/Placeholder Image 1.png'

const Mission = () => {
  return (
    <section className="h-auto md:h-[100vh] py-16 text-white md:text-[#244d6d] bg-cover bg-center bg-no-repeat "
    style={{ backgroundImage:
        window.innerWidth >= 768 ? `url(${bgImage})` : "linear-gradient(to bottom, #244c6d, #244c6d)",
    }}>
      <div className="container mx-auto px-4 md:flex md:space-x-8">
        <div className="md:w-1/3 justify-items-center">
          <img
            alt="Solar panels in a field"
            className="w-full md:w-[90%] h-auto md:h-[80vh] shadow-xl rounded-3xl"
            height="400"
            src={popImage}
            width="600"
          />
        </div>
        <div className="md:w-2/3 mt-8 md:mt-0">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-3xl font-bold">Discover the Benefits of Solar Energy</p>
          <p className="mt-4 text-lg font-normal">
            We are committed to providing sustainable energy solutions that help reduce carbon footprints and promote a cleaner environment.
          </p>
          <ul className="mt-4 space-y-2 text-lg font-medium">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              <span>High efficiency solar panels</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              <span>Cost-effective energy solutions</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              <span>Environmentally friendly</span>
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.33)] text-white font-semibold rounded-xl shadow-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Mission
