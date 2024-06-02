import Image from 'next/image';

function Page() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-[3rem]">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        <div className="p-8 bg-gray-50 md:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Need help?</h2>
          <div className="mt-4 flex justify-center">
            <div className="mt-8 w-3/4 sm:w-2/3 md:w-full lg:w-3/4 xl:w-2/3">
              <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-support-5379955-4497571.png?f=webp" alt="Help illustration" width={1000} height={1000} />
            </div>
          </div>
        </div>
        <div className="p-8 md:w-1/2">
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="refero.john.doe@gmail.com"/>
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">Your first name</label>
              <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="John"/>
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Explore username</label>
              <input type="text" id="username" name="username" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="referodesign"/>
            </div>
            <div className="mb-4">
              <label htmlFor="topic" className="block text-gray-700 font-medium mb-2">Choose your topic</label>
              <select id="topic" name="topic" className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option>Feedback</option>
                <option>Support</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Where do you live?"/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md">No place - anywhere.</textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition-colors">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
