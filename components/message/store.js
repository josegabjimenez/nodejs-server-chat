const Model = require('./model');

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
		// ! DEPRECATED
		//// query.user ? (filter = { user: { name: new RegExp(query.user, 'i') } })
		//// 	: null;
		//// query.message ? (filter.message = new RegExp(query.message, 'i')) : null;
		//// query.id ? (filter._id = query.id) : null;
		query.chat ? (filter.chat = query.chat) : null;
		query.id ? (filter._id = query.id) : null;
	}

	try {
		const messages = await Model.find(filter)
			.populate('user', ['name', 'email'])
			.exec();
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

const deleteMessage = async (id) => {
	try {
		const deletedMessage = await Model.findByIdAndDelete(id);
		return deletedMessage;
	} catch (err) {
		throw new Error(err);
	}
};

module.exports = {
	add: addMessage,
	getAll: getMessages,
	update: updateMessage,
	delete: deleteMessage,
};
