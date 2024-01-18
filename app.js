

document.getElementById('weatherForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const city = document.getElementById('city').value;
    getWeather(city);
  });
  
  async function getWeather(city) {
    try {
      const response = await fetch(`http://localhost:3000/weather?city=${city}`);
      const weatherData = await response.json();
  
      displayWeather(weatherData);
    } catch (error) {
      console.error(error);
    }
  }
  
  function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>${weatherData.location.name}, ${weatherData.location.country}</h2>
      <p>Temperature: ${weatherData.current.temp_c}°C</p>
      <p>Condition: ${weatherData.current.condition.text}</p>
      <p>Wind Speed: ${weatherData.current.wind_kph} km/h</p>
    `;
  }
  