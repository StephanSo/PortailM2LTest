var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var session = require('express-session'); //library to manage sessions.

//MODELS
var users_model = require('./model/users');

//ROUTES
var index = require('./routes/index');
var users = require('./routes/users');

//AUTHENTIFICATION

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `done` with a user object, which
// will be set at `req.user` in route handlers after authentication.

passport.use(new Strategy(
  function(username, password, done) {
    users_model.findByUsername(username ,
        function(err, user) {
            if (err) { return done(err); }

            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            if (user.password !== password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        }
    );
  }
));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(
    function(user, callback) {
        callback(null, user.id);
    }
);
passport.deserializeUser(
    function(id, callback) {
        users_model.findById(id,
            function (err, user) {
                if (err) {
                    return callback(err);
                }
                callback(null, user);
            }
        );
    }
);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// secret : key used to encrypted the cookie

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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


module.exports = app;
