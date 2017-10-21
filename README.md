# Minesweeper
[![Build Status](https://travis-ci.org/onenetworkguy/minesweeper.svg?branch=master)](https://travis-ci.org/onenetworkguy/minesweeper)

## Table of Contents

* **[Overview](#overview)**
* **[How to Play](#how-to-play)**
* **[Code Progression](#code-progression)**

## Overview

This is just the game minesweeper created in javascript. This repository is primarily designed for learning.

## How to Play

### Requirements

* Nodejs

### Install

1. `git clone git@github.com:onenetworkguy/minesweeper.git`
2. `cd minesweeper`
3. `npm install`

### Play

```
// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`
```

## Code Progression

Below is how the code for minesweeper progressed throughout the course:

* **[Day 4 Project](#day-4-project)**
* **[Day 7 Project](#day-7-project)**
* **[Day 10-11 Project](#day-10-11-project)**
* **[Day 14 Project](#day-14-project)**
* **[Day 17-18 Project](#day-17-18-project)**
* **[Day 20 Project](#day-20)**

### Day 4 Project
Manually created minesweeper board.

[Link to code](https://github.com/onenetworkguy/minesweeper/tree/day_4)

### Day 7 Project
Created a printBoard function.

[Link to code](https://github.com/onenetworkguy/minesweeper/tree/day_7)

### Day 10-11 Project
Created dynamically generated boards based on a given number of rows and columns. Dynamically generate a board with bombs placed.

[Link to code](https://github.com/onenetworkguy/minesweeper/tree/day_10_11)

### Day 14 Project
Added two functions. One to identify number of :bomb: adjacent to a tile and one to fliptiles :octocat:

[Link to code](https://github.com/onenetworkguy/minesweeper/tree/day_14)

### Day 17-18 Project
Refactored code to use classes. :100:

[Link to code](https://github.com/onenetworkguy/minesweeper/tree/day_17_18)

### Day 20 Project
Refactored code to be exportable.

[Board class](https://github.com/onenetworkguy/minesweeper/blob/master/src/board.js)
[Game class](https://github.com/onenetworkguy/minesweeper/blob/master/src/game.js)
