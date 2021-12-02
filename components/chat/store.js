const Model = require('./model');

const createChat = (users) => {
	const newChat = new Model(users);
	return newChat.save();
};

const getChats = () => {
	return Model.find();
};

module.exports = {
	create: createChat,
	getAll: getChats,
};
