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
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">01 — High Quality Hardware</h3>
              <p className="text-sm sm:text-base text-gray-600">We use top-notch hardware to develop the most efficient apps for our customers.</p>
            </div>
            {/* Reason 2 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">02 — Dedicated 24\7 Support</h3>
              <p className="text-sm sm:text-base text-gray-600">You can rely on our 24/7 tech support that will gladly solve any app issue you may have.</p>
            </div>
            {/* Reason 3 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">03 — 30-Day Money-back Guarantee</h3>
              <p className="text-sm sm:text-base text-gray-600">If you are not satisfied with our apps, we will return your money in the first 30 days.</p>
            </div>
            {/* Reason 4 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">04 — Agile and Fast Working Style</h3>
              <p className="text-sm sm:text-base text-gray-600">This approach helps our specialists quickly develop better apps.</p>
            </div>
            {/* Reason 5 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">05 — Some Apps are Free</h3>
              <p className="text-sm sm:text-base text-gray-600">We develop free apps that can be downloaded online without any payments.</p>
            </div>
            {/* Reason 6 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">06 — High Level of Usability</h3>
              <p className="text-sm sm:text-base text-gray-600">Our products have high usability, allowing users to easily operate the apps.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  