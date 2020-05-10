document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    // row 1
    {
      row: 0,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 0,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    // row 2
    {
      row: 1,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 1,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    // row 3
    {
      row: 2,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 3,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    // row 4
    {
      row: 3,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 3,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 3,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 3,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    }
  ] 
}

function startGame () {
  for (let i = 0; i < board['cells'].length; i++){
    var cellPlaceHldr = board.cells[i]
    board.cells[i].surroundingMines = countSurroundingMines (cellPlaceHldr);
  }

  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  let hasWon = false;
  for (let i = 0; i < board['cells'].length; i++){
    if (board.cells[i].isMine === true && 
      board.cells[i].isMarked === true) {
      hasWon = true;
    } else if (board.cells[i].isMine === true && 
      board.cells[i].isMarked === false) {
      hasWon = false;
    } else if (board.cells[i].hidden === true) {
      hasWon = false;
    }
  }
  if (hasWon === true) {
    lib.displayMessage('You win!');
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  let row = cell.row;
  let col = cell.col;
  var surroundingCells = getSurroundingCells(row, col);
  let num = surroundingCells.filter(isMine);

  return num.length;

  function isMine(value){

    let count = 0;
    if (value.isMine === true) {
      count += 1;
    }
    return count;
  } 
  // It will return cell objects in an array. You should loop through 
  // them, counting the number of times `cell.isMine` is true.

}

