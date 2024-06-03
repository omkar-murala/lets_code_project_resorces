import mongoose from "mongoose";


const userEmailSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    }

})



export const User = mongoose.models("users") || mongoose.model("User",userEmailSchema);