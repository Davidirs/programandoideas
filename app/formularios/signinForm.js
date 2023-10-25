import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from '../firebase.js'
import { showMessage } from "../showMessage.js";

const signinForm = document.querySelector('#login-form');

if (signinForm) {
    
    signinForm.addEventListener("submit", async e => {
        console.log(signinForm)
        e.preventDefault();
        
        const email = signinForm["login-email"].value;
        const password = signinForm["login-password"].value;
        
        try {
            const credential = await signInWithEmailAndPassword(auth, email, password)
            console.log(credential)
            showMessage("Bienvenido " + credential.user.email, "sucess")
            window.location.href = "/";
        } catch (error) {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-login-credentials":
                    showMessage("Error de usuario o contraseña")
                    break;
            
                default:
                    break;
            }
        }
        
    })
}
