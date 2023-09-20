// Get references to HTML elements
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');
const clearIcon = document.getElementById('clearIcon');

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    
    // Use a weather API to fetch weather data (e.g., OpenWeatherMap)
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '80a6d63f8a01fa6b11deeb815ec8ea95';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract weather information
            const temperature = data.main.temp;
            const precipitation = data.weather[0].description;
            const windSpeed = data.wind.speed;
            const windDirection = data.wind.deg;

            // Display weather information
            weatherInfo.innerHTML = `
                <p>Location: ${location}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Precipitation: ${precipitation}</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
                <p>Wind Direction: ${windDirection}°</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
        });
});

// Event listener for the clear icon
clearIcon.addEventListener('click', () => {
    locationInput.value = ''; // Clear the input field
    weatherInfo.innerHTML = ''; // Clear any displayed weather information
});
