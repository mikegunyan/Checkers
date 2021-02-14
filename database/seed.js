const Board = require('./index.js');

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
  turn: 'black',
};

const testBoard = {
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
    ['o', 'redSquare', ''],
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
    [null, 'redSquare', 'selectBlack'],
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
  turn: 'red',
};

const makeBoard = () => {
  Board.create(newBoard)
    .then(() => process.exit())
    .catch((err) => console.log(err));
};

makeBoard();

const makeTestBoard = () => {
  Board.create(testBoard)
    .then(() => process.exit())
    .catch((err) => console.log(err));
};

makeTestBoard();