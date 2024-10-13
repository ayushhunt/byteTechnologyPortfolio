export default function BookCall() {
    return (
        <div className="bg-[#eef4fa]">
      <div className="bg-black text-white py-16 px-6 md:px-20 rounded-lg mx-4 md:mx-20 my-8 relative">
        <div className="bg-black rounded-lg p-8 md:p-16 w-full max-w-5xl text-center relative space-y-6">
          {/* Upper small text */}
          <p className="text-gray-400 text-xl font-montreal">(Need an unfair advantage?)</p>
  
          {/* Main heading */}
          <div className="text-6xl md:text-6xl font-montreal font-bold text-[#d1d1c7] text-[108.297px] leading-[108.297px] text-center tracking-[-2.70742px]">
            LETS MAKE <br />
            IT HAPPEN
          </div>
  
          {/* CTA button */}
          <div>
            <a
              href="#"
              className="inline-block bg-gray-700 text-white py-4 px-10 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              BOOK A CALL &rarr;
            </a>
          </div>
  
          {/* Bottom details */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-6">
            {/* Working Globally */}
            <div className="flex items-center space-x-2">
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.25c-4.97 0-9-4.03-9-9 0-3.28 1.78-6.19 4.68-7.76.54-.29 1.2-.07 1.51.47l1.05 1.82c.4.69-.08 1.55-.83 1.55H6.55A7.468 7.468 0 002.25 12c0 4.136 3.364 7.5 7.5 7.5s7.5-3.364 7.5-7.5a7.469 7.469 0 00-3.75-6.68c-.75-.41-.37-1.52.5-1.55h2.62c.69 0 1.22.66 1.05 1.33-1.05 3.89-4.62 6.72-8.92 6.72a9 9 0 01-9-9h3.26c.69 0 1.22-.65 1.05-1.32L7.18 3.47a9.014 9.014 0 014.82-1.22C17.12 2.25 21 6.12 21 12c0 4.97-4.03 9-9 9z"
                  />
                </svg>
              </span>
              <div className="text-sm">
                <p>Working Globally</p>
                <p>Available Oct 24</p>
              </div>
            </div>
  
            {/* For further inquiries */}
            <div className="text-sm ">
              <p>FOR FURTHER INQUIRIES</p>
              <a
                href="mailto:hello@byhuy.com"
                className="text-gray-400 hover:underline"
              >
                hello@byhuy.com
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  