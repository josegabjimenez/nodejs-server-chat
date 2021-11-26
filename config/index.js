require('dotenv').config();

const config = {
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	dbName: process.env.DB_NAME,
};

module.exports = config;
