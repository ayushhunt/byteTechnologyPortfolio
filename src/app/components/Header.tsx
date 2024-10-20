'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronRight } from 'lucide-react'
import { getCalApi } from "@calcom/embed-react"

export default function StickyHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Clients', href: '/clients' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact Us', href: '/contactus' },
  ]

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-gray-800'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="text-white font-bold text-2xl flex items-center">
                <Image src="/Asset 24x.png" alt="Company Logo" width={170} height={150} className="mr-2 mt-2" />
                <span></span>
              </Link>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 ease-in-out"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <button
                data-cal-namespace="30min"
                data-cal-link="pankajthedeveloper/30min"
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out"
              >
                Book a Call
                <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </Link>

        {/* Navigation Links */}
        <nav className='hidden md:flex items-center space-x-4 lg:space-x-12  px-8 py-1 text-lg text-white  transition-all duration-500 ease-in-out transform hover:shadow-2xl'>
          <Link href={"/"}>
            <div 
              className={`relative cursor-pointer px-3 py-1 flex items-center ${activeTab === "home" ? "bg-gray-700/50 border-b-4 border-cyan-500" : ""} hover:text-cyan-400 hover:bg-gray-700/20 transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab("home")}
            >
              <FaHome className='inline-block' />
              <span className="hidden lg:inline ml-1">Home</span>
            </div>
          </Link>

          <Link href={"/pages/services"}>
            <div 
              className={`relative cursor-pointer px-3 py-1 flex items-center ${activeTab === "services" ? "bg-gray-700/50 border-b-4 border-cyan-500" : ""} hover:text-cyan-400 hover:bg-gray-700/20 transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab("services")}
            >
              <FaServicestack className='inline-block' />
              <span className="hidden lg:inline ml-1">Services</span>
            </div>
          </Link>

          <Link href={"/pages/clients"}>
            <div 
              className={`relative cursor-pointer px-3 py-1 flex items-center ${activeTab === "clients" ? "bg-gray-700/50 border-b-4 border-cyan-500" : ""} hover:text-cyan-400 hover:bg-gray-700/20 transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab("clients")}
            >
              <FaUsers className='inline-block' />
              <span className="hidden lg:inline ml-1">Clients</span>
            </div>
          </Link>

          <Link href={"/pages/partners"}>
            <div 
              className={`relative cursor-pointer px-3 py-1 flex items-center ${activeTab === "partners" ? "bg-gray-700/50 border-b-4 border-cyan-500" : ""} hover:text-cyan-400 hover:bg-gray-700/20 transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab("partners")}
            >
              <FaHandshake className='inline-block' />
              <span className="hidden lg:inline ml-1">Partners</span>
            </div>
          </Link>

          <Link href={"/pages/contactus"}>
            <div 
              className={`relative cursor-pointer px-3 py-1 flex items-center ${activeTab === "contactus" ? "bg-gray-700/50 border-b-4 border-cyan-500" : ""} hover:text-cyan-400 hover:bg-gray-700/20 transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab("contactus")}
            >
              <MdOutlinePhoneCallback className='inline-block' />
              <span className="hidden lg:inline ml-1">Contact Us</span>
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
=======
>>>>>>> 3785f98e328939ff0fdf5b173184c27d87527045
        </div>
      </header>

      {/* Mobile menu */}
      {isOpen && (
<<<<<<< HEAD
        <div className='fixed top-0 right-0 w-[75%] sm:w-[50%] h-full bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-400 p-8 z-50 flex flex-col justify-between'>
          {/* Close Icon Inside Sidebar */}
          <div className='flex justify-end'>
            <FaTimes className="text-3xl text-white cursor-pointer" onClick={toggleMenu} />
          </div>
          <nav className='flex flex-col space-y-6'>
            <Link href={"/"} onClick={() => { setActiveTab("home"); toggleMenu(); }} className={`flex items-center hover:text-cyan-500 ${activeTab === "home" ? "text-cyan-500" : ""}`}>
              <FaHome className='mr-2' /> Home
            </Link>
            <Link href={"/pages/services"} onClick={() => { setActiveTab("services"); toggleMenu(); }} className={`flex items-center hover:text-cyan-500 ${activeTab === "services" ? "text-cyan-500" : ""}`}>
              <FaServicestack className='mr-2' /> Services
            </Link>
            <Link href={"/pages/clients"} onClick={() => { setActiveTab("clients"); toggleMenu(); }} className={`flex items-center hover:text-cyan-500 ${activeTab === "clients" ? "text-cyan-500" : ""}`}>
              <FaUsers className='mr-2' /> Clients
            </Link>
            <Link href={"/pages/partners"} onClick={() => { setActiveTab("partners"); toggleMenu(); }} className={`flex items-center hover:text-cyan-500 ${activeTab === "partners" ? "text-cyan-500" : ""}`}>
              <FaHandshake className='mr-2' /> Partners
            </Link>
            <Link href={"/pages/contactus"} onClick={() => { setActiveTab("contactus"); toggleMenu(); }} className={`flex items-center hover:text-cyan-500 ${activeTab === "contactus" ? "text-cyan-500" : ""}`}>
              <MdOutlinePhoneCallback className='mr-2' /> Contact Us
            </Link>
          </nav>
          
          {/* Footer that sticks to the bottom */}
          <div className='bg-gray-900 text-gray-400 text-center py-4'>
            <p>All rights reserved © {new Date().getFullYear()} | Created by <a href="#" className='text-cyan-500 hover:underline'>Ayush Singh</a></p>
=======
        <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col h-full justify-between p-6">
            <div>
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="text-white font-bold text-2xl flex items-center" onClick={handleNavClick}>
                  <Image src="/Asset 24x.png" alt="Company Logo" width={40} height={40} className="mr-2" />
                  <span></span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Close main menu</span>
                  <X className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-300 hover:text-white text-2xl font-medium"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
>>>>>>> 3785f98e328939ff0fdf5b173184c27d87527045
          </div>
        </div>
      )}
      {/* Spacer to prevent content from being hidden under the header */}
      <div className="h-20"></div>
    </>
  )
}