function Picross(grid) {
  let selectedSquares = new Array(25).fill(false, 0, 25);
  console.log(selectedSquares);
  const squares = Array.from(grid.querySelectorAll('.grid-container .square'));
  const modal = document.querySelector('.modal');
  const button = grid.querySelector('button');
  function openModal() {
    if (!modal.matches('.hide')) {
      console.info('modal already open');
      return;
    }
    modal.classList.remove('hide');

    // Modal Event Binding
    modal.addEventListener('click', handleClickOutside);
    window.addEventListener('keyup', handleKeyUp);
    modal
      .querySelector('.inner_modal span')
      .addEventListener('click', closeModal);
  }

  function closeModal() {
    modal.classList.add('hide');

    // Modal Event Un-binding
    modal.removeEventListener('click', handleClickOutside);
    window.removeEventListener('keyup', handleKeyUp);
    modal
      .querySelector('.inner_modal span')
      .removeEventListener('click', closeModal);
  }

  function handleClickOutside(e) {
    if (e.target == e.currentTarget) closeModal();
  }

  function fillSquare(square) {
    square.classList.add('selected');
    console.log(square.dataset.sq);
  }

  function unFillSquare(square) {
    square.classList.remove('selected');
  }

  function handleKeyUp(e) {
    if (e.key === 'Enter') handleSquareClick(e.currentTarget);
    if (e.key === 'Escape') closeModal();
  }

  function handleSquareClick(s) {
    if (s.matches('.selected')) return unFillSquare(s);
    fillSquare(s);
  }

  // Event Listeners

  button.addEventListener('click', openModal);

  squares.forEach((s) => {
    s.addEventListener('click', () => handleSquareClick(s));
  });

  squares.forEach((s) => {
    s.addEventListener('keyup', (e) => handleKeyUp(e));
  });
}

const picross1 = Picross(document.querySelector('.picross1'));
const picross2 = Picross(document.querySelector('.picross2'));
