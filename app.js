const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-links-active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-links-active");
  });
});
