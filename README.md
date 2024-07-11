# Weather App

This is a simple weather application built using Node.js and Express. It fetches weather data from the OpenWeather API and displays it to the user.
Here you can access this https://weather-app-898x.onrender.com
## Features

- Fetch weather data for any city.
- Display temperature, weather condition, and location.
- Simple and clean user interface.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/weather-app-starter.git
   cd weather-app-starter
   npm install
   ```
2. Usage
   Start the server:
   
   Copy code
   ```npm run server```
   Open your browser and go to http://localhost:3000

   Enter a city name to get the weather information.

## Code Overview

### index.js
The main entry point of the application. It sets up the Express server, view engine, and routes.

### config/index.js
Configuration file for server settings.

### src/controllers/
Contains controller functions for handling server logic.
- **test-server-controller.js**: Handles server startup message.
- **weather-controllers.js**: Handles fetching weather data from the OpenWeather API.

### src/routes/
Contains route definitions.
- **index.js**: Main router file that includes all routes.
- **weather-routes.js**: Defines routes related to weather data.

### views/
Contains EJS templates for rendering HTML.
- **index.ejs**: Main template for displaying weather data.

### public/
Contains static files like CSS.
- **style.css**: CSS file for styling the application.

## Acknowledgements
- OpenWeather API for providing weather data.
- Font Awesome for icons.


