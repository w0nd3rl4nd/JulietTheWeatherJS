import WeatherBox from './weatherbox.js';
import { fetchWeather } from './fetchweather.js'
const { ipcRenderer } = require('electron');
import enableVisualTesting from './tests.js'

// Get testing settings
const config = await ipcRenderer.invoke('getWeatherConfig');
const testingEnabled = config ? config.testing : { latitude: 41.4960, longitude: 2.1565 };

if (testingEnabled) {
    enableVisualTesting()
}

const weatherBox = new WeatherBox(document.querySelector('#weatherbox'))

async function updateWeatherDisplay() {
    const { weather, temperature } = await fetchWeather()
    weatherBox.updateWeather(weather, temperature)
}

updateWeatherDisplay()

// Update every 15 minutes (900,000ms)
setInterval(updateWeatherDisplay, 900000)