// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const remove = document.getElementById("remove");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (remove) {
  remove.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
