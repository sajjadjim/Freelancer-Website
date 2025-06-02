import React from 'react';
import { FaMobileAlt, FaCode, FaMapMarkerAlt, FaRegSmile, FaFileAlt, FaLaptopCode } from 'react-icons/fa';
const Exclusivefeature = () => {
    const features = [
  {
    icon: <FaFileAlt size={40} />,
    title: "16+ Ready Task",
    description: "Your can see other tasks and bids there.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "100% Mobile Responsive",
    description: "Responsive design that ensures your websites will work well on all devices.",
  },
  {
    icon: <FaCode size={40} />,
    title: "Valid HTML & CSS",
    description: "Validate HTML & CSS code that ensures the code complies with industry standards.",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "Easily Task Add",
    description: "Hassle free and easy task add process for users.",
  },
  {
    icon: <FaMapMarkerAlt size={40} />,
    title: "Google Map",
    description: "Display your business location with ease using Google Maps.",
  },
  {
    icon: <FaRegSmile size={40} />,
    title: "Friendly Support",
    description: "Get prompt and friendly support for any website-related issues.",
  },
];
    return (
        <div>
    <section className=" py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-lg  font-medium">Why choose us?</h2>
        <h1 className="text-4xl font-bold mt-2">Exclusive Features</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#fdfdfd] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="text-black mb-4 mx-auto">{feature.icon}</div>
            <h3 className="text-xl text-black font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-black">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>


        </div>
    );
};

export default Exclusivefeature;