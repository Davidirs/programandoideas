//Implementación de rutas


//pages
const pages = {
    //index
    "home": "/",
    //components
    "footer": "/components/footer.html",
    "header": "/components/header.html",
    //pages
    "404": "/components/404.html",
    "conocenos": "/components/conocenos.html",
    "dashboard": "/components/dashboard.html",
    "perfil": "/components/perfil.html",
    "individual": "/components/proyecto-individual.html",
    "proyectos": "/components/proyectos.html",
    "publicar": "/components/publicar-idea.html",
    "singin": "/components/sing-in-out.html",
}


const goto = (route) => {
    let nameProyect = "";
    const isGitHub = window.location.href.includes("github");
    if (isGitHub) {
        nameProyect = "/programandoideas";
    }
    switch (route) {
        case "home":
            window.location.href = pages.home;
            break;

        default:
            break;
    }
}