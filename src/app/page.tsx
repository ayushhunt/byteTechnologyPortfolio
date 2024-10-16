"use client";
import Hero from "./components/Hero";
import AboutUs from "./components/Aboutus";
import Services from "./components/ServicesComponent";

import ClientsSection from "./components/ClientsSection";
import PartnersSection from "./components/PartnersSection";

import WhyChooseUs from "./components/whychooseus";
import BookCall from "./components/BookaCall";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <div className="overflow-auto bg-[#eef4fa]">
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Services Section */}
      <Services />
<div className=""></div>
      
      {/* {why choose us section} */}
      <WhyChooseUs/>

      {/* Clients Section */}
      <ClientsSection />

      {/* Partners Section */}
      <PartnersSection />
<BookCall></BookCall>
<ScrollToTop></ScrollToTop>
     
    </div>
  );
}
