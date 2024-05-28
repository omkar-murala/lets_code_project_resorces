import Image from 'next/image';

function Page() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        <div className="p-8 bg-gray-50 md:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Need help?</h2>
          {/* <p className="text-gray-600 text-center">
            Please use the contact form to get in touch. Our working hours are Monday to Friday, 9am to 5pm UTC+2 (Central European Time), and we try to get back to support requests within 1 business day.
          </p> */}
          <div className="mt-8">
            <Image src="https://cdn.dribbble.com/users/1604313/screenshots/6905805/contact-illustration.gif" alt="Help illustration" width={300} height={400} className="w-48 h-48"/>
          </div>
        </div>
        <div className="p-8 md:w-1/2">
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" defaultValue="refero.john.doe@gmail.com"/>
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">Your first name</label>
              <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md" defaultValue="John"/>
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Explore username</label>
              <input type="text" id="username" name="username" className="w-full px-4 py-2 border border-gray-300 rounded-md" defaultValue="referodesign"/>
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
              <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md" defaultValue="Where do you live?"/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md">No place - anywhere.</textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Attachments</label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-4">
                <div className="mb-2 text-center">
                  <span className="block text-gray-600">Drag & drop files here or <a href="#" className="text-indigo-600">Browse files</a></span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition-colors">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600">
        {/* <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Explore</a>
          <a href="#" className="hover:underline">Need help? Contact us</a>
          <a href="#" className="hover:underline">Request a feature</a>
        </div>
        <div className="mt-4">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline ml-4">Privacy Policy</a>
          <a href="#" className="hover:underline ml-4">Code of Conduct</a>
        </div> */}
      </div>
    </div>
  );
}

export default Page;
