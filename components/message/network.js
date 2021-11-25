const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//Routes
router.get('/', (req, res) => {
	console.log(req.headers);
	res.header({
		'custom-header': 'This is a test',
		'another-custom-header': 'Another test',
	});
	// res.send('Data fetched');
	response.success(req, res, 'Messages were retrieved');
});

router.post('/', async (req, res) => {
	const { user, message } = req.body;

	//ASYNC AWAIT
	try {
		const fullMessage = await controller.addMessage(user, message);
		response.success(req, res, 'Message was added.', 201, fullMessage);
	} catch (err) {
		response.error(
			req,
			res,
			err,
			400,
			"The client doesn't put a message or username"
		);
	}

	// PROMISES
	// 	.addMessage(user, message)
	// 	.then((fullMessage) =>
	// 		response.success(req, res, 'Message was sent', 201, fullMessage)
	// 	)
	// 	.catch((err) =>
	// 		response.error(
	// 			req,
	// 			res,
	// 			err,
	// 			400,
	// 			"The user don't put a message or don't have an username"
	// 		)
	// 	);
});

module.exports = router;
