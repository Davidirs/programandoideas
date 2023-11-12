import { setDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { db } from '../../app/firebase.js'
import { showMessage } from '../showMessage.js'


export const addUser = async (user) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    try {
        if (docSnap.exists()) {
            //showMessage("Document data:", docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            //showMessage("No existe agregando valores!");
            await setDoc(docRef, {
                "uid": user.uid,
                "displayName": user.displayName,
                "email": user.email,
                "photoURL": user.photoURL,
                "status": "pendiente",
            });
        }

        //showMessage("Usuario agregado", "success");

    } catch (e) {
        showMessage("Error al intentar agregar usuario: " + e)
        console.log("Error al intentar agregar usuario: " + e)
    }
}