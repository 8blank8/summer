"use strict";

let burger = document.querySelectorAll('.header__menu-burger'),
   menu = document.querySelector('.header__menu'),
   menuLinks = document.querySelector('.header__menu-links');

function showMenu() {
   burger.forEach(item => {
      item.classList.add('active__menu');
      item.classList.remove('close__menu');
   });
   menuLinks.classList.add('active__menu');
   menuLinks.classList.remove('close__menu');
   headerSearch.classList.add('active__menu');
   headerSearch.classList.remove('close__menu');

}

function closeMenu() {
   burger.forEach(item => {
      item.classList.add("close__menu");
      item.classList.remove('active__menu');
      item.classList.remove('active__close');
   });
   menuLinks.classList.add('close__menu');
   menuLinks.classList.remove('active__menu');


}
closeMenu();
menu.addEventListener('click', (event) => {
   const target = event.target;

   if (target && target.classList.contains('close__menu')) {
      showMenu();
      setTimeout(() => {
         burger.forEach(item => {
            item.classList.add('active__close');
         });
      }, 300);

   } else {
      closeMenu();
      headerSearch.classList.remove('active__menu');
      headerSearch.classList.add('close__menu');
   }
});

let headerSearch = document.querySelector('.header__search');
function headerInputMenu() {
   headerSearch.classList.add('search__input');
   headerSearch.classList.remove('search__output');
}
function headerOutputMenu() {
   headerSearch.classList.remove('search__input');
   headerSearch.classList.add('search__output');
}
headerOutputMenu();
console.log(window.innerWidth);
let windowWidth = window.innerWidth;
if (headerSearch.classList.contains('search__output') && windowWidth <= 600) {
   headerInputMenu();
} else {
   headerOutputMenu();
}

