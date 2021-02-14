const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost/boardlist', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo'))
  .catch((err) => console.log(err));

const schema = new mongoose.Schema({
  board: Array,
});

const Board = mongoose.model('Board', schema);

module.exports = db;
module.exports = Board;