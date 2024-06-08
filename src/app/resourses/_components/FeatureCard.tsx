"use client"

import React, { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import axios from "axios";
import Link from 'next/link';

function FeatureCard() {
  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const itemsToShow = showMore ? data.length : 4;

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`https://resourcebackend.onrender.com/api/features`);
        console.log(data.data);
        setData(data.data);
      } catch (error) {
        console.log(error);
        setData([]);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-blue-900" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.3)', fontFamily: 'Arial, sans-serif', letterSpacing: '0.05em' }}>
          FEATURED TOPICS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.slice(0, itemsToShow).map((topic: any, index) => {
              const attributes = topic.attributes || {}; // Fallback to an empty object if attributes is undefined
              return (
                  <Link key={index + '-' + index} href={`resouces/${attributes.link}`}>
                  <div key={index} className="flex flex-col items-center bg-gradient-to-r from-blue-300 to-cyan-300 text-white p-6 rounded-lg shadow-lg hover:from-teal-300 hover:to-blue-300 hover:bg-opacity-50 transition transform hover:-translate-y-1">
                <Image
                  src={attributes.image}
                  alt={attributes.title}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                  />
                <span className="text-lg font-semibold mt-2">{attributes.title}</span>
              </div>
        </Link>
            );
            })}
        </div>
        <button
          className="mt-6 bg-gradient-to-r from-blue-300 to-cyan-300 text-white p-3 rounded-lg hover:from-teal-300 hover:to-blue-300 transition transform hover:-translate-y-1"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less' : 'View more'}
        </button>
      </div>
    </div>
  );
}

export default FeatureCard;
