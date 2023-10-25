
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth} from '../firebase.js'
import {showMessage} from '../showMessage.js'
const signupForm = document.querySelector("#signup-form");
if (signupForm){
    
signupForm.addEventListener("submit", async(e)=>{
    e.preventDefault();

   const email = signupForm['signup-email'].value;
   const password = signupForm['signup-password'].value;

   try {
    
   const userCredential = await createUserWithEmailAndPassword(auth,email,password);
   console.log(userCredential);
   showMessage("Bienvenido " + userCredential.user.email, "sucess")
   } catch (error) {
   switch (error.code) {
    case "auth/weak-password":
        showMessage("Contraseña inválida")
        break;
    case "auth/invalid-email":
        showMessage("Correo inválido")
        break;
    case "auth/email-already-in-use":
        showMessage("El correo ya está en uso")
        break;
   
    default:
        showMessage("Lo sentimos, algo salió mal")
        break;
   }
   }

})
}