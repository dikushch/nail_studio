let body = document.querySelector('body');
let header = document.querySelector('.header');
let menuDrop = document.querySelector('.menu');
let brg = document.querySelector('.brg');
let dropLinks = document.querySelectorAll('.menu__link');
let menuPopupBtn = document.querySelector('.menu__btn');
let animateInView = document.querySelectorAll('[data-anim-inview]');

brg.addEventListener('click', () => {
  brg.classList.toggle('open');
  menuDrop.classList.toggle('open');
  body.classList.toggle('lock');
  header.classList.toggle('open');
});

for (let link of dropLinks) {
  link.addEventListener('click', () => {
    brg.classList.remove('open');
    menuDrop.classList.remove('open');
    body.classList.remove('lock');
    header.classList.remove('open');
  })
}

menuPopupBtn.addEventListener('click', () => {
  brg.classList.remove('open');
  menuDrop.classList.remove('open');
  header.classList.remove('open');
});

header.addEventListener('click', () => {
  if (event.target === header && header.classList.contains('open')) {
    brg.classList.remove('open');
    menuDrop.classList.remove('open');
    body.classList.remove('lock');
    header.classList.remove('open');
  }
});
// #####################################

const anchors = document.querySelectorAll('a[href^="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
// #####################################

function startAnim(element, scrollPosition) {
  let elementPosition = element.offsetTop;
  if (scrollPosition >= elementPosition && element.dataset.animInview === "false") {
    element.dataset.animInview = "true";
  }
}

animateInView.forEach(el => {
  startAnim(el, (window.innerHeight + window.scrollY - 40));
});

window.addEventListener('scroll', () => {
  let scrollPosition = window.innerHeight + window.scrollY - 40;
  animateInView.forEach(el => {
    startAnim(el, scrollPosition);
  });
});

// #####################################

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('[data-anim-scrolling]').forEach(function (el) {
  gsap.to(el, {
    y: 0,
    scrollTrigger: {
      trigger: '[data-anim-scrolling]',
      scrub: 0.8
    }
  });
});

// #####################################

const popupOpenBtn = document.querySelectorAll('.popup-open');
const popupCloseBtn = document.querySelector('.popup-close');
const popup = document.querySelector('.prices');

window.addEventListener("load", () => {
  setTimeout(() => {
    popup.dataset.preventOnLoad = 'false';
  }, 400)
});

popupOpenBtn.forEach((el) => {
  el.addEventListener('click', () => {
    popup.classList.add('open');
    body.classList.add('lock');
  });
});

popupCloseBtn.addEventListener('click', () => {
  popup.classList.remove('open');
  body.classList.remove('lock');
});

popup.addEventListener('click', () => {
  if (event.target === popup) {
    popup.classList.remove('open');
    body.classList.remove('lock');
  }
});
// #####################################