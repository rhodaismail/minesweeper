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
    // TODO: An important note: The code in your while loop has the potential to place bombs on top of already existing bombs.
    // This will be fixed when you learn about control flow.
    // Using Math.floor to round lower to integer
    // Using Math.random to generate a random number between 0 and numberOfRows
    // Generate random row index
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    // Generate random column index
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    // Place a bomb at the intersection of row index and column index
    board[randomRowIndex][randomColumnIndex] = 'B';
    // Increment number of bombs placed
    numberOfBombsPlaced++;
  };

  // return the created board
  return board;
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

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);