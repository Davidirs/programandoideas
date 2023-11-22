import { addUser, editUser } from './addUser.js'
import { showMessage } from '../showMessage.js'
import { loadProfile } from './loadProfile.js';


export const saveProfile = async () => {
    var urlParams = new URLSearchParams(window.location.search);
    // Obtener el valor de un parámetro específico
    var id = urlParams.get('id');

    const userNameInput = document.querySelector("#user-name").value;
    const userCountryInput = document.querySelector("#user-country").value;
    const imagePreview = document.querySelector("#image-preview0").value;
    const descriptionInput = document.querySelector("#user-description").value;
    const userLinkedin = document.querySelector("#user-linkedin").value;
    const userGithub = document.querySelector("#user-github").value;
    const userFacebook = document.querySelector("#user-facebook").value;
    const userInstagram = document.querySelector("#user-instagram").value;
    const userYoutube = document.querySelector("#user-youtube").value;

    const user = {
        "uid": id,
        "displayName": userNameInput,
        "status": "Pendiente",
        //"email": user.email,
        "country": userCountryInput,
        //"photoURL": imagePreview,
        //"rating": user.rating ?? 0,
        "description": descriptionInput,
        //redes sociales
        "linkedin": userLinkedin,
        "github": userGithub,
        "facebook": userFacebook,
        "instagram": userInstagram,
        "youtube": userYoutube,
    }
    await editUser(user);
    await loadProfile();
}