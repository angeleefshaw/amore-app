module.exports = {
	development: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DBNAME,
		host: process.env.MYSQL_HOST,
		port: 3306,
		dialect: 'mysql'
	},
	test: {
		username: 'root',
		password: 'somethingsimple',
		database: 'interview_mania',
		host: 'local',
		port: 3006,
		dialect: 'mysql'
	},
	production: {
		use_env_variable: 'JAWSDB_URL',
		dialect: 'mysql'
	}
};
