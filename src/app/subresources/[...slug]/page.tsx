// "use client"
// import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card from "./components/Card";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



const Page = async({params}:{params:{slug:string}})=>{
    try {
      const {data} = await axios.get(`https://resourcebackend.onrender.com/api/${params.slug}`);
      return(
        <>
         <div className="grid grid-rows-1 gap-[3rem] pt-10 lg:grid-cols-3 px-10">

        {data.data.map((ele:any,index:any)=>{
          return(
            <Card
            key={index+ "-" +index}
            image={ele.attributes.image}
            link={ele.attributes.link}
            header={ele.attributes.name}
            />
            
          )
        })}
        </div>
        </>
      )
      
    } catch (error) {
      return error
      
    }

}


export default Page