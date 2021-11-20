const express = require('express');
const app = express();
const response = require('./network/response');

//Router
const router = express.Router();

//PORT
const PORT = 3000 || null;

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

//Routes
app.get('/message', (req, res) => {
	console.log(req.headers);
	res.header({
		'custom-header': 'This is a test',
		'another-custom-header': 'Another test',
	});
	// res.send('Data fetched');
	response.success(req, res, 'Messages were retrieved');
});

app.post('/message', (req, res) => {
	console.log(req.query);
	console.log(req.body);

	if (req.query.error == 'oops') {
		response.error(req, res, 'An error has ocurred');
	}

	response.success(req, res, 'Message was created', 201);
});

app.use('/app', express.static('./public'));

//Listening server
app.listen(PORT, () => {
	console.log(`Listening on port http://localhost:${PORT}`);
});
