const btnEl = document.querySelector(".btn-mb");
const navEl = document.querySelector(".header");

btnEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
});

let i = 0;
let txt =
  "Hello, I'm SHASHANK a junior front end developer on a mission to create user-friendly, efficient and responsive websites.";
const speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
