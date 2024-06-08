import { app } from "@/firebase/firebase";
import { setCookie } from "cookies-next";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);

async function handleRedirectResult() {

  try {
    const result = await getRedirectResult(auth);
    if (result) {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const token = credential.accessToken;
        const user = result.user;
        const photoURL = user.photoURL;
        window.location.href= "http://localhost:3000/resourses"

        // Store token and user photo URL
        setCookie("token", token);
        localStorage.setItem("image", photoURL);
        
      }
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}

export default handleRedirectResult;
