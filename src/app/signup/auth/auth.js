import {app} from "@/firebase/firebase"


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setCookie } from "cookies-next";

const auth = getAuth(app);

async function signupAuth(email,password){
   try {
     const user  = await createUserWithEmailAndPassword(auth,email,password);
     const userCredential = await user;
     const userData = await userCredential.user;
    //  setCookie("token",userData.accessToken)
     return true
   } catch (error) {
    const errorCode = error.code;
    const errorMessage =  error.message;
    console.log(errorCode,errorMessage)
    
   }
}



export default signupAuth