import React from 'react';

const Sidebar = ({ isOpen, closeSidebar, setForecastOption }) => {
  const handleForecastOptionClick = (option) => {
    setForecastOption(option);
    closeSidebar();
  };

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white px-4 py-6 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button onClick={closeSidebar} className="absolute top-0 right-0 m-4 text-white focus:outline-none">
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.646 4.646a.5.5 0 0 1 .708 0L10 10.293l5.646-5.647a.5.5 0 1 1 .708.708L10.707 11l5.647 5.646a.5.5 0 1 1-.708.708L10 11.707l-5.646 5.647a.5.5 0 0 1-.708-.708L9.293 11 3.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      <h2 className="text-2xl font-bold mb-4">Forecase Fox</h2>
      {/* Hourly forecast button */}
      <button onClick={() => handleForecastOptionClick('hourly')} className="w-full text-left py-2 px-4 mb-4 rounded-lg bg-gray-780 hover:bg-gray-600">Hourly Forecast</button>
      {/* Daily forecast button */}
      <button onClick={() => handleForecastOptionClick('daily')} className="w-full text-left py-2 px-4 mb-4 rounded-lg bg-gray-780 hover:bg-gray-600">Daily Forecast</button>
      {/* Weekly forecast button */}
      <button onClick={() => handleForecastOptionClick('weekly')} className="w-full text-left py-2 px-4 mb-4 rounded-lg bg-gray-780 hover:bg-gray-600">Weekly Forecast</button>
      {/* Monthly forecast button */}
      <button onClick={() => handleForecastOptionClick('monthly')} className="w-full text-left py-2 px-4 mb-4 rounded-lg bg-gray-780 hover:bg-gray-600">Monthly Forecast</button>
    </div>
  );
};

export default Sidebar;
