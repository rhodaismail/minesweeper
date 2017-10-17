'use strict';

// Constant for minesweeper board. 3 columns 1 row
var blankline = '  |   |  ';

// Minesweeper board hardcoded.
console.log('This is what an empty board would look like:');
console.log(blankline);
console.log(blankline);
console.log(blankline);

// guessLine represents what the board will look like when a player guesses by
// "clicking" (selecting) the first square of this row.
var guessLine = '1 |   |  ';

// bombLine represents what the board will look like when a player
// clicks and reveals a bomb.
var bombLine = '  | B |  ';

// Example played minesweeper board
console.log('This is what a board with a guess and a bomb on it would look like:');
console.log(guessLine);
console.log(bombLine);
console.log(blankline);