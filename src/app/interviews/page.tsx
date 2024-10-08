
import React from 'react';
import MockInterview from './_components/MockInterviewCard';
import { Card } from './_components/Card';
import ResumeCard from './_components/ResumeCard';
import Image from 'next/image';
import Scroll from './_components/scrolleffect/Scroll';

// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const cardData = [ {
        img: 'https://d3l4smlx4vuygm.cloudfront.net/mock.png',
        header: "Mock Interview",
        content: "Mock interview in one point",
        link: <MockInterview />
    },
    {
        img: 'https://images.unsplash.com/photo-1698047681452-08eba22d0c64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        header: "Resume Building",
        content: "Build Resume in one point",
        link: <ResumeCard />
    }
];

const quizData = [
    {
        img: 'https://d3l4smlx4vuygm.cloudfront.net/images.jpeg',
        header: "Weekly Quiz",
        content: "Participate in our weekly quizzes to stay sharp.",
        link: <a href='/quiz/weekly' className='text-blue-400 underline'>Join Weekly Quiz</a>
    },
    {
        img: 'https://d3l4smlx4vuygm.cloudfront.net/monthly.jpeg',
        header: "Monthly Quiz",
        content: "Take part in monthly quizzes for a bigger challenge.",
        link: <a href='/quiz/monthly' className='text-blue-400 underline'>Join Monthly Quiz</a>
    },
    {
        img: 'https://d3l4smlx4vuygm.cloudfront.net/Ranking Board.png',
        header: "Ranking Board",
        content: "Check out the top performers and your rank.",
        link: <a href='/quiz/ranking' className='text-blue-400 underline'>View Rankings</a>
    }
];

async function HeroSection() {
    return (
        
        <div className="bg-blue-100 py-16 px-8 text-center">
        <div className="lg:block absolute pt-8 lg:top-35 hidden lg:left-16 h-full w-1/4 animate-bounceFadeIn">
            <Image 
             width={400}
             height={400}
                src="https://d3l4smlx4vuygm.cloudfront.net/rk.png" 
                alt="" 
                  className="h-300 w-400 object-cover"
            />
        </div>
        <div className="lg:block absolute hidden top-45 right-16 h-full w-1/4 animate-bounceFadeIn">
            <Image 
             width={400}
             height={400}
                src="https://d3l4smlx4vuygm.cloudfront.net/2[1].png" 
                alt="" 
                 className="h-300 w-400 object-cover"
            />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">Prepare for Your Dream Job & Win Rewards!</h1>
            <p className="text-xl text-gray-600 mt-4">Let&apos;s Resource make you choose right path</p>
            <div className="mt-8 flex justify-center">
                <input type="text" placeholder="@Your Email" className="px-4 py-2 rounded-l-lg border border-gray-300" />
                <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-r-lg hover:bg-orange-200">Get Started</button>
                </div>
              
             <div className="flex justify-center gap-8 mt-8">
                
                    <div className="bg-white shadow-lg rounded-lg p-4 w-56">
                    <Image  width={400}
            height={400} src="https://d3l4smlx4vuygm.cloudfront.net/quizz.png" alt="Monthly Quiz" className="w-full h-32 object-cover rounded" />
                    <h3 className="text-lg font-bold mt-4">Monthly Quiz</h3>
                    <p className="text-sm text-gray-600">Challenge yourself monthly for bigger prizes.</p>
                
                    
 
                </div>
                
            </div>
            <div className="mt-8 flex justify-center gap-4">
                <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">Explore All</button>
                <button className="px-6 py-2 bg-transparent border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-600 hover:text-white">How to Play</button>
            </div>
            <Scroll/>
        </div>
    );
}






function Page() {
    return (
        <>
            <HeroSection />
            

        
            {/* Schedule Mock Interviews Section */}
           

<div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 pt-10 pb-8" id="interview">
<h1 className="text-white text-5xl font-extrabold text-center pb-12 tracking-tight">Schedule Mock Interviews for Free</h1>

<div className="flex flex-col items-center gap-12 md:w-3/4 mx-auto">

    {/* Resume Builder Card */}
    <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-xl flex flex-col md:flex-row items-center p-6 gap-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        
        {/* Image on the left */}
        <div className="w-full md:w-1/3 h-48 bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
            <Image 
            width={400}
            height={400}
              src="https://d3l4smlx4vuygm.cloudfront.net/mock.png" 
              alt="Resume Builder" 
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" 
            />
        </div>

        {/* Text and Button */}
        <div className="flex-grow px-6">
            <h2 className="text-center text-white text-3xl font-bold mb-6">Resume Builder</h2>
            <ul className="text-left text-white text-lg font-medium tracking-wide list-disc pl-6 space-y-2">
               <li>Create polished resumes with ready-to-use designs</li>
                <li>Create your professional resume with templates</li>
                <li>Download in PDF, DOCX format</li>
                <li>Easy editing and formatting options</li>
            </ul>
            <div className="mt-8 text-right">
                <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-bold shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300">
                    PAY NOW
                </button>
            </div>
        </div>
    </div>

    {/* Mock Interview Card */}
    <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-xl flex flex-col md:flex-row-reverse items-center p-6 gap-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        
        {/* Image on the right */}
        <div className="w-full md:w-1/3 h-48 bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
            <Image 
             width={400}
             height={400}
              src="https://images.unsplash.com/photo-1698047681452-08eba22d0c64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Mock Interview" 
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" 
            />
        </div>

        {/* Text and Button */}
        <div className="flex-grow px-6">
            <h2 className="text-center text-white text-3xl font-bold mb-6">Mock Interview</h2>
            <ul className="text-left text-white text-lg font-medium tracking-wide list-disc pl-6 space-y-2">
            
                <li>Mock interviews offer a valuable opportunity for self-assessment</li>
                <li>One-on-one interview sessions with experts</li>
                <li>Mock interviews help you anticipate and prepare for tricky questions</li>
                <li>Receive personalized feedback on your performance</li>
                
            </ul>
            <div className="mt-8 text-left">
                <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-bold shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300">
                    PAY NOW
                </button>
            </div>
        </div>
    </div>

</div>
</div>

            
        </>
    );
}

export default Page;