import { doc, getDoc, getDocs, updateDoc, deleteDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { auth, db } from '../firebase.js'
import { numStars } from '../../assets/js/rating.js';

import { idToEmail } from "../users/infoUser.js";
const querySnapshotPosts = await getDocs(collection(db, 'posts'));
export const loadData = async (id) => {
    const docs = querySnapshotPosts.docs;
    

    let htmlPostOwn = "";
    let htmlPostDev = "";
    let htmlPostInv = "";
    for (let i = 0; i < docs.length; i++) {
        let post = docs[i].data()

        if (post.user == id) {
            const tr = `
            <tr>
                <th scope="row">${i}</th>
                  <td>${post.name}</td>
                  <td>${post.dateposted}</td>
                  <td>${post.status}</td>
                  <td>${post.amount}</td>
                  <td>${numStars(post.rating)}</td>
            </tr>
            `
            htmlPostOwn += tr;
        }
        if (post.developers != []) {
            for (let j = 0; j < post.developers.length; j++) {
                if (post.developers[j] == id) {
                const tr = `
            <tr>
                <th scope="row">${i}</th>
                  <td>${post.name}</td>
                  <td>${post.dateposted}</td>
                  <td>${await idToEmail(post.user)}</td>
                  <td>${post.status}</td>
                  <td>${post.amount}</td>
                  <td>${numStars(post.rating)}</td>
            </tr>
            `
            htmlPostDev += tr;
            }
            }
            
        }
        if (post.investors != []) {
            for (let j = 0; j < post.investors.length; j++) {
                if (post.investors[j] == id) {
                const tr = `
            <tr>
                <th scope="row">${i}</th>
                  <td>${post.name}</td>
                  <td>${post.dateposted}</td>
                  <td>${await idToEmail(post.user)}</td>
                  <td>${post.status}</td>
                  <td>${post.amount}</td>
                  <td>${numStars(post.rating)}</td>
            </tr>
            `
            htmlPostInv += tr;
            }
            }
            
        }

    }
    
const postsOwn = document.querySelector(".posts-own");
const postsDev = document.querySelector(".posts-dev");
const postsInv = document.querySelector(".posts-inv");

    if (postsOwn) {
        if (htmlPostOwn !="") {
            
            postsOwn.innerHTML = htmlPostOwn
        }else{
            postsOwn.innerHTML = `
            <tr>
                <th scope="row">1</th>
                <td colspan="6">Aún no ha realizado publicaciones.</td>
            <tr>
            `
        }
    }
    if (postsDev) {
        
        if (htmlPostDev !="") {
            
            postsDev.innerHTML = htmlPostDev
        }else{
            postsDev.innerHTML = `
            <tr>
                <th scope="row">1</th>
                <td colspan="7">Aún no se ha unido como desarrollador.</td>
                <tr>
                `
        }
    }
    if (postsInv) {
        if (htmlPostInv !="") {
            
            postsInv.innerHTML = htmlPostInv
        }else{
            postsInv.innerHTML = `
            <tr>
                <th scope="row">1</th>
                <td colspan="7">Aún no se ha unido como inversor</td>
                <tr>
                `
        }
       
    }

}
