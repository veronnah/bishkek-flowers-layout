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

const player = document.querySelectorAll('.video__section-player');

const loadPlayer = (event) => {
  const target = event.currentTarget, 
  iframe = document.createElement('iframe');
  iframe.src = 'http://www.youtube.com/embed/' + target.dataset.videoId + '?&autoplay=1&mute=1';
  iframe.setAttribute('frameborder', 0);
  target.classList.remove('btn-dis');
  if(target.children.length){
    target.replaceChild(iframe, target.firstElementChild);
  }
  else{
    target.appendChild(iframe)
  }
}
const config = {once: true};
Array.from(player).forEach(function(player){
  player.addEventListener('click', loadPlayer, config);
})


// cart menu 
const cartBtn = document.querySelector('.cart-btn');
const cartMenu = document.querySelector('.cart-menu');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const cartToggle = function() {
  cartMenu.classList.toggle('open');
  overlay.classList.toggle('open');
  body.classList.toggle('disable');
}

cartBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    cartToggle();

});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == cartMenu || cartMenu.contains(target);
    const its_btnMenu = target == cartBtn;
    const menu_is_active = cartMenu.classList.contains('open');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
      cartToggle();
    }
});

function closeModal() {
  cartMenu.classList.remove('open');
  overlay.classList.remove('open');
  body.classList.remove('disable');
}

//buy one click
let buyOneModal = document.querySelector('.buy__one_click-menu');
let buyBtn = document.getElementsByClassName('buy-btn');
let closeBuyBtn = document.getElementsByClassName('close-buy__one')[0];
let buyOverlay = document.querySelector('.buy-overlay');


for (var i = 0; i < buyBtn.length; i++) {
  buyBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
}

closeBuyBtn.addEventListener('click', function() {
  closeModalWindow();
})

function openModalWindow() {
  buyOneModal.classList.toggle('open');
  buyOverlay.classList.toggle('open');
  body.classList.toggle('disable');
}

function closeModalWindow() {
  buyOneModal.classList.remove('open');
  buyOverlay.classList.remove('open');
  body.classList.remove('disable');
}

window.onclick = function(event) {
  if (event.target == buyOverlay) {
    closeModalWindow();
  }
}