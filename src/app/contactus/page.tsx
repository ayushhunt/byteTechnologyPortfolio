'use client'

import React, { useState } from 'react'
import { MapPin, Phone, Mail, Send, Star } from "lucide-react"

const styles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  .float {
    animation: float 6s ease-in-out infinite;
  }
  @keyframes twinkle {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }
  .twinkle {
    animation: twinkle 2s ease-in-out infinite;
  }
`;

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('submitted');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <style>{styles}</style>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-400 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're here to help and answer any question you might have. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20 float"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 float"></div>
            <h2 className="text-3xl font-semibold text-purple-400 mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-full bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-full bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-full bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Mobile Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-2xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
            {formStatus === 'submitted' && (
              <p className="mt-4 text-green-400 text-center">Thank you for your message. We'll get back to you soon!</p>
            )}
            {formStatus === 'error' && (
              <p className="mt-4 text-red-400 text-center">An error occurred. Please try again later.</p>
            )}
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:shadow-purple-500/20 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Star className="h-6 w-6 text-yellow-400 twinkle" />
              </div>
              <h2 className="text-3xl font-semibold text-purple-400 mb-6">Our Locations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-200 mb-2">Registered office</h3>
                  <p className="flex items-center text-gray-300 mb-2">
                    <MapPin className="mr-2 h-5 w-5 text-purple-400" />
                    A-11, Shyam Vihar, Phase-2, Dwarka Sector 19B, New Delhi -110043
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-200 mb-2">Delivery Center</h3>
                  <p className="flex items-center text-gray-300 mb-2">
                    <MapPin className="mr-2 h-5 w-5 text-purple-400" />
                    BY Technology 

Office No.- 14&15, 3rd Floor, Block J-4, Shree Ram Trade Centre, Main Road, Bishanpura, Sector 58, Noida, Uttar Pradesh - 201301
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:shadow-blue-500/20 relative overflow-hidden">
              <div className="absolute bottom-4 right-4">
                <Star className="h-6 w-6 text-yellow-400 twinkle" />
              </div>
              <h2 className="text-3xl font-semibold text-purple-400 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <p className="flex items-center text-gray-300">
                  <Phone className="mr-3 h-6 w-6 text-blue-400" />
                  +91 8800202305
                </p>
                <p className="flex items-center text-gray-300">
                  <Mail className="mr-3 h-6 w-6 text-blue-400" />
                  info@bytechnology.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-10 left-10 opacity-50 float">
        <Star className="h-8 w-8 text-purple-400" />
      </div>
      <div className="absolute top-1/4 right-10 opacity-50 float" style={{animationDelay: '2s'}}>
        <Star className="h-6 w-6 text-blue-400" />
      </div>
      <div className="absolute bottom-10 left-1/4 opacity-50 float" style={{animationDelay: '4s'}}>
        <Star className="h-10 w-10 text-yellow-400" />
      </div>
    </div>
  )
}