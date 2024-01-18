# Weather App

## Overview

The Weather App is a web application that allows users to check the current weather conditions for a specific city. The project consists of a backend service built with Node.js and Express that fetches weather data from a third-party API and a frontend application written in HTML and JavaScript to display the weather information.

## Features

# Backend Service:
- Utilizes Express.js to create a simple server.
- Fetches weather data from a third-party API (OpenWeatherMap in this example).
- Handles CORS to enable cross-origin requests.
- Provides a RESTful API endpoint (/weather) to retrieve weather information for a given city.

# Frontend Application:
- Uses HTML to create a user-friendly interface.
- Integrates JavaScript to make asynchronous requests to the backend.
- Displays weather information such as temperature, condition, and wind speed.
- Allows users to input a city and fetch the latest weather data.