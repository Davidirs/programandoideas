import { numStars } from '../../assets/js/rating.js';
import { imageList } from '../storage/imageList.js';
import { idToEmail } from '../users/infoUser.js';
const postList = document.querySelector(".posts");

export const setupPost = async (data) => {

  if (data.length) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      let doc = data[i];

      const post = doc.data()
      var id = doc.id;
      //saber si estoy en github
      let nameProyect = "";
      const isGitHub = window.location.href.includes("github");
      if (isGitHub) {
        nameProyect = "/programandoideas";
      }
      // Construir la URL con los parámetros
      var url = nameProyect + '/pages/proyecto-individual.html?id=' + id;
      const userID = `
      <a onclick="gotoPerfil('${post.user}')" class="pointer text-d-none mx-2">
      <i class="fa-solid fa-user"></i>
      ${await idToEmail(post.user)}
      </a>
      `;
      const li = `
            <div class="bg-dark-blue br-20 p-3 m-2 m-md-4">
          <div class="d-flex flex-column-reverse flex-md-row justify-content-evenly">
            <div class="col-12 col-md-7 bg-white br-20 p-3 my-3">
            <div class="col-12 d-flex">  
            <div class="col-6">
              Publicación: ${post.dateposted}
              </div>
              <div class="col-6  text-end">
                Limite: ${post.datelimit}
              </div>
            </div>
              <h2>${post.name}</h2>
              <p>${post.description}</p>
             <h5>Publicado por: <a class="col-12">${userID}</a></h5>
             <div class="d-flex col-12"> 
             <h5 class="col-6">${post.type}</h5>
              <h5 class="col-6 text-end color-yellow">${numStars(post.rating)}</h5>
              </div>
              <div class="d-flex col-12">
              <div class="col-6">
                <a href="${url}" class="button br-20 btn-gradient">Conoce más</a>
              </div>
              <div class="col-6 text-end"> Fondo: ${post.amount}.00 / ${post.maxamount}.00 USD</div>
            </div>
            </div>

            <div class="col-12 col-md-4 d-flex flex-column justify-content-between  my-3">
              <a class="col-12 d-flex justify-content-center align-items-center bg-white img-grande">
                <img src="${post.img1}" alt=""  class="" id="${id}imggrande">
              </a>
              <div class="d-flex justify-content-between miniaturas">
                <a class="d-flex justify-content-center align-items-center bg-white img-miniatura pointer '${id}'img1"onclick="changeImg('${id}','${post.img1}')">
                  <img src="${post.img1}" alt=""  class="img1">
                </a>
                <a class="d-flex justify-content-center align-items-center bg-white img-miniatura pointer '${id}'img2"onclick="changeImg('${id}','${post.img2}')" >
                  <img src="${post.img2}" alt=""  class="img2">
                </a>
                <a class="d-flex justify-content-center align-items-center bg-white img-miniatura pointer '${id}'img3" onclick="changeImg('${id}','${post.img3}')" >
                  <img src="${post.img3}" alt=""  class="img3">
                </a>
                <a class="d-flex justify-content-center align-items-center bg-white img-miniatura pointer '${id}'img4"onclick="changeImg('${id}','${post.img4}')" >
                  <img src="${post.img4}" alt=""  class="img4">
                </a>
              
              </div>
            </div>
          </div>
        </div>
            `
      html += li;



    };
    if (postList) {
      postList.innerHTML = html

    }
  } else {

    if (postList) { postList.innerHTML = `<h3>No hay publicaciones para mostrar, Inicia sesión</h3>` }
    console.log('No posts')
  }
} 