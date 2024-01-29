const express = require('express');
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const ApiController = require('./api-controller/api-controller');

app.listen(PORT, () => console.log(`server berjalan pada http://localhost:${PORT}`));

app.get('/pets', ApiController.getAll);

app.post('/pets', ApiController.create);

app.put('/', ApiController.remove);

app.delete('/pets/:id', ApiController.remove);
