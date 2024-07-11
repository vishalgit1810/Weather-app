const axios = require('axios');

const getWeather = async (req, res) => {
    const city = req.query.city;
    const apiKey = "9b0b2f74557903020464ff9d946bd95a";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    let weather = null;
    let error = null;

    try {
        const response = await axios.get(apiUrl);
        weather = response.data;
    } catch (err) {
        weather = null;
        error = "Error, Please try again";
    }

    res.render("index", { weather, error });
};

module.exports = getWeather;
