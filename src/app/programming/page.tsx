// "use client"

// import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card}from './components/Card'; 
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// function Page() {
//   const [info, setInfo] = useState([]);
//   const [loading, setLoading] = useState(true);

//   async function fetchApi() {
//     try {
//       const { data } = await axios.get(`https://resourcebackend.onrender.com/api/reources`);
//       setInfo(data.data);
//     } catch (error) {
//       setInfo([]);
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   return (
//     <div className='flex flex-col justify-center p-[3rem]'>
//       <div className="grid grid-rows-1  lg:grid-cols-4 gap-[3rem] items-center justify-center ">
//         {loading ? (
//           Array.from({ length: 20 }).map((_, index) => (
//              <Skeleton key={index} height={200} />
//           ))
//         ) : (
//           info.map((ele: any, index: number) => (
//             <Card
//               key={index}
//               link={`/subresources/${ele.attributes.apiPath}`}
//               name={ele.attributes.Name}
//               image={ele.attributes.Image}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Page;



const Page = async() =>{
  try{
    const { data } = await axios.get(`https://resourcebackend.onrender.com/api/reources`);
    return(
      <>
        <div className='flex flex-col justify-center p-[3rem]'>
          <div className="grid grid-rows-1  lg:grid-cols-4 gap-[3rem] items-center justify-center ">
      {data.data.map((ele:any,index:any)=>{
        return(
          <>

        <Card
              key={index+"-"+index}
              link={`/subresources/${ele.attributes.apiPath}`}
              name={ele.attributes.Name}
              image={ele.attributes.Image}
              />


          </>
        )
      })}
      </div>
      </div>
      </>
    )

  }
  catch(error){

  }

}


export default Page