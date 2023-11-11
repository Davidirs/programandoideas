import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDocs, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { auth, db } from '../firebase.js'
import { listUsers } from './listUsers.js'

import { loginCheck } from '../login/logginCheck.js'
/* import { logout } from './login/logout.js'
import { setupPost } from './post/postList.js'
import  './post/loadPost.js'
import './formularios/signupForm.js';
import './formularios/signinForm.js'
import './login/googleLogin.js'
import './login/facebookLogin.js'
import './login/githubLogin.js'
import '../assets/js/add-componets.js'
import { loadPost } from "./post/loadPost.js"; */


onAuthStateChanged(auth, async (user) => {

    loginCheck(user);
    if (user) {
        if (user.email === "admin@programandoidea.com") {
            console.log("Si es admin, bienvenido")
            
            const querySnapshot = await getDocs(collection(db, 'users'));
            listUsers(querySnapshot.docs);

        } else {
            console.log("No es admin, no debes ver esta pagina")
            window.location.href = "./404.html";  
        }
    }else{
        console.log("No estás logueado, por favor inicia sesion")
        window.location.href = "./sign-in-out.html";  
    }
})