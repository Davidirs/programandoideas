import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from '../firebase.js'
import { showMessage } from "../showMessage.js";
import { addUser } from '../users/addUser.js'

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

            //agregar información de usuario a la base de datos
            const user = {
                "displayName": credential.user.displayName,
                "email": credential.user.email,
                "photoURL": credential.user.photoURL,
                "uid": credential.user.uid,
            }
            console.log(user)
            await addUser(user)

            //redirigir al home
            window.location.href = "/";
        } catch (error) {
            console.log(error);
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
