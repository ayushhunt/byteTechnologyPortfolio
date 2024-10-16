"use client"
import { useState } from 'react';

interface Service {
  id: number;
  title: string;
  details: string;
  image: string;
}

interface SubService {
  id: number;
  sub: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [subServiceIndex, setSubServiceIndex] = useState(0);

  const services: Service[] = [
   
    { id: 1, title: 'Web Publishing/Localisation', details: 'Details about Web Publishing', image: '/path-to-image1' },
    { id: 6, title: 'E-commerce Integrations', details: 'Details about E-commerce Integrations', image: '/path-to-image6' },
   
    { id: 2, title: 'Quality Assurance', details: 'Details about Quality Assurance', image: '/path-to-image2' },
    { id: 7, title: 'Front-End Web & Mobile App Development', details: 'Front-end web development is the practice of converting data to a graphical interface, through HTML, CSS, and JavaScript.', image: '/path-to-image7' },
    { id: 3, title: 'Process Automation', details: 'Details about Process Automation', image: '/path-to-image3' },
    
    { id: 8, title: 'Content Automation', details: 'Details about Content Automation', image: '/path-to-image8' },
    { id: 4, title: 'Search Engine Optimisation (SEO)', details: 'Details about SEO', image: '/path-to-image4' },
   
   
    { id: 9, title: 'Digital Solution Development', details: 'Details about Digital Solutions', image: '/path-to-image9' },
   
    { id: 5, title: 'Content Management', details: 'Details about Content Management', image: '/path-to-image5' },
  ];

  const subServices: SubService[] = [
    { id: 1, sub: 'E-commerce Integrations' },
    { id: 2, sub: 'Content Automation' },
  ];

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleNextSubService = () => {
    setSubServiceIndex((prevIndex) => (prevIndex + 1) % subServices.length);
  };

  const handlePrevSubService = () => {
    setSubServiceIndex((prevIndex) => (prevIndex - 1 + subServices.length) % subServices.length);
  };

  return (
    <div className="flex flex-col md:flex-row  bg-gray-200 h-screen overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/3 p-8  mt-20 ml-10 ">
        <h1 className="text-4xl font-bold ">Services</h1>
        <p className="mt-9 text-gray-600">
          We provide multiple services from digital production to technology services.
        </p>
      </div>

      {/* Middle Section: Service List (2 Columns) */}
      <div className="w-full md:w-1/3 p-8 bg-gray-200 overflow-y-auto">
        <ul className="grid grid-cols-2 gap-6 text-lg">
          {services.map((service) => (
            <li
              key={service.id}
              className={`cursor-pointer text-lg ${
                selectedService?.id === service.id ? 'font-bold text-black' : 'text-gray-600'
              }`}
              onClick={() => handleServiceClick(service)}
            >
              {`${service.id.toString().padStart(2, '0')} ${service.title}`}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: Details with Image, Heading, Description, and Arrows */}
      <div className="w-full md:w-1/3 p-8 bg-teal-500 text-white flex flex-col justify-between">
        {selectedService ? (
          <>
            <div className="flex flex-col items-center">
              {/* Placeholder for the icon/image */}
              <img src={selectedService.image} alt={selectedService.title} className="w-16 h-16 mb-4" />

              <h3 className="text-2xl font-bold">{selectedService.title}</h3>
              <p className="mt-4 text-center">{selectedService.details}</p>
            </div>

            {/* Arrows and Sub-services */}
            <div className="flex justify-between mt-8 self-center w-full">
              <button
                className="bg-white text-teal-500 p-2 rounded-full"
                onClick={handlePrevSubService}
              >
                ←
              </button>
              <span>{subServices[subServiceIndex].sub}</span>
              <button
                className="bg-white text-teal-500 p-2 rounded-full"
                onClick={handleNextSubService}
              >
                →
              </button>
            </div>
          </>
        ) : (
          <p>Select a service to see details</p>
        )}
      </div>
    </div>
  );
};

export default Services;
