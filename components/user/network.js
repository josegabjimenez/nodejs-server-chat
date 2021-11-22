const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', (req, res) => {
	let { error } = req.query;
	if (error == 'test') {
		response.error(
			req,
			res,
			'There was an error',
			500,
			'Another simulation error but this time is on the users section.'
		);
	} else {
		response.success(req, res, 'Users were retrieved', 200);
	}
});

router.post('/', (req, res) => {
	response.success(req, res, 'User was created', 201);
});

module.exports = router;
