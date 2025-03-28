import React from 'react'
import bgImage from '../assets/2.png'
import { BsBox } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { MdWifiTethering } from "react-icons/md";

const Features = () => {
  return (
    <section className="relative h-auto md:h-[90vh] py-16 bg-cover bg-center bg-no-repeat text-white"
    style={{ backgroundImage:
        window.innerWidth >= 768 ? "linear-gradient(to bottom, #B1CDE3, #0C2A43)" : `url(${bgImage})`,
    }}>
    {/* Overlay for mobile (blur + reduced opacity) */}
  <div className="absolute inset-0 -z-30 bg-[#244c6d66] backdrop-blur-sm md:hidden"></div>
      <div className="container mx-auto px-4 md:flex md:space-x-8">

          <div className="md:w-2/3">
          <div className="text-center">
          <h2 className="text-3xl font-bold">
            Harness the power of the sun with our advanced solar technology.
          </h2>
          <p className="mt-4 text-lg">
            Our solutions are designed to provide maximum efficiency and reliability.
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mx-6">
            <li className="flex space-x-4">
                <span className="text-2xl">
                <i className="fas fa-solar-panel"><BsBox/></i>
                </span>
                <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">High Efficiency</h3>
                <p className="mt-1 text-left">
                    Our solar panels are designed to capture maximum sunlight and convert it into energy efficiently.
                </p>
                </div>
            </li>
            
            <li className="flex space-x-4 ">
                <span className=" text-2xl">
                <i className="fas fa-dollar-sign"><MdWifiTethering/></i>
                </span>
                <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">Cost Effective</h3>
                <p className="mt-1 text-left">
                Save money on your energy bills with our cost-effective solar solutions.
                </p>
                </div>
            </li>
            
            <li className="flex space-x-4">
                <span className=" text-2xl">
                <i className="fas fa-leaf"><MdOutlineDashboard /></i>
                </span>
                <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">Eco-Friendly</h3>
                <p className="mt-1 text-left">
                    Reduce your carbon footprint and contribute to a cleaner environment.
                </p>
                </div>
            </li>
            </ul>

          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 hidden md:block">
            <img
              src={bgImage}
              alt="Wind turbine in a field"
              className="w-full md:w-[85%] h-auto md:h-[70vh] shadow-xl rounded-3xl"
              width="600"
              height="400"
            />
          </div>
        
      </div>
    </section>
  )
}

export default Features
