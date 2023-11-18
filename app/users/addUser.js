import { setDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { db, auth } from '../../app/firebase.js'
import { showMessage } from '../showMessage.js'



export const addUser = async (user) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const userActual = auth.currentUser;
       try {
        if (docSnap.exists()) {
            console.log(user)
            await setDoc(docRef, {
                "uid": user.uid,
                "displayName": user.displayName,
                "status": "pendiente",
                "email": userActual.email,
                "country": user.country,
                "photoURL": userActual.photoURL,
                "rating": userActual.rating??0,
                "description": user.description,
                //redes sociales
                "facebook": user.facebook,
                "instagram": user.instagram,
                "github": user.github,
                "linkedin": user.linkedin,
                "youtube": user.youtube,
            });

            showMessage("Usuario actualizado con exito.", "success")
        } else {
            // docSnap.data() will be undefined in this case
            //showMessage("No existe agregando valores!");
            await setDoc(docRef, {
                "uid": user.uid,
                "displayName": user.displayName,
                "status": "pendiente",
                "email": user.email,
                "country": user.country??"",
                "photoURL": user.photoURL,
                "rating": userActual.rating??0,
                "description": user.description??"",
                //redes sociales
                "facebook": user.facebook??"",
                "instagram": user.instagram??"",
                "github": user.github??"",
                "linkedin": user.linkedin??"",
                "youtube": user.youtube??"",
            });
        }

        //showMessage("Usuario agregado", "success");

    } catch (e) {
        showMessage("Error al intentar agregar usuario: " + e)
        console.log("Error al intentar agregar usuario: " + e)
    }
}