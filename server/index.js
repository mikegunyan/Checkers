const express = require('express');
const path = require('path');
const Board = require('../database/index.js');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());

app.get('/boards', async (req, res) => {
  Board.find({})
  .then((data) => res.status(200).send(data))
  .catch((err) => res.send(err));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
