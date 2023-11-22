
import { auth } from "../firebase.js";
import { showMessage } from "../showMessage.js";

const postList = document.querySelector(".posts");
const postsNumShowing = document.querySelector(".postsNumShowing");
const postsNumFinished = document.querySelector(".postsNumFinished");
const postsNumCanceled = document.querySelector(".postsNumCanceled");
const postsNumFailed = document.querySelector(".postsNumFailed");

export const listPosts = (data) => {
  if (data.length) {
    let showing = 0;
    let finished = 0;
    let canceled = 0;
    let failed = 0;

    let html = "";
    let i = 0;

    data.forEach(doc => {
      i++;
      const post = doc.data();
      //console.log(post)
      const tr = `
      <tr> 
        <th scope="row">${i}</th>
          <td>${post.name}</td>
          <td>${post.dateposted}</td>
          <td>${post.user}</td>
          <td>${post.status}</td>
          <td>
            <a class="m-1 pointer"><i class="fa-solid fa-pen-to-square"></i></a>
            <a class="m-1 pointer"><i class="fa-solid fa-eye"></i></a>
            <a class="m-1 pointer"><i class="fa-solid fa-trash"></i></a>
          </td>
      </tr>
            `
      html += tr;

      //contador de usuarios
      switch (post.status) {
        case "Completado":
          finished++
          break;
        case "Cancelado":
          canceled++
          break;
        case "Fallido":
          failed++
          break;

        default:
          showing++
          break;
      }

    })
    if (postList) {
      postList.innerHTML = html

    }


    postsNumShowing.textContent = showing;
    postsNumFinished.textContent = finished;
    postsNumCanceled.textContent = canceled;
    postsNumFailed.textContent = failed;

  } else {
    console.log('No hay usuarios')
  }
  /*  auth.listUsers().then((result) => {
     result.users.forEach((user) => {
       // Accede a la información del usuario
       const uid = user.uid;
       const email = user.email;
       // ...
       console.log(uid , email)
     });
   }).catch((error) => {
     // Maneja el error si no se pueden obtener los usuarios
   }); */


}
