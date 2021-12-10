const config = require('../../config');
const store = require('./store');

const getMessages = (query) => {
	return new Promise(async (resolve, reject) => {
		try {
			const messages = await store.getAll(query);
			resolve(messages);
		} catch (err) {
			reject({
				message: 'An internal error has occurred.',
				internal: `There's an error on the messages store (getMessages) \n ${err.message}`,
				status: 500,
			});
		}
	});
};

const addMessage = (chat, user, message, file) => {
	return new Promise(async (resolve, reject) => {
		if (!chat || !user || !message) {
			reject({
				message: "There's no user, message or chat.",
				internal: null,
				status: 400,
			});
		} else {
			let fileUrl = '';

			if (file) {
				fileUrl = `http://${config.host}/app/files/${file.filename}`;
			}

			const newFullMessage = {
				chat,
				user,
				message,
				date: new Date(),
				fileUrl,
			};

			try {
				const newMessage = await store.add(newFullMessage);
				resolve(newMessage);
			} catch (err) {
				reject({
					message: 'An internal error has occurred.',
					internal: `Something went wrong with the message store (addMessage) \n ${err.message}`,
					status: 500,
				});
			}
		}
	});
};

const updateMessage = (id, message) => {
	return new Promise(async (resolve, reject) => {
		if (!id || !message) {
			reject({
				message: 'Invalid data.',
				internal: null,
				status: 400,
			});
		}

		try {
			const updatedMessage = await store.update(id, message);
			resolve(updatedMessage);
		} catch (err) {
			reject({
				message: 'An internal error has occurred.',
				internal: `Something went wrong with the message store (updateMessage)\n ${err.message}`,
				status: 500,
			});
		}
	});
};

const deleteMessage = (id) => {
	return new Promise(async (resolve, reject) => {
		if (!id) {
			reject({
				message: 'Invalid data.',
				internal: null,
				status: 400,
			});
		}

		try {
			const deletedMessage = await store.delete(id);
			resolve(deletedMessage);
		} catch (err) {
			reject({
				message: 'An internal error has ocurred.',
				internal: `Something went wrong with  the message store (deleteMessage)\n ${err.message}`,
				status: 500,
			});
		}
	});
};

module.exports = {
	getMessages,
	addMessage,
	updateMessage,
	deleteMessage,
};
