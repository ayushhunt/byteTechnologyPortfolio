"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  { id: 1, image: "/image1.jpg", text: "Innovative Solutions" },
  { id: 2, image: "/image2.jpg", text: "Cutting-edge Technology" },
  { id: 3, image: "/image3.jpg", text: "Creative Design" },
  { id: 4, image: "/image4.jpg", text: "Seamless Integration" },
  { id: 5, image: "/image5.jpg", text: "Future-Proof Innovations" }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(false); // State to control text animation

  useEffect(() => {
    const animateTextTimeout = setTimeout(() => setTextVisible(true), 500); // Start animation after 500ms
    const slideTimeout = setTimeout(() => {
      setTextVisible(false); // Hide the text before the next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // Wait 9 seconds before changing slides

    return () => {
      clearTimeout(animateTextTimeout);
      clearTimeout(slideTimeout);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden px-6 pt-8 bg-white"> {/* Adjusted top padding for gutter space */}
      <div className="relative flex justify-center items-center w-full h-full">
        <div
          className="flex w-full h-full transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        >
          {images.map((item, index) => {
            const isCurrent = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + images.length) % images.length;
            const isNext = index === (currentIndex + 1) % images.length;

            return (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-full h-full"
                style={{
                  opacity: isCurrent || isPrev || isNext ? 1 : 0, // Only show current, previous, and next images
                  transform: isCurrent
                    ? "translateX(0)" // Center current image
                    : isPrev
                    ? "translateX(-10%)" // Show 10% of the previous image
                    : isNext
                    ? "translateX(10%)" // Show 10% of the next image
                    : "translateX(0)", // Hide other images
                  zIndex: isCurrent ? 2 : 1, // Ensure the current image is on top
                }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.text}
                    className="object-cover rounded-xl"
                    layout="fill"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center px-8"> {/* Added px-8 for left/right gutter */}
                    <h2
                      className={`text-white text-4xl md:text-6xl font-bold mb-8 transition-opacity duration-500 ease-in-out ${
                        isCurrent && textVisible ? "opacity-100" : "opacity-0"
                      }`} // Trigger text animation based on state
                    >
                      {item.text}
                    </h2>
                    {isCurrent && textVisible && (
                      <a
                        href="#contact"
                        className="bg-cyan-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-cyan-400 transition-all"
                      >
                        Get in Touch
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => {
              setTextVisible(false); // Hide text when manually clicking the dot
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
