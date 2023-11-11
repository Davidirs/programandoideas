
import { auth } from "../firebase.js";
import { showMessage } from "../showMessage.js";

const userList = document.querySelector(".users");

export const listUsers = (data) => {
  if (data.length) {
    console.log("hay datos: " + data.length)
    data.forEach(doc => {

      const user = doc.data();
      const tr = `
      <tr>
        <th scope="row">1</th>
          <td>user 1</td>
          <td>Jacob@gmail.com</td>
          <td>Pendiente</td>
          <td><a>1</a><a>1</a><a>1</a><a>1</a></td>
      </tr>
            `
      html += li;



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
