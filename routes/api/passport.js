const express = require('express');
const app = express();

// Requiring our models and passport as we've configured it
var db = require('../../models');
var passport = require('../../config/passportConfig');

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
app.post('/login', passport.authenticate('local'), function(req, res) {
	res.json(req.user);
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
app.post('/signup', function(req, res) {
	db.User
		.create({
			username: req.body.username,
			password: req.body.password
		})
		.then(function() {
			//redirect user to login
			res.status(200).json({ msg: 'user created' });
		})
		.catch(function(err) {
			res.status(401).json(err);
		});
});

// Route for logging user out
app.get('/logout', function(req, res) {
	console.log('logout is hit');
	req.session.destroy((err) => {
		if (err) return next(err);

		req.logout();

		res.sendStatus(200);
	});
});

// Route for getting some data about our user to be used client side
app.get('/user_data', function(req, res) {
	if (!req.user) {
		// The user is not logged in, send back an empty object
		res.json(null);
	} else {
		// Otherwise send back the user's usernmae and id
		res.json({
			username: req.user.username,
			id: req.user.id
		});
	}
});

module.exports = app;
