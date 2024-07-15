import React from 'react'
import MockInterview from './_components/MockInterviewCard'
import { Card } from './_components/Card'
import ResumeCard from './_components/ResumeCard'


const cardData = [
    {
        img:'https://images.unsplash.com/photo-1554200876-980213841c94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        header: "Mock Interview",
        content: "Mock interview in one point",
        link: <MockInterview />
    },
    {
        img:'https://images.unsplash.com/photo-1698047681452-08eba22d0c64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        header: "Resume Building",
        content: "Build Resume in one point",
        link: <ResumeCard />

    }
]

function page() {
    return (
        <>
            <div className='transition ease-in duration-300'>
                {/* <HeroSection/> */}
                <div className='flex flex-col items-center justify-center'>
                    <div className=" w-full relative  bg-slate-800 text-center">
                        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                            <h1 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
                                Prepare for Your Dream Job with Confidence
                            </h1>
                            <p className="mt-8 text-lg text-gray-200">
                                Expert-led mock interviews to help you succeed in your next job interview.
                            </p>
                            <a href="#interview" className='mt-8'>
                                {/* <button className='bg-white text-black px-3 py-2 rounded-md mt-4 font-semibold'>Get Started. It's Free</button> */}
                                <button type="button" className="m-1 ms-0 relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                    Get Started. It&apos;s Free
                                    <span className="flex absolute top-0 end-0 -mt-2 -me-2">
                                        <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
                                        <span className="relative inline-flex text-xs bg-red-500 text-white rounded-full py-0.5 px-1.5">
                                            New
                                        </span>
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-600 pt-10 pb-8' id='interview'>
                    <h1 className='text-white text-4xl font-bold text-center pb-8'>Schedule Mock Interviews for Free </h1>
                    <div className='flex flex-col  lg:flex-row items-center justify-center gap-8'>
                        {cardData.map((ele, index: any) => {
                            return (
                                <>
                                    <div key={index + "-" + index}>
                                        <Card img={ele.img} header={ele.header} content={ele.content} link={ele.link} />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page