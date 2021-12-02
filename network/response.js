const chalk = require('chalk');

exports.success = (req, res, message, statusCode, data) => {
	res.status(statusCode || 200).send({
		error: null,
		message,
		statusCode,
		data,
	});
};

/**
 * ! Is used for log errors.
 * @param {Request} req
 * @param {Response} res
 * @param {String} message
 * @param {Number} statusCode
 * @param {String} details
 */
exports.error = (req, res, message, statusCode, details) => {
	if (details) {
		console.log(
			chalk.bgRed.black.italic('[Internal Error]:'),
			chalk.red(details)
		);
	}
	res.status(statusCode || 500).send({
		error: message,
		message: null,
		statusCode: statusCode || 500,
	});
};
