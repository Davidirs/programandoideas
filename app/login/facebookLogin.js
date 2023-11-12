import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "../firebase.js";
import { showMessage } from "../showMessage.js";

import { addUser } from '../users/addUser.js'

const facebookButton = document.querySelector("#facebookLogin")
if (facebookButton) {

facebookButton.addEventListener("click", async () => {
    const provider = new FacebookAuthProvider();
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
        window.location.href = "/";
    } catch (error) {
        console.log(error)
    }
})    
}