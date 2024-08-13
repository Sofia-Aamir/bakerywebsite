import React from 'react';
import homepage from '../images/homepage.png';

const HomePage = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${homepage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      <nav
        className="flex items-center justify-between p-6 bg-transparent"
        style={{ position: 'relative' }}
      >
        {/* Website Name */}
        <div className="text-brown-light text-5xl font-bold ml-8">
          Bake Bliss
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 mr-14">
          <a href="#home" className="text-brown-light text-xl hover:text-yellow-400 hover:text-xl">
            Home
          </a>
          <a href="#about" className="text-brown-light text-xl hover:text-yellow-400 hover:text-xl">
            About Us
          </a>
          <a href="#categories" className="text-brown-light text-xl hover:text-yellow-400 hover:text-xl">
            Categories
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 text-brown-light text-xl hover:text-yellow-400 hover:text-xl border border-brown-light rounded-full"
            style={{ marginTop: '-7px' }}
          >
            Contact Us
          </a>

          {/* Cart Icon */}
          <a href="#cart" className="text-brown-light text-3xl hover:text-yellow-400 hover:text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
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

      {/* Tree Form Sentence */}
      <div
        className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/3 text-5xl font-bold text-brown-light"
      >
        <div className="flex flex-col items-start">
          <div className="relative">
            Freshly Baked Delights,
          </div>
          <div className="relative mt-2">
            Every Day ...
          </div>
          <div className="relative mt-5 text-base text-black max-w-lg">
            <p className="leading-tight">
              Delicious treats for you. Crafted with love and care. Perfect for every occasion.<br />
              Enjoy our wide selection of baked goods, made from the finest ingredients.<br />
              From pastries to cakes, we ensure the highest quality and freshness in every bite.
            </p>
          </div>
          {/* Explore Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="#explore"
              className="inline-flex items-center px-6 py-3 text-white text-2xl font-semibold bg-brown-light rounded-full transform hover:scale-105 transition-transform"
              style={{ backgroundColor: '#3e1f1c' }} // Brown color
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
