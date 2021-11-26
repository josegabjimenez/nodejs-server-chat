const addUser = (name, email, password) => {
	return new Promise((resolve, reject) => {
		//Name verification
		if (!name || name.length < 4) {
			reject(
				"There's no name, or the name is too short (Must be at least 4 characters long)."
			);
		}

		// Email verification
		if (!email || !email.includes('@')) {
			reject("There's no email address, or is bad typed'");
		}

		//Password verification
		if (!password || password.toString().length < 4) {
			reject(
				"There's no password, or the password is too short (Must be at least 4 characters long)."
			);
		}

		const newUser = {
			name,
			email,
			password,
			dateOfCreation: new Date(),
		};

		resolve(newUser);
	});
};

const getAllUsers = () => {
	return new Promise((resolve, reject) => {
		resolve('USERS');
	});
};

module.exports = {
	addUser,
	getAllUsers,
};
