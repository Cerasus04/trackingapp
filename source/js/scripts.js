const menuOpen = document.querySelectorAll(".btn-js");
const headerNav = document.querySelector(".header__nav");
const menuClosed = document.querySelector(".nav__toggle-closed");

function show() {
  headerNav.classList.remove("nav--closed");
  headerNav.classList.add("nav--opened");
}

function hide() {
  if (headerNav.classList.contains("nav--opened")) {
    headerNav.classList.remove("nav--opened");
    headerNav.classList.add("nav--closed");
  }
}

for (let i = 0; i < menuOpen.length; i++) {
  menuOpen[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    show();
  });
}

window.addEventListener("keydown", function () {
  if (event.keyCode === 27) {
    hide();
  }
});

menuClosed.addEventListener("click", function (evt) {
  evt.preventDefault();
  hide();
});
