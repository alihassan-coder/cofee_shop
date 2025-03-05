import { FaCoffee } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";

const services = [
  {
    icon: <FaCoffee className="text-5xl text-brown-600" />,
    title: "Choose Your Coffee",
    description: "There are 20+ coffees for you.",
  },
  {
    icon: <MdDeliveryDining className="text-5xl text-yellow-600" />,
    title: "We Deliver It To You",
    description: "Fast and reliable delivery service.",
  },
  {
    icon: <GiCoffeeCup className="text-5xl text-green-600" />,
    title: "Enjoy Your Coffee",
    description: "Relax and enjoy your freshly brewed coffee!",
  },
];

const Service = () => {
  return (
    <section className="py-12 bg-[#3A2D25] text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">
        How to use delivery <span className="text-brown-600">service</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700">{service.title}</h3>
            <p className="text-gray-500 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
