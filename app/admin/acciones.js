import { doc, getDoc, getDocs, updateDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { auth, db } from '../firebase.js'
import { showMessage } from "../showMessage.js";

import { listUsers } from './listUsers.js'
import { listPosts } from './listPosts.js'

const querySnapshotPosts = await getDocs(collection(db, 'posts'));
export const blockUser = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    const user = docSnap.data();

    try {
        if (user.status == "Bloqueado") {
           await updateDoc(docRef, { status: "Activo" });
        } else {
            await updateDoc(docRef, { status: "Bloqueado" });
        }
        showMessage("Estado de usuario actualizado", "success")
        actualizarPage();
    } catch (error) {
        showMessage("Error al actualizar estado de usuario")
        
    }

}
export const editUser = async (id) => {
    //saber si estoy en github
    gotoPerfil(id);

}
export const activeUser = async (id) => {
    //const querySnapshotUsers = await getDocs(collection(db, 'users'));
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    const user = docSnap.data();

    try {
           await updateDoc(docRef, { status: "Activo" });
        showMessage("Usuario activado exitosamente", "success")
        actualizarPage();
    } catch (error) {
        showMessage("Error al actualizar estado de usuario")
        
    }
    
    //listUsers(querySnapshotUsers.docs);
}

async function actualizarPage(){
    const querySnapshotUsers = await getDocs(collection(db, 'users'));
    listUsers(querySnapshotUsers.docs);
    showMessage("Pagina actualizada", "success")
}