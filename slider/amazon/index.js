function slider(slider) {
  const slides = Array.from(slider.querySelectorAll('.slide'));
  let current = slider.querySelector('.current');
  let prev = slider.querySelector('.prev');
  let next = slider.querySelector('.next');

  function initializeSlider() {
    if (!current) {
      current = slides[0];
      current.classList.add('current');
      if (!prev || !next) {
        next = current.nextElementSibling;
        next.classList.add('next');
        prev = slides[slides.length - 1];
        prev.classList.add('prev');
      }
    }
  }

  function toNextSlide() {
    [prev, current, next] = [
      current,
      next,
      next.nextElementSibling || slides[0],
    ];

    slider.querySelector('.next').classList.remove('next');
    slider.querySelector('.current').classList.remove('current');
    slider.querySelector('.prev').classList.remove('prev');

    next.classList.add('next');
    current.classList.add('current');
    prev.classList.add('prev');
  }

  window.toNextSlide = toNextSlide;

  initializeSlider();
}

slider(document.querySelector('.slider'));
