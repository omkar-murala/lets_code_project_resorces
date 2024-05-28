import Image from 'next/image';
import Link from 'next/link';

export function Card({ name, image, link }: { image: string, name: string, link: string }) {
    return (
        <div className="w-[300px] rounded-md border">
            <Image
                src={image}
                alt={name}
                width={300}  // Replace with actual image width
                height={250}  // Replace with actual image height
                className="h-[250px] w-full rounded-md object-contain"
            />
            <div className="p-4">
                <h1 className="text-lg font-semibold">{name}</h1>
                <p className="mt-3 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                </p>
                <Link href={link} passHref>
                    <a>
                        <button
                            type="button"
                            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            See More
                        </button>
                    </a>
                </Link>
            </div>
        </div>
    );
}
