import React from "react";
import coffecup from "../assets/3.png";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6">
      <div
        className="max-w-6xl mx-auto bg-cover bg-center rounded-xl p-10 md:p-16 flex flex-col items-center"
        style={{ backgroundImage: `url(${coffecup})` }}
      >
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
          Subscribe to get <span className="text-yellow-600">50%</span> discount price
        </h2>

        {/* Subscription Form */}
        <div className="w-full max-w-lg mt-6">
          <div className="flex bg-white p-1 rounded-full shadow-lg">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-1 text-gray-800 focus:outline-none rounded-l-full"
            />
            <button className="bg-yellow-600 text-white px-3 py-1 rounded-full font-medium shadow-md hover:bg-yellow-700 transition duration-300">
              Order now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
