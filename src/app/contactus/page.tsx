"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';



export default function ContactUs() {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      
      {/* New Contact Us Section with Animation */}
      <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center p-10 rounded-3xl shadow-lg mb-12 mx-auto"
  style={{ maxWidth: '1000px' }} // Limiting the max width
>
  {/* Gradient Overlay to Fade from Sides */}
  <div
    className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-purple-900 opacity-90 z-0 rounded-3xl"
    style={{
      background: 'linear-gradient(to right, rgba(29, 78, 216, 0.9), rgba(255, 255, 255, 0.05), rgba(126, 34, 206, 0.9))',
      transition: 'background 0.3s ease-in-out',
    }}
  ></div>

  {/* Content - Text to stay visible over the background */}
  <div className="relative z-10">
    <h1 className="text-4xl font-bold mb-4 font-primary">Contact Us</h1>
    <p className="text-lg font-secondary">
      Get in touch with us to transform your business with cutting-edge technology and solutions.
    </p>
  </div>
</motion.div>





      {/* Main Content Section */}
      <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 rounded-3xl shadow-lg p-8">
        
        {/* Let's Talk Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-orange-500 shadow-lg rounded-3xl p-8"
        >
          <h2 className="text-4xl font-bold mb-8 text-white transition-transform duration-500 hover:scale-105 font-primary">Let's Talk</h2>
          <p className="text-gray-100 mb-8 text-xl font-secondary">
            Fill out the form and our team will get back to you as soon as
            possible.

          </p>
          
          <form className="space-y-4">
            {/* Your Name */}
            <div>
              <label className="block text-lg font-medium text-gray-100 ">Your Name *</label>
              <input
                type="text"
                required
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-medium text-gray-100 ">Email *</label>
              <input
                type="email"
                required
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-lg font-medium text-gray-100">Phone Number *</label>
              <input
                type="tel"
                required
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-lg font-medium text-gray-100">Company Name</label>
              <input
                type="text"
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your company name"
              />
            </div>

            {/* Purpose of Contact */}
            <div>
              <label className="block text-lg font-medium text-gray-100">Purpose of Contact</label>
              <input
                type="text"
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter the purpose of contact"
              />
            </div>

            {/* How Did You Hear About Us */}
            <div>
              <label className="block text-lg font-medium text-gray-100">How did you hear about us?</label>
              <select
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                defaultValue=""
              >
                <option value="" disabled>Select a source</option>
                <option value="google">Google</option>
                <option value="social_media">Social Media</option>
                <option value="friend">Friend</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-medium text-gray-100">Message *</label>
              <textarea
                required
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                rows={4}
                placeholder="Enter your message"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* We Are Here Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-orange-500 shadow-lg rounded-3xl p-8 space-y-12"
        >
          <h2 className="text-4xl font-bold mb-8 text-white transition-transform duration-500 hover:scale-105 font-primary">
            We Are Here
          </h2>

          {/* Corporate Office */}
          <div className="text-gray-100 mb-6">
            <strong className="text-2xl font-secondary">Registered Office:</strong>
            <p className="text-lg mt-2 font-secondary">
              A-11, Shyam Vihar, Phase-2, Dwarka Sector 19B, New Delhi - 110043
            </p>
            <div className="relative h-[300px] w-full mt-4 mb-8 transition-transform duration-500 hover:scale-105">
              <Image
                src="/contactus/bytdelhi.png"
                alt="Corporate Office Map"
                layout="fill"
                objectFit="contain"
                className="mx-auto rounded-lg"
              />
            </div>
          </div>

          {/* Delivery Centre */}
          <div className="text-gray-100 mb-6">
            <strong className="text-2xl font-secondary">Delivery Centre:</strong>
            <p className="text-lg mt-2 font-secondary">
              Office No.- 14&15, 3rd Floor, Block J-4, Shree Ram Trade Centre, Main Road, Bishanpura, Sector 58, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201301
            </p>
            <div className="relative h-[300px] w-full mt-4 mb-8 transition-transform duration-500 hover:scale-105">
              <Image
                src="/contactus/bytnoida.png"
                alt="Delivery Centre Map"
                layout="fill"
                objectFit="contain"
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
