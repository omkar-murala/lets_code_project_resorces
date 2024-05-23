import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import {cookies} from "next/headers"
export function middleware(request: NextRequest) {

    const path = "/resourses";
    const cookie = request.cookies.get("token")
    if(path && !cookie){
        return NextResponse.redirect(new URL('/login', request.url))

     
    } 
}
 

export const config = {
  matcher: '/resourses',
}