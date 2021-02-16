const Board = require('./index.js');
const Games = require('./gamesIndex.js');

const newBoard = {
  name: 'newBoard',
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
  black: 12,
  red: 12,
  turn: 'black',
  autoJumpRed: false,
  autoJumpBlack: false,
};

const testBoard = {
  name: 'testOne',
  board: [
    [[null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    [null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    [null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    [null, 'redSquare', ''],
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
    ['x', 'redSquare',  'selectRed'],
    [null, 'blackSquare', ''],
    [null, 'redSquare', ''],
    [null, 'blackSquare', '']],

    [[null, 'blackSquare', ''],
    [null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    ['o', 'redSquare', 'selectBlack'],
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
    [null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    [null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    [null, 'redSquare', ''],
    [null, 'blackSquare', ''],
    [null, 'redSquare', '']],
  ],
  black: 1,
  red: 1,
  turn: 'black',
  autoJumpRed: false,
  autoJumpBlack: true,
};

const gameList = {
  games: ['testOne'],
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

const makeGameList = () => {
  Games.create(gameList)
    .then(() => process.exit())
    .catch((err) => console.log(err));
};

makeGameList();