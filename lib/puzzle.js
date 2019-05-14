
const hintButton = document.getElementById('show-hint');

hintButton.addEventListener('click',(event)=>{
  const hint = document.querySelector('.hint');
  hint.classList.toggle('active');
});

const tiles = document.querySelectorAll('#grid td');

tiles.forEach((tile)=>{
  tile.addEventListener('click',(event)=>{

    if (canMove(tile)){
      moveTile(tile);
      checkWin();
    } else {
      console.log('Não se move');
    }


  });
});

const canMove = (tile) => {
  const tileCol = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;

  const empty = document.querySelector('#grid .empty')
  const emptyCol = empty.cellIndex;
  const emptyRow = empty.parentElement.rowIndex;

  // console.log(`clicado col:${tileCol} row:${tileRow}`);
  // console.log(`empty col:${emptyCol} row:${emptyRow}`);

  return (tileCol === emptyCol && tileRow === emptyRow + 1) ||
         (tileCol === emptyCol && tileRow === emptyRow - 1) ||
         (tileCol === emptyCol - 1 && tileRow === emptyRow) ||
         (tileCol === emptyCol + 1 && tileRow === emptyRow);

}

const moveTile = (tile) => {
  const empty = document.querySelector('#grid .empty')
  empty.classList.remove('empty');
  tile.classList.add('empty');
  empty.innerText = tile.innerText;
  tile.innerText = '';
}

const checkWin = () => {
  const tds = document.querySelectorAll('#grid td');
  const order = Array.from(tds).map(e=> Number.parseInt(e.innerHTML));
  if (order.join('') === '123456789101112131415NaN') {
    alert('YOU WIN!');
  }
}





