const express = require("express");
const router = express.Router();

const DrinkController = require('../controllers/drink.controller');

router.get("/", DrinkController.getAll);

module.exports = router;
