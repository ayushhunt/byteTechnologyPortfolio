import React from 'react';

const Services = () => {
  const services = [
    {
      category: 'Web Development',
      description:
        'Building fast, scalable, and secure websites with the latest technologies.',
      subServices: [
        'Full-Stack Development',
        'Responsive Design',
        'E-commerce Solutions',
      ],
    },
    {
      category: 'Cloud Solutions',
      description:
        'Scalable cloud platforms to drive business operations efficiently.',
      subServices: ['AWS Deployment', 'Azure Integration', 'Cloud Security'],
    },
    {
      category: 'Digital Marketing',
      description:
        'Innovative strategies to enhance online presence and engagement.',
      subServices: ['SEO Optimization', 'Social Media Marketing', 'PPC Campaigns'],
    },
  ];

  return (
    <div 
    className="min-h-screen py-10 bg-cover bg-center bg-no-repeat"
    style={{  }}
  >
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h1>

      <div className="space-y-10 px-5">
        {services.map((service, index) => (
          <div key={index} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">{service.category}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="list-disc list-inside space-y-2">
              {service.subServices.map((subService, subIndex) => (
                <li
                  key={subIndex}
                  className="text-gray-700 hover:text-indigo-600 hover:font-semibold transition duration-300 cursor-pointer"
                >
                  {subService}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
