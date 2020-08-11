function slider(sliderEl) {
  const slides = Array.from(sliderEl.querySelectorAll('.slide'));
  const leftArrow = document.querySelector('.left_arrow');
  const rightArrow = document.querySelector('.right_arrow');
  console.log('left arrow', leftArrow);
  console.log('right arrow', rightArrow);

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

  function toPrevSlide() {
    let current = document.querySelector('.current');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');

    current.classList.remove('current');
    next.classList.remove('next');
    prev.classList.remove('prev');

    [prev, current, next] = [
      prev.previousElementSibling || slides[slides.length - 1],
      prev,
      current,
    ];

    current.classList.add('current');
    next.classList.add('next');
    prev.classList.add('prev');
  }

  function handleKey(e) {
    const key = e.key;
    if (key === 'ArrowLeft') toPrevSlide();
    if (key === 'ArrowRight') toNextSlide();
  }

  initializeSlides();

  leftArrow.addEventListener('click', toPrevSlide);
  rightArrow.addEventListener('click', toNextSlide);
  window.addEventListener('keyup', handleKey);
}

slider(document.querySelector('.slider'));
