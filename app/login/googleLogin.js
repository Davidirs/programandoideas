import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "../firebase.js";
import { showMessage } from "../showMessage.js";

import { addUser } from '../users/addUser.js'

const googleButton = document.querySelector("#googleLogin")
if (googleButton) {

googleButton.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {

        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)
        showMessage("Bienvenido " + credentials.user.displayName, "sucess")
        //agregar información de usuario a la base de datos
        const user = {
            "displayName": credentials.user.displayName,
            "email": credentials.user.email,
            "photoURL": credentials.user.photoURL,
            "uid": credentials.user.uid,
        }
        console.log(user)
        await addUser(user)
        
        //redirigir al home
        goto("home");
    } catch (error) {
        console.log(error)
    }
})    
}