"use client"
import Image from 'next/image';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';



export function Card({ name, image, link="" }: { image: string, name: string, link: string }) {
    const [open, setOpen] = useState(false);
      const closeIcon = (
    <svg fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
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
                        <iframe src={link} width="640" height="680"  allow="autoplay" ></iframe>
                </Modal>
            </div>
        </div>
    );
}
