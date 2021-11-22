const chalk = require('chalk');

exports.success = (req, res, message, statusCode) => {
	res.status(statusCode || 200).send({
		error: null,
		message,
		statusCode,
		data: req.body,
	});
};

exports.error = (req, res, message, statusCode, details) => {
	console.log(
		chalk.bgRed.black.italic('[Internal Error]:'),
		chalk.red(details)
	);
	res.status(statusCode || 500).send({
		error: message,
		message: null,
		statusCode: statusCode || 500,
	});
};
