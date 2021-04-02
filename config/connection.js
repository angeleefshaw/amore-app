var mysql = require('mysql');

//"mysql://essujehbirit5hx8:q20oi17x8vnju3zl@vkh7buea61avxg07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/n5r6eamymguiqn6q"
// process.env.JAWSDB_URL

var connection = mysql.createConnection(
	process.env.JAWSDB_URL || {
		username: 'root',
		password: process.env.PASSWORD,
		database: 'interview_mania',
		host: 'localhost',
		port: 3306
	}
);

// Make connection.
connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.

module.exports = connection;
