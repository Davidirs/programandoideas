const currentPage = window.location.href;

if (currentPage.includes("localhost")) {
  /* agregar header */
$(document).ready(function () {
    $('#header').load('/components/header.html');
  });
  
/* agregar footer */
$(document).ready(function () {
    $('#footer').load('/components/footer.html');
  });
}else{
    /* agregar header */
$(document).ready(function () {
  $('#header').load('components/header.html');
});

/* agregar footer */
$(document).ready(function () {
  $('#footer').load('components/footer.html');
});
}


  