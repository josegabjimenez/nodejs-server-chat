const express = require('express');
const response = require('../../network/response');
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

router.post('/', (req, res) => {
	// console.log(req.query);
	// console.log(req.body);

	if (req.query.error == 'oops') {
		response.error(
			req,
			res,
			'An error has ocurred',
			500,
			'This is a simulation of an error in our Backend'
		);
	} else {
		response.success(req, res, 'Message was created', 201);
	}
});

module.exports = router;
