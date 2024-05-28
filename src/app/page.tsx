import { ThreeDCardDemo } from "@/components/SlideCard/SlideCard";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="relative w-full bg-blue-500">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-700 md:text-4xl lg:text-6xl">
              Accelerate Your Tech Journey
            </h1>
            <p className="mt-8 text-lg text-gray-300">
              Discover a treasure trove of tech resources, featuring in-depth notes, comprehensive guides, practical templates, and detailed roadmaps designed to accelerate your learning and career growth.
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                />
                <p className="mt-2 text-sm text-black-500">Subscribe for regular updates and new resource alerts</p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
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
      <p className="mt-4 text-lg leading-6 text-gray-600">
        Welcome to our platform, your ultimate destination for a comprehensive collection of tech resources. We provide a wide range of PDF and Excel resources covering various domains in technology, ensuring you have access to the best materials for your learning and career development. Our offerings include ATS-friendly resume templates, detailed roadmaps for tech enthusiasts, and much more. We meticulously gather these resources from various reputable sources and content creators, giving full credit to the original providers. Our mission is to simplify your tech journey by consolidating these invaluable resources into one accessible website. Whether you are a student, professional, or tech enthusiast, we aim to make your learning and professional growth seamless and efficient.
      </p>
    </div>
    <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image src="https://www.shutterstock.com/image-vector/3d-download-icon-isolated-on-600nw-2096369137.jpg" alt="Free Downloads" width={64} height={64} />
              </div>
              <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Free Downloads</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                All resources are available for free download.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-services-7013376-5727383.png" alt="Expert Curated" width={64} height={64} />
              </div>
              <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Expert Curated</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Resources curated by industry experts.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image src="https://img.freepik.com/premium-psd/3d-chat-message-mail-icon-illustration_148391-6438.jpg" alt="Regular Updates" width={64} height={64} />
              </div>
              <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Regular Updates</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Regularly updated with new and relevant content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Categories
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/signature-on-agreement-8146457-6477431.png?f=webp" alt="Notes" width={96} height={96} className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Notes</h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  Comprehensive notes on various tech topics.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/roadmap-6851956-5624882.png?f=webp" alt="Roadmaps" width={96} height={96} className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Roadmaps</h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  Detailed roadmaps for your tech career path.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/employees-profile-10760000-8746820.png" alt="Resume Templates" width={96} height={96} className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Resume Templates</h3>
                <p className="mt-2 text-base text-gray-600 text-center">
                  ATS-friendly resume templates to stand out.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/technical-analysis-4721286-3931540.png?f=webp" alt="Tools" width={96} height={96} className="object-cover" />
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

          {/* 4. Featured Resources */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Featured Resources
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-700">
                Explore some of our most popular and recently added resources.
              </p>
            </div>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(5).keys()].map((index) => (
                <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <div className="w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={`/images/resource${index + 1}-thumbnail.jpg`}
                      alt={`Resource ${index + 1}`}
                      width={400}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Resource {index + 1}</h3>
                  <p className="mt-2 text-base text-gray-600 text-center">
                    A brief description of Resource {index + 1}. This resource offers in-depth knowledge and practical insights.
                  </p>
                  <a href={`/resources/resource-${index + 1}`} className="mt-4 text-indigo-600 hover:text-indigo-900">
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>


       {/* How It Works */}
       {/* <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Learn how to get the most out of our resources.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image src="https://www.shutterstock.com/image-vector/3d-icon-download-isolated-white-260nw-1962986775.jpg" alt="Browse Resources" width={64} height={64} />
            </div>
            <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Browse Resources</h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Easily browse through our vast collection of resources.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image src="https://www.shutterstock.com/image-vector/3d-icon-add-folder-isolated-260nw-1962986776.jpg" alt="Download & Save" width={64} height={64} />
            </div>
            <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Download & Save</h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Download the resources you need and save them for offline use.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image src="https://www.shutterstock.com/image-vector/3d-icon-share-folder-isolated-260nw-1962986777.jpg" alt="Share & Collaborate" width={64} height={64} />
            </div>
            <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Share & Collaborate</h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Share resources with peers and collaborate effectively.
            </p>
          </div>
        </div>
      </div>
    </div>   */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-white sm:text-6xl">
            How It Works
          </h2>
          <p className="mt-6 text-xl leading-8 text-indigo-200">
            Learn how to get the most out of our resources.
          </p>
        </div>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center mb-4">
              <Image src="https://www.shutterstock.com/image-vector/3d-icon-download-isolated-white-260nw-1962986775.jpg" alt="Browse Resources" width={64} height={64} />
            </div>
            <h3 className="text-2xl font-semibold text-white">Browse Resources</h3>
            <p className="mt-3 text-lg text-indigo-200">
              Easily browse through our vast collection of resources.
            </p>
          </div>
          <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center mb-4">
              <Image src="https://www.shutterstock.com/image-vector/3d-icon-add-folder-isolated-260nw-1962986776.jpg" alt="Download & Save" width={64} height={64} />
            </div>
            <h3 className="text-2xl font-semibold text-white">Download & Save</h3>
            <p className="mt-3 text-lg text-indigo-200">
              Download the resources you need and save them for offline use.
            </p>
          </div>
          <div className="flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center mb-4">
              <Image src="https://www.shutterstock.com/image-vector/3d-icon-share-folder-isolated-260nw-1962986777.jpg" alt="Share & Collaborate" width={64} height={64} />
            </div>
            <h3 className="text-2xl font-semibold text-white">Share & Collaborate</h3>
            <p className="mt-3 text-lg text-indigo-200">
              Share resources with peers and collaborate effectively.
            </p>
          </div>
        </div>
      </div>
    </div>

      {/* /////////////////////// */}
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
                  src="https://via.placeholder.com/150"
                  alt="User Photo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Jane Doe</h3>
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
              These resources have been incredibly helpful. I have learned so much and the user experience is fantastic!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="https://via.placeholder.com/150"
                  alt="User Photo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900">John Smith</h3>
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
              Great resources and very easy to use. Highly recommend to anyone looking to improve their skills.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="https://via.placeholder.com/150"
                  alt="User Photo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Emily Johnson</h3>
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
              Absolutely love the resources available. They have helped me immensely in my career development.
            </p>
          </div>
        </div>
      </div>
    </div>
      {/* ////////////////////// */}

      {/* Call to Action (CTA) */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Join Our Community
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Discover endless resources and stay updated with our latest content.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="/resources" className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-lg hover:bg-yellow-400 transition duration-300">
              Explore Resources
            </a>
            <a href="/join" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-lg hover:bg-gray-100 transition duration-300">
              Join Now
            </a>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white">Subscribe to Our Newsletter</h3>
            <form className="mt-4 sm:flex sm:max-w-md mx-auto">
              <input
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
            <a href="https://facebook.com" className="text-blue-200 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.81v-9.294H9.692v-3.62h3.118V8.412c0-3.1 1.894-4.785 4.659-4.785 1.325 0 2.462.099 2.793.143v3.238l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.62h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="text-blue-200 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.643 4.937a9.576 9.576 0 01-2.828.797 4.93 4.93 0 002.165-2.724 9.687 9.687 0 01-3.102 1.184 4.916 4.916 0 00-8.38 4.482 13.952 13.952 0 01-10.141-5.156 4.822 4.822 0 00-.665 2.475 4.916 4.916 0 002.188 4.096 4.896 4.896 0 01-2.228-.616v.061a4.917 4.917 0 003.941 4.827 4.93 4.93 0 01-1.295.172 4.927 4.927 0 01-.921-.086 4.918 4.918 0 004.588 3.417A9.868 9.868 0 010 21.539a13.945 13.945 0 007.548 2.211c9.058 0 14.01-7.514 14.01-14.036 0-.214-.005-.428-.014-.64a10.04 10.04 0 002.473-2.564z" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="text-blue-200 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.225 0H1.771C.792 0 0 .772 0 1.725v20.549C0 23.228.792 24 1.771 24h20.451C23.207 24 24 23.228 24 22.275V1.725C24 .772 23.207 0 22.225 0zM7.12 20.452H3.542V9.106H7.12v11.346zM5.331 7.667a2.058 2.058 0 110-4.115 2.058 2.058 0 010 4.115zM20.456 20.452h-3.576v-5.834c0-1.391-.027-3.183-1.94-3.183-1.94 0-2.237 1.514-2.237 3.077v5.94H9.13V9.106h3.434v1.552h.047c.477-.902 1.638-1.852 3.374-1.852 3.605 0 4.27 2.371 4.27 5.458v6.188z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="text-blue-200 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.517 2.497 5.784 2.225 7.15 2.163 8.416 2.105 8.796 2.093 12 2.093zm0-2.163C8.756 0 8.358.012 7.092.07 5.683.136 4.244.426 3.182 1.488c-1.062 1.062-1.352 2.501-1.418 3.91C1.758 6.89 1.746 7.27 1.746 10.5s.012 3.61.07 4.85c.066 1.409.356 2.848 1.418 3.91 1.062 1.062 2.501 1.352 3.91 1.418 1.266.058 1.646.07 4.85.07s3.61-.012 4.85-.07c1.409-.066 2.848-.356 3.91-1.418 1.062-1.062 1.352-2.501 1.418-3.91.058-1.266.07-1.646.07-4.85s-.012-3.61-.07-4.85c-.066-1.409-.356-2.848-1.418-3.91-1.062-1.062-2.501-1.352-3.91-1.418-1.266-.058-1.646-.07-4.85-.07zm0 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.166a4.003 4.003 0 110-8.006 4.003 4.003 0 010 8.006zm6.406-10.839a1.44 1.44 0 100-2.881 1.44 1.44 0 000 2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section
      <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-9 w-9 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <svg
                className="h-9 w-9 text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-9 w-9 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-9 w-9 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
      <Gallery /> */}


      {/* <Teams />
      <div className="flex justify-center my-16">
        <Star className="h-12 w-12 text-yellow-500" />
      </div> */}


      {/* <div className="relative w-full h-64">
        <Image
          src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHx8fDE3MTY3MTk1MTJ8MA&ixlib=rb-4.0.3"
          alt="Example Image"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
    </>
  );
}
