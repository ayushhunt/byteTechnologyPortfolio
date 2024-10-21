'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Button = ({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost'
  size?: 'default' | 'icon'
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'
  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    ghost: 'hover:bg-accent hover:text-accent-foreground'
  }
  const sizeStyles = {
    default: 'h-10 py-2 px-4',
    icon: 'h-10 w-10'
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

interface HeroSection {
  title: string
  description: string
  imageSrc: string
  link: string
}

const heroSections: HeroSection[] = [
  {
    title: "Empower Businesses with Cloud Technology",
    description: "Migrate, manage, and optimize your operations in the cloud for enhanced flexibility, performance, and security.",
    imageSrc: "/Assests/image1hero.jpg",
    link: "/convert-ideas"
  },
  {
    title: "Secure Your Digital Assets, 24/7",
    description: "Safeguard your critical data and networks with proactive, multi-layered security solutions designed to protect against ever-evolving cyber threats.",
    imageSrc: "/Assests/image2Hero.jpg",
    link: "/innovate"
  },
  {
    title: "Transform Your Digital Landscape",
    description: "Empower your business with state-of-the-art technology solutions designed for the modern era.",
    imageSrc: "/Assests/image3hero.jpg",
    link: "/transform"
  },
  {
    title: "Simplify IT Operations with Managed Services",
    description: "Experience seamless operations with 24/7 monitoring, proactive support, and customized IT solutions designed to reduce downtime and boost productivity.",
    imageSrc: "/Assests/image4hero.jpg",
    link: "/accelerate"
  },
  {
    title: "Elevate User Experiences",
    description: "Create captivating and intuitive interfaces that engage and delight your customers.",
    imageSrc: "/Assests/image5hero.jpg",
    link: "/elevate"
  }
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  const changeSlide = useCallback((newIndex: number) => {
    setIsChanging(true)
    setCurrentIndex(newIndex)
    setTimeout(() => setIsChanging(false), 400) // Match this with the CSS transition time
  }, [])

  const handlePrev = useCallback(() => {
    if (!isChanging) {
      const newIndex = currentIndex === 0 ? heroSections.length - 1 : currentIndex - 1
      changeSlide(newIndex)
    }
  }, [currentIndex, isChanging, changeSlide])

  const handleNext = useCallback(() => {
    if (!isChanging) {
      const newIndex = currentIndex === heroSections.length - 1 ? 0 : currentIndex + 1
      changeSlide(newIndex)
    }
  }, [currentIndex, isChanging, changeSlide])

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000) // Changed to 5 seconds for better readability

    return () => clearInterval(timer)
  }, [handleNext])

  const currentHero = heroSections[currentIndex]

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {heroSections.map((section, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={section.imageSrc}
            alt={section.title}
            layout="fill"
            objectFit="cover"
            priority={index === currentIndex}
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
      
      <div className="relative z-20 flex items-center justify-start w-full h-full">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 lg:w-1/2 lg:ml-24">
          <div 
            className={`transition-all duration-500 transform ${
              isChanging ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              {currentHero.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
              {currentHero.description}
            </p>
            <Link href={'/pages/services'}>
              <Button className="bg-white text-black hover:bg-gray-200 text-lg px-6 py-3">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white" 
        onClick={handlePrev}
        aria-label="Previous hero section"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white" 
        onClick={handleNext}
        aria-label="Next hero section"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  )
}