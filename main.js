const menuBtn = document.querySelector(".menu");
const closeMenu = document.querySelector(".times");
const navMenu = document.querySelector(".nav_links");

const changeNavbarColor = () => {
  if (window.scrollY >= 580) {
    document.getElementById("nav").classList.add("scrolled");
    document.getElementById("logo").classList.add("scrolled");
    menuBtn.style.color = "#0d0d0d";
  } else {
    document.getElementById("nav").classList.remove("scrolled");
    document.getElementById("logo").classList.remove("scrolled");
    menuBtn.style.color = "#f5f5f5";
  }
};

window.addEventListener("scroll", changeNavbarColor);

menuBtn.addEventListener("click", function () {
  menuBtn.style.display = "none";
  closeMenu.style.display = "block";
  navMenu.style.display = "flex";
});
closeMenu.addEventListener("click", function () {
  closeMenu.style.display = "none";
  navMenu.style.display = "none";
  menuBtn.style.display = "block";
});
