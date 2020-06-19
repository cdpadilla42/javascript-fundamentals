function Picross(grid) {
  const squares = Array.from(grid.querySelectorAll('.square'));

  function fillSquare(square) {
    square.classList.add('selected');
  }

  function unFillSquare(square) {
    square.classList.remove('selected');
  }

  function handleKeyUp(e) {
    if (e.key === 'Enter') handleSquareClick(e.currentTarget);
  }

  function handleSquareClick(s) {
    if (s.matches('.selected')) return unFillSquare(s);
    fillSquare(s);
  }

  squares.forEach((s) => {
    s.addEventListener('click', () => handleSquareClick(s));
  });

  squares.forEach((s) => {
    s.addEventListener('keyup', (e) => handleKeyUp(e));
  });
}

const picross1 = Picross(document.querySelector('.picross1'));
const picross2 = Picross(document.querySelector('.picross2'));
