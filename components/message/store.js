const db = require('mongoose');
const Model = require('./model');

//Config file
const config = require('../../config');
const chalk = require('chalk');

try {
	db.connect(config.uri);
	console.log(chalk.blue('[db] Database was connected successfully.'));
} catch (err) {
	console.error(chalk.red("[db] Can't connect to the database."));
}

// Store a message in the database
const addMessage = (message) => {
	const newMessage = new Model(message);
	newMessage.save();
};

// Get the list of messages stored in the Database
const getMessages = async () => {
	try {
		const messages = await Model.find();
		return messages;
	} catch (err) {
		throw new Error(err);
	}
};

module.exports = {
	add: addMessage,
	getAll: getMessages,
};
