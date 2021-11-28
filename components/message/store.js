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
const addMessage = async (message) => {
	try {
		const newMessage = new Model(message);
		await newMessage.save();
		return newMessage;
	} catch (err) {
		throw new Error(err);
	}
};

// Get the list of messages stored in the Database
const getMessages = async (query) => {
	let filter = {};

	if (query) {
		query.user ? (filter.user = new RegExp(query.user, 'i')) : null;
		query.message ? (filter.message = new RegExp(query.message, 'i')) : null;
		query.id ? (filter._id = query.id) : null;
	}

	try {
		const messages = await Model.find(filter);
		return messages;
	} catch (err) {
		throw new Error(err);
	}
};

const updateMessage = async (id, message) => {
	try {
		const foundMessage = await Model.findById(id);
		foundMessage.message = message;
		await foundMessage.save();
		return foundMessage;
	} catch (err) {
		throw new Error(err);
	}
};

module.exports = {
	add: addMessage,
	getAll: getMessages,
	update: updateMessage,
};
