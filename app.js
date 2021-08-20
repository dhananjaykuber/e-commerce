const nav = document.querySelector(".secondary");
const hamburger = document.querySelector(".hamburger");
let open = false;

function showNavbar() {
  if (open) {
    nav.style.left = "-100vw";
    hamburger.style.background = "url(/assets/hamburger.svg)";
    open = false;
  } else {
    nav.style.left = "0";
    hamburger.style.background = "url(/assets/times.svg)";
    hamburger.style.backgroundPosition = "center";
    hamburger.style.backgroundRepeat = "no-repeat";
    hamburger.style.backgroundSize = "cover";
    hamburger.style.height = "22px";
    hamburger.style.width = "23px";
    open = true;
  }
}
