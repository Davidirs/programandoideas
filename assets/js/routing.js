//Implementación de rutas


//pages
const pages = {
    //components
    "footer": "/components/footer.html",
    "header": "/components/header.html",
    //pages
    //index
    "home": "/",
    "p404": "/components/404.html",
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
            window.location.href = nameProyect+pages.home;
            break;
        case "p404":
            window.location.href = nameProyect+pages.p404;
            break;
        case "conocenos":
            window.location.href = nameProyect+pages.conocenos;
            break;
        case "dashboard":
            window.location.href = nameProyect+pages.dashboard;
            break;
        case "perfil":
            window.location.href = nameProyect+pages.perfil;
            break;
        case "individual":
            window.location.href = nameProyect+pages.individual;
            break;
        case "proyectos":
            window.location.href = nameProyect+pages.proyectos;
            break;
        case "publicar":
            window.location.href = nameProyect+pages.publicar;
            break;
        case "singin":
            window.location.href = nameProyect+pages.singin;
            break;

        default:
            break;
    }
}