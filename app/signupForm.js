
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth} from './firebase.js'
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", async(e)=>{
    e.preventDefault();

   const email = signupForm['signup-email'].value;
   const password = signupForm['signup-password'].value;


   const userCredential = await createUserWithEmailAndPassword(auth,email,password);
   console.log(userCredential);
})