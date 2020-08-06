function modal(outerModal) {
  // setTimeout(() => outerModal.classList.remove('hide'), 5000);

  const innerModal = outerModal.querySelector('.modal_inner');

  function handleClick(e) {
    console.log('listening');
    if (e.currentTarget === e.target) {
      console.log('');
      outerModal.classList.add('hide');
      yesScroll();
    }
  }

  function noScroll() {
    document.body.style.overflow = 'hidden';
  }

  function yesScroll() {
    document.body.style.overflow = null;
  }
  noScroll();
  outerModal.addEventListener('click', handleClick);
}

modal(document.querySelector('.modal_outer'));
noScroll();
