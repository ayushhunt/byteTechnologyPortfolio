"use client"; // Use client-side rendering
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface PageData {
  title: string;
  image: string;
  text: string;
}

const ServicePage = () => {
  const router = useRouter();
  const { title } = router.query; // Get the title from the URL
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!title) return; // Ensure the title is available before fetching
      try {
        const response = await fetch(`/api/PageData/?title=${title}`);
        const data = await response.json();
        setPageData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [title]);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (!pageData) {
    return <div className="text-center text-lg">No data found for "{title}"</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500">
        <div className="relative w-full h-64">
          <Image
            src={pageData.image}
            alt={pageData.title}
            layout="fill"
            objectFit="cover"
            className="hover:opacity-80 transition-opacity duration-500"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{pageData.title}</h1>
          <p className="text-gray-700 mb-6">{pageData.text}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
