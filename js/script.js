let body = document.querySelector('body');
let menuDrop = document.querySelector('.menu');
let brg = document.querySelector('.brg');
let dropLinks = document.querySelectorAll('.menu__link');
let menuPopupBtn = document.querySelector('.menu__btn');

brg.addEventListener('click', () => {
  brg.classList.toggle('open');
  menuDrop.classList.toggle('open');
  body.classList.toggle('lock');
});

for (let link of dropLinks) {
  link.addEventListener('click', () => {
    brg.classList.remove('open');
    menuDrop.classList.remove('open');
    body.classList.remove('lock');
  })
}

menuPopupBtn.addEventListener('click', () => {
  brg.classList.remove('open');
  menuDrop.classList.remove('open');
});

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
gsap.registerPlugin(ScrollTrigger);

gsap.matchMedia().add('(min-width: 1025px)', () => {
  gsap.utils.toArray('.works__item').forEach(function (el) {
    gsap.to(el, {
      y: el.dataset.y,
      scrollTrigger: {
        trigger: '.works__items',
        scrub: 0.4
      }
    });
  });
});
// #####################################
const mediaQueryList = window.matchMedia('(max-width: 1024px)');
let swiper;

if (mediaQueryList.matches) {
  swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
  });
}

mediaQueryList.addEventListener('change', (evt) => {
  if (evt.matches) {
    swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
    });
  } else {
    if (document.querySelector('.swiper-initialized')) {
      swiper.destroy();
    }
  }
});
// #####################################
const popupOpenBtn = document.querySelectorAll('.popup-open');
const popupCloseBtn = document.querySelector('.popup-close');
const popup = document.querySelector('.prices');

popupOpenBtn.forEach((el) => {
  el.addEventListener('click', () => {
    popup.classList.add('open');
    body.classList.add('lock');
    gsap.from(popup, {
      opacity: 0,
      scale: 0,
      duration: 0.2,
    })
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