"use client"
import React from 'react';
import { FaCloud, FaShieldAlt, FaEthernet, FaShoppingCart } from 'react-icons/fa';
import { AiOutlinePrinter, AiOutlineDatabase, AiFillCode } from 'react-icons/ai';
import { MdSettings } from 'react-icons/md';
import { SiAdobe } from 'react-icons/si';
import { useRouter } from 'next/navigation';

const servicesData = {
  title: "Our Services",
  description: "At BY Technology, we offer a wide range of IT solutions designed to help businesses thrive in the digital age. From cloud computing to cybersecurity, our services cater to diverse needs with a focus on innovation and client success.",
  categories: [
    {
      name: "Cloud Computing",
      description: "Flexible and scalable cloud solutions tailored to your business needs.",
      icon: FaCloud, // Use the actual icon component
    },
    {
      name: "Network and Security",
      description: "Reliable network setup and robust security measures for business continuity.",
      icon: FaEthernet,
    },
    {
      name: "Data Centre – Servers/Storage/Networks/Power",
      description: "Optimize your data center infrastructure for enhanced performance and reliability.",
      icon: AiOutlineDatabase,
    },
    {
      name: "Cyber Security",
      description: "Comprehensive protection against cyber threats with proactive defense mechanisms.",
      icon: FaShieldAlt,
    },
    {
      name: "Software Development",
      description: "Custom software solutions that meet your unique business challenges.",
      icon: AiFillCode,
    },
    {
      name: "Manage Services Provider for Enterprise",
      description: "End-to-end IT support and management services for enterprise clients.",
      icon: MdSettings,
    },
    {
      name: "Active and Passive Networking",
      description: "Complete networking solutions, from active network components to passive cabling.",
      icon: FaEthernet,
    },
    {
      name: "Software Licensing",
      description: "Authorized reseller of software licenses from top vendors like Microsoft, Adobe, and more.",
      icon: SiAdobe,
    },
    {
      name: "Enterprise Printing Solutions",
      description: "Advanced printing solutions to streamline your enterprise's printing needs.",
      icon: AiOutlinePrinter,
    },
    {
      name: "Reselling of All Kinds of Hardware/Software",
      description: "Supplying a range of hardware and software from trusted vendors, tailored to your needs.",
      icon: FaShoppingCart,
    },
  ],
};

const Services = () => {
  const router = useRouter();

  const handleReadMore = (categoryName: string) => {
    // Navigate to the dynamic route with the service title
    router.push(`/services/${categoryName}`);
  };
  return (
    <div className="min-h-screen py-10 bg-cover bg-center bg-no-repeat">
      {/* Title and Description */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        {servicesData.title}
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        {servicesData.description}
      </p>
  
      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {servicesData.categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer"
          >
            <div className="text-6xl text-indigo-500 mb-4">
              <category.icon /> {/* Render the actual icon component */}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {category.name}
            </h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <button
              onClick={() => handleReadMore(category.name)} // Pass the category name to handleClick
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Services;
