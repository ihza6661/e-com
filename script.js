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

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  if (value === "") {
    // Hide all user cards if the input is empty
    users.forEach((user) => user.element.classList.add("hide"));
  } else {
    // Show or hide cards based on search criteria
    users.forEach((user) => {
      const isVisible =
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value);
      user.element.classList.toggle("hide", !isVisible);
    });
  }
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      card.classList.add("hide"); // Initially hide the card
      userCardContainer.append(card);
      return { name: user.name, email: user.email, element: card };
    });
  });
