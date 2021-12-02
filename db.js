const db = require('mongoose');
const config = require('./config');
const chalk = require('chalk');

const connect = async () => {
	try {
		await db.connect(config.uri, { useNewUrlParser: true });
		console.log(chalk.blue('[db] Database was connected successfully.'));
	} catch (err) {
		console.error(chalk.red("[db] Can't connect to the database."));
	}
};

module.exports = {
	connect,
};
