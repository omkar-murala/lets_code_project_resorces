"use client";

import { useState } from 'react';

type Topic = {
  name: string;
};

const topics: Topic[] = [
  { name: 'Web Development' },
  { name: 'TypeScript' },
  { name: 'System Design' },
  { name: 'Resume Guide' },
  { name: 'React' },
  { name: 'Python' },
  { name: 'Java' },
  { name: 'DBMS & SQL' },
];

const moreTopics: Topic[] = [
  { name: 'Coding Resources' },
  { name: 'AI & ML' },
];

//const imageMap: Record<string, string> = {
  //'Web Development': 'https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5617617-4674328.png',
  //'TypeScript': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJQH755t5dniOYwR_nSPxtMBVFa3mwMg2sA&s',
  //'System Design': 'https://cdn3d.iconscout.com/3d/premium/thumb/design-system-10420103-8400224.png',
  //'Resume Guide': 'https://cdn3d.iconscout.com/3d/premium/thumb/resume-10244947-8318820.png?f=webp',
  //'React': 'https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage-thumbnail.png',
  // 'Python': 'https://path/to/python-image.png',
  // 'Java': 'https://path/to/java-image.png',
  // 'DBMS & SQL': 'https://path/to/dbms-sql-image.png',
  // 'Coding Resources': 'https://path/to/coding-resources-image.png',
  // 'AI & ML': 'https://path/to/ai-ml-image.png',
//};

const FeaturedTopics: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-900" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.3)', fontFamily: 'Arial, sans-serif', letterSpacing: '0.05em' }}>
        FEATURED TOPICS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...topics, ...(showMore ? moreTopics : [])].map((topic, index) => (
          <div key={index} className="flex flex-col items-center bg-gradient-to-r from-blue-300 to-cyan-300 text-white p-6 rounded-lg shadow-lg hover:from-teal-300 hover:to-blue-300 hover:bg-opacity-50 transition transform hover:-translate-y-1">
            {/* <Image
              src={imageMap[topic.name]}
              alt={topic.name}
              width={64}
              height={64}
              className="rounded-full object-cover"
            /> */}
            <span className="text-lg font-semibold mt-2">{topic.name}</span>
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
