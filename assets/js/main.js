import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDocs, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

import { auth, db } from '../../app/firebase.js'
import { loginCheck } from '../../app/login/logginCheck.js'
import {logout} from '../../app/login/logout.js'
import {setupPost} from '../../app/postList.js'
import '../../app/formularios/signupForm.js';
import '../../app/formularios/signinForm.js'
import '../../app/login/googleLogin.js'
import '../../app/login/facebookLogin.js'
import '../../app/login/githubLogin.js'
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

        /* buscar docs */
      const querySnapshot = await getDocs(collection(db, 'posts'));
      setupPost(querySnapshot.docs);
      
    } else {
        setupPost([]);
        console.log("NO está logueado")
    }
})