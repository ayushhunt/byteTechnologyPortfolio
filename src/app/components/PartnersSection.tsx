import React from 'react';
import Link from 'next/link';
import { FaAws, FaGoogle } from 'react-icons/fa';
import { SiAutodesk, SiAzuredevops, SiLenovo, SiZoho } from 'react-icons/si';

const partners = [
  { name: 'AWS', icon: <FaAws className="text-yellow-500 text-6xl" /> },
  { name: 'Azure DevOps', icon: <SiAzuredevops className="text-blue-600 text-6xl" /> },
  { name: 'Google Cloud', icon: <FaGoogle className="text-red-500 text-6xl" /> },
  { name: 'Autodesk', icon: <SiAutodesk className="text-teal-500 text-6xl" /> },
  { name: 'ZOHO',icon: <SiZoho className="text-red-500 text-6xl" />},
  { name: 'Lenovo', icon: <SiLenovo className="text-red-500 text-6xl" />},
];

const PartnersSection: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8">Our Partners</h2>
      <div className="flex flex-wrap justify-center gap-8 px-5">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40 p-2 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            {partner.icon} {/* Directly render the icon here */}
            <h3 className="mt-4 text-lg font-semibold text-center">{partner.name}</h3>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <Link href="/partners">
          <div className="w-40 px-2 py-2 text-center bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors">
            View All Partners
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PartnersSection;
