

export const loginCheck = user => {
    
    const onlyAdmin = document.querySelectorAll('.onlyAdmin');
    
    const loggedOutLinks = document.querySelectorAll('.logged-out');
    const loggedInLinks = document.querySelectorAll('.logged-in');
    if (user) {
        loggedInLinks.forEach(link => link.style.display = "flex");
        loggedOutLinks.forEach(link => link.style.display = "none");

        if (user.email ==="admin@programandoidea.com") {
        onlyAdmin.forEach(link => link.style.display = "flex");
    }else{
        onlyAdmin.forEach(link => link.style.display = "none");
    }
        
    } else {
        loggedInLinks.forEach(link => link.style.display = "none")
        loggedOutLinks.forEach(link => link.style.display = "block")
    }
    

}
