const navBtn = document.querySelector('.nav__btn');
const navMenu = document.querySelector('.nav-menu');
let navOpen = false;

const btnLike = document.querySelector('.place__like-icon');

navBtn.addEventListener('click', function () {
  if (navOpen) {
    navBtn.classList.remove('nav__btn--open');
    navMenu.classList.remove('nav-menu--open');
    navOpen = false;
  } else {
    navBtn.classList.add('nav__btn--open');
    navMenu.classList.add('nav-menu--open');
    navOpen = true;
  }
});

btnLike.addEventListener('click', function () {
  if (btnLike.classList.contains('place__like-icon--fill')) {
    btnLike.classList.remove('place__like-icon--fill');
  } else {
    btnLike.classList.add('place__like-icon--fill');
  }
});
