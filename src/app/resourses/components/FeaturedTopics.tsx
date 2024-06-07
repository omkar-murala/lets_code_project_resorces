"use client";

import { useState } from 'react';

const FeaturedTopics = () => {
  const [showMore, setShowMore] = useState(false);

  const topics = [
    { name: 'Web Development' },
    { name: 'TypeScript' } ,
    { name: 'System Design' },
    { name: 'Resume Guide' },
    { name: 'React' },
    { name: 'Python' },
    { name: 'Java' },
    { name: 'DBMS & SQL' },
  ];

  const moreTopics = [
    { name: 'Coding Resources' },
    { name: 'AI & ML' },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-900" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.3)', fontFamily: 'Arial, sans-serif', letterSpacing: '0.05em' }}>
        Featured Topics
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topics.map((topic, index) => (
          <div key={index} className="flex flex-col items-center bg-gradient-to-r from-blue-300 to-cyan-300 text-white p-6 rounded-lg shadow-lg hover:from-teal-300 hover:to-blue-300 hover:bg-opacity-50 transition transform hover:-translate-y-1">
            <div className="h-16 w-16 mb-4 bg-black rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">{topic.name[0]}</span>
            </div>
            <span className="text-lg font-semibold">{topic.name}</span>
          </div>
        ))}
        {showMore && moreTopics.map((topic, index) => (
          <div key={index} className="flex flex-col items-center bg-gradient-to-r from-blue-300 to-cyan-300 text-white p-6 rounded-lg shadow-lg hover:from-teal-300 hover:to-blue-300 hover:bg-opacity-50 transition transform hover:-translate-y-1">
            <div className="h-16 w-16 mb-4 bg-black rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">{topic.name[0]}</span>
            </div>
            <span className="text-lg font-semibold">{topic.name}</span>
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-gradient-to-r from-blue-300 to-cyan-300 text-white p-3 rounded-lg hover:from-teal-300 hover:to-blue-300 transition transform hover:-translate-y-1"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'View more'}
      </button>
    </div>
  );
};

export default FeaturedTopics;
