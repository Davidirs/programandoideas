
import { auth } from "../firebase.js";
import { showMessage } from "../showMessage.js";

const userList = document.querySelector(".users");
const usersNum = document.querySelector(".usersNum");
const lastDateSesion = document.querySelector(".lastDateSesion");
const usersNumActive = document.querySelector(".usersNumActive");
const usersNumPending = document.querySelector(".usersNumPending");
const usersNumBlocked = document.querySelector(".usersNumBlocked");

export const listUsers = (data) => {
  if (data.length) {
    usersNum.textContent = data.length;
    usersNumActive.textContent = data.length;
    usersNumPending.textContent = data.length;
    usersNumBlocked.textContent = data.length;
    lastDateSesion.textContent = new Date(Date.now()).toLocaleString();
    let html = "";

    let i = 0;
    data.forEach(doc => {
      i++;
      const user = doc.data();
      const tr = `
      <tr> 
        <th scope="row">${i}</th>
          <td>${user.displayName}</td>
          <td>${user.email}</td>
          <td>${user.status}</td>
          <td>
          <a class="m-1 pointer"><i class="fa-solid fa-user-pen"></i></a>
          <a class="m-1 pointer"><i class="fa-solid fa-user-lock"></i></a>
          <a class="m-1 pointer"><i class="fa-solid fa-trash"></i></a>
          </td>
      </tr>
            `
      html += tr;



    });
    if (userList) {
      userList.innerHTML = html

    }
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
