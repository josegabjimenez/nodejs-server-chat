const socketIO = require('socket.io');
const socket = {};

const connect = (server) => {
	socket.io = socketIO(server);
};

module.exports = {
	connect,
	socket,
};
