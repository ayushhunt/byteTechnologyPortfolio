import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Clients = () => {
  const clients = [
    {
      name: 'Esme',
      image: '/clients/esme.jpg',
      testimonial: 'Esme has been our partner for years and has consistently delivered top-notch services.',
    },
    {
      name: 'Artivatic AI',
      image: '/clients/artivatic.png',
      testimonial: 'Artivatic AI has redefined our AI strategy with their cutting-edge technology.',
    },
    {
      name: 'HLS Global',
      image: '/clients/hls global.png',
      testimonial: 'We appreciate HLS Global’s professionalism and attention to detail.',
    },
    
    {
      name: 'Asahi India Glass',
      image: '/clients/ais.jpg',
      testimonial: 'Asahi India Glass has consistently exceeded our expectations with their services.',
    },
    {
      name: 'Godfrey Phillips',
      image: '/clients/godfrey phillips.png',
      testimonial: 'Godfrey Phillips has been a reliable partner for our long-term growth.',
    },
    {
      name: 'RenewBuy',
      image: '/clients/renewbuy.png',
      testimonial: 'RenewBuy has helped us achieve significant business results through innovative solutions.',
    },
    {
      name: 'Leixir Dental',
      image: '/clients/leixir dental.png',
      testimonial: 'Leixir Dental’s expertise has elevated the quality of our operations.',
    },
    {
      name:'Lombardi',
      image:'/clients/lombardi.png',
      testimonial:'by technology provide great facility.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#eef4fa]  py-10 ">
      <h1 className="text-4xl font-extrabold text-center mb-3 text-gray-900">Our Clients</h1>
      <div className="w-14 h-1 bg-green-500 rounded-full mx-auto mb-7 pb-1.5 "></div>
      <div className="flex flex-wrap justify-center gap-8 px-5">
        {clients.map((client, index) => (
          <div
            key={index}
            className="group perspective bg-transparent w-64 h-80"
          >
            <div className="relative preserve-3d group-hover:rotate-y-180 duration-700 w-full h-full  ">
              {/* Front side - Client image */}
              <div className="absolute backface-hidden w-full h-full  ">
                <div className="flex justify-center items-center h-3/4 shadow-black">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-center text-gray-800 mt-2 group-hover:text-indigo-600 transition duration-300">
                  {client.name}
                </h2>
              </div>

              {/* Back side - Testimonial */}
              <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-white p-6 flex flex-col justify-center text-center shadow-lg rounded-lg">
                <p className="text-gray-700 italic mb-4">{client.testimonial}</p>
                <p className="font-semibold text-gray-900">{client.name}</p>
              </div>
            </div>
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
