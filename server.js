const express = require('express');
const app = express();
const router = express.Router();

const PORT = 3000 || null;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get('/', (req, res) => {
	console.log(req.headers);
	res.header({
		'custom-header': 'This is a test',
		'another-custom-header': 'Another test',
	});
	res.send('Data fetched');
});

app.post('/', (req, res) => {
	console.log(req.query);
	console.log(req.body);
	res.send('Data posted');
});

app.listen(PORT, () => {
	console.log(`Listening on port http://localhost:${PORT}`);
});
