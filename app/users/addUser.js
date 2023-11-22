import { setDoc,updateDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { db, auth } from '../../app/firebase.js'
import { showMessage } from '../showMessage.js'



export const addUser = async (user) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const datosActuales = docSnap.data();
    const userActual = auth.currentUser;
    try {
        if (docSnap.exists()) {
            console.log(user)
           
        } else {
            // docSnap.data() will be undefined in this case
            //showMessage("No existe agregando valores!");
            await setDoc(docRef, {
                "uid": user.uid,
                "displayName": user.displayName??"Usuario",
                "status": "Pendiente",
                "email": user.email,
                "country": user.country ?? "",
                "photoURL": user.photoURL,
                "rating": userActual.rating ?? 0,
                "description": user.description ?? "",
                //redes sociales
                "facebook": user.facebook ?? "",
                "instagram": user.instagram ?? "",
                "github": user.github ?? "",
                "linkedin": user.linkedin ?? "",
                "youtube": user.youtube ?? "",
            });
        }

        //showMessage("Usuario agregado", "success");

    } catch (e) {
        showMessage("Error al intentar agregar usuario: " + e)
        console.log("Error al intentar agregar usuario: " + e)
    }
}

export const editUser = async (user) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const datosActuales = docSnap.data();
    const userActual = auth.currentUser;
    try {
        await updateDoc(docRef, {
            //"uid": user.uid,
            "displayName": user.displayName,
            "status": "Pendiente",
            //"email": datosActuales.email,
            "country": user.country,
            //"photoURL": datosActuales.photoURL,
            //"rating": datosActuales.rating,
            "description": user.description,
            //redes sociales
            "facebook": user.facebook,
            "instagram": user.instagram,
            "github": user.github,
            "linkedin": user.linkedin,
            "youtube": user.youtube,
        });

        showMessage("Usuario actualizado con exito.", "success")
    } catch (error) {
    }
}