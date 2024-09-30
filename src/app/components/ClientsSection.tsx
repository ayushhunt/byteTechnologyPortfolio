import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component
import Link from 'next/link';

const Clients = () => {
  const clients = [
    {
      name: 'Esme',
      image: '/clients/esme.jpeg.jpg', // Replace with your image path
    },
    {
      name: 'Artivatic AI',
      image: '/clients/artivatic.png', // Replace with your image path
    },
    {
      name: 'HLS Global',
      image: '/clients/hls global.png', // Replace with your image path
    },
    {
      name:'Asahi India Glass',
      image:'/clients/asahi_india_glass_limited_logo.jpeg.jpg'
    },
    {
      name:'GodFrey Phillips',
      image:'/clients/godfrey phillips.png'
    },
    {
      name:'RenewBuy',
      image:'/clients/renewbuy.png'
    },
    {
      name:'Leixir Dental',
      image:'/clients/leixir dental.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Clients</h1>
      <div className="flex flex-wrap justify-center gap-8 px-5">
        {clients.map((client, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg rounded-lg p-6 max-w-sm hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 ease-in-out cursor-pointer"
          >
            <div 
              className="flex justify-center items-center mb-5" 
              style={{ height: '150px',width:'200px' }}  // Fixed height for image container
            >
              <Image
                src={client.image}
                alt={client.name}
                width={150} // Fixed width
                height={150} // Image's height will be contained
                className="object-contain" // Ensures the image scales properly without distortion
              />
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800 group-hover:text-indigo-600 transition duration-300">
              {client.name}
            </h2>
          </div>
        ))}
         
      </div>
      <div className="flex items-center justify-center mt-6">
  <Link href="/clients">
    <div className="w-40 px-2 py-2 text-center bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors">
      View All Clients
    </div>
  </Link>
</div>
    </div>

  );
};

export default Clients;
