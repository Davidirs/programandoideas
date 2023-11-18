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
const liLinkedin = document.querySelector(".li-linkedin");
const liGithub = document.querySelector(".li-github");
const liFacebook = document.querySelector(".li-facebook");
const liInstagram = document.querySelector(".li-instagram");
const liYoutube = document.querySelector(".li-youtube");
const userLinkedin = document.querySelector(".user-linkedin");
const userGithub = document.querySelector(".user-github");
const userFacebook = document.querySelector(".user-facebook");
const userInstagram = document.querySelector(".user-instagram");
const userYoutube = document.querySelector(".user-youtube");
const userLinkedinInput = document.querySelector("#user-linkedin");
const userGithubInput = document.querySelector("#user-github");
const userFacebookInput = document.querySelector("#user-facebook");
const userInstagramInput = document.querySelector("#user-instagram");
const userYoutubeInput = document.querySelector("#user-youtube");

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
        userLinkedinInput.value = user.linkedin;
        userGithubInput.value = user.github;
        userFacebookInput.value = user.facebook;
        userInstagramInput.value = user.instagram;
        userYoutubeInput.value = user.youtube;
        console.log(liLinkedin)
        if (user.linkedin == "") {
            //liLinkedin.classList.add("hiddenI")
            userLinkedin.removeAttribute("href")
        } else {
            userLinkedin.setAttribute("href", user.linkedin)
            //liLinkedin.classList.remove("hiddenI")
        }
        if (user.github == "") {
            //liGithub.classList.add("hiddenI")
            userGithub.removeAttribute("href")
        } else {
            userGithub.setAttribute("href", user.github)
            //liGithub.classList.remove("hiddenI")
        }
        if (user.facebook == "") {
            //liFacebook.classList.add("hiddenI")
            userFacebook.removeAttribute("href")
        } else {
            userFacebook.setAttribute("href", user.facebook)
            //liFacebook.classList.remove("hiddenI")
        } 
        if (user.instagram == "") {
            //liInstagram.classList.add("hiddenI")
            userInstagram.removeAttribute("href")
        } else {
            userInstagram.setAttribute("href", user.instagram)
            //liInstagram.classList.remove("hiddenI")
        }
        if (user.youtube == "") {
            //liYoutube.classList.add("hiddenI")
            userYoutube.removeAttribute("href")
        } else {
            userYoutube.setAttribute("href", user.youtube)
            //liYoutube.classList.remove("hiddenI")
        }

        for (let i = 0; i < placeholders.length; i++) {
            placeholders[i].classList.remove("placeholder");

        }
    }
    catch (error) {
        goto("p404");
    }


}
