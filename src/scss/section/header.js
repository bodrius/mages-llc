if (window.innerWidth >= 768) {
  let slides = document.querySelectorAll('.slider .slide');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 3000);

  function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
  }
}


if (window.innerWidth >= 1200) {
  let slides = document.querySelectorAll('.sliders .slide');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 3000);

  function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
  }
}


if (window.innerWidth < 768) {
  let slides = document.querySelectorAll('#slides .slide');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 3000);

  function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
  }
}

const getId = document.querySelector('#modal');
const modal = document.querySelector('.modal-box');
const buttonClose = document.querySelector('.close__modal');
buttonClose.addEventListener('click', closeModal);
getId.addEventListener('click', showModal);

function showModal() {
  modal.classList.remove('close-modal');
  modal.classList.add('toggle-modal');
}

function closeModal() {
  modal.classList.toggle('toggle-modal');
  modal.classList.add('close-modal');
}

const link = document.querySelectorAll('.nav-list-item');
const arr = Array.from(link);

function closeMenu(array) {
  array.map(tag =>
    tag.addEventListener('click', () => {
      modal.classList.toggle('toggle-modal');
      modal.classList.add('close-modal');
    }),
  );
}
closeMenu(arr);
