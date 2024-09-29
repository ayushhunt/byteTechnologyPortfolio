import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const partners = [
  { name: 'Partner 1', image: '/image1.jpg' },
  { name: 'Partner 2', image: '/image1.jpg' },
  { name: 'Partner 3', image: '/image1.jpg' },
  { name: 'Partner 4',  image: '/image1.jpg' },
];

const PartnersSection: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            <Image
              src={partner.image}
              alt={partner.name}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/partners">
          <div className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors">
            View All Partners
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PartnersSection;
