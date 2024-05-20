"use client"

import { useState } from 'react';

const EducationalVideos = () => {
  const [showMore, setShowMore] = useState(false);

  const videos = [
    'Interactive learning experience',
    'Educate and elevate',
    'Literary exploration',
    'Scientific resilience',
    'Daily insights: Knowledge enrichment',
    'Tech tutorials',
    'Coding bootcamp',
    'AI explorations'
  ];

  const moreVideos = [
    'Quantum computing basics',
    'Blockchain essentials',
    'Data science fundamentals',
    'Virtual reality in education'
  ];

  return (
    <div className="p-4 bg-gray-800 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-4 text-white">Educational videos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center bg-blue-600 text-white p-4 rounded-lg shadow-md">
            <div className="h-20 w-20 mb-2 bg-gray-900 rounded-full"></div>
            <span>{video}</span>
          </div>
        ))}
        {showMore && moreVideos.map((video, index) => (
          <div key={index} className="flex flex-col items-center bg-blue-600 text-white p-4 rounded-lg shadow-md">
            <div className="h-20 w-20 mb-2 bg-gray-900 rounded-full"></div>
            <span>{video}</span>
          </div>
        ))}
      </div>
      <button
        className="mt-4 bg-blue-600 text-white p-2 rounded-lg"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'View more'}
      </button>
    </div>
  );
};

export default EducationalVideos;
