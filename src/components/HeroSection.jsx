import React from "react";
import coffeeImage from "../assets/unsplash_PKXAiiy1O4U.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#F7E7D5] min-h-screen px-8 md:px-20 py-10">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Enjoy your <span className="text-orange-500">coffee</span> before your activity
        </h1>
        <p className="text-gray-600 mt-4">
          Boost your productivity and build your mood with a glass of coffee in the morning.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
            Order now 🍊
          </button>
          <button className="text-orange-500 px-6 py-3 rounded-full border border-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition">
            More menus
          </button>
        </div>
      </div>

      {/* Right Side - Coffee Image with Animated Floating Labels */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
        <div className="relative w-[300px] md:w-[350px] h-[300px] md:h-[350px] flex items-center justify-center">
          {/* Circular Background */}
          <div className="absolute w-[90%] h-[90%] bg-[#3A2D25] rounded-full"></div>

          {/* Coffee Image - Perfectly Adjusted */}
          <motion.img
            src={coffeeImage}
            alt="Cappuccino"
            className="  w-[90%] md:w-[100%] h-auto object-contain z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* Floating Labels Moving Around Image */}
          <motion.div
            className="absolute top-[-10%] left-[10%] bg-white px-4 py-2 rounded-full shadow-lg text-gray-700 font-semibold"
            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            Cappuccino
          </motion.div>

          <motion.div
            className="absolute top-[15%] right-[-10%] bg-white px-4 py-2 rounded-full shadow-lg flex items-center"
            animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <span className="text-gray-700 font-semibold">4.8</span>
            <span className="text-yellow-500 ml-1">⭐</span>
          </motion.div>

          <motion.div
            className="absolute bottom-[10%] left-[5%] bg-white px-4 py-2 rounded-full shadow-lg"
            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <span className="text-gray-700 font-semibold">18K</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
