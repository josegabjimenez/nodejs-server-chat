const express = require('express');
const config = require('./config');
const app = express();

//Router
const router = require('./network/routes');

//PORT
const PORT = 3000;

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(router);
router(app);

app.use('/app', express.static('./public'));

//Listening server
app.listen(PORT, () => {
	console.log(`Listening on port http://localhost:${PORT}`);
});
