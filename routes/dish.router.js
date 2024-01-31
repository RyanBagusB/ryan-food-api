const express = require("express");
const router = express.Router();

const dishController = require('../controllers/dish.controller');

router.get("/", dishController.getAll);

module.exports = router;
