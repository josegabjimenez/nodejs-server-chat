const db = require('mongoose');
const Model = require('./model');

//Config file
const config = require('../../config');
const chalk = require('chalk');

db.connect(config.uri);
console.log(chalk.blue('Database was connected successfully'));

// Store a message in the database
const addMessage = (message) => {
	const newMessage = new Model(message);
	newMessage.save();
};

// Get the list of messages stored in the Database
const getMessages = async () => {
	const messages = await Model.find();
	return messages;
};

module.exports = {
	add: addMessage,
	getAll: getMessages,
};
