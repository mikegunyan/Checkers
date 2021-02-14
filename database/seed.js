const Board = require('./index.js');

const x = 'x';
const o = 'o';
const newBoard = {
  board: [
    [['x', 'redSquare','selectRed'],
    [null, 'blackSquare', ''],
    ['x', 'redSquare', 'selectRed'],
    [null, 'blackSquare', ''],
    ['x', 'redSquare', 'selectRed'],
    [null, 'blackSquare', ''],
    ['x', 'redSquare', 'selectRed'],
    [null, 'blackSquare', '']],

    [[null, 'blackSquare', ''],
    ['x', 'redSquare', 'selectRed'],
    [null, 'blackSquare', ''],
    ['x', 'redSquare', 'selectRed'],
    [null, 'blackSquare', ''],
    ['x', 'redSquare', 'selectRed'],
    [null, 'blackSquare', ''],
    ['x', 'redSquare', 'selectRed']],

    [['x', 'redSquare', 'selectRed'],
    [null, 'blackSquare', ''],
    ['x', 'redSquare',  'selectRed'],
    [null, 'blackSquare', ''],
    ['x', 'redSquare',  'selectRed'],
    [null, 'blackSquare', ''],
    ['x', 'redSquare',  'selectRed'],
    [null, 'blackSquare', '']],

    [[null, 'blackSquare', ''],
    [null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    [null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    [null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    [null, 'redSquare', '']],

    [[null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    [null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    [null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    [null, 'redSquare', ''],
    [null, 'blackSquare', '']],

    [[null, 'blackSquare', ''],
    ['o', 'redSquare', 'selectBlack'],
    [null, 'blackSquare', ''],
    ['o', 'redSquare', 'selectBlack'],
    [null, 'blackSquare', ''],
    ['o', 'redSquare',  'selectBlack'],
    [null, 'blackSquare', ''],
    ['o', 'redSquare', 'selectBlack']],

    [['o', 'redSquare', 'selectBlack'],
    [null, 'blackSquare', ''],
    ['o', 'redSquare', 'selectBlack'],
    [null, 'blackSquare', ''],
    ['o', 'redSquare', 'selectBlack'],
    [null, 'blackSquare', ''],
    ['o', 'redSquare', 'selectBlack'],
    [null, 'blackSquare', '']],

    [[null, 'blackSquare', ''],
    ['o', 'redSquare', 'selectBlack'],
    [null, 'blackSquare', ''],
    ['o', 'redSquare', 'selectBlack'],
    [null, 'blackSquare', ''],
    ['o', 'redSquare', 'selectBlack'],
    [null, 'blackSquare', ''],
    ['o', 'redSquare', 'selectBlack']],
  ],
};

const makeBoard = () => {
  Board.create(newBoard)
    .then(() => process.exit())
    .catch((err) => console.log(err));
};

makeBoard();