const express = require('express');
const app = express();
const PORT = 5000;

const ApiController = require('./api-controller/api-controller');

app.listen(PORT, () => console.log(`server berjalan pada http://localhost:${PORT}`));

app.get('/', ApiController.getAll);

app.post('/', ApiController.create);

app.put('/', (req, res) => {
    res.send("update");
});

app.delete('/:id', ApiController.remove);
