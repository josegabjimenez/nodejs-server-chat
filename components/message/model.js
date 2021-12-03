const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
	chat: {
		type: Schema.ObjectId,
		ref: 'Chat',
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User',
	},
	message: {
		type: String,
		required: true,
	},
	date: Date,
	fileUrl: String,
});

const model = mongoose.model('Message', messageSchema);

module.exports = model;
