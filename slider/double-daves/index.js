function slider(sliderEl) {
  const slides = Array.from(sliderEl.querySelectorAll('.slide'));

  function initializeSlides() {
    if (!sliderEl.querySelector('.current')) {
      slides[0].classList.add('current');
      slides[slides.length - 1].classList.add('prev');
      slides[1].classList.add('next');
    }
  }

  function toNextSlide() {
    let current = document.querySelector('.current');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');

    current.classList.remove('current');
    next.classList.remove('next');
    prev.classList.remove('prev');

    [prev, current, next] = [
      current,
      next,
      next.nextElementSibling || slides[0],
    ];

    current.classList.add('current');
    next.classList.add('next');
    prev.classList.add('prev');
  }

  window.toNextSlide = toNextSlide;

  initializeSlides();
}

slider(document.querySelector('.slider'));
