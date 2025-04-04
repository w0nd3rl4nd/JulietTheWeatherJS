import WeatherBox from './weatherbox.js';
import { fetchWeather } from './fetchweather.js'
import enableVisualTesting from './tests.js'

// Comment to disable visual testing
// enableVisualTesting();

const weatherBox = new WeatherBox(document.querySelector('#weatherbox'))

async function updateWeatherDisplay() {
    const { weather, temperature } = await fetchWeather()
    weatherBox.updateWeather(weather, temperature)
}

// Initial update
updateWeatherDisplay()

// Update every 15 minutes (900,000ms)
setInterval(updateWeatherDisplay, 900000)

// async function updateWeatherDisplay() {
//     const { weather, temperature } = await fetchWeather();
//     weatherBox.updateWeather(weather, temperature);
// }

// // Initial update
// updateWeatherDisplay();

// // Update every 15 minutes (900,000ms)
// setInterval(updateWeatherDisplay, 900000);