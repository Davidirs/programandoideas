import { setDoc, doc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { db } from '../../app/firebase.js'
import {showMessage } from '../showMessage.js'


export const addUser = async (user) => {
    try {
        
        const docRef = await setDoc(doc(db, "users", user.uid), {
            /* "displayName": user.displayName,
            "email": user.email,
            "photoURL": user.photoURL, */
            "uid": user.uid,
        });
        
        
        showMessage("Usuario agregado","success"); 
                    
    } catch (e) {
        showMessage("Error al intentar agregar usuario: " +e)
        console.log("Error al intentar agregar usuario: " +e)
    }
}