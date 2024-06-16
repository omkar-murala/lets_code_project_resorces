"use client"

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Card } from './components/Card';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


function Page({ params }: { params: { slug: string } }) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = useCallback(async()=>{
     try {
      const { data } = await axios.get(`https://custombackend-vgpn.onrender.com/api/v1/${params.slug}`);
      setInfo(data.data);
    } catch (error:any) {
      setInfo([]);
      console.log(error);
    } finally {
      setLoading(false);
    }

  },[params.slug]) 
   

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return (
    <>
    <div className='flex flex-col justify-center'>
      <div className="grid grid-rows-1  lg:grid-cols-4 items-center justify-center px-[8rem] py-[2rem] ">
        {loading ? (
          Array.from({ length: 20 }).map((_, index) => (
            <Skeleton key={index} height={200} />
            ))
            ) : (
              info.map((ele: any, index: number) => {
                return(
                  <>
              <div  key={index} className='py-8'>

              <Card
             
              link={ele.link}
              name={ele.name}
              image={ele.imageUrl}
              />
              </div>
              </>
            )
            })
            )}
      </div>
    </div>
          </>
  );
}

export default Page;