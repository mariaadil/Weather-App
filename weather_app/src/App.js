import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './Component/WeatherChecker';
import HourlyWeather from './Component/HourlyWeather';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import SignUpPage from './Component/Signup'; // Correct path
import LoginPage from './Component/Login';
import './App.css';

const App = () => {
  const [weatherCondition, setWeatherCondition] = useState('default');
  const [city, setCity] = useState('');

  const handleWeatherChange = (condition, cityName) => {
    setWeatherCondition(condition);
    setCity(cityName);
  };

  const getBackgroundClass = () => {
    switch (weatherCondition) {
      case 'clear':
        return 'clear-weather-bg';
      case 'rain':
        return 'rain-weather-bg';
      case 'clouds':
        return 'clouds-weather-bg';
      default:
        return 'clear-weather-bg';
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <div id="appBackground" className={`min-h-screen flex items-center justify-center ${getBackgroundClass()}`}>
              <div className="w-full max-w-screen-lg flex flex-col md:flex-row justify-between p-4 bg-opacity-70">
                <div className="w-full md:w-1/2 pr-0 md:pr-4 overflow-auto h-[80vh]">
                  <Weather onWeatherChange={handleWeatherChange} />
                </div>
                {city && (
                  <div className="w-full md:w-3/3 h-100 pl-10 md:pl-10 overflow-y-auto h-[70vh]">
                    <HourlyWeather city={city} />
                  </div>
                )}
              </div>
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
