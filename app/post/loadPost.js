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
const aimg1 = document.getElementById("aimg1");
const aimg2 = document.getElementById("aimg2");
const aimg3 = document.getElementById("aimg3");
const aimg4 = document.getElementById("aimg4");
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
  try {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const post = docSnap.data();


    name.textContent = post.name
    dateposted.textContent = post.dateposted
    datelimit.textContent = post.datelimit
    console.log(img1)
    imggrande.setAttribute("src", post.img1);
    imggrande.setAttribute("id", id+"imggrande");
    img1.setAttribute("src", post.img1);
    img2.setAttribute("src", post.img2);
    img3.setAttribute("src", post.img3);
    img4.setAttribute("src", post.img4);
    aimg1.addEventListener("click",()=>changeImg(id ,post.img1)) 
    aimg2.addEventListener("click",()=>changeImg(id ,post.img2))
    aimg3.addEventListener("click",()=>changeImg(id ,post.img3))
    aimg4.addEventListener("click",()=>changeImg(id ,post.img4))
    description.textContent = post.description;
    type.textContent = post.type;
    rating.textContent = post.rating;
    amount.textContent = post.amount;
    maxamount.textContent = post.maxamount;
    infodeveloper.textContent = post.infodeveloper;
    infoinvestor.textContent = post.infoinvestor;
    for (let i = 0; i < placeholders.length; i++) {
      placeholders[i].classList.remove("placeholder");

    }
  }
  catch (error) {
    window.location.href = "../pages/404.html";
  }


}
