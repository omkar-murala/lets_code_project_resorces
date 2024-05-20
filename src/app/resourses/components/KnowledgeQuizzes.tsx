"use client"

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
    <div className="p-4 bg-gray-800 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-4 text-white">Knowledge quizzes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {quizzes.map((quiz, index) => (
          <div key={index} className="flex flex-col items-center bg-green-600 text-white p-4 rounded-lg shadow-md">
            <div className="h-20 w-20 mb-2 bg-gray-900 rounded-full"></div>
            <span>{quiz}</span>
          </div>
        ))}
        {showMore && moreQuizzes.map((quiz, index) => (
          <div key={index} className="flex flex-col items-center bg-green-600 text-white p-4 rounded-lg shadow-md">
            <div className="h-20 w-20 mb-2 bg-gray-900 rounded-full"></div>
            <span>{quiz}</span>
          </div>
        ))}
      </div>
      <button
        className="mt-4 bg-green-600 text-white p-2 rounded-lg"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'View more'}
      </button>
    </div>
  );
};

export default KnowledgeQuizzes;
