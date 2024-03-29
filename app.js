var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var siteNav = require('./routes/siteNavRoutes');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routes
app.use('/', siteNav);
app.use('/about', siteNav);
app.use('/search', siteNav);
app.use('/survey', siteNav);
app.use('/contact', siteNav);
app.use('/staff/home', siteNav);
app.use('/payments', siteNav);
app.use('/account', siteNav);
app.use('/events', siteNav);
app.use('/events/eoi', siteNav);
app.use('/auth', siteNav);
app.use('/auth/forgot', siteNav);
app.use('/auth/rego', siteNav);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('error/404', {title: '404'});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.title = 'Error'

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
