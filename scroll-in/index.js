const activatorEl = document.querySelector('.activate_scroll');
const scrollInEl = document.querySelector('.scroll_in');

const obOptions = {
  // root: document.body,
  threshold: 1.0,
};

function handleIntersection(e) {
  const ratio = e[0].intersectionRatio;
  if (ratio > 0) {
    scrollInEl.classList.remove('off_screen');
    ob.unobserve(activatorEl);
  } else {
    scrollInEl.classList.add('off_screen');
  }
}

const ob = new IntersectionObserver(handleIntersection, obOptions);
ob.observe(activatorEl);
