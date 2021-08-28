// Select DOM Items
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');
var menuNav = document.querySelector('.menu-nav');
var menuBrand = document.querySelector('.menu-branding');
var navItems = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle('close');
  menu.classList.toggle('show');
  menuNav.classList.toggle('show');
  menuBrand.classList.toggle('show');
  navItems.forEach((item) => item.classList.toggle('show'));
}
