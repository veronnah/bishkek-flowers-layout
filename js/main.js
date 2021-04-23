function catalogMenu() {
  let dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('down');
  if (dropdown.classList.contains('down')) {
    setTimeout(function () {
      dropdown.style.overflow = "visible";
    }, 500);
  } else {
    dropdown.style.overflow = "hidden";
  }
}

let searchBtn = document.querySelector('.header__nav-search');
let searchGroup = document.querySelector('.header-bottom__search-group');
let searchInput = document.querySelector('.header-bottom__search');
let closeBtn = document.querySelector('.close-search');
let body = document.querySelector('.body');
let toggleMenu = function () {
  searchInput.classList.toggle('active');
  searchGroup.classList.toggle('active');
  body.classList.toggle('disable');
  closeBtn.classList.toggle('active');
  console.log(closeBtn);
}

searchBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();

});

document.addEventListener('click', function (e) {
  const target = e.target;
  const its_menu = target == searchInput || searchInput.contains(target);
  const its_btnMenu = target == searchBtn;
  const menu_is_active = searchInput.classList.contains('active');

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});


let menuToggle = document.querySelector('.toggle');
let nav = document.querySelector('.menu-mobile__nav');

function openMenu() {
  menuToggle.classList.add('active');
  nav.classList.add('active');
}

function closeMenu() {
  let menuClose = document.querySelector('.menu-mobile__close');
  menuToggle.classList.remove('active');
  nav.classList.remove('active');
}

