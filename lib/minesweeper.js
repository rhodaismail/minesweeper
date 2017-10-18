'use strict';

// Function that will generate a blank board of a given size to hold the player's guesses
var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  // Initialize empty array to store the board
  var board = [];
  // loop to iterate over the number of rows
  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    // Initialize empty array to store number of columns in each row
    var row = [];
    // loop to iterate over the number of columns
    for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      // Append empty squares to the row array
      row.push(' ');
    };
    // Append the row array to the board array
    board.push(row);
  };
  // return the created board
  return board;
};

// Function that will dynamically generate a board with bombs placed in squares
var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  // Initialize empty array to store the board
  var board = [];
  // loop to iterate over the number of rows
  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    // Initialize empty array to store number of columns in each row
    var row = [];
    // loop to iterate over the number of columns
    for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      // Append empty squares to the row array
      row.push(null);
    };
    // Append the row array to the board array
    board.push(row);
  };
  // bomb counter variable
  var numberOfBombsPlaced = 0;
  // while loop to generate random number to place bombs
  while (numberOfBombsPlaced < numberOfBombs) {
    // Using Math.floor to round lower to integer
    // Using Math.random to generate a random number between 0 and numberOfRows
    // Generate random row index
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    // Generate random column index
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    // Flow control to evaluate if a bomb exists or not in the board space
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      // Place a bomb at the intersection of row index and column index
      board[randomRowIndex][randomColumnIndex] = 'B';
      // Increment number of bombs placed
      numberOfBombsPlaced++;
    }
  };

  // return the created board
  return board;
};

// Function to get the number of bombs adjacent to the flipped tile
var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) {
  // var to store 8 possible iterations
  var neighborOffset = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  // var to store number of rows which will be equal to the length of the bomb board
  var numberOfRows = bombBoard.length;
  // var to store number of columns which will be equal to the length of the first bomb board element
  var numberOfColumns = bombBoard[0].length;
  // var to store number of bombs
  var numberOfBombs = 0;
  // iterator to identify bombs around user input
  neighborOffset.forEach(function (offset) {
    // var for the neighboring row of the inputed rowIndex, apply offset
    var neighborRowIndex = rowIndex + offset[0];
    // var for the neighboring column of the inputed columnIndex, apply offset
    var neighborColumnIndex = columnIndex + offset[1];
    // Check if tile is valid
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
      // Check if bomb in tile
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++; // Bomb found increment number of bombs
      }
    }
  });
  return numberOfBombs;
};

// Function to allow a user to flip a tile
var flipTile = function flipTile(playerBoard, bombBoard, rowIndex, columnIndex) {
  // Check if tile is not empty
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    // Inform player tile has been flipped
    return 'This tile has already been flipped!';
    // Check if bomb in tile
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    // Place bomb on playerBoard
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    // Place number of bombs surrounding tile into tile space
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
};

// printBoard function
var printBoard = function printBoard(board) {
  // use map() method on board to create new array
  // chain .join() methods to create board spaces and newlines
  // log to console
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

// Create playerBoard variable
var playerBoard = generatePlayerBoard(3, 4);

// Create bombBoard variable
var bombBoard = generateBombBoard(3, 4, 5);

// Print player board
console.log('Player Board: ');
printBoard(playerBoard);

// Print bomb board
console.log('Bomb Board: ');
printBoard(bombBoard);

// Flip some tiles!
flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');
printBoard(playerBoard);