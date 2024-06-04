const carousel = document.querySelector('.carousel');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const buttons = document.querySelectorAll('.carousel-button');

let currentSlide = 0;

function showSlide(n) {
  carouselItems.forEach((item, index) => {
    item.style.display = index === n ? 'block' : 'none';
  });
  currentSlide = n;
}

buttons[0].addEventListener('click', () => {
  currentSlide = currentSlide === 0 ? carouselItems.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

buttons[1].addEventListener('click', () => {
    currentSlide = currentSlide === 0 ? carouselItems.length + 1 : currentSlide + 1;
    showSlide(currentSlide);
  });
