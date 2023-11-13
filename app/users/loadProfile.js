import { doc, getDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { auth, db } from '../firebase.js'

var urlParams = new URLSearchParams(window.location.search);
// Obtener el valor de un parámetro específico
var id = urlParams.get('id');

// Utilizar los valores de los parámetros
const userName = document.querySelector(".user-name");
const userNameInput = document.querySelector("#user-name");
const userStatus = document.querySelector(".user-status");
const userEmail = document.querySelector(".user-email");
const userCountry = document.querySelector(".user-country");
const userCountryInput = document.querySelector("#user-country");
const imagePreview = document.querySelector("#image-preview0");
const rating = document.querySelector(".rating");
const description = document.querySelector(".user-description");
const descriptionInput = document.querySelector("#user-description");
const userLinkedin = document.querySelector("#user-linkedin");
const userGithub = document.querySelector("#user-github");
const userFacebook = document.querySelector("#user-facebook");
const userInstagram = document.querySelector("#user-instagram");
const userYoutube = document.querySelector("#user-youtube");

const placeholders = document.querySelectorAll(".placeholder")


export const loadProfile = async () => {
    try {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        const user = docSnap.data();
        console.log(user)

        userName.textContent = user.displayName;
        userNameInput.value = user.displayName;
        userStatus.textContent = user.status;
        userEmail.textContent = user.email;
        userCountry.textContent = user.country;
        userCountryInput.value = user.country;
        imagePreview.setAttribute("src", user.photoURL ?? "../assets/img/perfil.png");
        rating.textContent = user.rating + "☆☆☆☆☆";
        description.textContent = user.description;
        descriptionInput.value = user.description;
        userLinkedin.value = user.linkedin;
        userGithub.value = user.github;
        userFacebook.value = user.facebook;
        userInstagram.value = user.instagram;
        userYoutube.value = user.youtube;
        
        for (let i = 0; i < placeholders.length; i++) {
            placeholders[i].classList.remove("placeholder");

        }
    }
    catch (error) {
        window.location.href = "../pages/404.html";
    }


}
