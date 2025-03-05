import React from 'react'
import coffecup from '../assets/unsplash_3n3mPoGko8g@2x.png'

function About() {
  return (
    <div>
        <section className="w-full bg-[#f5e7d1] py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={coffecup}
                alt="Coffee"
                className="rounded-lg shadow-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
    
            {/* Right Side: Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-red-500"></span>About{" "}
                <span className="text-orange-500 underline">us</span>
              </h2>
              <p className="text-lg font-semibold text-gray-800">
                We provide quality coffee, and we are ready to deliver.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                We are a company that makes and distributes delicious drinks. Our
                main product is made with a secret recipe and is available in stores
                worldwide.
              </p>
    
              {/* Button */}
              <button className="mt-6 bg-yellow-600 text-white font-medium px-6 py-2 rounded-full shadow-md hover:bg-yellow-700 transition duration-300">
                Get your coffee
              </button>
            </div>
          </div>
        </section>
      );

    </div>
  )
}

export default About