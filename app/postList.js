const postList = document.querySelector(".posts");
export const setupPost = (data) => {
    if (data.length) {
        let html = "";
        data.forEach(doc => {
            const post = doc.data()
            const li = `
            <div class="bg-dark-blue br-20 p-3 m-4">
          <div class="row justify-content-evenly">
            <div class="row col-7 bg-white br-20 p-3">
              <div class="col-6">
              Publicación: ${post.dateposted}
              </div>
              <div class="col-6  text-end">
                Limite: ${post.datelimit}
              </div>
              <h2>${post.name}</h2>
              <p>${post.description}</p>
              <h5 class="col-6">${post.type}</h5>
              <h5 class="col-6 text-end">${post.rating}☆ ☆ ☆ ☆ ☆</h5>
              <div class="col-6">
                <a href="" class="button br-20 btn-gradient">Conoce más</a>
              </div>
              <div class="col-6 text-end"> Fondo: ${post.amount}.00 / ${post.maxamount}.00 USD</div>
            </div>
            <div class="row col-4 br-20 justify-content-evenly">
              <img src="../assets/img/checked.png" alt="${post.img1}" class="col-12 bg-white">
              <img src="../assets/img/checked.png" alt="${post.img1}" class="bg-white img-miniatura">
              <img src="../assets/img/checked.png" alt="${post.img2}" class="bg-white img-miniatura">
              <img src="../assets/img/checked.png" alt="${post.img3}" class="bg-white img-miniatura">
              <img src="../assets/img/checked.png" alt="${post.img4}" class="bg-white img-miniatura">
            </div>
          </div>
        </div>
            `
            html += li;

        });
        if (postList) { postList.innerHTML = html }
    } else {

        if (postList) { postList.innerHTML = `<h3>No hay publicaciones para mostrar, Inicia sesión</h3>` }
        console.log('No posts')
    }
} /* 
            <li class="list-group-item list-group-item-action list-group-item-dark">
            <h5>${post.name}</h5>
            <p>${post.description}</p>
            </li> */