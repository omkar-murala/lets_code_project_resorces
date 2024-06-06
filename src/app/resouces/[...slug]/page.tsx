// import axios from "axios";
// import {Card} from "./components/Card"


// const Page = async({params}:{params:{slug:string}})=>{
//     try {
//       const {data} = await axios.get(`https://resourcebackend.onrender.com/api/${params.slug}`);
//       return(
//         <>
//         {params.slug}
//          <div className="grid grid-rows-1 gap-[3rem] pt-10 lg:grid-cols-3 px-10">

//         {data.data.map((ele:any,index:any)=>{
//           return(
//             <Card
//             key={index+ "-" +index}
//               link={`/subresources/${ele.attributes.apiPath}`}
//               name={ele.attributes.Name}
//               image={ele.attributes.Image}
//             />
            
//           )
//         })}
//         </div>
//         </>
//       )
      
//     } catch (error) {
//       return error
      
//     }

// }


// export default Page



// import axios from "axios";
// import { Card } from "./components/Card"

// interface ApiResponse {
//   data: {
//     attributes: {
//       apiPath: string;
//       Name: string;
//       Image: string;
//     }
//   }[]
// }

// const Page = async ({ params }: { params: { slug: string } }) => {
//   try {
//     const { data } = await axios.get<ApiResponse>(`https://resourcebackend.onrender.com/api/${params.slug}`);
    
//     // Ensure that data.data is a plain array of objects
//     const resources = data.data.map((ele, index) => ({
//       key: `${index}-${index}`,
//       link: `/subresources/${ele.attributes.apiPath}`,
//       name: ele.attributes.Name,
//       image: ele.attributes.Image
//     }));

//     return (
//       <>
//         {params.slug}
//         <div className="grid grid-rows-1 gap-[3rem] pt-10 lg:grid-cols-3 px-10">
//           {resources.map((resource) => (
//             <Card
//               key={resource.key}
//               link={resource.link}
//               name={resource.name}
//               image={resource.image}
//             />
//           ))}
//         </div>
//       </>
//     )
//   } catch (error:any) {
//     return <div>Error: {error.message}</div>;
//   }
// }

// export default Page;



"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './components/Card';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Page({ params }: { params: { slug: string } }) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchApi() {
    try {
      const { data } = await axios.get(`https://resourcebackend.onrender.com/api/${params.slug}`);
      setInfo(data.data);
    } catch (error) {
      setInfo([]);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className='flex flex-col justify-center p-[3rem]'>
      <div className="grid grid-rows-1  lg:grid-cols-4 gap-[3rem] items-center justify-center ">
        {loading ? (
          Array.from({ length: 20 }).map((_, index) => (
             <Skeleton key={index} height={200} />
          ))
        ) : (
          info.map((ele: any, index: number) => (
            <Card
              key={index}
              link={`/subresources/${ele.attributes.apiPath}`}
              name={ele.attributes.Name}
              image={ele.attributes.Image}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Page;