const mongoose = require('mongoose');
const db = require('./index');

const schema = new mongoose.Schema({
  id: Number,
  username: String,
  password: String,
  salt: String,
});

const Users = mongoose.model('Users', schema);

module.exports = Users;
