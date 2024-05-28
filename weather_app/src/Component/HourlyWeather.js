import React, { useState } from 'react';

const HourlyWeather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '189a3406a6d9b05f10c92bcda67bc008';

  const fetchWeatherData = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found. Please enter a valid city name.');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      fetchWeatherData();
    }
  };

  return (
    <div className="current-weather flex flex-col items-center p-8 bg-white bg-opacity-80 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 overflow-auto">
      <form onSubmit={handleSubmit} className="w-full mb-6 flex flex-col items-center">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
          className="w-full px-4 py-2 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 rounded-lg text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
        >
          Check Hourly Weather
        </button>
      </form>
      <div className="max-h-96 overflow-auto w-full">
        {loading && <p className="text-gray-800">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {weatherData && (
          <div className="text-center text-gray-800">
            <h3 className="text-3xl font-semibold">{weatherData.city.name}</h3>
            {weatherData.list.slice(0, 12).map((hourlyData, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-2 mb-2">
                <p>Time: {new Date(hourlyData.dt * 1000).toLocaleTimeString()}</p>
                <p>Temperature: {hourlyData.main.temp} °C</p>
                <p>Description: {hourlyData.weather[0].description}</p>
                {/* Add more hourly weather details as needed */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HourlyWeather;
