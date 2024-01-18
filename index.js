const express = require('express');
const ApiController = require('./api-controller');

const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Create (POST) a new pet
app.post('/pets', ApiController.create);

// Read (GET) all pets
app.get('/pets', ApiController.getAll);

// Read (GET) a specific pet by ID
app.get('/pets/:id', ApiController.getById);

// Update (PUT) a pet by ID
app.put('/pets/:id', ApiController.update);

// Delete (DELETE) a pet by ID
app.delete('/pets/:id', ApiController.remove);

// Start the server
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
