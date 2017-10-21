'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Board class used for minesweeper game
var Board = exports.Board = function () {
  // constructor
  function Board(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Board);

    // Instance properties
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  // getter method for player board


  _createClass(Board, [{
    key: 'flipTile',


    // Method to allow a user to flip a tile
    value: function flipTile(rowIndex, columnIndex) {
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

  }, {
    key: 'getNumberOfNeighborBombs',
    value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
      var _this = this;

      // var to store 8 possible iterations
      this._neighborOffset = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      // var to store number of rows which will be equal to the length of the bomb board
      this._numberOfRows = this._bombBoard.length;
      // var to store number of columns which will be equal to the length of the first bomb board element
      this._numberOfColumns = this._bombBoard[0].length;
      // var to store number of bombs
      this._numberOfBombs = 0;
      // iterator to identify bombs around user input
      this._neighborOffset.forEach(function (offset) {
        // var for the neighboring row of the inputed rowIndex, apply offset
        _this._neighborRowIndex = rowIndex + offset[0];
        // var for the neighboring column of the inputed columnIndex, apply offset
        _this._neighborColumnIndex = columnIndex + offset[1];
        // Check if tile is valid
        if (_this._neighborRowIndex >= 0 && _this._neighborRowIndex < _this._numberOfRows && _this._neighborColumnIndex >= 0 && _this._neighborColumnIndex < _this._numberOfColumns) {
          // Check if bomb in tile
          if (_this._bombBoard[_this._neighborRowIndex][_this._neighborColumnIndex] === 'B') {
            _this._numberOfBombs++; // Bomb found increment number of bombs
          }
        }
      });
      return this._numberOfBombs;
    }
    // Evaluate if there are safe tiles on the board

  }, {
    key: 'hasSafeTiles',
    value: function hasSafeTiles() {
      return this._numberOfTiles !== this._numberOfBombs;
    }

    // printBoard method

  }, {
    key: 'printBoard',
    value: function printBoard() {
      // use map() method on board to create new array
      // chain .join() methods to create board spaces and newlines
      // log to console
      console.log(this._playerBoard.map(function (row) {
        return row.join(' | ');
      }).join('\n'));
    }

    // Static method that will generate a blank board of a given size to hold the player's guesses

  }, {
    key: 'playerBoard',
    get: function get() {
      return this._playerBoard;
    }
  }], [{
    key: 'generatePlayerBoard',
    value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
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
    }

    // Static method that will dynamically generate a board with bombs placed in squares

  }, {
    key: 'generateBombBoard',
    value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
    }
  }]);

  return Board;
}();