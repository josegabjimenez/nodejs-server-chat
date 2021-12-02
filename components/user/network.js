const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', async (req, res) => {
	const query = req.query;

	try {
		const users = await controller.getUsers(query);
		response.success(req, res, 'Users were retrieved.', 200, users);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

router.post('/', async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const newUser = await controller.addUser(name, email, password);
		response.success(req, res, 'User was created.', 201, newUser);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const deletedUser = await controller.deleteUser(id);
		response.success(req, res, 'User was deleted.', 200, deletedUser);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

module.exports = router;
