const express = require('express');
const response = require('../../network/response');
const multer = require('multer'); //? Helps to upload binary files
const path = require('path'); //? In this code is used to get the extension of a file
const controller = require('./controller');
const router = express.Router();

const { socket } = require('../../socket');

// ? Upload multer instance
const storage = multer.diskStorage({
	destination: 'public/files/',
	filename: (req, file, cb) => {
		const extension = path.extname(file.originalname);
		//// console.log(extension);
		cb(null, `${Date.now()}.${extension}`);
	},
});
const upload = multer({
	storage: storage,
});

// * ROUTES
// GET
router.get('/', async (req, res) => {
	const query = req.query || null;

	try {
		const messages = await controller.getMessages(query);
		response.success(req, res, 'Messages were retrieved.', 200, messages);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

// POST
router.post('/', upload.single('file'), async (req, res) => {
	const { chat, user, message } = req.body;

	//ASYNC AWAIT
	try {
		const fullMessage = await controller.addMessage(
			chat,
			user,
			message,
			req.file
		);
		const messagePopulated = await controller.getMessages({
			id: fullMessage._id,
		});
		socket.io.emit(`${fullMessage.chat}`, messagePopulated[0]);
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
