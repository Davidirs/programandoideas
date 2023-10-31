import { getStorage, ref } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js"

const storage = getStorage();

export const imageList = async (user, name) => {

    try {
        if (name !== "") {
            const storageRef = ref(storage, user + "/" + name);
            const path = storageRef.fullPath;
            return path;
        } else {
            return "";
        }
    } catch (error) {
        console.log(error);
    }
}

/* 
// Points to 'images'
const imagesRef = ref(storageRef, 'images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
const fileName = 'space.jpg';
const spaceRef = ref(imagesRef, fileName);

// File path is 'images/space.jpg'
const path = spaceRef.fullPath;

// File name is 'space.jpg'
const name = spaceRef.name;

// Points to 'images'
const imagesRefAgain = spaceRef.parent; */