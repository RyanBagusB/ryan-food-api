const express = require('express');
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const ApiController = require('./controllers/dish.controller.js');

app.listen(PORT, () => console.log(`server berjalan pada http://localhost:${PORT}`));

app.get('/pets', ApiController.getAll);

app.post('/pets', ApiController.create);

app.put('/', ApiController.remove);

app.delete('/pets', ApiController.remove);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

