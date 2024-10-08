import Image from "next/image";
import Mission from "../components/Mission";

export default function ContactUs() {
  return (
    <div className="container mx-auto p-6 space-y-10">
      {/* Header Section */}
      <div className="relative mt-0 rounded-md">
        {/* Background Image Section */}
        <div
          className="relative flex items-center justify-center h-[200px] bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url('/contactus/contact4.png')`, // Replace with your actual image path
          }}
        >
          {/* Foreground Text */}
          {/* <div className="text-center px-4 py-2 bg-opacity-70  rounded-md">
            <h1 className="text-4xl font-bold  text-black">Contact Us</h1>
            <p className="text-lg mt-2 text-black">
              Get in touch and let us know how we can help.
            </p>
          </div> */}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 rounded-3xl shadow-lg p-8">
        {/* Let's Talk Section */}
        <div className="bg-orange-500 shadow-lg rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-6 text-white">Let's Talk</h2>
          <p className="text-gray-100 mb-8 text-xl">
            Fill out the form and our team will get back to you as soon as
            possible.
          </p>
          <form className="space-y-4">
            {/* Your Name */}
            <div>
              <label className="block text-lg font-medium text-gray-100">
                Your Name *
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-medium text-gray-100">
                Email *
              </label>
              <input
                type="email"
                required
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-lg font-medium text-gray-100">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-lg font-medium text-gray-100">
                Company Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your company name"
              />
            </div>

            {/* Purpose of Contact */}
            <div>
              <label className="block text-lg font-medium text-gray-100">
                Purpose of Contact
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter the purpose of contact"
              />
            </div>

            {/* How Did You Hear About Us */}
            <div>
              <label className="block text-lg font-medium text-gray-100">
                How did you hear about us?
              </label>
              <select
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a source
                </option>
                <option value="google">Google</option>
                <option value="social_media">Social Media</option>
                <option value="friend">Friend</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-medium text-gray-100">
                Message *
              </label>
              <textarea
                required
                className="mt-1 block w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                rows="4"
                placeholder="Enter your message"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Address Card Section */}
        <div className="bg-orange-500 shadow-lg rounded-3xl p-8 space-y-12">
          <h2 className="text-4xl font-bold mb-8 text-white transition-transform duration-500 hover:scale-105">
            We Are Here
          </h2>

          {/* Corporate Office */}
          <div className="text-gray-100 mb-6">
            <strong className="text-2xl">Corporate Office:</strong>
            <p className="text-lg mt-2">
              A-11, Shyam Vihar, Phase-2, Dwarka Sector 19B, New Delhi - 110043
            </p>
            {/* Google Map Image for Corporate Office */}
            <div className="relative h-[300px] w-full mt-4 mb-8 transition-transform duration-500 hover:scale-105">
              <Image
                src="/contactus/bytdelhi.png"
                alt="Corporate Office Map"
                layout="fill"
                objectFit="contain"
                className="mx-auto rounded-lg"
              />
            </div>
          </div>

          {/* Delivery Centre */}
          <div className="text-gray-100 mb-6">
            <strong className="text-2xl">Delivery Centre:</strong>
            <p className="text-lg mt-2">
              Office No.- 14&15, 3rd Floor, Block J-4, Shree Ram Trade Centre,
              Main Road, Bishanpura, Sector 58, Noida, Gautam Buddha Nagar,
              Uttar Pradesh - 201301
            </p>
            {/* Google Map Image for Delivery Centre */}
            <div className="relative h-[300px] w-full mt-4 mb-8 transition-transform duration-500 hover:scale-105 ">
              <Image
                src="/contactus/bytnoida.png"
                alt="Delivery Centre Map"
                layout="fill"
                objectFit="contain"
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
