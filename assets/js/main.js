import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from '../../app/firebase.js'
import { loginCheck } from '../../app/logginCheck.js'
import '../../app/signupForm.js';
import '../../app/signinForm.js'
import '../../app/googleLogin.js'
import '../../app/facebookLogin.js'
import '../../app/githubLogin.js'
import '../../app/logout.js'

const logo = document.getElementById("logo");
const usuario = document.getElementById("usuario");

onAuthStateChanged(auth, async (user) => {

    loginCheck(user);
    if (user) {
        if (user.photoURL !== null) {
            logo.setAttribute("src", user.photoURL);
            usuario.textContent = user.displayName;
        } else {
            usuario.textContent = user.email;

        }


        console.log(user.photoURL)
    } else {
        console.log("NO está logueado")
    }
})