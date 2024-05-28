import React, { useState } from 'react';
import Weather from './Component/WeatherChecker';
import Sidebar from './Component/Sidebar';
import Footer from './Component/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 relative">
      
      {/* Forecast Fox Link */}
      <a href="#" className="absolute top-0 right-0 m-4 text-white text-lg font-semibold hover:underline">Forecast Fox</a>
      
      {/* Hamburger menu */}
      <button onClick={toggleSidebar} className="absolute top-0 left-0 m-4 text-black focus:outline-none">
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3.5A.5.5 0 0 1 3.5 3H16a.5.5 0 1 1 0 1H3.5a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5H16a.5.5 0 1 1 0 1H3.5A.5.5 0 0 1 3 8zm.5 4.5a.5.5 0 0 0 0 1H16a.5.5 0 0 0 0-1H3.5z" />
        </svg>
      </button>

      <div className="p-8 bg-white bg-opacity-90 rounded-xl shadow-2xl w-full max-w-lg relative">
        {/* Main content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Forecase Fox</h1>
          <Weather />
        </div>
        
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
