require('dotenv').config();

const config = {
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	uri: `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
};

module.exports = config;
