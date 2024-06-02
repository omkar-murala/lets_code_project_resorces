import { getAuth,signOut } from "firebase/auth";
import {app} from "../../firebase/firebase";


const auth = getAuth(app);


export async function userSignOut(){
    try {
        const userData = await signOut(auth);
        return true
    } catch (error) {
        // console.log(error)
        return false
    }

}