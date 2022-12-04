var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let Session = require('express-session');
let passport = require('passport');
let passportlocal = require('passport-local');
let localStrategy = passportlocal.Strategy;
let flash = require('connect-flash');


var app = express();

//config mongoDB
let mongoose = require('mongoose');
let DB = require('./db');

//point mongoose to DB URI

mongoose.connect(DB.URI);
let mongoDB = mongoose.connection;
mongoDB.on('error',console.error.bind(console,'Connection Error'));
mongoDB.once('open',()=>{
  console.log('connected to MongoDB');
});

//Express session
app.use(Session({
  secret: "SomeSecret",
  saveUninitialized: false,
  resave:false

}));


//initialize the flash
app.use(flash());

//initialize the passport
app.use(passport.initialize());
app.use(passport.session());

let userModel = require('../models/user');
let User = userModel.User;

// implement a User Authrntication
passport.use(User.createStrategy());


//serialize and deserialize on the user information
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
let booksRouter = require('../routes/book'); /*routes to each file*/


// view engine setup
app.set('views', path.join(__dirname, '../views')); /*jumps to views file*/
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public'))); /*jumps out to public folder*/
app.use(express.static(path.join(__dirname, '../../node_modules')));/*jumps out to node_modules folder*/

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Fifa-Team', booksRouter); //localhost:3000/book-list

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',
  {
    title:"Error"
  }
  );
});

module.exports = app;
