"use client";
import Hero from "./components/Hero";
import AboutUs from "./components/Aboutus";
import ServicesComponent from "./components/ServicesComponent";
import CallToAction from "./components/CallToAction";
import ClientsSection from "./components/ClientsSection";
import PartnersSection from "./components/PartnersSection";
import Founders from "./components/Founders";
import WhyChooseUs from "./components/whychooseus";
import BookCall from "./components/BookaCall";

export default function Home() {
  return (
    <div className="overflow-auto bg-[#eef4fa]">
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Services Section */}
      <ServicesComponent />
<div className=""></div>
      
      {/* {why choose us section} */}
      <WhyChooseUs/>

      {/* Clients Section */}
      <ClientsSection />

      {/* Partners Section */}
      <PartnersSection />
<BookCall></BookCall>
     
    </div>
  );
}
