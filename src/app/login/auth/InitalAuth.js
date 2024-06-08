import { app } from "@/firebase/firebase";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function initiateLogin() {
  signInWithRedirect(auth, provider);
}

export default initiateLogin;
