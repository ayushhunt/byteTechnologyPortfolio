import Image from "next/image";

const Founders = () => {
  const founders = [
    {
      id: 1,
      name: "John Doe",
      image: "/image1.jpg",
      description: "John is a visionary leader with over 20 years of experience in technology and innovation.",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "/image2.jpg",
      description: "Jane is a creative mastermind who brings her expertise in design and business strategy.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Our Founders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {founders.map((founder) => (
          <div
            key={founder.id}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
          >
            <div className="w-48 h-48 relative mb-6">
              <Image
                src={founder.image}
                alt={founder.name}
                className="object-cover rounded-full"
                layout="fill"
               
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{founder.name}</h3>
            <p className="text-gray-600 text-center">{founder.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
