import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('metric'); 
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '2aa2778e69b80e5d455437fec2478312';

  const getWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('City not found');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) {
        // Fetch weather based on user's location if city is not set
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const locationResponse = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
              const cityName = locationResponse.data.city || locationResponse.data.locality || locationResponse.data.principalSubdivision;
              setCity(cityName);
              await getWeather(cityName);
            } catch (err) {
              setError('Unable to fetch weather for your location');
            }
          });
        } else {
          setError('Geolocation is not supported by this browser');
        }
      } else {
        // Fetch weather for the specified city
        await getWeather(city);
      }
    };

    fetchWeather();
  }, [city, unit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      getWeather(city);
    }
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-white bg-opacity-80 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="w-full mb-6 flex flex-col items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="w-full px-4 py-2 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center">
          <input
            type="radio"
            id="celsius"
            value="metric"
            checked={unit === 'metric'}
            onChange={handleUnitChange}
            className="mr-2"
          />
          <label htmlFor="celsius" className="text-gray-700">Celsius</label>
          <input
            type="radio"
            id="fahrenheit"
            value="imperial"
            checked={unit === 'imperial'}
            onChange={handleUnitChange}
            className="ml-4 mr-2"
          />
          <label htmlFor="fahrenheit" className="text-gray-700">Fahrenheit</label>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
        >
          Get Weather
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && (
        <div className="text-center text-gray-800">
          <h3 className="text-3xl font-semibold">{weatherData.name}</h3>
          <p className="text-xl mt-2">Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
          <p className="text-lg mt-1 capitalize">{weatherData.weather[0].description}</p>
        </div>
      )}
      
    </div>
  );
};

export default Weather;
