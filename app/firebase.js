
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { getStorage } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6tJZDpVLKEjD1BygLl7HHv-JD44U8zq4",
  authDomain: "fir-js-fdb07.firebaseapp.com",
  projectId: "fir-js-fdb07",
  storageBucket: "fir-js-fdb07.appspot.com",
  messagingSenderId: "143780459070",
  appId: "1:143780459070:web:015e00243efa27bf3d976f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
