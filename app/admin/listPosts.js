
import { auth } from "../firebase.js";
import { showMessage } from "../showMessage.js";
import { blockUser, editUser, changeStatusPost, deletingPost } from "./acciones.js";


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
            <a class="m-1 pointer mostrando-post"><i class="fa-solid fa-eye"></i></a>
            <a class="m-1 pointer fallido-post"><i class="fa-solid fa-triangle-exclamation"></i></a>
            <a class="m-1 pointer cancelado-post"><i class="fa-solid fa-ban"></i></a>
            <a class="m-1 pointer completado-post"><i class="fa-solid fa-flag-checkered"></i></a>
            <a class="m-1 pointer eliminar-post"><i class="fa-solid fa-trash"></i></a>
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
    postsNumShowing.textContent = showing;
    postsNumFinished.textContent = finished;
    postsNumCanceled.textContent = canceled;
    postsNumFailed.textContent = failed;

    if (postList) {
      postList.innerHTML = html

    }

    let mostrandoPost = document.querySelectorAll(".mostrando-post")
    let fallidoPost = document.querySelectorAll(".fallido-post")
    let canceladoPost = document.querySelectorAll(".cancelado-post")
    let completadoPost = document.querySelectorAll(".completado-post")
    let eliminarPost = document.querySelectorAll(".eliminar-post")

    for (let i = 0; i < mostrandoPost.length; i++) {

      mostrandoPost[i].addEventListener("click", () => {
        changeStatusPost(data[i].data().id, "Mostrando" )
      });
      fallidoPost[i].addEventListener("click", () => {
        changeStatusPost(data[i].data().id, "Fallido" )
      });
      canceladoPost[i].addEventListener("click",  () => {
        changeStatusPost(data[i].data().id, "Cancelado" )
      });
      completadoPost[i].addEventListener("click", () => {
        changeStatusPost(data[i].data().id, "Mostrando")
      });
      eliminarPost[i].addEventListener("click", () => {
        console.log("funciona boton eliminar")
        deletingPost(data[i].data().id)

      });
    }


  } else {
    console.log('No hay usuarios')
  }

}
