import WeatherBox from './weatherbox.js';
import enableVisualTesting from './tests.js'

enableVisualTesting();

// async function updateWeatherDisplay() {
//     const { weather, temperature } = await fetchWeather();
//     weatherBox.updateWeather(weather, temperature);
// }

// // Initial update
// updateWeatherDisplay();

// // Update every 15 minutes (900,000ms)
// setInterval(updateWeatherDisplay, 900000);