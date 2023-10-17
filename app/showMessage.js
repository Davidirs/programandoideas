export function showMessage (message, type = "error"){
    Toastify({
        text: message,
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: type === "error" ?"rgb(219, 19, 19)":"linear-gradient(to right, #37517e, #47B2E4)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}