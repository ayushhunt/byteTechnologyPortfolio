"use client";
import Hero from "./components/Hero";
import AboutUs from "./components/Aboutus";
import ServicesComponent from "./components/ServicesComponent";
import CallToAction from "./components/CallToAction";
import ClientsSection from "./components/ClientsSection";
import PartnersSection from "./components/PartnersSection";

export default function Home() {
  return (
    <div className="overflow-auto">
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Services Section */}
      <ServicesComponent />

      {/* CTA Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center h-60 mt-10 px-8 sm:px-16 lg:px-20 bg-gradient-to-r from-zinc-200 to-zinc-400 rounded-lg shadow-xl">
        <div className="flex flex-col">
          <p className="text-black text-2xl font-bold px-6 py-4">
            Lorem ipsum, dolor sit amet consectetur.
          </p>
          <p className="text-black px-6 py-2">
            Transform your business with our solution.
          </p>
        </div>

        <div className="mt-4 mb-4 lg:mt-0 mr-0 lg:mr-6">
          <CallToAction text="Get in touch" />
        </div>
      </div>

      {/* Clients Section */}
      <ClientsSection />

      {/* Partners Section */}
      <PartnersSection />
    </div>
  );
}
