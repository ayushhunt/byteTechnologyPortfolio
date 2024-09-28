'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaServicestack, FaUsers, FaHandshake, FaClipboard } from 'react-icons/fa';

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-gradient-to-r from-gray-800 to-gray-900 p-4 shadow-lg h-13'>
      <div className='flex flex-row justify-between items-center px-6 py-1'>
        {/* Logo Section */}
        <Link href={"/"}>
          <div className='ml-4 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
            <Image
              src={"/Asset 24x.png"}
              alt='icon'
              width={120}
              height={40}
              className='rounded-lg'
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className='hidden md:flex items-center space-x-4 lg:space-x-12 shadow-lg px-8 py-1 text-lg font-mono text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-full transition-all duration-500 ease-in-out transform hover:shadow-2xl'>
          <Link href={"/"}>
            <div 
              className={`relative cursor-pointer px-3 py-1 flex items-center ${activeTab === "home" ? "bg-gray-700/50 border-b-4 border-cyan-500" : ""} hover:text-cyan-400 hover:bg-gray-700/20 transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab("home")}
            >
              <FaHome className='inline-block' />
              <span className="hidden lg:inline ml-1">Home</span>
            </div>
          </Link>

          <Link href={"/services"}>
            <div 
              className={`relative cursor-pointer px-3 py-1 flex items-center ${activeTab === "services" ? "bg-gray-700/50 border-b-4 border-cyan-500" : ""} hover:text-cyan-400 hover:bg-gray-700/20 transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab("services")}
            >
              <FaServicestack className='inline-block' />
              <span className="hidden lg:inline ml-1">Services</span>
            </div>
          </Link>

          <Link href={"/clients"}>
            <div 
              className={`relative cursor-pointer px-3 py-1 flex items-center ${activeTab === "clients" ? "bg-gray-700/50 border-b-4 border-cyan-500" : ""} hover:text-cyan-400 hover:bg-gray-700/20 transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab("clients")}
            >
              <FaUsers className='inline-block' />
              <span className="hidden lg:inline ml-1">Clients</span>
            </div>
          </Link>

          <Link href={"/partners"}>
            <div 
              className={`relative cursor-pointer px-3 py-1 flex items-center ${activeTab === "partners" ? "bg-gray-700/50 border-b-4 border-cyan-500" : ""} hover:text-cyan-400 hover:bg-gray-700/20 transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab("partners")}
            >
              <FaHandshake className='inline-block' />
              <span className="hidden lg:inline ml-1">Partners</span>
            </div>
          </Link>

          <Link href={"/casestudies"}>
            <div 
              className={`relative cursor-pointer px-3 py-1 flex items-center ${activeTab === "casestudies" ? "bg-gray-700/50 border-b-4 border-cyan-500" : ""} hover:text-cyan-400 hover:bg-gray-700/20 transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab("casestudies")}
            >
              <FaClipboard className='inline-block' />
              <span className="hidden lg:inline ml-1">Case Studies</span>
            </div>
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className='md:hidden flex items-center'>
          {isOpen ? (
            <FaTimes className="text-3xl text-white cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-3xl text-white cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Sidebar for Mobile Menu */}
      {isOpen && (
        <div className='fixed top-0 right-0 w-[75%] sm:w-[50%] h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 p-8 z-50 flex flex-col justify-between'>
          {/* Close Icon Inside Sidebar */}
          <div className='flex justify-end'>
            <FaTimes className="text-3xl text-white cursor-pointer" onClick={toggleMenu} />
          </div>
          <nav className='flex flex-col space-y-6'>
            <Link href={"/"} onClick={() => { setActiveTab("home"); toggleMenu(); }} className={`flex items-center hover:text-cyan-500 ${activeTab === "home" ? "text-cyan-500" : ""}`}>
              <FaHome className='mr-2' /> Home
            </Link>
            <Link href={"/services"} onClick={() => { setActiveTab("services"); toggleMenu(); }} className={`flex items-center hover:text-cyan-500 ${activeTab === "services" ? "text-cyan-500" : ""}`}>
              <FaServicestack className='mr-2' /> Services
            </Link>
            <Link href={"/clients"} onClick={() => { setActiveTab("clients"); toggleMenu(); }} className={`flex items-center hover:text-cyan-500 ${activeTab === "clients" ? "text-cyan-500" : ""}`}>
              <FaUsers className='mr-2' /> Clients
            </Link>
            <Link href={"/partners"} onClick={() => { setActiveTab("partners"); toggleMenu(); }} className={`flex items-center hover:text-cyan-500 ${activeTab === "partners" ? "text-cyan-500" : ""}`}>
              <FaHandshake className='mr-2' /> Partners
            </Link>
            <Link href={"/casestudies"} onClick={() => { setActiveTab("casestudies"); toggleMenu(); }} className={`flex items-center hover:text-cyan-500 ${activeTab === "casestudies" ? "text-cyan-500" : ""}`}>
              <FaClipboard className='mr-2' /> Case Studies
            </Link>
          </nav>
          
          {/* Footer that sticks to the bottom */}
          <div className='bg-gray-900 text-gray-400 text-center py-4'>
            <p>All rights reserved © {new Date().getFullYear()} | Created by <a href="#" className='text-cyan-500 hover:underline'>Ayush Singh</a></p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
