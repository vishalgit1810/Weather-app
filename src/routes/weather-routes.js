const express = require('express');
const router = express.Router();
const { defaultCont } = require('../controllers');
const { getWeather } = require('../controllers');

// Render the index template with default values for weather and error
router.get("/", defaultCont);

// Handle the /weather route
router.get("/weather", getWeather);

module.exports = router;
