import { addDoc,doc, collection,updateDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { db } from '../../app/firebase.js'
import {showMessage } from '../showMessage.js'


export const addPost = async (post) => {
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            user: post.user,
            name: post.name,
            status: "Mostrando",
            description: post.description,
            type: post.type,
            infodeveloper: post.infodeveloper,
            img1: post.img1,
            img2: post.img2,
            img3: post.img3,
            img4: post.img4,
            infoinvestor: post.infoinvestor,
            minamount: post.minamount,
            maxamount: post.maxamount,
            amount: "0",
            rating: "0",
            dateposted: post.dateposted,
            datelimit: post.datelimit,
        });
       console.log(docRef.id)
       const docRef2 = doc(db, "posts", docRef.id);
       await updateDoc(docRef2, { id: docRef.id });
        
        
        showMessage("Publicación agregada","success");
        goto('proyectos');
                    
    } catch (e) {
        showMessage("Error al intentar agregar " +e)
    }
}