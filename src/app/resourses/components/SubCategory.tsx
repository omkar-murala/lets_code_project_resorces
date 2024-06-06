import React from 'react';
import Button from './Button';
import Link from 'next/link';
const resource=[
    {
        id:1,
        name:"Programming",
        link:"/resouces/reources"

    },
{
        id:2,
        name:"Web Developemnt",
        link:"/web"

    },
{
        id:3,
        name:"App Developemnt",
        link:"/appDev"

    },{
        id:4,
        name:"Cloud",
        link:"/cloud"

    }
]
function SubCategory() {
  return (
    <>
    <div className='flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
        {resource.map((ele)=>{
            return(
                <>
                <Link href={ele.link} key={ele.id}>
                    <Button name={ele.name}/>
                </Link>


                </>
            )
        })}

    </div>
    </>
  )
}

export default SubCategory