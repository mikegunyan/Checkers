const mongoose = require('mongoose');
const db = require('./index');

const schema = new mongoose.Schema({
  id: Number,
  games: Array,
});

const Games = mongoose.model('Games', schema);

module.exports = Games;
