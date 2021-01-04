const sliderEl = document.querySelector('.slider');

function slider(sliderEl) {
  console.log(sliderEl);
  const slides = sliderEl.querySelectorAll('.slide');
  let prev = sliderEl.querySelector('.prev');
  let current = sliderEl.querySelector('.current');
  let next = sliderEl.querySelector('.next');
  const leftArrow = sliderEl.querySelector('.left-arrow');
  const rightArrow = sliderEl.querySelector('.right-arrow');

  function moveForward() {
    // to next slide
    [prev, current, next] = [current, next, next.nextElementSibling];
    applyClasses();
  }

  function applyClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('prev');
      slide.classList.remove('next');
      slide.classList.remove('current');
    });

    prev.classList.add('prev');
    current.classList.add('current');
    next.classList.add('next');
  }

  rightArrow.addEventListener('click', moveForward);
}

slider(sliderEl);
