import { doc, getDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { auth, db } from '../firebase.js'

var urlParams = new URLSearchParams(window.location.search);

// Obtener el valor de un parámetro específico
var id = urlParams.get('id');

// Utilizar los valores de los parámetros
const name = document.getElementById("name");
const dateposted = document.getElementById("dateposted");
const datelimit = document.getElementById("datelimit");
const imggrande = document.getElementById("imggrande");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const description = document.getElementById("description");
const type = document.getElementById("type");
const rating = document.getElementById("rating");
const amount = document.getElementById("amount");
const maxamount = document.getElementById("maxamount");
const infodeveloper = document.getElementById("infodeveloper");
const infoinvestor = document.getElementById("infoinvestor");
const minamount = document.getElementById("minamount");
const user = document.getElementById("user");
const placeholders = document.querySelectorAll(".placeholder")


export const loadPost = async () => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const post =docSnap.data();
    
    if (docSnap.exists()) {
        
        name.textContent = post.name
        dateposted.textContent = post.dateposted
        datelimit.textContent = post.datelimit
        console.log(img1)
        imggrande.setAttribute("src", post.img1);
        img1.setAttribute("src", post.img1);
        img2.setAttribute("src", post.img2);
        img3.setAttribute("src", post.img3);
        img4.setAttribute("src", post.img4);
        description.textContent=post.description;
        type.textContent=post.type;
        rating.textContent=post.rating;
        amount.textContent=post.amount;
        maxamount.textContent=post.maxamount;
        infodeveloper.textContent=post.infodeveloper;
        infoinvestor.textContent=post.infoinvestor;
        for (let i = 0; i < placeholders.length; i++) {
            placeholders[i].classList.remove("placeholder");
          
        }
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      
    
}
