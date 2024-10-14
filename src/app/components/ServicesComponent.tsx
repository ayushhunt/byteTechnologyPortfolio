import Image from "next/image";
import React from "react";

// Define the service card component
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col items-center p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
      <Image src={icon} alt={title} width={80} height={80} />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 text-center mt-2">{description}</p>
      <a
        href={link}
        className="mt-4 text-green-500 hover:text-sky-700 text-sm font-semibold"
      >
        <div className="flex underline">
          <div>Explore More</div>
          <div>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

const ServicesComponent: React.FC = () => {
  const services = [
    {
      icon: "/servies/cp.gif",
      title: "Cloud Computing",
      description: "Empower your business with scalable cloud solutions that drive efficiency and growth.",
      link: "/services/awesome-sections",
    },
    {
      icon: "/servies/network.gif",
      title: "Network and Security",
      description: "Secure your network with advanced monitoring and threat prevention technologies.",
      link: "/services/portfolio-options",
    },
    {
      icon: "/servies/DataCentre.gif",
      title: "Data Centre Solutions",
      description: "Enhance performance with reliable server, storage, and backup solutions.",
      link: "/services/retina-ready",
    },
    {
      icon: "/servies/cybersecurity.gif",
      title: "Cyber Security",
      description: "Protect your business with proactive security solutions against evolving threats.",
      link: "/services/free-updates",
    },
    {
      icon: "/servies/sofware_licensing.gif",
      title: "software Licensing",
      description: "Simplify licensing management with the latest software solutions tailored for you.",
      link: "/services/useful-sections",
    },
    {
      icon: "/servies/softwareselling.png",
      title: "Hardware/Software reselling",
      description: "Access top IT products with seamless support from trusted vendors..",
      link: "/services/blog-options",
    },
    {
      icon: "/servies/software.gif",
      title: "Software Development",
      description: "Test ever since the 1500s, when an unknown printer took.",
      link: "/services/blog-options",
    }, {
      icon: "/servies/printingsolution.png",
      title: "Enterprise Printing Solutions",
      description: "Test ever since the 1500s, when an unknown printer took.",
      link: "/services/blog-options",
    },
    {
      icon: "/servies/servicemanaging.gif",
      title: "Manage Services Provider for Enterprise",
      description: "Test ever since the 1500s, when an unknown printer took.",
      link: "/services/blog-options",
    },
  ];

  return (
    <div className="bg-[#eef4fa] " >
    <div className="container  mx-auto py-12  ">
      <h2 className="text-4xl font-bold text-center mb-2 ">
        Services We Provide
      </h2>
      {/* Sky blue line under the title */}
      <div className="w-14 h-1 bg-green-500 rounded-full mx-auto mb-7 pb-1.5 "></div>

      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-xl font-medium ">
      We offer a wide range of IT services designed to optimize your business operations and secure your infrastructure.
      </p>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ServicesComponent;
