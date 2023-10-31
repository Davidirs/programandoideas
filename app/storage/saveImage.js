import { getStorage, ref, uploadString, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js"
import { showMessage } from '../showMessage.js'

const storage = getStorage();

export const saveImage = async (user, name, data_url) => {
    const storageRef = ref(storage, user + "/" + name);
    var urlLink = "";
    try {
        //const message = data_url;
        await uploadString(storageRef, data_url, 'data_url').then((snapshot) => {
            console.log('Un data_url string se ha subido!');
        });
        await getDownloadURL(ref(storage, user + "/" + name))
            .then((url) => {
                console.log("url returnada " + url)
                urlLink = url;
            })
            .catch((error) => {
                console.log("Error profundo al conseguir link de imagen: " + error)
            });
        return urlLink;
    } catch (e) {
        console.log("Error al intentar subir imagen: " + e)
    }

}