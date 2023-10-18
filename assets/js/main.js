import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from '../../app/firebase.js'
import { loginCheck } from '../../app/logginCheck.js'
import {logout} from '../../app/logout.js'
import '../../app/signupForm.js';
import '../../app/signinForm.js'
import '../../app/googleLogin.js'
import '../../app/facebookLogin.js'
import '../../app/githubLogin.js'
import './add-componets.js'


onAuthStateChanged(auth, async (user) => {

    loginCheck(user);
    if (user) {
        if (user.photoURL !== null) {
            const logo = document.getElementById("logo");
            const usuario = document.getElementById("usuario");
            logo.setAttribute("src", user.photoURL);
            usuario.textContent = user.displayName;

        } else {
            usuario.textContent = user.email;

        }
        /* creo la funcion cerrar sesion */
        await logout();
    } else {
        console.log("NO está logueado")
    }
})