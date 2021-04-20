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

function openSearch() {
  let searchBtn = document.querySelector('.header__nav-search');
  let searchGroup = document.querySelector('.header-bottom__search-group');
  let searchInput = document.querySelector('.header-bottom__search');
  let body = document.querySelector('.body');
  searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    searchGroup.classList.toggle('active');
    body.classList.toggle('disable');
  });

}

openSearch();
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