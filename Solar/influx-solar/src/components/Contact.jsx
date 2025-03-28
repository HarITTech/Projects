import React from 'react'
import bgImage from '../assets/3.png'

const Contact = () => {
  return (
    <section className="relative h-auto md:h-[100vh] py-10 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          window.innerWidth >= 768 ? "linear-gradient(to bottom, #0C2A43, #0C2A43)" : `url(${bgImage})`,
      }}>
      {/* Overlay for mobile (blur + reduced opacity) */}
      <div className="absolute inset-0 -z-30 bg-[#244c6d66] backdrop-blur-sm md:hidden"></div>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Reach Us And Clarify Your Doubts Today</h2>
          <p className="mt-4 text-lg">We are here to help you with any questions you may have.</p>
        </div>
        <div className="mt-8 md:flex md:space-x-8">
          <div className="md:w-1/3 mt-8 md:mt-0 hidden md:block">
            <img
              alt="Solar panels in a field"
              className="w-full md:w-[90%] h-auto md:h-[65vh] shadow-xl rounded-3xl"
              height="400"
              src={bgImage}
              width="600"
            />
          </div>
          <div className="md:w-2/3 mt-8 md:mt-0">
            <form>
              <div className="mb-4">
                <input
                  className="w-[80%] p-2 mt-2 border border-gray-300 rounded-xl text-black"
                  id="name"
                  type="text"
                  placeholder='Enter Your Name'
                />
              </div>
              <div className="mb-4">

                <input
                  className="w-[80%] p-2 mt-2 border border-gray-300 rounded-xl text-black"
                  id="email"
                  type="email"
                  placeholder='Enter Your Email'
                />
              </div>
              <div className="mb-4">

                <textarea
                  className="w-[80%] p-2 mt-2 border border-gray-300 rounded-xl text-black"
                  id="message"
                  rows="4"
                  placeholder='Enter Your Message'
                ></textarea>
              </div>
              <button
                className="mt-6 px-6 py-3 bg-[#1F659D] hover:bg-[#16476f] text-white font-bold rounded-xl shadow-lg"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
