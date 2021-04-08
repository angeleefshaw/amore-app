require('dotenv').config();
const express = require('express');
var session = require('express-session');

// Requiring passport as we've configured it
const passport = require('./config/passportConfig');

const path = require('path');

const PORT = process.env.PORT || 3001;
var db = require('./models');

// Create express app and Define middleware here
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.use(
	session({
		secret: 'keyboard cat',
		resave: true,
		saveUninitialized: true
	})
);

app.use(passport.initialize());
app.use(passport.session());

// Require Routes
const routes = require('./routes');
app.use(routes);

// Enable CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// connect to the db and start server
db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, function() {
		console.log('App listening on PORT: ' + PORT);
	});
});
