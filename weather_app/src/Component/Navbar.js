// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import SignUpPage from './Signup';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-8 font-bold">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold">
          <Link to="/" className="text-white">
            Forecast Fox
          </Link>
        </div>
        <ul className="flex space-x-4 text-white">
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
