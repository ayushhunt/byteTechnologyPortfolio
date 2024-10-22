'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
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
    { name: 'Services', href: '/pages/services' },
    { name: 'Clients', href: '/pages/clients' },
    { name: 'Partners', href: '/pages/partners' },
    { name: 'Contact Us', href: '/pages/contactus' },
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
                data-cal-link="by-technology-c6apcb/30min"
            data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out"
              >
                Book a Call ↗
                
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
        </div>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col h-full justify-between p-6">
            <div>
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="text-white font-bold text-2xl flex items-center" onClick={handleNavClick}>
                  <Image src="/Asset 24x.png" alt="Company Logo" width={30} height={30} className="mr-2" />
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
          </div>
        </div>
      )}
      {/* Spacer to prevent content from being hidden under the header */}
      <div className="h-20"></div>
    </>
  )
}