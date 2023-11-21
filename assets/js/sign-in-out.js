console.log("conectado");

const containerSignup = document.getElementById("container-signup");
const containerLogin = document.getElementById("container-login");
const btnMenus = document.querySelectorAll(".btn-menu");
const change = document.querySelectorAll(".change");
btnMenus.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnMenus.forEach(btn => btn.classList.toggle("btn-gradient"));
    /* btn.classList.add("btn-gradient") */
    change.forEach(change => change.classList.toggle("hidden"));
  })
})
const passwordEyes = document.querySelectorAll(".password-eye");
const passwordInputs = document.querySelectorAll(".password-input");

for (let i = 0; i < passwordEyes.length; i++) {
  passwordEyes[i].addEventListener("click", () => {
    passwordEyes[i].classList.toggle("fa-eye");
    if (passwordInputs[i].type === "password") {
      passwordInputs[i].type = "text";
    } else {
      passwordInputs[i].type = "password";
    }
  })
}