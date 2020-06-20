function Picross(grid) {
  console.log(grid);
  const squares = Array.from(grid.querySelectorAll('.grid-container .square'));
  const modal = document.querySelector('.modal');
  function openModal() {
    if (!modal.matches('.hide')) {
      console.info('modal already open');
      return;
    }
  }

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
