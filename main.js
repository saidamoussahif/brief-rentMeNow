console.log("hello world")

const navouvrirBtn = document.querySelector(".ouvrir");
const navfermerBtn = document.querySelector(".fermer");
const mobileNav = document.querySelector(".mobile");

const handeNavClick = (e) => {
  mobileNav.classList.toggle("mobile--ouvrir");
};


navouvrirBtn.addEventListener("click", handeNavClick);
navfermerBtn.addEventListener("click", handeNavClick);