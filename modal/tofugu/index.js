function modal(outerModal) {
  // setTimeout(() => outerModal.classList.remove('hide'), 5000);

  const innerModal = outerModal.querySelector('.modal_inner');

  function handleClick(e) {
    console.log('listening');
    if (e.currentTarget === e.target) {
      console.log('');
      outerModal.classList.add('hide');
    }
  }

  outerModal.addEventListener('click', handleClick);
}

modal(document.querySelector('.modal_outer'));
