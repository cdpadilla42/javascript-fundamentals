function slider(sliderEl) {
  const slides = Array.from(sliderEl.querySelectorAll('.slide'));

  function initializeSlides() {
    if (!sliderEl.querySelector('.current')) {
      slides[0].classList.add('current');
      slides[slides.length - 1].classList.add('prev');
      slides[1].classList.add('next');
    }
  }

  initializeSlides();
}

slider(document.querySelector('.slider'));
