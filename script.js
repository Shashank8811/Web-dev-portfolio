const btnEl = document.querySelector(".btn-mb");
const navEl = document.querySelector(".header");

btnEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
});

let formContent = document.querySelector(".form-contact");

let subBtn = document.getElementById("submit");

subBtn.addEventListener("click", function () {
  formContent.innerHTML = "<h1>Thanks I will get back to you soon.</h1>";
});
