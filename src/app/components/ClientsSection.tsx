import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const clients = [
  { name: 'Client 1',  image: '/image1.jpg' },
  { name: 'Client 2', image: '/image1.jpg' },
  { name: 'Client 3', image: '/image1.jpg' },
  { name: 'Client 4',  image: '/image1.jpg' },
];

const ClientsSection: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            <Image
              src={client.image}
              alt={client.name}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/clients">
          <div className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
            View All Clients
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ClientsSection;
