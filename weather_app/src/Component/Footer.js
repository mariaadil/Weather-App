import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [complaint, setComplaint] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formValid, setFormValid] = useState(true); // State to track form validity

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
    // Reset form validity when user starts typing
    setFormValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the complaint is empty
    if (!complaint.trim()) {
      setFormValid(false); // Set form validity to false
      return; // Exit function if complaint is empty
    }
    // Handle complaint submission logic here (e.g., send to server)
    console.log('Complaint submitted:', complaint);
    setSubmitted(true);
  };

  return (
    <footer className="py-8 px-4 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        {/* Left section */}
        <div className="flex flex-col space-y-4">
          <div className="ml-20 flex items-center space-x-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100009178280138" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-3xl hover:text-gray-400" />
              </a>
              <a href="https://www.instagram.com/nat_urehacks/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl hover:text-gray-400" />
              </a>
              <a href="https://www.linkedin.com/in/maria-adil-813479243/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl hover:text-gray-400" />
              </a>
              <a href="https://github.com/mariaadil" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-3xl hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="mr-20 flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Complaint Form</h3>
          {!formValid && ( // Show error message if form is invalid
            <p className="text-red-500">Please enter your complaint.</p>
          )}
          {submitted ? (
            <p>Thank you for your complaint. We will look into it shortly.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={complaint}
                onChange={handleComplaintChange}
                className="w-full p-2 rounded-lg bg-gray-700 text-white"
                placeholder="Enter your complaint here"
                rows="4"
              />
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg"
              >
                Submit
              </button>
            </form>
          )}
          <p>© The Weather Company, LLC 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
