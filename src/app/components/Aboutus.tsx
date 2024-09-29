"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const AboutUs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('agility');

  const tabData = {
    agility: {
      text: 'Cloud',
      imageSrc: '/image4.jpg',
      imageAlt: 'Agility',
      imageWidth: 300, // Smaller width
      imageHeight: 180, // Smaller height
    },
    transformation: {
      text: 'Networking',
      imageSrc: '/image3.jpg',
      imageAlt: 'Digital Transformation',
      imageWidth: 300,
      imageHeight: 180,
    },
    integration: {
      text: 'Integration',
      imageSrc: '/image2.jpg',
      imageAlt: 'System Integration',
      imageWidth: 300,
      imageHeight: 180,
    },
    innovation: {
      text: 'Innovating',
      imageSrc: '/image3.jpg',
      imageAlt: 'Innovation',
      imageWidth: 300,
      imageHeight: 180,
    },
  };

  return (
    <div className="bg-white py-12 overflow-hidden">
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
        <div className="flex"> {/* Flex container to align tabs and image side by side */}
          {/* Vertical Tabs */}
          <div className="flex flex-col space-y-4 w-1/4"> {/* Flex column for vertical tabs */}
            {Object.keys(tabData).map((tabKey) => (
              <button
                key={tabKey}
                className={`tab-btn text-left p-2 ${currentTab === tabKey ? 'border-l-4 border-blue-500 font-bold' : 'border-l-4 border-transparent'} focus:outline-none`} // Adjusted for vertical tabs
                onClick={() => setCurrentTab(tabKey)}
              >
                {tabData[tabKey as keyof typeof tabData].text}
              </button>
            ))}
          </div>

          {/* Image Section */}
          <div className="ml-8 w-3/4 flex justify-center items-center"> {/* Adjust image section to be beside the tabs */}
            <Image
              src={tabData[currentTab as keyof typeof tabData].imageSrc}
              alt={tabData[currentTab as keyof typeof tabData].imageAlt}
              width={tabData[currentTab as keyof typeof tabData].imageWidth} // Smaller width
              height={tabData[currentTab as keyof typeof tabData].imageHeight} // Smaller height
              className="rounded-lg shadow-lg"
              layout="intrinsic" // Use intrinsic to maintain original aspect ratio
              priority={true} // Optional: Preload the image
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
