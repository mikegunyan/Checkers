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
  playerOne: 'Player One',
  playerTwo: 'Player Two',
};

const testBoard = {
  name: 'Test One v Test Two',
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
    ['o', 'redSquare', 'selectBlack'],
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
    ['x', 'redSquare',  'selectRed'],
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
  black: 2,
  red: 2,
  turn: 'black',
  autoJumpRed: false,
  autoJumpBlack: true,
  playerOne: 'Test One',
  playerTwo: 'Test Two',
};

const gameList = {
  id: 0,
  games: ['Test One v Test Two'],
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