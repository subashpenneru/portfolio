// Select DOM Items
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');
var menuNav = document.querySelector('.menu-nav');
var menuBrand = document.querySelector('.menu-branding');
var navItems = document.querySelectorAll('.nav-item');

// Set the initial state of menu
var showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle('close');
  menu.classList.toggle('show');
  menuNav.classList.toggle('show');
  menuBrand.classList.toggle('show');
  navItems.forEach((item) => item.classList.toggle('show'));

  showMenu = !showMenu;

  //   if (!showMenu) {
  //     menuBtn.classList.add('close');
  //     menu.classList.add('show');
  //     menuNav.classList.add('show');
  //     menuBrand.classList.add('show');
  //     navItems.forEach((item) => item.classList.add('show'));

  //     showMenu = true;
  //   } else {
  //     menuBtn.classList.remove('close');
  //     menu.classList.remove('show');
  //     menuNav.classList.remove('show');
  //     menuBrand.classList.remove('show');
  //     navItems.forEach((item) => item.classList.remove('show'));

  //     showMenu = false;
  //   }
}
