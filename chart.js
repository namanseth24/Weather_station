// Add this to your existing script.js file

// Simulated sensor data
const sensorData = {
    temperature: [22, 23, 21, 24, 22, 23, 25],
    humidity: [45, 48, 52, 50, 47, 53, 55]
};

// Function to display current sensor readings
function displayCurrentReadings() {
    const lastIndex = sensorData.temperature.length - 1;
    const currentTemp = sensorData.temperature[lastIndex];
    const currentHumidity = sensorData.humidity[lastIndex];
    
    document.getElementById('current-readings').