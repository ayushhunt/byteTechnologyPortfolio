import React from 'react';
import { FaApple, FaGoogle, FaMicrosoft } from 'react-icons/fa'; // Example icons

const Clients = () => {
  const clients = [
    {
      name: 'Apple',
      description: 'Innovating the future of technology.',
      icon: <FaApple className="text-gray-700 text-6xl" />,
    },
    {
      name: 'Google',
      description: 'Organizing the world’s information.',
      icon: <FaGoogle className="text-gray-700 text-6xl" />,
    },
    {
      name: 'Microsoft',
      description: 'Empowering every person on the planet.',
      icon: <FaMicrosoft className="text-gray-700 text-6xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Clients</h1>
      <div className="flex flex-wrap justify-center gap-8 px-5">
        {clients.map((client, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg rounded-lg p-6 max-w-sm hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 ease-in-out cursor-pointer"
          >
            <div className="flex justify-center mb-5">{client.icon}</div>
            <h2 className="text-2xl font-semibold text-center text-gray-800 group-hover:text-indigo-600 transition duration-300">
              {client.name}
            </h2>
            <p className="text-center text-gray-600 mt-3">{client.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
