// Obtén el elemento actual basado en la página actual o alguna lógica específica
const currentPage = window.location.href;

if (currentPage.includes("conocenos.html")) {
  document.getElementById("conocenos").classList.add("active-tab");
} else if (currentPage.includes("index.html")) {
  document.getElementById("inicio").classList.add("active-tab");
} else if (currentPage.includes("proyectos.html")) {
  document.getElementById("proyectos").classList.add("active-tab");
}
