import { doc, getDoc, updateDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { db } from "../firebase.js";
export const idToEmail = async (id)=>{
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    const user = docSnap.data()
    
    return user.email;

}