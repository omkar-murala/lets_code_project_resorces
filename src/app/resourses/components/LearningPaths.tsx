"use client"

import { useState } from 'react';

const LearningPaths = () => {
  const [showMore, setShowMore] = useState(false);

  const paths = [
    'Skill development',
    'Educational journey',
    'Knowledge enrichment',
    'Academic excellence',
    'Knowledge expansion',
    'Career guidance',
    'Skill mastery',
    'Innovative learning'
  ];

  const morePaths = [
    'Advanced studies',
    'Expert knowledge',
    'Specialized training',
    'Leadership skills'
  ];

  return (
    <div className="p-4 bg-gray-800 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-4 text-white">Learning paths</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {paths.map((path, index) => (
          <div key={index} className="flex flex-col items-center bg-red-600 text-white p-4 rounded-lg shadow-md">
            <div className="h-20 w-20 mb-2 bg-gray-900 rounded-full"></div>
            <span>{path}</span>
          </div>
        ))}
        {showMore && morePaths.map((path, index) => (
          <div key={index} className="flex flex-col items-center bg-red-600 text-white p-4 rounded-lg shadow-md">
            <div className="h-20 w-20 mb-2 bg-gray-900 rounded-full"></div>
            <span>{path}</span>
          </div>
        ))}
      </div>
      <button
        className="mt-4 bg-red-600 text-white p-2 rounded-lg"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'View more'}
      </button>
    </div>
  );
};

export default LearningPaths;
