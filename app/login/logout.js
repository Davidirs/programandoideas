import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "../firebase.js";

export async function logout() {
const logout = document.querySelector('#logout');
if(logout){
    logout.addEventListener('click', async ()=>{
        await signOut(auth)
        console.log("user signout");
    })
}
}

