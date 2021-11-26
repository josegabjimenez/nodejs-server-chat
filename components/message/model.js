const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
	user: String,
	message: {
		type: String,
		required: true,
	},
	date: Date,
});

const model = mongoose.model('messages', messageSchema);

module.exports = model;
