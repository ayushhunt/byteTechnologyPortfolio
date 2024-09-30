import Image from 'next/image';
import React from 'react';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group w-full h-64 bg-gray-800">
      {/* Image Section */}
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        
        layout='fill'
      />

      {/* Text Description Section */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
};

const ServicesComponent: React.FC = () => {
  const services = [
    {
      imageSrc: '/Assests/Networking2.jpg',
      title: 'Networking',
      description: 'Seamless connectivity, powering your digital future.',
    },
    {
      imageSrc: '/Assests/Cloud3.webp',
      title: 'Cloud',
      description: 'Empowering your business with scalable cloud solutions.',
    },
    {
      imageSrc: '/Assests/Security3.jpg',
      title: 'Security',
      description: 'Securing your data, protecting your success',
    },
    {
      imageSrc: '/Assests/Innovation2.jpg',
      title: 'Innovation',
      description: 'Driving innovation to unlock new possibilities.',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <p className="text-lg text-gray-600 mb-4">
        At BY Technology, we offer a comprehensive range of IT services tailored to meet the diverse needs of modern businesses. 
        From cloud computing and cybersecurity to custom software development and IT infrastructure management, 
        we provide innovative solutions designed to drive growth, enhance security, and optimize efficiency. 
        Our team of experts is dedicated to delivering customized strategies that align with your unique business goals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
