function Slider(slider) {
  // DO this in three functions!
  let current;
  let next;
  let prev;
  const slides = document.querySelector('.slides');
  const prevBttn = slider.querySelector('.prevBttn');
  const nextBttn = slider.querySelector('.nextBttn');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
  }
  function addClassNames() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    const classesToRemove = ['prev', 'next', 'current'];
    current.classList.remove(...classesToRemove);
    prev.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === 'back') {
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    addClassNames();
  }

  // Event Listeners
  nextBttn.addEventListener('click', move);
  prevBttn.addEventListener('click', () => move('back'));

  // Constructor
  startSlider();
  addClassNames();
}

const mySlider = Slider(document.querySelector('.slider'));
