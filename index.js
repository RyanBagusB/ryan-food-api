const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const ApiController = require('./api-controller/api-controller');

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`server berjalan pada http://localhost:${PORT}`));

app.get('/', ApiController.getAll);

app.post('/', (req, res) => {
    res.send("post");
});

app.put('/', (req, res) => {
    res.send("update");
});

app.delete('/', (req, res) => {
    res.send("delete");
});
