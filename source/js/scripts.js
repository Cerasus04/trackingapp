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

  //slider 1

const slides = document.querySelectorAll('.reviews__item'),
  prev = document.querySelector('.reviews__button--prev'),
  next = document.querySelector('.reviews__button--next');

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
  if(n > slides.length) {
    slideIndex =1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(item => item.style.display = 'none');

  slides[slideIndex - 1].style.display = 'block';

}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

prev.addEventListener('click', () => plusSlides(-1));
next.addEventListener('click', () => plusSlides(1));
