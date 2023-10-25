const postList = document.querySelector(".posts");
export const setupPost = (data) => {
    if (data.length) {
        let html ="";
        data.forEach(doc => {
            const post = doc.data()
            const li = `
            <li class="list-group-item list-group-item-action list-group-item-dark">
            <h5>${post.name}</h5>
            <p>${post.description}</p>
            </li>
            `
            html+= li;
            console.log(post)
        });
       if(postList){ postList.innerHTML = html}
    } else {
        
        if(postList){ postList.innerHTML = `<h3>No hay publicaciones para mostrar, Inicia sesión</h3>`}
        console.log('No posts')
    }
}