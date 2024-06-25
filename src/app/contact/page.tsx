"use client"


import { DOMAIN } from "@/env";
import axios from "axios";
import Image from 'next/image';
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


function Page() {
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [topic,setTopic] =  useState('Feedback')
  const [subject,setSubject] =  useState('')
  const [message,setMessage] =  useState('')

  async function submithandler() {
    try {
      const response  =  await axios.post(`${DOMAIN}/api/v1/emailquery`,{
        email,
        name,
        topic,
        subject,
        message


      })
      console.log(response)
      if(response.status===200){
        toast.success("We will get back to you")
        setEmail('')
        setName('')
        setMessage('')
        setSubject('')
        setTopic('Feedback')

      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
      
    }
    
  }


  return (
    <div className="bg-slate-950 min-h-screen flex flex-col justify-center items-center py-[3rem]">
      <Toaster/>
      <div className="bg-slate-700 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        <div className="p-8 bg-slate-700 md:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Need help?</h2>
          <div className="mt-4 flex justify-center">
            <div className="mt-8 w-3/4 sm:w-2/3 md:w-full lg:w-3/4 xl:w-2/3">
              <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-support-5379955-4497571.png?f=webp" alt="Help illustration" width={1000} height={1000} />
            </div>
          </div>
        </div>
        <div className="p-8 md:w-1/2">
          <div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-medium mb-2">Your email</label>
              <input type="email" required id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="refero.john.doe@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-white font-medium mb-2">Your first name</label>
              <input type="text" required id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="John" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="mb-4">
              <label htmlFor="topic" className="block text-white font-medium mb-2">Choose your topic</label>
              <select id="topic" name="topic" required className="w-full px-4 py-2 border border-gray-300 rounded-md" onChange={(e)=>setTopic(e.target.value)}>
                <option>Feedback</option>
                <option>Support</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
              <input type="text" id="subject" required name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Where do you live?" onChange={(e)=>setSubject(e.target.value)}/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white font-medium mb-2">Your message</label>
              <textarea id="message" required name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder='Your message...' onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            <div className="text-center">
              <button onClick={submithandler} type="submit" className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition-colors">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
