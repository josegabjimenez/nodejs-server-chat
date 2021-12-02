const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
	users: [
		{
			type: Schema.ObjectId,
			ref: 'User',
		},
	],
	date: {
		type: Date,
		default: new Date(),
	},
});

const model = mongoose.model('Chat', chatSchema);

module.exports = model;
