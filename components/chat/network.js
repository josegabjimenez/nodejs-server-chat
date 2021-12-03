const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', async (req, res) => {
	const { users } = req.body;

	try {
		const addedChat = await controller.createChat(users);
		response.success(req, res, 'Chat was created successfully', 201, addedChat);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

router.get('/', async (req, res) => {
	try {
		const allChats = await controller.getChats();
		response.success(
			req,
			res,
			'Chats were retrieved successfully.',
			200,
			allChats
		);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

router.get('/:userId', async (req, res) => {
	const { userId } = req.params;

	try {
		const chats = await controller.getChats(userId);
		response.success(
			req,
			res,
			'Chats were retrieved successfully.',
			200,
			chats
		);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

module.exports = router;
