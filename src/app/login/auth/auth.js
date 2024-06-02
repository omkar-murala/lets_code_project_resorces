import { app } from "@/firebase/firebase";
import { setCookie } from "cookies-next";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

async function loginAuth() {
  try {
    const userAuth = await signInWithPopup(auth,provider);
    const credential = await GoogleAuthProvider.credentialFromResult(userAuth);
    const token = credential.accessToken;
    const users = userAuth.user.photoURL;
    // console.log(token,users)
    setCookie("token",token)
    localStorage.setItem("image",users)

    return true
    
  } catch (error) {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode,errorMessage)
    return false
  }
 
  
}

export default loginAuth;
