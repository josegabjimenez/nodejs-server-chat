require('dotenv').config();

const config = {
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	dbName: process.env.DB_NAME,
	uri: `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
};

module.exports = config;
