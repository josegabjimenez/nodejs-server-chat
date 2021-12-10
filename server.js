// Create server
const express = require('express');
const app = express();
const server = require('http').Server(app);

// Config
const config = require('./config');

// Imports
const socket = require('./socket');
const router = require('./network/routes');
const db = require('./db');
const cors = require('cors');
const path = require('path');

// PORT
const PORT = config.port;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Router set
router(app);

// ? Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
});
// app.use('/app', express.static('./public'));

// Connection to the Websocket
socket.connect(server);

socket.socket.io.on('connection', (socket) => {
	console.log('Someone has connected!');
	socket.emit('message', 'TESTING');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

// Connect the database
db.connect();

// Listening server
server.listen(PORT, () => {
	console.log(`Listening on port http://localhost:${PORT}`);
});
