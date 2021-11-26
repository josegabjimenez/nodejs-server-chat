const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const users = await controller.getAllUsers();
		response.success(req, res, 'Users were retrieved.', 200, users);
	} catch (err) {
		response.error(req, res, err, 400);
	}
});

router.post('/', async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const newUser = await controller.addUser(name, email, password);
		response.success(req, res, 'User was created.', 201, newUser);
	} catch (err) {
		response.error(req, res, err, 400);
	}
});

module.exports = router;
