'use strict';

// printBoard function
var printBoard = function printBoard(board) {
  console.log('Current Board:');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

// Create board array
var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

// Log the board
console.log(printBoard(board));

// Modify array indexes with moves
board[0][1] = '1';
board[2][2] = 'B';

// Log the board after array changes
console.log(printBoard(board));