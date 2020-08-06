function modal(outerModal) {
  // setTimeout(() => outerModal.classList.remove('hide'), 5000);

  const innerModal = outerModal.querySelector('.modal_inner');
  const closeEl = document.querySelector('.modal_inner__close');
  const noThanksEl = document.querySelector('.modal_inner__no');

  function closeModal() {
    outerModal.classList.add('hide');
    yesScroll();
  }

  function handleClick(e) {
    console.log('listening');
    if (e.currentTarget === e.target) {
      closeModal();
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
  closeEl.addEventListener('click', closeModal);
  noThanksEl.addEventListener('click', closeModal);
}

modal(document.querySelector('.modal_outer'));
noScroll();
