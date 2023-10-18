

export const loginCheck = user => {
    
    const loggedOutLinks = document.querySelectorAll('.logged-out');
    const loggedInLinks = document.querySelectorAll('.logged-in');
    if (user) {
        loggedInLinks.forEach(link => link.style.display = "flex");
        loggedOutLinks.forEach(link => link.style.display = "none");
        
    } else {
        loggedInLinks.forEach(link => link.style.display = "none")
        loggedOutLinks.forEach(link => link.style.display = "block")
        

    }

}
