
// Get a reference to the custom CSS page loader
const loader = document.querySelector('.loader');
const mainpage = document.querySelector('.display');

// Hide the loader after 3 seconds using setTimeout()
setTimeout(() => {
  loader.style.display = 'none';
  mainpage.style.display = 'block';
}, 5800);

// hero slider effect
var hero_s = $(".hero__slider");
hero_s.owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  dots: true,
  nav: true,
  navText: ["<span class='arrow_carrot-left'></span>", "<span class='arrow_carrot-right'></span>"],
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  smartSpeed: 1200,
  autoHeight: false,
  autoplay: true,
  mouseDrag: false
});
