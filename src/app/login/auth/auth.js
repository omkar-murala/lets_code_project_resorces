import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "@/firebase/firebase"
import { setCookie } from "cookies-next";

const auth = getAuth(app);

async function loginAuth(email,password){
   try {
     const users = await signInWithEmailAndPassword(auth,email,password);
     const userCredential = await users;
     const user = userCredential.user;
     setCookie("token",user.accessToken)
    //  console.log(user.accessToken)
     return true
   } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
    return false
   }

}


export default loginAuth