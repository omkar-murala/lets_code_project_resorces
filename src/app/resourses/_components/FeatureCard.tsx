"use client"

import React, { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import axios from "axios";
import Link from 'next/link';
import PacmanLoader from 'react-spinners/PacmanLoader';






function FeatureCard() {
  const [datas, setData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const itemsToShow = showMore ? datas.length : 4;
  const [loading,setLoading] = useState(true)
  

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`https://custombackend-vgpn.onrender.com/api/v1/feature`);
        setData(data.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        // toast.error("Too Much Request")
        setData([]);
        setLoading(true)
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="p-6 shadow-lg rounded-lg bg-slate-800 mb-10 mt-4 ">
        <h2 className="text-3xl font-bold mb-6 text-blue-600" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.3)', fontFamily: 'Arial, sans-serif', letterSpacing: '0.05em' }}>
          FEATURED TOPICS
        </h2>
        {loading ? <div className='flex flex-1 items-center justify-center'><PacmanLoader color="#71dffa" /></div> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {datas.slice(0, itemsToShow).map((topic: any, index) => {
              return (
                  <Link key={index + '-' + index} href={`resouces/${topic.link}`}>
                  <div key={index} className="flex flex-col items-center bg-gradient-to-r from-blue-300 to-cyan-300 text-white p-6 rounded-lg shadow-lg hover:from-teal-300 hover:to-blue-300 hover:bg-opacity-50 transition transform hover:-translate-y-1">
                <Image
                  src={topic.imageUrl}
                  alt={topic.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                  />
                <span className="text-lg font-semibold mt-2">{topic.name}</span>
              </div>
        </Link>
            );
            })}
        </div>}
        
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
