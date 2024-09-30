"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiCopy, FiPhone } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard`);
  };
  const handleSubmit = ()=>{};
  return (
    <footer className='bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400 flex flex-col space-y-8 space-x-8 px-8 py-10 text-black'>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 space-y-8 ml-8 mr-8 '>
        <div className='justify-center py-12 sm:ml-5'>
            <Image src={"/Asset 2.svg"} alt='delhincrmap' width="170" height='100'></Image>
        </div>
        <div className='font-mono space-y-6'>
            <ul>
                <Link href={"/"} ><li className='font-extralight text-base'>Home</li></Link>
                
                <Link href={'/services'}><li className='font-extrabold  text-sm text-slate-600  hover:text-black hover:font-thin transition-all hover:translate-x-2 duration-300 cursor-pointer '>Services</li></Link>
               <Link href={'/clients'}><li className='font-extrabold  text-sm text-slate-600  hover:text-black hover:font-thin transition-all hover:translate-x-2 duration-300 cursor-pointer'>Clients</li></Link> 
               <Link href={'/partners'}> <li className='font-extrabold  text-sm text-slate-600  hover:text-black hover:font-thin transition-all hover:translate-x-2 duration-300 cursor-pointer'>Partners</li></Link>
                <Link href={'/contactus'}><li className='font-extrabold  text-sm text-slate-600  hover:text-black hover:font-thin transition-all hover:translate-x-2 duration-300 cursor-pointer'>Contact Us</li></Link>
            </ul>
        </div>

        <div className="flex flex-col font-mono space-y-2 ">
      {/* Contact Us Heading */}
      <div className="font-extralight text-base ">
        Contact Us
      </div>

      {/* Email */}
      <div className="flex items-center text-sm">
        <MdEmail className="text-gray-600 hover:text-indigo-600 transition duration-300" />
        <span className="font-light ml-1">ByteTechnology@gmail.com </span>
        <FiCopy
          onClick={() => copyToClipboard('ByteTechnology@gmail.com')}
          className="cursor-pointer font-light ml-1 text-gray-600 hover:text-indigo-600 transition duration-300"
          title="Copy Email"
        />
      </div>

      {/* Phone */}
      <div className="flex items-center text-sm">
        <FiPhone className="text-gray-600 hover:text-indigo-600 transition duration-300" />
        <span className="font-semibold ml-1">+91 123456789</span>
        <FiCopy
          onClick={() => copyToClipboard('+91123456789')}
          className="cursor-pointer ml-1 text-gray-600 hover:text-indigo-600 transition duration-300"
          title="Copy Phone Number"
        />
      </div>

      {/* Social Links */}
      <div className="flex space-x-4 py-4 justify-left">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-slate-950 text-2xl  hover:text-indigo-600 transition-all shadow-2xl transform hover:-translate-y-3 ease-in-out cursor-pointer" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-slate-950 text-2xl  hover:text-indigo-600 transition-all shadow-2xl transform hover:-translate-y-3 ease-in-out cursor-pointer" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-slate-950 text-2xl  hover:text-indigo-600 transition-all shadow-2xl transform hover:-translate-y-3 ease-in-out cursor-pointer" />
        </a>
      </div>
    </div>

    <div className="flex flex-col items-center font-mono">
      <p className="text-lg mb-2 text-center">
        Subscribe to our <br /> Newsletter
      </p>
      
      <div className="flex">
        {/* Email Input */}
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="bg-slate-400 text-black placeholder-white border-black shadow-md h-10 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        />

        {/* Submit Button */}
        <button 
          onClick={handleSubmit}
          className="bg-blue-400 text-white font-mono text-base px-4 rounded-r-lg hover:bg-blue-500 transition-all"
        >
          Submit
        </button>
      </div>
    </div>

      </div>



      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
  {/* Left Section */}
  <div className="mb-2 md:mb-0">
    Created by 
    <a
      href="https://your-website-url.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-300 hover:text-blue-500 transition-colors duration-300 ml-1"
    >
      Ayush Singh
    </a>
  </div>

  {/* Right Section */}
  <div className="text-center md:text-right">
    All rights reserved © {new Date().getFullYear()}
  </div>
</div>

    </footer>
  )
}

export default Footer
