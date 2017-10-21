// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`

import { Board } from './board';

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
