
// Header
// dynamically displaying the active class 
const links = document.querySelector('#nav');
const navLinks = links.querySelectorAll("a"); 
const currentURL = window.location.href;
navLinks.forEach((link) => {
    if (link.href === currentURL) {
  link.classList.add("current");
}
});
// Mobile Menu
// Open Navigation Menu
const burger = document.getElementById("burger");
const navMenu = document.querySelector(".links");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
// Close navigation menu when user selects a link
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  burger.classList.remove("active");
  navMenu.classList.remove("active");
}
