"use client"
import React from "react";


export default function WhyChooseUs() {
    return (
      <section className="bg-[#eef4fa] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Why Choose Us
          </h2>
          <div className="w-14 h-1 bg-green-500 rounded-full mx-auto mb-7 pb-1.5 "></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Reason 1 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">01 —  Expertise You Can Trust</h3>
              <p className="text-sm sm:text-base text-gray-700">Our team brings years of industry experience and cutting-edge skills to every project.</p>
            </div>
            {/* Reason 2 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">02 —  Tailored Solutions for Every Business</h3>
              <p className="text-sm sm:text-base text-gray-700">We customize IT services to fit your unique business needs and goals.</p>
            </div>
            {/* Reason 3 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">03 — 24/7 Support and Monitoring</h3>
              <p className="text-sm sm:text-base text-gray-700">Stay worry-free with our around-the-clock monitoring and dedicated support team.</p>
            </div>
            {/* Reason 4 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">04 — Strategic Technology Partnerships
              </h3>
              <p className="text-sm sm:text-base text-gray-700">We work with industry-leading vendors to bring you the best technology solutions.

</p>
            </div>
            {/* Reason 5 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">05 — Proven Track Record of Success</h3>
              <p className="text-sm sm:text-base text-gray-700">Our client success stories reflect the value we bring to every project we handle.</p>
            </div>
            {/* Reason 6 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 ">06 — Scalable Services for Future Growth</h3>
              <p className="text-sm sm:text-base text-gray-700">Our solutions grow with your business, ensuring long-term success and sustainability.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  