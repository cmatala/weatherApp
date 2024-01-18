// Import the Express framework
const express = require('express');
// Create an instance of the Express application
const app = express();
// Import the Axios library for making HTTP requests
const axios = require('axios');

// Define the port for the server to listen on, using the environment variable PORT or defaulting to 3000
const PORT = process.env.PORT || 3000;

// Define a route to fetch weather data
app.get('/weather', async (req, res) => {
    try {
      const apiKey = process.env.WEATHER_API_KEY || '9a6dacc8c544c27e0fc2f4070e661bb8'; 
      const city = req.query.city || 'YourDefaultCity';
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
      const response = await axios.get(apiUrl);
      const weatherData = response.data;
  
      res.json(weatherData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



// Start the server and listen on the specified port
app.listen(PORT, () => {
    // Log a message to the console when the server is successfully started
    console.log(`Server is running on port ${PORT}`);
});
