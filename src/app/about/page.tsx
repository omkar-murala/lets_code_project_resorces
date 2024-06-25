"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';


const AboutUsPage = () => {
  const [clientCount, setClientCount] = useState(0);

  // Simulating client count animation
  useEffect(() => {
    const interval = setInterval(() => {
      setClientCount((prevCount) => (prevCount < 71 ? prevCount + 1 : prevCount));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <main>   
    {/* INTRODUCTION */}
      <section className="relative py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-16">
            {/* Text Content Container */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="bg-white bg-opacity-75 p-6 rounded-lg text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight">
                  About Us
                </h2>
                <p className="text-lg md:text-xl text-gray-900 leading-relaxed mb-6">
                  Lets Code is dedicated to advancing technologys frontier, empowering individuals and businesses with transformative solutions.
                  Our commitment lies in pioneering innovative pathways that redefine possibilities in the digital realm.
                  As part of our mission, we have created Lets Resources—a comprehensive platform that serves as a one-stop solution for all tech resources. 
                  From interview preparation and aptitude training to high-level system design and UI/UX, Lets Resources provides an extensive range of tools and knowledge to support tech professionals in every stage of their careers.
                </p>
              </div>
            </div>

            {/* Image Card Container */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-20">
              <div className="relative rounded-lg overflow-hidden shadow-lg w-[300px] h-[200px] lg:w-[400px] lg:h-[250px]">
                <Image
                  src="https://utfs.io/f/b55de33d-68f2-4f47-9861-f125aeb764a5-1zbfv.png"
                  alt="About Us Image"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Mission and Vision Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Mission and Vision</h2>
              <p className="text-lg md:text-xl text-gray-600 mt-4">Driving Innovation and Empowering Communities</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="mission-section bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <svg className="w-10 h-10 text-indigo-500 mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8"></path>
                  </svg>
                  <h3 className="text-2xl md:text-3xl font-bold">Mission</h3>
                </div>
                <p className="text-lg md:text-xl text-gray-700">
                  At Lets Code, our mission is to foster a culture of innovation where creativity meets technical prowess. Through our relentless pursuit of cutting-edge solutions, we aim to empower organizations and individuals to thrive in a rapidly evolving digital landscape.
                </p>
              </div>
              <div className="vision-section bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <svg className="w-10 h-10 text-indigo-500 mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <h3 className="text-2xl md:text-3xl font-bold">Vision</h3>
                </div>
                <p className="text-lg md:text-xl text-gray-700">
                  Our vision is a future where technology enhances lives and drives positive change globally. By championing innovation and delivering impactful solutions, we seek to inspire progress and empower communities to harness the full potential of technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">OUR TEAM OF EXCELLENCE</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* CEO */}
              <div className="team-member bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition duration-500 hover:-translate-y-1 hover:shadow-lg w-48">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image src="https://avatars.githubusercontent.com/u/61057666?v=4" alt="CEO Image" width={96} height={96} layout="responsive" className="object-cover" />
                </div>
                <h3 className="text-lg font-bold mb-1">Avinash Singh</h3>
                <p className="text-gray-700 text-sm">Founder</p>
                <div className="flex mt-2 space-x-2">
                  <a href="https://x.com/Lets__Code" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXR3aXR0ZXIiPjxwYXRoIGQ9Ik0yMiA0cy0uNyAyLjEtMiAzLjRjMS42IDEwLTkuNCAxNy4zLTE4IDExLjYgMi4yLjEgNC40LS42IDYtMkMzIDE1LjUuNSA5LjYgMyA1YzIuMiAyLjYgNS42IDQuMSA5IDQtLjktNC4yIDQtNi42IDctMy44IDEuMSAwIDMtMS4yIDMtMS4yeiIvPjwvc3ZnPg==" alt="Twitter" width={16} height={16} />
                  </a>
                  <a href="https://www.linkedin.com/in/avinash-singh-071b79175?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpbmtlZGluIj48cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiLz48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgeD0iMiIgeT0iOSIvPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIyIi8+PC9zdmc+" alt="LinkedIn" width={16} height={16} />
                  </a>
                </div>
              </div>

              {/* Web Developers */}
              {webDevelopers.map((developer, index) => (
                <div key={index} className="team-member bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition duration-500 hover:-translate-y-1 hover:shadow-lg w-48">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image src={developer.image} alt={developer.name} width={96} height={96} layout="responsive" className="object-cover" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{developer.name}</h3>
                  <p className="text-gray-700 text-sm text-center">{developer.role}</p>
                  <div className="flex mt-2 space-x-2">
                    {developer.socials.map((social, i) => (
                      <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        <Image src={social.icon} alt={`${developer.name} ${social.name}`} width={16} height={16} />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

    {/* Client Impact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Community Impact</h2>
          <div className="text-6xl font-bold mb-4">{clientCount} K+</div>
          <p className="text-lg md:text-xl">Members</p>
        </div>
      </section>

    {/* Commitment to Excellence Section */}
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Commitment to Excellence</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Excellence is the cornerstone of our work at Lets Code. 
            From concept ideation to execution, we uphold uncompromising standards of quality and reliability. 
            Our dedicated team combines expertise with passion to deliver solutions that exceed expectations and set new industry benchmarks.
          </p>
        </div>
      </div>
    </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gray-800 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Empowering Innovation, Inspiring Change</h2>
            <p className="text-lg md:text-xl">
              Ready to transform your ideas into reality? Connect with Lets Code today and embark on a journey of innovation and growth.
            </p>
            <div className="mt-8 space-x-4 justify-center flex">
              <a href="https://t.me/offcampusjobsupdatess" target='_blank'>
              <button className="py-4 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-300">
                Join Our Community
              </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const webDevelopers = [
  {
    name: 'Karan Rana',
    role: 'CTO',
    image: 'https://avatars.githubusercontent.com/u/103360966?v=4',
    socials: [
      { name: 'Twitter', link: 'https://www.linkedin.com/in/karanrana30', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXR3aXR0ZXIiPjxwYXRoIGQ9Ik0yMiA0cy0uNyAyLjEtMiAzLjRjMS42IDEwLTkuNCAxNy4zLTE4IDExLjYgMi4yLjEgNC40LS42IDYtMkMzIDE1LjUuNSA5LjYgMyA1YzIuMiAyLjYgNS42IDQuMSA5IDQtLjktNC4yIDQtNi42IDctMy44IDEuMSAwIDMtMS4yIDMtMS4yeiIvPjwvc3ZnPg==' },
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/karanrana30', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpbmtlZGluIj48cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiLz48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgeD0iMiIgeT0iOSIvPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIyIi8+PC9zdmc+' },
    ],
  },
  {
    name: 'Omlar Murala',
    role: 'Product Development Manager',
    image: 'https://avatars.githubusercontent.com/u/119599104?s=400&u=0fa3118ae4df74ab92e19c3dd44f97d0134997de&v=4',
    socials: [
      { name: 'Twitter', link: 'https://x.com/omkar_star98?t=j0AyPMUUUwMhS6l2oyliXw&s=09', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXR3aXR0ZXIiPjxwYXRoIGQ9Ik0yMiA0cy0uNyAyLjEtMiAzLjRjMS42IDEwLTkuNCAxNy4zLTE4IDExLjYgMi4yLjEgNC40LS42IDYtMkMzIDE1LjUuNSA5LjYgMyA1YzIuMiAyLjYgNS42IDQuMSA5IDQtLjktNC4yIDQtNi42IDctMy44IDEuMSAwIDMtMS4yIDMtMS4yeiIvPjwvc3ZnPg=='  },
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/omkar-murala-06339122b', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpbmtlZGluIj48cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiLz48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgeD0iMiIgeT0iOSIvPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIyIi8+PC9zdmc+' },
    ],
  },
  {
    name: 'Shubham Paul',
    role: 'Software Engineer',
    image: 'https://avatars.githubusercontent.com/u/91714143?v=4',
    socials: [
      { name: 'Twitter', link: 'https://x.com/shubham007913', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXR3aXR0ZXIiPjxwYXRoIGQ9Ik0yMiA0cy0uNyAyLjEtMiAzLjRjMS42IDEwLTkuNCAxNy4zLTE4IDExLjYgMi4yLjEgNC40LS42IDYtMkMzIDE1LjUuNSA5LjYgMyA1YzIuMiAyLjYgNS42IDQuMSA5IDQtLjktNC4yIDQtNi42IDctMy44IDEuMSAwIDMtMS4yIDMtMS4yeiIvPjwvc3ZnPg=='  },
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/shubham-paul-5a3a8a21b', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpbmtlZGluIj48cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiLz48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgeD0iMiIgeT0iOSIvPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIyIi8+PC9zdmc+' },
    ],
  },
];


export default AboutUsPage;
