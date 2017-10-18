// Game class - "main"
class Game {
  // constructor
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    // Instantiate the board
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  // Method to make a move
  playMove(rowIndex, columnIndex) {
    // Call flipTile method on instances board
    this._board.flipTile(rowIndex, columnIndex);
    // Evaluate if the flipped tile contained a bomb
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      // Notify player they have lost
      console.log('You hit a bomb! Game over!');
      // Print the board with the bomb hit
      this._board.printBoard();
    // Evaluate if the board has no safe tiles. If no more safe tiles, player has won
  } else if (this._board.hasSafeTiles() === false) {
      return 'You have won!';
    // Continue play
    } else {
      console.log('Current Board:');
      this._board.printBoard();
    }
  }
}

// Board class used for minesweeper game
class Board {
  // constructor
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    // Instance properties
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  // getter method for player board
  get playerBoard() {
    return this._playerBoard;
  }

  // Method to allow a user to flip a tile
  flipTile(rowIndex, columnIndex) {
    // Check if tile is not empty
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      // Inform player tile has been flipped
      console.log('This tile has already been flipped!');
    // Check if bomb in tile
  } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      // Place bomb on playerBoard
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      // Place number of bombs surrounding tile into tile space
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    // Decrement number of blank tiles
    this._numberOfTiles--;
  }

  // Method to get the number of bombs adjacent to the flipped tile
  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    // var to store 8 possible iterations
    this._neighborOffset = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
    // var to store number of rows which will be equal to the length of the bomb board
    this._numberOfRows = this._bombBoard.length;
    // var to store number of columns which will be equal to the length of the first bomb board element
    this._numberOfColumns = this._bombBoard[0].length;
    // var to store number of bombs
    this._numberOfBombs = 0;
    // iterator to identify bombs around user input
    this._neighborOffset.forEach(offset => {
      // var for the neighboring row of the inputed rowIndex, apply offset
      this._neighborRowIndex = rowIndex + offset[0];
      // var for the neighboring column of the inputed columnIndex, apply offset
      this._neighborColumnIndex = columnIndex + offset[1];
      // Check if tile is valid
      if (this._neighborRowIndex >= 0
        && this._neighborRowIndex < this._numberOfRows
        && this._neighborColumnIndex >= 0
        && this._neighborColumnIndex < this._numberOfColumns) {
          // Check if bomb in tile
          if (this._bombBoard[this._neighborRowIndex][this._neighborColumnIndex] === 'B') {
            this._numberOfBombs++; // Bomb found increment number of bombs
          }
        }
    })
    return this._numberOfBombs;
  }
  // Evaluate if there are safe tiles on the board
  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }

  // printBoard method
  printBoard() {
    // use map() method on board to create new array
    // chain .join() methods to create board spaces and newlines
    // log to console
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  }

  // Static method that will generate a blank board of a given size to hold the player's guesses
  static generatePlayerBoard(numberOfRows, numberOfColumns) {
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
  }

  // Static method that will dynamically generate a board with bombs placed in squares
  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
  }
}

const g = new Game(3, 3, 3);

g.playMove(2, 1);
