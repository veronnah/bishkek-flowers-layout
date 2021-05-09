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
  iframe.src = 'https://www.youtube.com/embed/' + target.dataset.videoId + '?&autoplay=1&mute=1';
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

// input number 
var spins = document.getElementsByClassName("spin");
for (var i = 0, len = spins.length; i < len; i++) {
    var spin = spins[i],
        span = spin.getElementsByTagName("span"),
        input = spin.getElementsByTagName("input")[0];
    
    input.onchange = function() { input.value = +input.value || 0; };
    span[0].onclick = function() { input.value = Math.max(0, input.value - 1); };
    span[1].onclick = function() { input.value -= -1; };
}

// accordeon

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.paddingBottom = '0px';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.paddingBottom = '10px';
    } 
  });
}

// PRICE RANGE
let priceRanges = document.querySelectorAll('.js-price-range');

priceRanges.forEach(el => {
  let downPriceInput = el.closest('.filter-price').querySelector('.js-price-down'),
  upPriceInput = el.closest('.filter-price').querySelector('.js-price-up'),
  inputs = [downPriceInput, upPriceInput];


  //get maxPrice for slider price
  const maxPrice = +upPriceInput.getAttribute('data-max');
  upPriceInput.value = maxPrice.toLocaleString() + ' p.';

  //Init price range slider
  noUiSlider.create(el, {
    range: {
      'min': 0,
      'max': maxPrice },

    behaviour: 'drag',
    connect: true,
    start: [0, maxPrice],
    step: 1 });


  //Update value after scroll pointer in slider
  el.noUiSlider.on('update', values => {
    let [downPrice, upPrice] = values;

    // downPrice = Number(downPrice).toLocaleString() + ' р.';
    // upPrice = Number(upPrice).toLocaleString() + ' р.';

    downPriceInput.value = downPrice;
    upPriceInput.value = upPrice;
  });

  //Change slider value after inputs change
  inputs.forEach(function (input, handle) {
    input.addEventListener('change', function () {
      let value = this.value;
      value = value.replace(/\s+/g, '');
      value = parseInt(value);

      el.noUiSlider.setHandle(handle, value);
    });
  });

});

//clear sliders value

let clearBtn = document.querySelector('.js-clear-sliders');

clearBtn.addEventListener('click', e => {
  let filterPrices = document.querySelectorAll('.filter-price');

  filterPrices.forEach(el => {
    let priceRange = el.querySelector('.js-price-range'),
    priceRangeInputs = el.querySelectorAll('.filter-price__flex-row input');

    priceRangeInputs.forEach(function (input, handle) {
      let maxPrice = handle ? input.getAttribute('data-max') : 0;

      priceRange.noUiSlider.setHandle(handle, maxPrice);
    });
  });
});