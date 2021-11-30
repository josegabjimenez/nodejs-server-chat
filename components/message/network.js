const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//Routes
//GET
router.get('/', async (req, res) => {
	const query = req.query || null;

	try {
		const messages = await controller.getMessages(query);
		response.success(req, res, 'Messages were retrieved.', 200, messages);
	} catch (err) {
		response.error(
			req,
			res,
			err,
			500,
			"There's an error on the messages store (getMessages)"
		);
	}
});

// POST
router.post('/', async (req, res) => {
	const { user, message } = req.body;

	//ASYNC AWAIT
	try {
		const fullMessage = await controller.addMessage(user, message);
		response.success(req, res, 'Message was added.', 201, fullMessage);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

// PATCH
router.patch('/:id', async (req, res) => {
	const { id } = req.params;
	const { message } = req.body;

	try {
		const updatedMessage = await controller.updateMessage(id, message);
		response.success(req, res, 'Message was updated.', 200, updatedMessage);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

// DELETE
router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const deletedMessage = await controller.deleteMessage(id);
		if (deletedMessage) {
			response.success(
				req,
				res,
				'Message was deleted successfully.',
				200,
				deletedMessage
			);
		} else {
			response.error(req, res, 'This message does not exist.', 400);
		}
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

module.exports = router;
