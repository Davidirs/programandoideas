// Obtén el elemento actual basado en la página actual o alguna lógica específica
/*
const currentPage = window.location.href;

if (currentPage.includes("conocenos.html")) {
  document.getElementById("conocenos").classList.add("active-tab");
} else if (currentPage.includes("index.html")) {
  document.getElementById("inicio").classList.add("active-tab");
} else if (currentPage.includes("proyectos.html")) {
  document.getElementById("proyectos").classList.add("active-tab");
}

 let redirectToSignIn = () => {
  window.location.href = "/pages/sign-in-out.html";
};
let boton = document.getElementById('signButtonDesktop')
boton.addEventListener('click',redirectToSignIn)

let boton2 = document.getElementById('signButtonMobile')
boton2.addEventListener('click',redirectToSignIn)
 */

/* Controlar darkmode */
const btn= document.getElementById("darkmode");
let darkmodekey = localStorage.getItem("darkmode");

function darkmode(){
    let bgDarkBlue= document.querySelectorAll(".bg-dark-blue");
    let btnGradient= document.querySelectorAll(".btn-gradient");
    btn.classList.toggle("fa-sun")
    btn.classList.toggle("fa-moon")
    bgDarkBlue.forEach(bg=>{/* 
        bg.classList.toggle("bg-dark-blue") */
        bg.classList.toggle("bg-dark")
    });
    btnGradient.forEach(btn=>{/* 
        bg.classList.toggle("bg-dark-blue") */
        btn.classList.toggle("dark")
    });
    if(darkmodekey=== null || darkmodekey=== "false"){
        localStorage.setItem("darkmode","true")
    }else{
        localStorage.setItem("darkmode","false")
    }
}