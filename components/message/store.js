const list = [];

const addMessage = (message) => {
	list.push(message);
};

const getMessages = () => {
	return list;
};

module.exports = {
	add: addMessage,
	getAll: getMessages,
};
