import React from 'react'
import Image from "next/image";
export function Card({img,header,content,link}:{img:string,header:string,content:string,link:any}) {
  return (
    <div className="w-[300px] rounded-md border">
      <Image 
      height={100}
      width={1000}
        src={img}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold text-white">
          {header}
        </h1>
        <p className="mt-3 text-sm text-gray-300">
          {content}
        </p>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {link}
        </button>
      </div>
    </div>
  )
}
