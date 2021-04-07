require('dotenv').config();

const express = require('express');
var session = require('express-session');

var passport = require('./config-2/passport');
const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

var db = require('./models');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(routes);

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, function() {
		console.log('App listening on PORT: ' + PORT);
	});
});

// app.listen(PORT, function() {
// 	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
