import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "../firebase.js";
import { showMessage } from "../showMessage.js";

const googleButton = document.querySelector("#googleLogin")
if (googleButton) {

googleButton.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {

        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)
        showMessage("Bienvenido " + credentials.user.displayName, "sucess")
        window.location.href = "/";
    } catch (error) {
        console.log(error)
    }
})    
}