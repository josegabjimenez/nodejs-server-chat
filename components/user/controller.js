const store = require('./store');

const addUser = (name, email, password) => {
	return new Promise(async (resolve, reject) => {
		// Name verification
		if (!name || name.length < 4) {
			reject({
				message:
					"There's no name, or the name is too short (Must be at least 4 characters long).",
				internal: null,
				status: 400,
			});
		}

		// Email verification
		else if (!email || !email.includes('@')) {
			reject({
				message: "There's no email address, or is bad typed",
				internal: null,
				status: 400,
			});
		}

		// Password verification
		else if (!password || password.toString().length < 4) {
			reject({
				message:
					"There's no password, or the password is too short (Must be at least 4 characters long).",
				internal: null,
				status: 400,
			});

			// Store the user in the database
		} else {
			const newUser = {
				name,
				email,
				password,
				dateOfCreation: new Date(),
			};

			try {
				const userCreated = await store.add(newUser);
				resolve(userCreated);
			} catch (err) {
				reject({
					message: 'An internal error has occurred.',
					internal: `Something went wrong with the user store (addUser) \n ${err.message}`,
					status: 500,
				});
			}
		}
	});
};

const getUsers = (query) => {
	return new Promise(async (resolve, reject) => {
		try {
			const users = await store.get(query);
			resolve(users);
		} catch (err) {
			reject({
				message: 'An internal error has occurred.',
				internal: `Something went wrong with the user store (getUsers) \n ${err.message}`,
				status: 500,
			});
		}
	});
};

const deleteUser = async (id) => {
	return new Promise(async (resolve, reject) => {
		if (!id) {
			reject({
				message: "There's no user id.",
				internal: null,
				status: 400,
			});
		} else {
			try {
				const deletedUser = await store.delete(id);
				if (deletedUser) {
					resolve(deletedUser);
				}
				reject({
					message: 'The user does not exist.',
					internal: null,
					status: 400,
				});
			} catch (err) {
				reject({
					message: 'An internal error has occurred.',
					internal: `Something went wrong with the user store (getUsers) \n ${err.message}`,
					status: 500,
				});
			}
		}
	});
};

module.exports = {
	addUser,
	getUsers,
	deleteUser,
};
