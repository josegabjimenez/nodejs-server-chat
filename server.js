// Create server
const express = require('express');
const app = express();
const server = require('http').Server(app);

// Imports
const socket = require('./socket');
const router = require('./network/routes');
const db = require('./db');

// PORT
const PORT = 3000;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router set
router(app);
app.use('/app', express.static('./public'));

// Connection to the Websocket
socket.connect(server);

// Connect the database
db.connect();

// Listening server
server.listen(PORT, () => {
	console.log(`Listening on port http://localhost:${PORT}`);
});
