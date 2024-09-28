import React from 'react';
import { FaAws, FaSalesforce, FaShopify } from 'react-icons/fa'; // Example partner icons

const Partners = () => {
  const partners = [
    {
      name: 'AWS',
      description: 'Leading cloud platform offering scalable computing solutions.',
      icon: <FaAws className="text-yellow-500 text-6xl" />,
    },
    {
      name: 'Salesforce',
      description: 'World’s #1 customer relationship management platform.',
      icon: <FaSalesforce className="text-blue-500 text-6xl" />,
    },
    {
      name: 'Shopify',
      description: 'A powerful e-commerce platform enabling online stores.',
      icon: <FaShopify className="text-green-500 text-6xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Partners</h1>
      <div className="flex flex-wrap justify-center gap-8 px-5">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg rounded-lg p-6 max-w-sm hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 ease-in-out cursor-pointer"
          >
            <div className="flex justify-center mb-5">{partner.icon}</div>
            <h2 className="text-2xl font-semibold text-center text-gray-800 group-hover:text-indigo-600 transition duration-300">
              {partner.name}
            </h2>
            <p className="text-center text-gray-600 mt-3">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
