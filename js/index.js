// mobile-nav
const navButton = document.querySelector(".bar-icon");
const dropdown = document.querySelector(".nav-dropdown");

navButton.addEventListener("click", (e) => {
  if (dropdown.classList.contains("is-hidden")) {
    dropdown.classList.remove("is-hidden");
  } else {
    dropdown.classList.add("is-hidden");
  }
});
