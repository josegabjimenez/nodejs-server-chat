const express = require('express');
const router = express.Router();
const app = express();

const PORT = 3000 || null;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get('/', (req, res) => {
	res.send('Data fetched');
});

app.post('/', (req, res) => {
	console.log(req.query);
	console.log(req.body);
	res.send('Data posted');
});

app.listen(PORT, () => {
	console.log(`Listening on port https://localhost:${PORT}`);
});
