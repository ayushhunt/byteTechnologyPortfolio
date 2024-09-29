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
      imageSrc: 'image1.jpg',
      title: 'Service 1',
      description: 'This is a detailed description of service 1.',
    },
    {
      imageSrc: 'image2.jpg',
      title: 'Service 2',
      description: 'This is a detailed description of service 2.',
    },
    {
      imageSrc: 'image3.jpg',
      title: 'Service 3',
      description: 'This is a detailed description of service 3.',
    },
    {
      imageSrc: 'image4.jpg',
      title: 'Service 4',
      description: 'This is a detailed description of service 4.',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
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
