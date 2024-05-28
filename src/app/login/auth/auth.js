import { app } from "@/firebase/firebase";
import { setCookie } from "cookies-next";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

async function loginAuth(email, password) {
  try {
    const users = await signInWithEmailAndPassword(auth, email, password);
    const userCredential = await users;
    const user = userCredential.user;
    setCookie("token", user.accessToken);
    return true;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return false;
  }
}

export default loginAuth;
