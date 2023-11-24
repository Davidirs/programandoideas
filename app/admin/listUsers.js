
import { auth } from "../firebase.js";
import { showMessage } from "../showMessage.js";
import { blockUser, editUser, activeUser, deletingUser } from "./acciones.js";


const userList = document.querySelector(".users");
const usersNum = document.querySelector(".usersNum");
const lastDateSesion = document.querySelector(".lastDateSesion");
const usersNumActive = document.querySelector(".usersNumActive");
const usersNumPending = document.querySelector(".usersNumPending");
const usersNumBlocked = document.querySelector(".usersNumBlocked");

export const listUsers = (data) => {


  if (data.length) {
    usersNum.textContent = data.length;
    lastDateSesion.textContent = new Date(Date.now()).toLocaleString();
    let html = "";

    let active = 0;
    let pending = 0;
    let blocked = 0;

    for (let i = 0; i < data.length; i++) {
      const user = data[i].data();
      const tr = `
      <tr> 
        <th scope="row">${i}</th>
          <td>${user.displayName}</td>
          <td>${user.email}</td>
          <td>${user.status}</td>
          <td>
          <a class="m-1 pointer editar"><i class="fa-solid fa-user-pen"></i></a>
          <a class="m-1 pointer activar"><i class="fa-solid fa-user-check"></i></a>
          <a class="m-1 pointer bloquear"><i class="fa-solid fa-user-lock"></i></a>
          <a class="m-1 pointer eliminar"><i class="fa-solid fa-trash"></i></a>
          </td>
      </tr>
            `
      html += tr;
      //contador de usuarios
      switch (user.status) {
        case "Pendiente":
          pending++
          break;
        case "Bloqueado":
          blocked++
          break;

        default:
          active++
          break;
      }

    }


    usersNumActive.textContent = active;
    usersNumPending.textContent = pending;
    usersNumBlocked.textContent = blocked;
    if (userList) {
      userList.innerHTML = html

    }
    let editar = document.querySelectorAll(".editar")
    let activar = document.querySelectorAll(".activar")
    let bloquear = document.querySelectorAll(".bloquear")
    let eliminar = document.querySelectorAll(".eliminar")

    for (let i = 0; i < bloquear.length; i++) {

      editar[i].addEventListener("click", () => {
        editUser(data[i].data().uid)
      });
      activar[i].addEventListener("click", () => {
        activeUser(data[i].data().uid)
      });
      bloquear[i].addEventListener("click", () => {
        blockUser(data[i].data().uid)
      });
      eliminar[i].addEventListener("click", () => {
        deletingUser(data[i].data().uid)
      });
    }
  } else {
    console.log('No hay usuarios')
  }



}