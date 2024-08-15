import React from 'react';

const Navbar = ({ itemCount }) => {  // Add itemCount prop
  return (
    <nav
      className="flex items-center justify-between p-6"
      style={{ backgroundColor: '#ffe5b6' }}
    >
      {/* Website Name */}
      <div className="text-brown-light text-5xl font-bold ml-8">Bake Bliss</div>

      {/* Navigation Links */}
      <div className="flex space-x-8 mr-14">
        <a
          href="#home"
          className="text-brown-light text-xl hover:text-yellow-400"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-brown-light text-xl hover:text-yellow-400"
        >
          About Us
        </a>
        <a
          href="#categories"
          className="text-brown-light text-xl hover:text-yellow-400"
        >
          Categories
        </a>
        <a
          href="#contact"
          className="inline-flex items-center px-4 py-2 text-brown-light text-xl hover:text-yellow-400 border border-brown-light rounded-full"
          style={{ marginTop: '-7px' }}
        >
          Contact Us
        </a>

        {/* Cart Icon */}
        <div className="text-brown-light text-3xl hover:text-yellow-400 relative">
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
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 text-2xl text-black">
              {itemCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
