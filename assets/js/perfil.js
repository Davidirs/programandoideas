import { saveProfile } from "../../app/users/saveProfile.js"

const btnEdit = document.querySelector("#btnEdit")
console.log(btnEdit)
btnEdit.addEventListener("click", ()=>{
    if(btnEdit.textContent == "Editar perfil"){
        btnEdit.textContent = "Guardar perfil"

    }else{
        console.log("guardando...")

        saveProfile();

        btnEdit.textContent = "Editar perfil"
    }
        const hidden = document.querySelectorAll(".hidden")
        const nohidden = document.querySelectorAll(".no-hidden")
        hidden.forEach(item=>{
            item.classList.toggle("hidden")
            item.classList.toggle("no-hidden")
        })
        nohidden.forEach(item=>{
            item.classList.toggle("hidden")
            item.classList.toggle("no-hidden")
        })
        const listSocial = document.querySelector(".list-social");
        listSocial.classList.toggle("flex-column")

})