// "use client";

// import { useState } from 'react';

// const FeaturedTopics = () => {
//   const [showMore, setShowMore] = useState(false);

//   const topics = [
//     { name: 'Study time' },
//     { name: 'Tech essentials' },
//     { name: 'Innovation zone' },
//     { name: 'Deep dive' },
//     { name: 'Problem-solving' },
//     { name: 'Learning break' },
//     { name: 'Tech empowerment' },
//     { name: 'Knowledge boost' },
//   ];

//   const moreTopics = [
//     { name: 'Advanced coding' },
//     { name: 'AI & ML' },
//     { name: 'Cloud computing' },
//     { name: 'Cyber security' },
//   ];

//   return (
//     <div className="p-4 bg-gray-900 rounded-lg">
//       <h2 className="text-xl font-bold mb-4 text-white">Featured topics</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//         {topics.map((topic, index) => (
//           <div key={index} className="flex flex-col items-center bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition">
//             {/* Placeholder for icons */}
//             <div className="h-20 w-20 mb-2 bg-black rounded-full"></div>
//             <span>{topic.name}</span>
//           </div>
//         ))}
//         {showMore && moreTopics.map((topic, index) => (
//           <div key={index} className="flex flex-col items-center bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition">
//             {/* Placeholder for icons */}
//             <div className="h-20 w-20 mb-2 bg-black rounded-full"></div>
//             <span>{topic.name}</span>
//           </div>
//         ))}
//         <button
//           className="flex flex-col items-center bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition"
//           onClick={() => setShowMore(!showMore)}
//         >
//           {/* Placeholder for icons */}
//           <div className="h-5 w-5 mb-2 bg-black rounded-full"></div>
//           <span>{showMore ? 'Show less' : 'View more'}</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FeaturedTopics;
"use client";

import { useState } from 'react';

const FeaturedTopics = () => {
  const [showMore, setShowMore] = useState(false);

  const topics = [
    { name: 'Study time' },
    { name: 'Tech essentials' },
    { name: 'Innovation zone' },
    { name: 'Deep dive' },
    { name: 'Problem-solving' },
    { name: 'Learning break' },
    { name: 'Tech empowerment' },
    { name: 'Knowledge boost' },
  ];

  const moreTopics = [
    { name: 'Advanced coding' },
    { name: 'AI & ML' },
    { name: 'Cloud computing' },
    { name: 'Cyber security' },
  ];

  return (
    <div className="p-4 bg-gray-900 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-white">Featured topics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {topics.map((topic, index) => (
          <div key={index} className="flex flex-col items-center bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition">
            {/* Placeholder for icons */}
            <div className="h-20 w-20 mb-2 bg-black rounded-full"></div>
            <span>{topic.name}</span>
          </div>
        ))}
        {showMore && moreTopics.map((topic, index) => (
          <div key={index} className="flex flex-col items-center bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition">
            {/* Placeholder for icons */}
            <div className="h-20 w-20 mb-2 bg-black rounded-full"></div>
            <span>{topic.name}</span>
          </div>
        ))}
      </div>
      <button
        className="mt-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-green-700 transition"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'View more'}
      </button>
    </div>
  );
};

export default FeaturedTopics;

