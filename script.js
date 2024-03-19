const btnEl = document.querySelector(".btn-mb");
const navEl = document.querySelector(".header");

btnEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
});
