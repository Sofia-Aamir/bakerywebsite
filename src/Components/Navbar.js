import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side navigation
import CartIcon from './CartIcon'; // Import CartIcon

const Navbar = ({ itemCount, cartItems }) => {
  return (
    <nav className="flex items-center justify-between p-6" style={{ backgroundColor: '#ffe5b6' }}>
      {/* Website Name */}
      <div className="text-brown-light text-5xl font-bold ml-8">Bake Bliss</div>

      {/* Navigation Links */}
      <div className="flex space-x-8 mr-14">
        <Link to="/" className="text-brown-light text-xl hover:text-yellow-400">Home</Link>
        <Link to="/about" className="text-brown-light text-xl hover:text-yellow-400">About Us</Link>
        <Link to="/categories" className="text-brown-light text-xl hover:text-yellow-400">Categories</Link>
        <Link to="/contact" className="inline-flex items-center px-4 py-2 text-brown-light text-xl hover:text-yellow-400 border border-brown-light rounded-full" style={{ marginTop: '-7px' }}>
          Contact Us
        </Link>

        {/* Cart Icon */}
        <CartIcon itemCount={itemCount} cartItems={cartItems} /> {/* Pass cartItems prop */}
      </div>
    </nav>
  );
};

export default Navbar;
