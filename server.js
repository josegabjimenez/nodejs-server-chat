const express = require('express');
const app = express();
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

// Connect the database
db.connect();

// Listening server
app.listen(PORT, () => {
	console.log(`Listening on port http://localhost:${PORT}`);
});
