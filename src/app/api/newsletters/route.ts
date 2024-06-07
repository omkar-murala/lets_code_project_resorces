import { db } from "@/DB/db";
import { User } from "@/model/userEmail.model";
import { NextRequest, NextResponse } from "next/server";

db(); 

export async function POST(request: NextRequest) {
  try {
    const { useremail }: { useremail: string } = await request.json();

    if (!useremail) {
      return NextResponse.json({ message: "Field is empty" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email: useremail });

    if (existingUser) {
      
      return NextResponse.json({ message: "Email is already subscribed" }, { status: 409 });
    }

    
    const user = new User({ email: useremail });
    await user.save();

    return NextResponse.json({ message: "Subscription successful" }, { status: 200 });
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
