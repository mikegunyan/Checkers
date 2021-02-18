const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost/boardlist', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo'))
  .catch((err) => console.log(err));

const schema = new mongoose.Schema({
  id: Number,
  games: Array,
});

const Games = mongoose.model('Games', schema);

module.exports = db;
module.exports = Games;