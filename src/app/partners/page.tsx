import React from 'react';
import { FaAws, FaMicrosoft, FaGoogle, } from 'react-icons/fa';
import { SiAzuredevops, SiFortinet, SiZoho, SiAutodesk, SiLenovo, SiSynology } from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';

const Partners = () => {
  const partners = [
    {
      name: 'AWS',
      description: 'Leading cloud platform offering scalable computing solutions.',
      icon: <FaAws className="text-yellow-500 text-6xl" />,
    },
    {
      name: 'Microsoft Azure',
      description: 'Comprehensive cloud computing services by Microsoft.',
      icon: <SiAzuredevops className="text-blue-600 text-6xl" />,
    },
    {
      name: 'Google Cloud',
      description: 'Powerful cloud services and infrastructure by Google.',
      icon: <FaGoogle className="text-red-500 text-6xl" />,
    },
    // {
    //   name: 'Cisco',
    //   description: 'Leading provider of networking hardware and software.',
    //   icon: <FaCisco className="text-blue-600 text-6xl" />,
    // },
    // {
    //   name: 'Juniper Networks',
    //   description: 'Advanced network solutions for enterprise-level security.',
    //   icon: <SiJuniper className="text-green-500 text-6xl" />,
    // },
    {
      name: 'Fortinet',
      description: 'Security-driven networking solutions for protection at scale.',
      icon: <SiFortinet className="text-red-600 text-6xl" />,
    },
    {
      name: 'Sophos',
      description: 'Next-gen cybersecurity for protection and risk management.',
      icon: <MdSecurity className="text-purple-600 text-6xl" />,
    },
    // {
    //   name: 'Adobe',
    //   description: 'Industry-leading creative software for designers and businesses.',
    //   icon: <FaAdobe className="text-red-500 text-6xl" />,
    // },
    {
      name: 'Autodesk',
      description: 'Software for architecture, engineering, and construction.',
      icon: <SiAutodesk className="text-teal-500 text-6xl" />,
    },
    {
      name: 'ZOHO',
      description: 'Cloud software suite for CRM, productivity, and business operations.',
      icon: <SiZoho className="text-red-500 text-6xl" />,
    },
    // {
    //   name: 'Dell',
    //   description: 'World-class hardware solutions for enterprises.',
    //   icon: <FaDell className="text-blue-600 text-6xl" />,
    // },
    {
      name: 'Lenovo',
      description: 'Innovative hardware for business and personal use.',
      icon: <SiLenovo className="text-red-500 text-6xl" />,
    },
    {
      name: 'Synology',
      description: 'Data storage solutions and NAS hardware for enterprises.',
      icon: <SiSynology className="text-gray-600 text-6xl" />,
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
