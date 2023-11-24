import { doc, getDoc, updateDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { auth, db } from '../firebase.js'
import { numStars } from '../../assets/js/rating.js';
import { showMessage } from "../showMessage.js";
import { idToEmail } from "../users/infoUser.js";


var urlParams = new URLSearchParams(window.location.search);

// Obtener el valor de un parámetro específico
var id = urlParams.get('id');

// Utilizar los valores de los parámetros
const name = document.getElementById("name");
const dateposted = document.getElementById("dateposted");
const datelimit = document.getElementById("datelimit");
const postautor = document.getElementById("postautor");
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
const joindeveloper = document.getElementById("joindeveloper");
const joininvestor = document.getElementById("joininvestor");
const developersSpan = document.getElementById("developers");
const investorsSpan = document.getElementById("investors");

let currentUser = "";
let developers = [];
let isDeveloper = false;
let indexDeveloper = "";
let investors = [];
let isInvestor = false;
let indexInvestor = "";


function verificarDeveloper() {
  for (let i = 0; i < developers.length; i++) {
    if (developers[i] == currentUser) {
      isDeveloper = true;
      indexDeveloper = i;
      joindeveloper.textContent = "No quiero ser Desarrollador";
    }
  }
}
function verificarInvestor() {
  for (let i = 0; i < investors.length; i++) {
    if (investors[i] == currentUser) {
      isInvestor = true;
      indexInvestor = i;
      joininvestor.textContent = "No quiero ser Inversor";
    }
  }
}
export const loadPost = async () => {
  try {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const post = docSnap.data();
    currentUser = auth.currentUser.uid;
    developers = [...post.developers];
    investors = [...post.investors];



    name.textContent = post.name
    dateposted.textContent = post.dateposted
    datelimit.textContent = post.datelimit
    postautor.innerHTML = `
    <a onclick="gotoPerfil('${post.user}')" class="pointer text-d-none mx-2">
    <i class="fa-solid fa-user"></i>
    ${await idToEmail(post.user)}
    </a>
    `;
    imggrande.setAttribute("src", post.img1);
    imggrande.setAttribute("id", id + "imggrande");
    img1.setAttribute("src", post.img1);
    img2.setAttribute("src", post.img2);
    img3.setAttribute("src", post.img3);
    img4.setAttribute("src", post.img4);
    aimg1.addEventListener("click", () => changeImg(id, post.img1))
    aimg2.addEventListener("click", () => changeImg(id, post.img2))
    aimg3.addEventListener("click", () => changeImg(id, post.img3))
    aimg4.addEventListener("click", () => changeImg(id, post.img4))
    description.textContent = post.description;
    type.textContent = post.type;
    rating.innerHTML = numStars(post.rating);
    amount.textContent = post.amount;
    maxamount.textContent = post.maxamount;
    infodeveloper.textContent = post.infodeveloper;
    infoinvestor.textContent = post.infoinvestor;

    let developersList = "";

    for (let i = 0; i < developers.length; i++) {
      const a = `
      <a onclick="gotoPerfil('${developers[i]}')" class="pointer text-d-none mx-2">
      <i class="fa-solid fa-user"></i>
      ${await idToEmail(developers[i])}
      </a>
      `
      
      developersList += a;

    }
    let investorsList = "";

    for (let i = 0; i < investors.length; i++) {
      const a = `
      <a onclick="gotoPerfil('${investors[i]}')" class="pointer text-d-none mx-2">
      <i class="fa-solid fa-user"></i>
      ${await idToEmail(investors[i])}
      </a>
      `
      
      investorsList += a;

    }


    developersSpan.innerHTML = developersList;
    investorsSpan.innerHTML = investorsList;
    for (let i = 0; i < placeholders.length; i++) {
      placeholders[i].classList.remove("placeholder");

    }

    verificarDeveloper();
    joindeveloper.addEventListener("click", async () => {
      verificarDeveloper();
      if (isDeveloper) {
        try {
          console.log("Si es developers");
          developers.splice(indexDeveloper, 1)
          await updateDoc(docRef, { developers: developers });
          console.log(developers);
          joindeveloper.textContent = "Unirme como Desarrollador";
          isDeveloper = false;
          showMessage("Has dejado de ser desarrollador", "success")
        } catch (error) {
          showMessage("Error al intentar dejar de ser desarrollador")
        }
      } else {
        try {
          console.log("No es developers");
          developers.push(currentUser)
          await updateDoc(docRef, { developers: developers });
          console.log(developers);
          joindeveloper.textContent = "No quiero ser Desarrollador";
          isDeveloper = true;
          showMessage("Te has unido como desorrollador", "success")
        } catch (error) {
          showMessage("Error al intentar unirte como desarrollador")

        }

      }
    })

    verificarInvestor();
    joininvestor.addEventListener("click", async () => {
      verificarInvestor();
      if (isInvestor) {
        try {
          console.log("Si es investors");
          investors.splice(indexInvestor, 1)
          await updateDoc(docRef, { investors: investors });
          console.log(investors);
          joininvestor.textContent = "Unirme como Inversor";
          isInvestor = false;
          showMessage("Has dejado de ser Inversor", "success")
        } catch (error) {
          showMessage("Error al intentar dejar de ser inversor")
        }

      } else {
        try {
          console.log("No es investors");
          investors.push(currentUser)
          await updateDoc(docRef, { investors: investors });
          console.log(investors);
          joininvestor.textContent = "No quiero ser Inversor";
          isInvestor = true;
          showMessage("Te has unido como Inversor", "success")
        } catch (error) {
          showMessage("Error al intentar unirte como inversor")

        }
      }
    })
  }
  catch (error) {
    console.log(error)
    goto("p404");
  }


}
