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

const homeRouter = require('./routes/home.router');
const menuRouter = require('./routes/menu.router');
const drinkRouter = require('./routes/drink.router');
const reviewRouter = require('./routes/review.router');
const searchRouter = require('./routes/search.router');

app.use("/api/dishes", dishRouter);
app.use("/api/homes", homeRouter);
app.use("/api/menus", menuRouter);
app.use("/api/drinks", drinkRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/search", searchRouter);

app.listen(PORT, () => console.log(`server berjalan pada http://localhost:${PORT}`));

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

