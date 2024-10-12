"use client";
import Image from "next/image";
import React, { useState } from "react";
// import aboutUsImage from '/aboutus/about.webp'; // Ensure this is the correct path

const AboutUs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState("agility");

  return (
    <div className="bg-[#eef4fa]  py-12 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-2xl ps-2 pb-2">About us </h1>
          <h2 className="text-5xl font-extrabold leading-tight mb-4 text-gray-900">
            Empower Your Business
            <span className="block text-green-400">
              with Cutting-Edge Expertise
            </span>
          </h2>
          {/* {this is second option which will look goood will be select .} */}
          {/* <h2 className="text-4xl font-bold leading-tight mb-4 text-gray-900">
            Empower your business{" "}
            <span className="text-green-400">with unparalleled expertise.</span>
          </h2> */}

          <p className="text-lg font-medium text-gray-800 mb-6">
            At BY technology, we believe that technology should empower
            businesses. Founded on the principles of innovation, trust, and
            excellence, we have become a leading IT services and consulting
            company, helping organizations transform their digital landscapes.
            With a deep understanding of industry trends and the latest
            technologies, we are dedicated to delivering bespoke IT solutions
            that drive business success.
          </p>
        </div>

        {/* Right Side - Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full h-full">
            <Image
              src={"/aboutus/about.webp"}
              alt="About Us Image"
              width={500} // Set as per your image's aspect ratio
              height={400} // Adjust accordingly
              layout="responsive" // Makes it responsive
              className="object-cover w-full h-full rounded-lg"
            />

            {/* Design Element (Green Arc) */}
            <div className="absolute inset-y-0 left-[-50px] w-1/3 h-1/3 bg-green-400 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
