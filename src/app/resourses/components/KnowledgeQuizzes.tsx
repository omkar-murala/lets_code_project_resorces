"use client";

import { useState } from 'react';

const KnowledgeQuizzes = () => {
  const [showMore, setShowMore] = useState(false);

  const quizzes = [
    'Intellectual challenges',
    'Learning journey',
    'Wisdom exploration',
    'Personal development',
    'Unleash your potential',
    'Tech quizzes',
    'Coding challenges',
    'Problem-solving puzzles'
  ];

  const moreQuizzes = [
    'Math puzzles',
    'History quizzes',
    'Science trivia',
    'Geography challenges'
  ];

  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-4 text-blue-900" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.3)', fontFamily: 'Arial, sans-serif', letterSpacing: '0.05em' }}>
        Knowledge Quizzes
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {quizzes.map((quiz, index) => (
          <div key={index} className="flex flex-col items-center bg-gradient-to-r from-green-200 to-green-300 text-gray-800 p-4 rounded-lg shadow-md hover:from-green-400 hover:to-green-500 transition transform hover:-translate-y-1">
            <div className="h-20 w-20 mb-2 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{quiz[0]}</span>
            </div>
            <span className="text-lg font-semibold">{quiz}</span>
          </div>
        ))}
        {showMore && moreQuizzes.map((quiz, index) => (
          <div key={index} className="flex flex-col items-center bg-gradient-to-r from-green-200 to-green-300 text-gray-800 p-4 rounded-lg shadow-md hover:from-green-400 hover:to-green-500 transition transform hover:-translate-y-1">
            <div className="h-20 w-20 mb-2 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{quiz[0]}</span>
            </div>
            <span className="text-lg font-semibold">{quiz}</span>
          </div>
        ))}
      </div>
      <button
        className="mt-4 bg-gradient-to-r from-green-200 to-green-300 text-gray-800 p-2 rounded-lg hover:from-green-400 hover:to-green-500 transition transform hover:-translate-y-1"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'View more'}
      </button>
    </div>
  );
};

export default KnowledgeQuizzes;
