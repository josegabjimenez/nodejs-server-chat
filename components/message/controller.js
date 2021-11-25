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
		resolve(newFullMessage);
	});
};

module.exports = {
	addMessage,
};
