import {Menu} from './components/menu.js';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const menu = new Menu('nav', 'header__trigger');
menu.init();

const aboutSlider = new Swiper('.about__photos', {
  loop: true,
  navigation: {
    nextEl: '.about__control--next',
    prevEl: '.about__control--prev'
  },
  spaceBetween: 10
});

const participantsSlider = new Swiper('.participants__cards', {
  loop: true,
  navigation: {
    nextEl: '.participants__control--main-next',
    prevEl: '.participants__control--main-prev'
  },
  spaceBetween: 50
});

const participantsPhotosSlider = new Swiper('.participants__photos', {
  loop: true,
  direction: 'vertical',
  pagination: {
    el: '.participants__pagination',
    clickable: true,
    type: 'bullets'
  },
  navigation: {
    nextEl: '.participants__control--photos-next',
    prevEl: '.participants__control--photos-prev',
  },
});

const judgesSlider = new Swiper('.judges__cards', {
  loop: true,
  spaceBetween: 50,
  pagination: {
    el: '.judges__pagination',
    type: 'bullets',
    bulletElement: 'button',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet--active'
  }
})