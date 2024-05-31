import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HourlyWeather = ({ city }) => {
  const [hourlyData, setHourlyData] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = '2aa2778e69b80e5d455437fec2478312';

  useEffect(() => {
    const fetchHourlyWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );
        setHourlyData(response.data.list.slice(0, 12)); // Limit to first 12 hours
        setError(null);
      } catch (err) {
        setError('Failed to fetch hourly weather data');
        setHourlyData([]);
      }
    };

    if (city) {
      fetchHourlyWeather();
    }
  }, [city]);

  return (
    <div className="w-full max-w-4xl p-6 bg-white bg-opacity-75 rounded-lg shadow-lg ">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Hourly Weather for {city}</h3>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {hourlyData.map((data, index) => (
          <div key={index} className="border rounded-lg p-1 bg-white shadow-md max-w-xs">
  <p className="text-sm text-gray-600">Time: {new Date(data.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
  <p className="text-lg font-semibold text-gray-800">Temperature: {data.main.temp} °C</p>
  <p className="text-sm text-gray-600 capitalize">Description: {data.weather[0].description}</p>
</div>
        ))}
      </div>
    </div>
  );
};

export default HourlyWeather;
