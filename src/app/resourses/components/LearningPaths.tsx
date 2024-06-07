"use client";

import { useState } from 'react';

const LearningPaths = () => {
  const [showMore, setShowMore] = useState(false);

  const paths = [
    'Web Development',
    'TypeScript',
    'System Design',
    'Startup List',
    'Software Engineering',
    'Road Maps',
    'Resume Guide',
    'Remote Hiring Resources'
  ];

  const morePaths = [
    'React',
    'Python',
    'Operating Service',
    'Oops',
    'Node.js',
    'Low-level design',
    'JavaScript',
    'Java',
    'Jira',
    'Interview preparation',
    'Guided PDF',
    'Git',
    'DBMS & SQL',
    'DSA',
    'Coding resources',
    'Cloud computing',
    'C++',
    'Books',
    'Blockchain',
    'Backend',
    'AI/ML'
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg mb-4">
      <h2 className="text-3xl font-bold mb-6 text-red-700" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.3)', fontFamily: 'Arial, sans-serif', letterSpacing: '0.05em' }}>
        Learning Paths
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paths.map((path, index) => (
          <div key={index} className="flex flex-col items-center bg-gradient-to-r from-red-300 to-orange-300 text-white p-6 rounded-lg shadow-lg hover:from-yellow-500 hover:to-red-500 transition transform hover:-translate-y-1">
            <div className="h-16 w-16 mb-4 bg-black rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">{path[0]}</span>
            </div>
            <span className="text-lg font-semibold">{path}</span>
          </div>
        ))}
        {showMore && morePaths.map((path, index) => (
          <div key={index} className="flex flex-col items-center bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-lg shadow-lg hover:from-yellow-500 hover:to-red-500 transition transform hover:-translate-y-1">
            <div className="h-16 w-16 mb-4 bg-black rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">{path[0]}</span>
            </div>
            <span className="text-lg font-semibold">{path}</span>
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-gradient-to-r from-red-300 to-orange-300 text-white p-3 rounded-lg hover:from-yellow-500 hover:to-red-500 transition transform hover:-translate-y-1"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'View more'}
      </button>
    </div>
  );
};

export default LearningPaths;
