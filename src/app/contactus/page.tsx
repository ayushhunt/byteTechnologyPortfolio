import Image from 'next/image';
import Mission from '../components/Mission';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <Mission />
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-gray-100 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-gray-100 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 h-32 bg-gray-100 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300">
            Send Message
          </button>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Address</h3>
            <p>123 Main St, City, Country</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Map</h3>
            <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/image1.jpg"
                alt="Map"
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
