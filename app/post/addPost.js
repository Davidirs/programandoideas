import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { db } from '../../app/firebase.js'
import {showMessage } from '../showMessage.js'


export const addPost = async (post) => {
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            user: post.user,
            name: post.name,
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
        
        
        showMessage("Publicación agregada","success");
        window.location.href = "../pages/proyectos.html";   
                    
    } catch (e) {
        showMessage("Error al intentar agregar " +e)
    }
}