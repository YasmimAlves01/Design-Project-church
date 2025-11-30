document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("hamburgerBtn");
  const menu = document.querySelector("nav ul");
  const body = document.body;

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });
});