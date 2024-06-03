import { NextRequest,NextResponse } from "next/server";
import {User} from "@/model/userEmail.model";


export async function POST(request:NextRequest){
    const {useremail}:{useremail:string} = await request.json()

    if(!useremail){
        return NextResponse.json({"message":"Fields is empty"},{status:404})

    }

    const user = await new User({
        email:useremail
    });


    if(!user){
        return NextResponse.json({"message":"server error"},{status:500})
    }

    await user.save()

    return NextResponse.json({"message":"success"},{status:200})





}