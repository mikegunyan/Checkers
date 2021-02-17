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

app.post('/api/games', async (req, res) => {
  const board = req.body.board;
  const gameList = req.body.games;
  gameList.push(req.body.board.name)
  Board.create(board)
    .then(() => {
      Games.findOneAndUpdate({ id: 0 }, {
        games: gameList,
      })
      .then(() => res.sendStatus(204))
      .catch((err) => res.send(err));
    })
    .catch((err) => console.log(err));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
