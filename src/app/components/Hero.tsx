"use client"
import { useState, useEffect } from 'react';

const images = [
  {
    id: 1,
    image: "/image1.jpg",
    text: "Innovative Solutions"
  },
  {
    id: 2,
    image: "/image2.jpg",
    text: "Cutting-edge Technology"
  },
  {
    id: 3,
    image: "/image3.jpg",
    text: "Creative Design"
  },
  {
    id: 4,
    image: "/image4.jpg",
    text: "Seamless Integration"
  },
  {
    id: 5,
    image: "/image5.jpg",
    text: "Future-Proof Innovations"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through the images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3-second interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {images.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <img
            src={item.image}
            alt={item.text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2
              className={`text-white text-4xl md:text-6xl font-bold opacity-0 transform ${
                index === currentIndex
                  ? 'animate-fadeIn'
                  : ''
              }`}
            >
              {item.text}
            </h2>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
