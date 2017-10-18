<<<<<<< HEAD
// Function that will generate a blank board of a given size to hold the player's guesses
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  // Initialize empty array to store the board
  let board = [];
  // loop to iterate over the number of rows
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    // Initialize empty array to store number of columns in each row
    let row = [];
    // loop to iterate over the number of columns
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
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
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  // Initialize empty array to store the board
  let board = [];
  // loop to iterate over the number of rows
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    // Initialize empty array to store number of columns in each row
    let row = [];
    // loop to iterate over the number of columns
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      // Append empty squares to the row array
      row.push(null);
    };
    // Append the row array to the board array
    board.push(row);
  };
  // bomb counter variable
  let numberOfBombsPlaced = 0;
  // while loop to generate random number to place bombs
  while (numberOfBombsPlaced < numberOfBombs) {
    // TODO: An important note: The code in your while loop has the potential to place bombs on top of already existing bombs.
    // This will be fixed when you learn about control flow.
    // Using Math.floor to round lower to integer
    // Using Math.random to generate a random number between 0 and numberOfRows
    // Generate random row index
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    // Generate random column index
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    // Place a bomb at the intersection of row index and column index
    board[randomRowIndex][randomColumnIndex] = 'B';
    // Increment number of bombs placed
    numberOfBombsPlaced++
  };

  // return the created board
  return board;
};

// printBoard function
const printBoard = board => {
  // use map() method on board to create new array
  // chain .join() methods to create board spaces and newlines
  // log to console
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

// Create playerBoard variable
const playerBoard = generatePlayerBoard(3, 4);

// Create bombBoard variable
const bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
=======
// printBoard function
const printBoard = board => {
  console.log('Current Board:');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

// Create board array
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];

// Log the board
console.log(printBoard(board));

// Modify array indexes with moves
board[0][1] = '1';
board[2][2] = 'B';

// Log the board after array changes
console.log(printBoard(board));
>>>>>>> e4315b8cba2c7b1a61849a485e1b247b9d132541
