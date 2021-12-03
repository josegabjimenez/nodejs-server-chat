const store = require('./store');

const createChat = async (users) => {
	return new Promise(async (resolve, reject) => {
		if (!users || users.length < 2) {
			reject({
				message: 'There are no users or are less than 2 users.',
				internal: null,
				status: 400,
			});
		} else {
			try {
				const myUsers = {
					users,
				};
				const addedChat = await store.create(myUsers);
				resolve(addedChat);
			} catch (err) {
				reject({
					message: 'An internal error has occurred.',
					internal: `Something went wrong with the chat store (createChat) \n ${err.message}`,
					status: 500,
				});
			}
		}
	});
};

const getChats = (userId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const chats = await store.getAll(userId);
			resolve(chats);
		} catch (err) {
			reject({
				message: 'An internal error has occurred.',
				internal: `Something went wrong with the chat store (getChats) \n ${err.message}`,
				status: 500,
			});
		}
	});
};

module.exports = {
	createChat,
	getChats,
};
