document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
// var board = {
//   cells: [
//     // row 1
//     {
//       row: 0,
//       col: 0,
//       isMine: false, 
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     {
//       row: 0,
//       col: 1,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     {
//       row: 0,
//       col: 2,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     {
//       row: 0,
//       col: 3,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     // row 2
//     {
//       row: 1,
//       col: 0,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     {
//       row: 1,
//       col: 1,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     {
//       row: 1,
//       col: 2,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     {
//       row: 1,
//       col: 3,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     // row 3
//     {
//       row: 2,
//       col: 0,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     {
//       row: 2,
//       col: 1,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     {
//       row: 2,
//       col: 2,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     {
//       row: 2,
//       col: 3,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     // row 4
//     {
//       row: 3,
//       col: 0,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     {
//       row: 3,
//       col: 1,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     {
//       row: 3,
//       col: 2,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     },
//     {
//       row: 3,
//       col: 3,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//       surroundingMines: 0
//     }
//   ] 
// }


// Function to create the individual board objects
function cellCreator(cellRow, cellCol) {
  return {
    row: cellRow,
    col: cellCol,
    isMine: Math.random() > 0.2 ? false : true,
    isMarked: false,
    hidden: true,
  }
}

// Function to pass individual board objects into board.cells array
function boardCreator (xyAxis) {

  var tempArray = [];
  
  i = 0;

  for (let y = 0; y < xyAxis; y++) {
    for (let x = 0; x < xyAxis; x++) {
      tempArray[i] = cellCreator(y, x);
      i++;
    }
  }
  return tempArray;
}

let board;
let difficulty = 6;






function startGame () {

  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);


  board = { cells: boardCreator(difficulty)};

  // setMines();

  for (let i = 0; i < board['cells'].length; i++){
    var cellPlaceHldr = board.cells[i]
    board.cells[i].surroundingMines = countSurroundingMines (cellPlaceHldr);
  }

  


  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}



// function setMines () {
//   for (let i = 0; i < board['cells'].length; i++){
//     var value = 0;
//     value = Math.floor(Math.random() * 10);
//     if (value < 2) {
//       board['cells'][i].isMine = true;
//     } 
//   }
// }

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (let i = 0; i < board['cells'].length; i++){
    
    if ((board.cells[i].isMine === true) && 
      (board.cells[i].isMarked === false)) {
      return;
    } else if ((board.cells[i].hidden === true) && (board.cells[i].isMine === false)) {
      return;
    }
    // else if (board.cells[i].isMine === true && 
    //   board.cells[i].isMarked === true) {
    //   hasWon = true;
    // } 
    
    // if (board.cells[i].isMine === true && 
    //   board.cells[i].isMarked === true) {
    //   hasWon = true;
    // } else if (board.cells[i].isMine === true && 
    //   board.cells[i].isMarked === false) {
    //   hasWon = false;
    // } else if (board.cells[i].hidden === true) {
    //   hasWon = false;
    // }
  }
  lib.displayMessage('You win!');
  let sound = new Audio("./sound/heavenly.mp3");
    sound.volume = 0.4;
    sound.play();
  

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

    //var count = 0

  var surroundingCells = getSurroundingCells(cell.row, cell.col);

// // for (var i = 0; surrounding.length; i++) {
//     var cell = surrounding[i]

//     if (cell.isMine) {
//         count++
//     }
// }


// return count;

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

function gameReset () {
  location.reload();
}