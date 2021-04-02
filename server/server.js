if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Board = require('../database/board');
const Games = require('../database/gamesList');
const Users = require('../database/users');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');

const initializePassport = require('../passport-config');
initializePassport(
  passport,
  email => Users.findOne({ email }).then(data => data),
  id => Users.findOne({ id }).then(data => data)
)

let user = {};

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });
/************************************************************/
// Authentication routes
/************************************************************/

app.get('/', checkAuthenticated, async (req, res) => {
  res.render('index.ejs', { name: req.user.userName });
  user = await req.user;
  setTimeout(() => {
    console.log(user)
  }, 1000)
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs');
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
}));

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs');
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    Users.create({
      id: Date.now().toString(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      userName: req.body.userName,
      password: hashedPassword
    });
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
});

app.delete('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
};

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
};


/************************************************************/
// Application routes
/************************************************************/

app.get('/user', (req, res) => {
  res.status(200).send({
    username: user.userName,
    id: user._id
  })

});

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

module.exports = app;
