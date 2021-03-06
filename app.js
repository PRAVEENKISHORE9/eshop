var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose = require('mongoose');
var employees = require('./routes/employees');
var product = require('./routes/product');
var cors = require('cors');
var app = express();
app.use(cors());

const port = process.env.PORT || 5000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', employees);
app.use('/product', product);

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
  res.render('error');
});

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/users')
  .then(() =>  console.log('connection succesful',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }))
  .catch((err) => console.error(err));
  

module.exports = app;

app.listen(port,()=>{  // do not add localhost here if you are deploying it
  console.log("server listening to port "+port);
});
