"use client"; // If using the Next.js app directory

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookCall() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });

      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const handleBookCall = () => {
    const button = document.querySelector(
      '[data-cal-link="pankajthedeveloper/30min"]'
    ) as HTMLButtonElement;
    button?.click();
  };

  return (
    < >
      <div className="bg-black text-white py-16 px-6 md:px-20 rounded-lg mx-4 md:mx-20 my-8 relative">
        <div className="bg-black rounded-lg p-8 md:p-16 w-full max-w-5xl text-center relative space-y-6">
          {/* Upper small text */}
          <p className="text-gray-400 text-xl font-montreal">
            (Need an unfair advantage?)
          </p>

          {/* Main heading */}
          <div className="text-6xl md:text-6xl font-montreal font-bold text-[#d1d1c7] text-[108.297px] leading-[108.297px] text-center tracking-[-2.70742px]">
            LET'S MAKE <br />
            IT HAPPEN
          </div>

          {/* CTA Button with Cal.com Logic */}
          <div>
            <button
              onClick={handleBookCall}
              className="inline-block bg-gray-700 text-white py-4 px-10 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              BOOK A CALL &rarr;
            </button>
          </div>

          {/* Bottom details */}
          <div className="absolute bottom-1 left-0 right-0 flex justify-between items-end p-6">
            {/* Working Globally */}
            <div className="flex items-center space-x-2">
              <span className="inline-block">
                <img
                  src="/contactus/india.gif"
                  alt="Working nationwide"
                  className="w-6 h-6"
                />
              </span>
              <div className="text-sm">
                <p>Working nationwide</p>
              </div>
            </div>

            {/* For further inquiries */}
            <div className="text-sm font-montreal  ">
              <p>FOR FURTHER INQUIRIES</p>
              <a
                href="info@bytechnology.in"
                className="text-gray-400 hover:underline"
              >
                Info@bytechnology.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Button for Cal.com */}
      <button
        data-cal-namespace="30min"
        data-cal-link="pankajthedeveloper/30min"
        data-cal-config='{"layout":"month_view","theme":"auto"}'
        style={{ display: "none" }}
      >
        Open Cal.com
      </button>
    </>
  );
}
