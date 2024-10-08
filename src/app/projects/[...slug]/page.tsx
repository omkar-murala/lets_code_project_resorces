"use client";

import { Card } from './components/Card';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useFetch } from '@/hook/useFetch';

function Page({ params }: { params: { slug: string } }) {
  const { data: info, loading } = useFetch(params.slug, params.slug); // Using the useFetch hook

  return (
    <div className='flex flex-col justify-center bg-slate-600'>
      <div className="grid grid-rows-1 md:grid-cols-2 gap-10 lg:grid-cols-4 items-center justify-center px-[8rem] py-[2rem]">
        {loading ? (
          Array.from({ length: 20 }).map((_, index) => (
            <Skeleton key={index} height={200} />
          ))
        ) : (
          info.map((ele: any, index: number) => (
            <div key={ele.id} className='py-8'> {/* Use a unique key */}
              <Card
                link={ele.link}
                name={ele.name}
                image={ele.imageUrl}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Page;
