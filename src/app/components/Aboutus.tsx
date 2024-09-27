"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const AboutUs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('agility');

  const tabData = {
    agility: {
      text: 'Increasing Agility',
      imageSrc: '/image4.jpg',
      imageAlt: 'Agility',
      imageWidth: 500,
      imageHeight: 300,
    },
    transformation: {
      text: 'Adapting to Digital Transformation',
      imageSrc: '/image3.jpg',
      imageAlt: 'Digital Transformation',
      imageWidth: 500,
      imageHeight: 300,
    },
    integration: {
      text: 'Simplifying System Integration',
      imageSrc: '/image2.jpg',
      imageAlt: 'System Integration',
      imageWidth: 500,
      imageHeight: 300,
    },
    innovation: {
      text: 'Innovating to Lead',
      imageSrc: '/image3.jpg',
      imageAlt: 'Innovation',
      imageWidth: 500,
      imageHeight: 300,
    },
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="mb-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
        </p>
        <p className="mb-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <p className="mb-8 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </p>

        {/* Tabs Section */}
        <div className="flex space-x-6">
          {Object.keys(tabData).map((tabKey) => (
            <button
              key={tabKey}
              className={`tab-btn ${currentTab === tabKey ? 'border-b-2 font-bold' : ''} focus:outline-none`}
              onClick={() => setCurrentTab(tabKey)}
            >
              {tabData[tabKey as keyof typeof tabData].text}
            </button>
          ))}
        </div>

        {/* Image Section */}
        <div className="mt-8">
        <Image
            src={tabData[currentTab as keyof typeof tabData].imageSrc}
            alt={tabData[currentTab as keyof typeof tabData].imageAlt}
            width={tabData[currentTab as keyof typeof tabData].imageWidth} // Aspect ratio width
            height={tabData[currentTab as keyof typeof tabData].imageHeight} // Aspect ratio height
            className="mx-auto rounded-lg shadow-lg"
            layout="responsive"
            priority={true} // Optional: Preload the image
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
