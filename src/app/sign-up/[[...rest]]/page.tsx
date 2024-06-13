import React from 'react'
import { SignUp } from '@clerk/nextjs'
function page() {
  return (
    <> 
    <div className='flex flex-col items-center justify-center'><SignUp/></div>
    </>
  )
}

export default page