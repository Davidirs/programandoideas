console.log("dashboard.js cargado correctamente")

const menuItems = [...document.querySelectorAll(".nav-item")]
const secciones = [...document.querySelectorAll("section")]
console.log(secciones)

for (let i = 0; i < menuItems.length; i++) {

    menuItems[i].addEventListener('click', () => {
        console.log(i)
        for (let j = 0; j < secciones.length; j++) {
            secciones[j].classList.add("hidden")
            menuItems[j].classList.remove("active-tab")
            if (i==j) {
                secciones[j].classList.remove("hidden") 
                menuItems[j].classList.add("active-tab") 
            }
        }
    })
}