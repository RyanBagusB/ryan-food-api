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


const dishRouter = require('./routes/dish.router');
app.use("/api/dishes", dishRouter);

app.listen(PORT, () => console.log(`server berjalan pada http://localhost:${PORT}`));

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

