const mongoose = require('mongoose');
const db = require('./index');

const schema = new mongoose.Schema({
  id: Number,
  hash: String,
  userId: Number,
});

const Sessions = mongoose.model('Sessions', schema);

module.exports = Sessions;
