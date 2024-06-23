"use client"
import Image from 'next/image';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState,useEffect } from 'react';



export function Card({ name, image, link="" }: { image: string, name: string, link: string }) {
    const [open, setOpen] = useState(false);
    const closeIcon = (
  <svg
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  width="28"
  height="28"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M6 18L18 6M6 6l12 12"
  ></path>
</svg>
  );

  const onOpenModal = () => setOpen(true);
    return (
        <div className="w-[200px] rounded-md border">
            <Image
                src={image}
                alt={name}
                width={300}  // Replace with actual image width
                height={250}  // Replace with actual image height
                className="h-[250px] w-full rounded-md object-contain"
            />
            <div className="p-4">
                <h1 className="text-lg font-semibold">{name}</h1>
                <button type='button' className='mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black' onClick={onOpenModal}>View</button>
                <Modal open={open}  onClose={() => setOpen(false)} closeIcon={closeIcon} center>
                <embed src={link} className="h-[600px] w-full lg:h-[680px] lg:w-[640px]"></embed>
                </Modal>
            </div>
        </div>
    );
}
