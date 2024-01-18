const express = require('express');
const app = express();
const PORT = 5000;

const ApiController = require('./api-controller/api-controller');

app.listen(PORT, () => console.log(`server berjalan pada http://localhost:${PORT}`));

app.get('/pets', ApiController.getAll);

app.post('/', ApiController.create);

app.put('/', (req, res) => {
    res.send("update");
});

app.delete('/pets/:id', ApiController.remove);
