"use client"
import { ThreeDCardDemo } from "@/components/SlideCard/SlideCard";
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {

  return (
    <>
      <div className="relative w-full">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-700 md:text-4xl lg:text-6xl">
              <TypeAnimation
                sequence={[
                  'Accelerate Your Tech Journey',
                  1000,
                  'Accelerate Your Coding Journey',
                  1000,
                  'Get Every Resource in One Place',
                  1000,
                  'Free Tech Books Every Sunday',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </h1>
            <p className="mt-8 text-lg text-gray-500">
              Discover a treasure trove of tech resources, featuring in-depth notes, comprehensive guides, practical templates, and detailed roadmaps designed to accelerate your learning and career growth.
            </p>
            <div className="relative mt-8">
              <Link href="/resourses" passHref>
                <button className="absolute left-0 top-0 rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <ThreeDCardDemo />
          </div>
        </div>
      </div>
      {/* Introduction */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Welcome to TechResourceHub!
            </h2>
            <p className="mt-8 text-lg text-gray-700 animate-fade-in">
            We provide a variety of tech resources like resume templates and roadmaps, all from reputable sources, to simplify your learning and career growth.
            </p>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image src="https://www.shutterstock.com/image-vector/3d-download-icon-isolated-on-600nw-2096369137.jpg" alt="Free Downloads" width={96} height={96} />
              </div>
              <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Free Downloads</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                All resources are available for free download.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-services-7013376-5727383.png" alt="Expert Curated" width={96} height={96} />
              </div>
              <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Expert Curated</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Resources curated by industry experts.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image src="https://img.freepik.com/premium-psd/3d-chat-message-mail-icon-illustration_148391-6438.jpg" alt="Regular Updates" width={96} height={96} />
              </div>
              <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Regular Updates</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Regularly updated with new and relevant content.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CATAGORY */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Categories
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/signature-on-agreement-8146457-6477431.png?f=webp" alt="Notes" width={86} height={86} className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Notes</h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  Comprehensive notes on various tech topics.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/roadmap-6851956-5624882.png?f=webp" alt="Roadmaps" width={86} height={86} className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Roadmaps</h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  Detailed roadmaps for your tech career path.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/employees-profile-10760000-8746820.png" alt="Resume Templates" width={86} height={86} className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Resume Templates</h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  ATS-friendly resume templates to stand out.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/technical-analysis-4721286-3931540.png?f=webp" alt="Cheat Sheets" width={86} height={86} className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Cheat Sheets</h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  Essential cheat sheets for tech professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Resources */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl"> */}
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Resources
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden" style={{ transform: 'scale(1.0)' }}>
              <div className="flex justify-center items-center p-6">
                <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/resume-5527385-4623366.png" alt="Sample Resume" width={180} height={140} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Sample Resume</h3>
                <p className="mt-4 text-base text-gray-600">
                  An example of a well-structured resume for tech professionals, showcasing best practices in resume writing.
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden" style={{ transform: 'scale(1.0)' }}>
              <div className="flex justify-center items-center p-6">
                <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/marketing-strategy-10760000-8746822.png" alt="Software Development Roadmap" width={180} height={140} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Software Development Roadmap</h3>
                <p className="mt-4 text-base text-gray-600">
                  A comprehensive roadmap outlining the essential skills and knowledge areas for a successful career in software development.
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden" style={{ transform: 'scale(1.0)' }}>
              <div className="flex justify-center items-center p-6">
                <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/data-analysis-10760000-8746821.png" alt="Data Science Cheat Sheet" width={180} height={140} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Data Science Cheat Sheet</h3>
                <p className="mt-4 text-base text-gray-600">
                  A handy cheat sheet covering key concepts, techniques, and tools for data science professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How It Works */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-6 text-xl leading-8 text-indigo-200">
              Learn how to get the most out of our resources.
            </p>
          </div>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center mb-4">
                <Image src="https://static.vecteezy.com/system/resources/previews/035/947/319/original/browser-3d-illustration-icon-png.png" alt="Browse Resources" width={84} height={84} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Browse Resources</h3>
              <p className="mt-3 text-lg text-indigo-200">
                Easily browse through our vast collection of resources.
              </p>
            </div>
            <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center mb-4">
                <Image src="https://static.vecteezy.com/system/resources/thumbnails/014/386/141/small_2x/3d-save-for-later-icon-render-isolated-icon-free-png.png" alt="Download & Save" width={150} height={150} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Download & Save</h3>
              <p className="mt-3 text-lg text-indigo-200">
                Download the resources you need and save them for offline use.
              </p>
            </div>
            <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center mb-4">
                <Image src="https://static.vecteezy.com/system/resources/previews/017/217/123/original/collaboration-management-icon-3d-rendering-png.png" alt="Share & Collaborate" width={64} height={64} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Share & Collaborate</h3>
              <p className="mt-3 text-lg text-indigo-200">
                Share resources with peers and collaborate effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
       {/* Testimonials/Reviews */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Testimonials
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-600">
                Hear from our satisfied users who have benefited from our resources.
              </p>
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://utfs.io/f/9ca0264f-47ac-4690-9119-f9c14c48b942-ei8toq.png"
                      alt="User Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Abhijeet Singh</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <svg key={index} className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927a1 1 0 011.902 0l1.717 4.253a1 1 0 00.832.674l4.564.33a1 1 0 01.584 1.786l-3.41 2.845a1 1 0 00-.29.96l1.04 4.517a1 1 0 01-1.45 1.054L10 16.61l-4.038 2.47a1 1 0 01-1.45-1.054l1.04-4.517a1 1 0 00-.29-.96L1.852 9.97a1 1 0 01.584-1.786l4.564-.33a1 1 0 00.832-.674l1.717-4.253z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  Really very helpful resources. Through this I am able to boost my preparation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://utfs.io/f/a497c927-b542-43a2-9519-19595f39a537-ei8top.png"
                      alt="User Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Esha Mandal</h3>
                    <div className="flex">
                      {[...Array(4)].map((_, index) => (
                        <svg key={index} className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927a1 1 0 011.902 0l1.717 4.253a1 1 0 00.832.674l4.564.33a1 1 0 01.584 1.786l-3.41 2.845a1 1 0 00-.29.96l1.04 4.517a1 1 0 01-1.45 1.054L10 16.61l-4.038 2.47a1 1 0 01-1.45-1.054l1.04-4.517a1 1 0 00-.29-.96L1.852 9.97a1 1 0 01.584-1.786l4.564-.33a1 1 0 00.832-.674l1.717-4.253z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  This group is incredibly useful! 📚 The content is top-notch, and the admin deserves more recognition. 🌟 Wishing you all the best and thank you for your help. Take care and have a great day! 😊
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://utfs.io/f/5d434ceb-b575-4a74-8f16-5c05599e1e31-ei8too.png"
                      alt="User Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Kuldeep Panwar</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <svg key={index} className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927a1 1 0 011.902 0l1.717 4.253a1 1 0 00.832.674l4.564.33a1 1 0 01.584 1.786l-3.41 2.845a1 1 0 00-.29.96l1.04 4.517a1 1 0 01-1.45 1.054L10 16.61l-4.038 2.47a1 1 0 01-1.45-1.054l1.04-4.517a1 1 0 00-.29-.96L1.852 9.97a1 1 0 01.584-1.786l4.564-.33a1 1 0 00.832-.674l1.717-4.253z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  Im deeply grateful to everyone in the Lets Code 🤗 community, especially Avinash sir. Your support has been crucial in providing me with invaluable technical resources and fostering my growth in computer science. Thank you! 🙏💻
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* Call to Action (CTA) */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Join Our Community
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Discover endless resources and stay updated with our latest content.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
             {/* <a href="/resources" className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-lg hover:bg-yellow-400 transition duration-300 w-full sm:w-auto"> */}
              {/* Explore Resources */}
            {/* </a>  */}
            <a href="/join" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-lg hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
              Join Now
            </a>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white">Subscribe for the Latest Weekly E-Books</h3>
            <form className="mt-4 sm:flex sm:max-w-md mx-auto">
              <input
              // disabled={disabled}
              //   value={email}
              //   onChange={(e)=>setEmail(e.target.value)} 
                type="email"
                className="w-full px-5 py-3 border border-transparent rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 w-full px-5 py-3 border border-transparent rounded-md shadow-lg bg-yellow-500 text-white font-medium hover:bg-yellow-400 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://www.facebook.com/letscodeforever" className="text-blue-200 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* SVG content */}
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.81v-9.294H9.692v-3.62h3.118V8.412c0-3.1 1.894-4.785 4.659-4.785 1.325 0 2.462.099 2.793.143v3.238l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.62h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://t.me/offcampusjobsupdatess" className="text-blue-200 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* SVG content */}
                <path d="M22.461 5.596L19.33 18.097c-.306 1.221-1.12 1.526-2.269.95l-6.26-4.616-3.022 2.91c-.333.323-.611.593-1.251.593l.451-6.406 11.67-10.508c.514-.48-.111-.748-.8-.27L4.517 9.522l-6.366-1.99c-1.215-.38-1.236-1.216.254-1.798L21.009 4.327c.998-.361 1.867.244 1.452 1.269z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/lets-code-forever/" className="text-blue-200 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* SVG content */}
                <path d="M22.225 0H1.771C.792 0 0 .772 0 1.725v20.549C0 23.228.792 24 1.771 24h20.451C23.207 24 24 23.228 24 22.275V1.725C24 .772 23.207 0 22.225 0zM7.12 20.452H3.542V9.106H7.12v11.346zM5.331 7.667a2.058 2.058 0 110-4.115 2.058 2.058 0 010 4.115zM20.456 20.452h-3.576v-5.834c0-1.391-.027-3.183-1.94-3.183-1.94 0-2.237 1.514-2.237 3.077v5.94H9.13V9.106h3.434v1.552h.047c.477-.902 1.638-1.852 3.374-1.852 3.605 0 4.27 2.371 4.27 5.458v6.188z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/lets__code" className="text-blue-200 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* SVG content */}
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.517 2.497 5.784 2.225 7.15 2.163 8.416 2.105 8.796 2.093 12 2.093zm0-2.163C8.756 0 8.358.012 7.092.07 5.683.136 4.244.426 3.182 1.488c-1.062 1.062-1.352 2.501-1.418 3.91C1.758 6.89 1.746 7.27 1.746 10.5s.012 3.61.07 4.85c.066 1.409.356 2.848 1.418 3.91 1.062 1.062 2.501 1.352 3.91 1.418 1.266.058 1.646.07 4.85.07s3.61-.012 4.85-.07c1.409-.066 2.848-.356 3.91-1.418 1.062-1.062 1.352-2.501 1.418-3.91.058-1.266.07-1.646.07-4.85s-.012-3.61-.07-4.85c-.066-1.409-.356-2.848-1.418-3.91-1.062-1.062-2.501-1.352-3.91-1.418-1.266-.058-1.646-.07-4.85-.07zm0 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.166a4.003 4.003 0 110-8.006 4.003 4.003 0 010 8.006zm6.406-10.839a1.44 1.44 0 100-2.881 1.44 1.44 0 000 2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}