const store = require('./store');

const getMessages = () => {
	return new Promise((resolve, reject) => {
		resolve(store.getAll());
	});
};

const addMessage = (user, message) => {
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			return reject("There's no user or message.");
		}
		const newFullMessage = {
			user,
			message,
			date: new Date(),
		};
		store.add(newFullMessage);
		resolve(newFullMessage);
	});
};

module.exports = {
	getMessages,
	addMessage,
};
