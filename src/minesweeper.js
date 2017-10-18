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
    // Using Math.floor to round lower to integer
    // Using Math.random to generate a random number between 0 and numberOfRows
    // Generate random row index
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    // Generate random column index
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    // Flow control to evaluate if a bomb exists or not in the board space
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      // Place a bomb at the intersection of row index and column index
      board[randomRowIndex][randomColumnIndex] = 'B';
      // Increment number of bombs placed
      numberOfBombsPlaced++
    }
  };

  // return the created board
  return board;
};

// Function to get the number of bombs adjacent to the flipped tile
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  // var to store 8 possible iterations
  const neighborOffset = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
  // var to store number of rows which will be equal to the length of the bomb board
  const numberOfRows = bombBoard.length;
  // var to store number of columns which will be equal to the length of the first bomb board element
  const numberOfColumns = bombBoard[0].length;
  // var to store number of bombs
  let numberOfBombs = 0;
  // iterator to identify bombs around user input
  neighborOffset.forEach(offset => {
    // var for the neighboring row of the inputed rowIndex, apply offset
    const neighborRowIndex = rowIndex + offset[0];
    // var for the neighboring column of the inputed columnIndex, apply offset
    const neighborColumnIndex = columnIndex + offset[1];
    // Check if tile is valid
    if (neighborRowIndex >= 0
      && neighborRowIndex < numberOfRows
      && neighborColumnIndex >= 0
      && neighborColumnIndex < numberOfColumns) {
        // Check if bomb in tile
        if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++; // Bomb found increment number of bombs
        }
      }
  });
  return numberOfBombs;
};

// Function to allow a user to flip a tile
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  // Check if tile is not empty
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    // Inform player tile has been flipped
    return 'This tile has already been flipped!'
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
