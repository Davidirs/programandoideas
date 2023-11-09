
/* function changeImg(id,img) {
    var imgGrande = document.getElementById("imggrande");
    console.log("id = "+id)
    console.log("img = " + img)
    imgGrande.src = img
    
  } */
  
  function changeImg(id,img) {
    var imgGrande = document.getElementById(id + "imggrande");
   
    imgGrande.src = img
    
  }