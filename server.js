const express = require('express');
var session = require('express-session');
var passport = require('./config-2/passport');
const path = require('path');
const routes = require("./routes");


const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require('./models');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


//Add routes, both API and view
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, function() {
		console.log('App listening on PORT ' + PORT);
	});
});
