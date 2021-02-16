const express = require('express');
const path = require('path');
const Board = require('../database/index.js');
const Games = require('../database/gamesIndex.js');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());

app.get('/api/boards/:name', async (req, res) => {
  Board.findOne({
    name: req.params.name,
  })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
});

app.get('/api/games', async (req, res) => {
  Games.find({})
  .then((data) => res.status(200).send(data))
  .catch((err) => res.send(err));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
