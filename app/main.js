import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDocs, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

import { auth, db } from './firebase.js'
import { loginCheck } from './login/logginCheck.js'
import {logout} from './login/logout.js'
import {setupPost} from './post/postList.js'
import './formularios/signupForm.js';
import './formularios/signinForm.js'
import './login/googleLogin.js'
import './login/facebookLogin.js'
import './login/githubLogin.js'
import '../assets/js/add-componets.js'


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

        /* buscar docs */
      const querySnapshot = await getDocs(collection(db, 'posts'));
      setupPost(querySnapshot.docs);
      
    } else {
        setupPost([]);
        console.log("NO está logueado")
    }
})