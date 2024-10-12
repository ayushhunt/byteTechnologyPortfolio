import React, { useState, useEffect, useRef } from 'react';
import { FaAws, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { SiAzuredevops, SiAutodesk, SiZoho, SiDell, SiFortinet, SiLenovo, SiQnap } from 'react-icons/si';

const partners = [
  { name: 'HPE', icon: <SiDell className="text-blue-600 text-6xl" /> },
  { name: 'Aruba', icon: <SiFortinet className="text-orange-500 text-6xl" /> },
  { name: 'Juniper', icon: <SiFortinet className="text-green-500 text-6xl" /> }, // Placeholder
  { name: 'Cisco', icon: <SiDell className="text-blue-600 text-6xl" /> },
  { name: 'Sophos', icon: <SiFortinet className="text-blue-600 text-6xl" /> }, // Placeholder
  { name: 'Fortinet', icon: <SiFortinet className="text-red-500 text-6xl" /> },
  { name: 'CheckPoint', icon: <SiDell className="text-yellow-600 text-6xl" /> }, // Placeholder
  { name: 'PaloAlto', icon: <SiFortinet className="text-green-600 text-6xl" /> },
  { name: 'BeyondTrust', icon: <SiDell className="text-blue-500 text-6xl" /> }, // Placeholder
  { name: 'Barracuda', icon: <SiQnap className="text-blue-600 text-6xl" /> },
  { name: 'MimeCast', icon: <SiFortinet className="text-red-500 text-6xl" /> },
  { name: 'CrowdStrike', icon: <SiFortinet className="text-red-500 text-6xl" /> },
  { name: 'TrendMicro', icon: <SiFortinet className="text-red-500 text-6xl" /> },
  { name: 'Microsoft', icon: <FaMicrosoft className="text-blue-600 text-6xl" /> },
  // { name: 'Adobe', icon: <FaAdobe className="text-red-500 text-6xl" /> },
  { name: 'Freshwork', icon: <SiFortinet className="text-green-600 text-6xl" /> },
  { name: 'Autodesk', icon: <SiAutodesk className="text-teal-500 text-6xl" /> },
  { name: 'ZOHO', icon: <SiZoho className="text-red-500 text-6xl" /> },
  { name: 'Nitro', icon: <SiFortinet className="text-red-500 text-6xl" /> }, // Placeholder
  { name: 'AWS', icon: <FaAws className="text-yellow-500 text-6xl" /> },
  { name: 'Azure', icon: <SiAzuredevops className="text-blue-600 text-6xl" /> },
  { name: 'Google', icon: <FaGoogle className="text-red-500 text-6xl" /> },
  { name: ' I2K2 Networks', icon: <SiDell className="text-blue-600 text-6xl" /> }, // Placeholder
  { name: 'DELL', icon: <SiDell className="text-blue-600 text-6xl" /> },
  { name: 'Lenovo', icon: <SiLenovo className="text-red-500 text-6xl" /> },
  { name: 'Synology', icon: <SiQnap className="text-blue-600 text-6xl" /> },
  { name: 'QNAP', icon: <SiQnap className="text-blue-600 text-6xl" /> },
  { name: 'NetAPP', icon: <SiDell className="text-blue-600 text-6xl" /> }, // Placeholder
  { name: 'EMC Dell', icon: <SiDell className="text-blue-600 text-6xl" /> },
];

const PartnersSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
      }, 3000); // Resume animation after 3 seconds
    }

    return () => clearTimeout(timeout);
  }, [isPaused]);

  const handleAnimationClick = () => {
    setIsPaused(true);
  };

  return (
  <div className='bg-[#eef4fa]'>
    <div className="container mx-auto p-6 ">
      <h2 className="text-4xl font-extrabold text-center mb-3 text-gray-900">Our Partner Alliences</h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-xl font-medium">We work with the best partners</p>
      <div className="overflow-hidden relative">
        {/* Animation wrapper */}
        <div
          className={`flex justify-center items-center space-x-12 ${
            isPaused ? '' : 'animate-scroll'
          } w-max`}
          ref={scrollRef}
          onClick={handleAnimationClick}
        >
          {/* Looping the partners array twice to create continuous effect */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40 p-2 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              {partner.icon} {/* Render the icon */}
              <h3 className="mt-4 text-lg font-semibold text-center text-black">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default PartnersSection;
