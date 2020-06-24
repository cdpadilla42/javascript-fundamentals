const cardsCollection = document.querySelector('.cards');

function CardsCollection(collection) {
  const buttons = Array.from(collection.querySelectorAll('button'));
  const modal = document.querySelector('.modal_outer');

  function openModal() {
    modal.classList.add('open');
  }

  function closeModal() {
    modal.classList.remove('open');
  }

  function handleOutsideClick(e) {
    if (!e.target.closest('.modal_inner')) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape') closeModal();
  }

  // Event Listeners
  buttons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  modal.addEventListener('click', handleOutsideClick);

  window.addEventListener('keyup', handleKeyUp);
}

CardsCollection(cardsCollection);
