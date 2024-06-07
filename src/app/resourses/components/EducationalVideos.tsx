"use client";

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
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg mb-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-900" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.3)', fontFamily: 'Arial, sans-serif', letterSpacing: '0.05em' }}>
        Educational Videos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center bg-gradient-to-r from-blue-300 to-purple-300 text-gray-800 p-6 rounded-lg shadow-lg hover:from-blue-400 hover:to-purple-400 transition transform hover:-translate-y-1">
            <div className="h-16 w-16 mb-4 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{video[0]}</span>
            </div>
            <span className="text-lg font-semibold">{video}</span>
          </div>
        ))}
        {showMore && moreVideos.map((video, index) => (
          <div key={index} className="flex flex-col items-center bg-gradient-to-r from-blue-300 to-purple-300 text-gray-800 p-6 rounded-lg shadow-lg hover:from-blue-400 hover:to-purple-400 transition transform hover:-translate-y-1">
            <div className="h-16 w-16 mb-4 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{video[0]}</span>
            </div>
            <span className="text-lg font-semibold">{video}</span>
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-gradient-to-r from-blue-300 to-purple-300 text-gray-800 p-3 rounded-lg hover:from-blue-400 hover:to-purple-400 transition transform hover:-translate-y-1"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'View more'}
      </button>
    </div>
  );
};

export default EducationalVideos;
