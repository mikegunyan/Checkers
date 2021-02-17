const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost/boardlist', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo'))
  .catch((err) => console.log(err));

const schema = new mongoose.Schema({
  name: String,
  board: Array,
  black: Number,
  red: Number,
  turn: String,
  autoJumpRed: Boolean,
  autoJumpBlack: Boolean,
  playerOne: String,
  playerTwo: String,
});

const Board = mongoose.model('Board', schema);

module.exports = db;
module.exports = Board;