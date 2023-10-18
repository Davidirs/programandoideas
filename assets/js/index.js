const imagenesPrincipales = [...document.querySelectorAll(".img-principal")];
        const resaltar = [...document.querySelectorAll(".resaltar")];
        console.log(imagenesPrincipales[1])
        let num = 0;
        const time = setInterval(() => {
          imagenesPrincipales[num].classList.remove("active");
          resaltar[num].classList.remove("resaltada");
          num++;
          if (num === imagenesPrincipales.length) {
          num=0}
            imagenesPrincipales[num].classList.add("active");
            resaltar[num].classList.add("resaltada");
           
        }, 3000);