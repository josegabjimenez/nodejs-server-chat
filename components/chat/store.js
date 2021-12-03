const Model = require('./model');

const createChat = (users) => {
	const newChat = new Model(users);
	return newChat.save();
};

const getChats = (userId) => {
	let filter = {};

	if (userId) {
		filter = {
			users: userId,
		};
	}

	return Model.find(filter).populate('users', 'name').exec();
};

module.exports = {
	create: createChat,
	getAll: getChats,
};
