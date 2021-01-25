const Board = require('./index.js');

const x = 'x';
const o = 'o';
const newBoard = {
  board: [
    [['x', 1], null, ['x', 2], null, ['x', 3], null, ['x', 4], null],
    [null, ['x', 5], null, ['x', 6], null, ['x', 7], null, ['x', 8]],
    [['x', 9], null, ['x', 10], null, ['x', 11], null, ['x', 12], null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, ['o', 1], null, ['o', 2], null, ['o', 3], null, ['o', 4]],
    [['o', 5], null, ['o', 6], null, ['o', 7], null, ['o', 8], null],
    [null, ['o', 9], null, ['o', 10], null, ['o', 11], null, ['o', 12]],
  ],
};

const makeBoard = () => {
  Board.create(newBoard)
    .then(() => process.exit())
    .catch((err) => console.log(err));
};

makeBoard();