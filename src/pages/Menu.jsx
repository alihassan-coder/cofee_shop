import React from "react";
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"
import image4 from "../assets/4.png"
import image5 from "../assets/5.png"
import image6 from "../assets/6.png"


export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Sandwich",
      description: "Bread with meat and vegetables",
      price: "12 K",
      rating: "4.8",
      image: image1,
    },
    {
      id: 2,
      name: "Hot Milk",
      description: "Hot milk with less sugar",
      price: "12 K",
      rating: "4.8",
      image: image2,
    },
    {
      id: 3,
      name: "Coffe Ice Cream",
      description: "Coffee with ice cream vanilla",
      price: "12 K",
      rating: "4.8",
      image: image3,
    },
    {
      id: 4,
      name: "Cappuccino",
      description: "Hot Cappuccino",
      price: "12 K",
      rating: "4.8",
      image: image4,
    },
    {
      id: 5,
      name: "Moccacino",
      description: "Hot Moccacino",
      price: "12 K",
      rating: "4.8",
      image: image5,
    },
    {
      id: 6,
      name: "Waffle Ice Cream",
      description: "Waffle with ice cream",
      price: "12 K",
      rating: "4.8",
      image: image6,
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Special menu for <span className="underline text-orange-500">you</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {item.rating} ★
                </span>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>

                {/* Price & Cart Button */}
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-gray-900">
                    {item.price}
                  </span>
                  <button className="bg-orange-500 text-white p-2 rounded-full shadow-md hover:bg-orange-600 transition duration-300">
                    🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
