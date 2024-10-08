import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  name: string;
  description: string;
  viewLink: string;
}

const Card: React.FC<CardProps> = ({ image, name, description, viewLink }) => {
  return (
    <div className="max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg w-full bg-slate-700 rounded-lg shadow-md overflow-hidden flex flex-col justify-between mx-auto">
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="rounded-full object-cover mb-4"
        />
        <h2 className="text-xl font-semibold text-white text-center">{name}</h2>
        <p className="text-gray-400 text-sm text-center mt-2 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="p-4 text-center">
        <a
          // href={viewLink}
          href="#"
          className="inline-block w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default Card;
