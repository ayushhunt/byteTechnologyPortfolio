import React from 'react';
import Image from 'next/image';

const Clients = () => {
  const clients = [
    {
      name: 'Esme ',
      imageSrc: '/clients/esme.jpeg.jpg', // Replace with the actual image path
      alt: 'esmeLogo',
    },
    {
      name: 'Artivatic Ai',
      imageSrc: '/clients/artivatic.png', // Replace with the actual image path
      alt: 'Artivaticlogo',
    },
    {
      name: 'HLS Global',
      imageSrc: '/clients/hls global.png', // Replace with the actual image path
      alt: 'HLSglobal',
    },
    {
      name: 'Asahi India Glass',
      imageSrc: '/clients/asahi_india_glass_limited_logo.jpeg.jpg', // Replace with the actual image path
      alt: 'ashailogo',
    },
    {
      name: 'GodFrey Phillips',
      imageSrc: '/clients/godfrey phillips.png', // Replace with the actual image path
      alt: 'godfreylogo',
    },
    {
      name:'RenewBuy',
      imageSrc:'/clients/renewbuy.png',
      alt:'renewbuy'
    },
    {
      name:'Leixir Dental',
      imageSrc:'/clients/leixir dental.png',
      alt:'leixirdental'
    },
    {
      name:'Industry Buying',
      imageSrc:'/clients/industry buying.jpeg.jpg',
      alt:'industrybuyring'
    },
    {
      name:'RSM Astute',
      imageSrc:'/clients/logo@2x.webp',
      alt:'rsm'
    },
    {
      name:'samara capital.png',
      imageSrc:'/clients/samara capital.png',
      alt:'samara'
    },
    {
      name:'lombardi',
      imageSrc:'/clients/lombardi-socialmedia-preview.png',
      alt:'lombardi'
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
            <div className="flex justify-center items-center mb-5" 
              style={{ height: '150px',width:'200px' }}>
              <Image
                src={client.imageSrc}
                alt={client.alt}
                width={150} // Set fixed width
                height={150} // Set fixed height
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold text-center text-gray-800 group-hover:text-indigo-600 transition duration-300">
              {client.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
