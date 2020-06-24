const cardsCollection = document.querySelector('.cards');

function CardsCollection(collection) {
  const buttons = Array.from(collection.querySelectorAll('button'));
  const modal = document.querySelector('.modal_outer');

  function openModal(e) {
    const card = e.currentTarget.closest('.card');
    fillModal(card);
    modal.classList.add('open');
  }

  function closeModal() {
    modal.classList.remove('open');
  }

  function fillModal(card) {
    const imgSrc = card.querySelector('img').src;
    const title = card.querySelector('h2').textContent;
    let html = `<img src="${imgSrc}">
    <h2>${title}</h2>`;

    ``;
    let innerModal = modal.querySelector('.modal_inner');
    innerModal.innerHTML = html;
  }

  function handleOutsideClick(e) {
    const isOutside = !e.target.closest('.modal_inner');
    if (isOutside) {
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
