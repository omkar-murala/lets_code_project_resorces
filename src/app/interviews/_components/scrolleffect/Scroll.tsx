"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const InfiniteScrollCarousel = () => {
  const images = [
    '/1amazon.png',
    '/coco cola.png',
    '/Shopify.png',
    '/walmart.png',
    '/Deloitte-Logo.jpg',
    '/microsoft.png',
    '/reliance.jpeg',
    '/Shopify.png',
    '/1amazon.png',
    '/coco cola.png',
    '/Deloitte-Logo.jpg',
    '/microsoft.png',
    '/walmart.png',
    '/Shopify.png',
    '/coco cola.png',
    '/1amazon.png',
    '/reliance.jpeg',
    '/walmart.png',
    '/reliance.jpeg',
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-center text-3xl md:text-3xl lg:text-4xl font-bold mb-2 font-[Inter Tight]">
        Top Leading Companies
      </h2>
      <div className="overflow-hidden py-6" ref={scrollContainerRef}>
        <div className="flex items-center space-x-4 px-4" style={{ width: 'max-content' }}>
          {images.concat(images).map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-2 w-[200px] h-[100px] relative bg-white flex items-center justify-center"
              style={{ border: '1px solid #ddd' }} // Optional border for better visibility
            >
              <Image
                src={src}
                alt={`Logo ${index}`}
                layout="fill"
                objectFit="contain" // Ensures all images fit within the box while maintaining their aspect ratio
                className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
              />
            </div>
          ))}
          {images.concat(images).map((src, index) => (
            <div
              key={index + images.length}
              className="flex-shrink-0 mx-2 w-[200px] h-[100px] relative bg-white flex items-center justify-center"
              style={{ border: '1px solid #ddd' }} // Optional border for better visibility
            >
              <Image
                src={src}
                alt={`Logo ${index}`}
                layout="fill"
                objectFit="contain" // Ensures all images fit within the box while maintaining their aspect ratio
                className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteScrollCarousel;
