const express = require('express');
const app = express();

//Router
const router = require('./network/routes');

//PORT
const PORT = 3000 || null;

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
