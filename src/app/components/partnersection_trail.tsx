"use client";
import React, { useState, useEffect, useRef } from 'react';

const partners = [
  { name: 'HPE', imgSrc: '/ourpartners/hpe.png' },
  { name: 'Aruba', imgSrc: '/ourpartners/aruba.png' },
  { name: 'Juniper', imgSrc: '/ourpartners/juniper.jpeg' },
  { name: 'Cisco', imgSrc: '/ourpartners/cisco.png' },
  { name: 'Sophos', imgSrc: '/ourpartners/sophos.jpg' },
  { name: 'Fortinet', imgSrc: '/ourpartners/fortinet.png' },
  { name: 'CheckPoint', imgSrc: '/ourpartners/checkpoint.png' },
  { name: 'PaloAlto', imgSrc: '/ourpartners/paloalto-logo.png' },
  { name: 'BeyondTrust', imgSrc: '/ourpartners/beyondtrust.webp' },
  { name: 'Barracuda', imgSrc: '/ourpartners/baracuda.jpg' },
  { name: 'MimeCast', imgSrc: '/ourpartners/Mimecast_Logo.png' },
  { name: 'CrowdStrike', imgSrc: '/ourpartners/crowdstrie.jpg' },
  { name: 'TrendMicro', imgSrc: '/ourpartners/trendmicro-logo.png' },
  { name: 'Microsoft', imgSrc: '/ourpartners/microsfot.htm' },
  { name: 'Freshwork', imgSrc: '/ourpartners/freshworl.jpg' },
  { name: 'Autodesk', imgSrc: '/ourpartners/.png' },
  { name: 'ZOHO', imgSrc: '/ourpartners/zoho.webp' },
  { name: 'Nitro', imgSrc: '/ourpartners/nitro.png' },
  { name: 'AWS', imgSrc: '/ourpartners/aws.png' },
  { name: 'Azure', imgSrc: '/ourpartners/azore.png' },
  { name: 'Google', imgSrc: '/ourpartners/google-logo.png' },
  { name: 'I2K2 Networks', imgSrc: '/ourpartners/i2k2.png' },
  { name: 'DELL', imgSrc: '/ourpartners/dell.png' },
  { name: 'Lenovo', imgSrc: '/ourpartners/lenovo.png' },
  { name: 'Synology', imgSrc: '/ourpartners/synloogy.png' },
  { name: 'QNAP', imgSrc: '/ourpartners/qnap.webp' },
  { name: 'NetAPP', imgSrc: '/ourpartners/netapp.png' },
  { name: 'EMC Dell', imgSrc: '/ourpartners/dellemc.png' },
  
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
    <div className="bg-[#eef4fa]">
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-extrabold text-center mb-3 text-gray-900">Our Partner Alliances</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-xl font-medium">
          We work with the best partners
        </p>
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
                <img
                  src={partner.imgSrc}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain"
                />
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
