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

// sticky nav
window.onscroll = () => {
  modifyNav();
  modifyHighlight();
};

const navbar = document.querySelector(".site-nav");
const sticky = navbar.offsetTop;

const modifyNav = () => {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// change highlight
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

const modifyHighlight = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY === 0) {
      current = "welcome";
    }
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    const childNode = li.childNodes[0];

    childNode.classList.remove("active");

    if (li.textContent.toLowerCase() === current) {
      childNode.classList.add("active");
    }
  });
};
