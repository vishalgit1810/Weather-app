const express = require('express');
const router = express.Router();
const weatherRoutes = require('../routes/weather-routes');

// Render the index template with default values for weather and error
router.use("/", weatherRoutes);

module.exports = router;