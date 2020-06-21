function Picross(grid) {
  let selectedSquares = new Array(25).fill(false, 0, 25);
  console.log(selectedSquares);
  const squares = Array.from(grid.querySelectorAll('.grid-container .square'));
  const modal = document.querySelector('.modal');
  const button = grid.querySelector('button');

  let solution = [
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    true,
  ];

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

  function saveSquareSelection(i) {
    if (!selectedSquares[i]) return selectedSquares.splice(i, 1, true);
    selectedSquares.splice(i, 1, false);
  }

  function fillSquare(square) {
    square.classList.add('selected');
    saveSquareSelection(square.dataset.sq);
  }

  function unFillSquare(square) {
    square.classList.remove('selected');
    saveSquareSelection(square.dataset.sq);
  }

  function handleKeyUp(e) {
    if (e.key === 'Enter') handleSquareClick(e.currentTarget);
    if (e.key === 'Escape') closeModal();
  }

  function handleSquareClick(s) {
    if (s.matches('.selected')) return unFillSquare(s);
    fillSquare(s);
  }

  function checkSolution() {
    JSON.stringify(selectedSquares) === JSON.stringify(solution)
      ? console.log('win!')
      : console.log('lose');
    console.log(selectedSquares);
    console.log(solution);
  }

  // Event Listeners

  button.addEventListener('click', checkSolution);

  squares.forEach((s) => {
    s.addEventListener('click', () => handleSquareClick(s));
  });

  squares.forEach((s) => {
    s.addEventListener('keyup', (e) => handleKeyUp(e));
  });
}

const picross1 = Picross(document.querySelector('.picross1'));
const picross2 = Picross(document.querySelector('.picross2'));
