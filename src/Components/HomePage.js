import React from 'react';
// import '../CSS/HomePage.css'; // Import your Tailwind CSS file
import homepage from '../images/homepage.png'

const HomePage = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${homepage})`, // Replace with your image path
      }}
    >
      <nav className="flex items-center justify-between p-6 bg-transparent">
        {/* Website Name */}
        <div className="text-white text-3xl font-bold">
          SofiBake's
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <a href="#home" className="text-white text-lg hover:text-yellow-400">Home</a>
          <a href="#about" className="text-white text-lg hover:text-yellow-400">About Us</a>
          <a href="#categories" className="text-white text-lg hover:text-yellow-400">Categories</a>
          <a href="#contact" className="text-white text-lg hover:text-yellow-400">Contact Us</a>

          {/* Cart Icon */}
          <a href="#cart" className="text-white text-lg hover:text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2m0 0L7 13h10l1.6-8H5.4m.4-2h14.6m-4 11a2 2 0 11-4 0 2 2 0 014 0zm-10 0a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>
        </div>
      </nav>

      {/* Additional content can go here */}
      <div className="flex items-center justify-center h-full text-center">
        <h1 className="text-white text-6xl font-bold">
          Welcome to SofiBake's
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
