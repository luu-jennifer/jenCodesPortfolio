//slide out menu
const menuButton = document.getElementById("menuButton");
const slideOutNav = document.getElementById("slideOutNav");
const menuClose = document.getElementById("menuClose");

const showSlideOutNav = () => slideOutNav.style.left = "0px";
const hideSlideOutNav = () => slideOutNav.style.left = "-50vw";

menuButton.addEventListener("click", showSlideOutNav);
menuClose.addEventListener("click", hideSlideOutNav);
window.addEventListener("mouseup", hideSlideOutNav);