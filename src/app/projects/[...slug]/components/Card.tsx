"use client"
import Image from 'next/image';


export function Card({ name, image, link="" }: { image: string, name: string, link: string }) {
    return (
        <div className="w-[280px] h-[350px] rounded-md border bg-slate-400 p-5">
            <Image
                src={image}
                alt={name}
                width={1000}  // Replace with actual image width
                height={1050}  // Replace with actual image height
                className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4">
                <h1 className="text-lg text-white font-semibold">{name}</h1>
                <a href={link} download={true}>
                <button type='button' className='mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>Download Now</button>
                </a>
            </div>
        </div>
    );
}
