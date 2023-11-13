import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDocs, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

import { auth, db } from './firebase.js'
import { loginCheck } from './login/logginCheck.js'
import { logout } from './login/logout.js'
import { setupPost } from './post/postList.js'
import './post/loadPost.js'
import './formularios/signupForm.js';
import './formularios/signinForm.js'
import './login/googleLogin.js'
import './login/facebookLogin.js'
import './login/githubLogin.js'
import '../assets/js/add-componets.js'
import { loadPost } from "./post/loadPost.js";
import { loadProfile } from "./users/loadProfile.js";


onAuthStateChanged(auth, async (user) => {

    loginCheck(user);
    if (user) {
        console.log(user)
        if (user.photoURL !== null) {
            const logo = document.getElementById("logo");
            const usuario = document.getElementById("usuario");
            logo.setAttribute("src", user.photoURL);
            usuario.textContent = user.displayName;

        } else {
            usuario.textContent = user.email;
        }
        const perfil = document.getElementById("perfil")
        var url = '/pages/perfil.html?id=' + user.uid;
        perfil.setAttribute("href", url)
        /* creo la funcion cerrar sesion */
        await logout();

        /* buscar docs */
        const currentPage = window.location.href;

        if (currentPage.includes("proyectos.html")) {
            console.log("pagina proyectos")
            const querySnapshot = await getDocs(collection(db, 'posts'));
            setupPost(querySnapshot.docs);
        }
        if (currentPage.includes("individual.html")) {
            console.log("pagina proyecto individual")
            //const querySnapshot = await getDocs(collection(db, 'posts'));
            loadPost();
        }
        if (currentPage.includes("perfil.html")) {
            console.log("Pagina perfil de usuario")
            //const querySnapshot = await getDocs(collection(db, 'posts'));
            loadProfile();
        }

    } else {
        setupPost([]);
        console.log("NO está logueado")
    }
})