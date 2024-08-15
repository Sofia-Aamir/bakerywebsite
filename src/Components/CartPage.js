import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the import path according to your project structure

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);

  const handleRemoveFromCart = (indexToRemove) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(indexToRemove, 1); // Remove the specific item at the given index
    setCartItems(updatedCartItems);
    // Optionally navigate to the cart page with updated items
    navigate('/cart', { state: { cartItems: updatedCartItems } });
  };

  return (
    <div className="bg-[#cdac79] min-h-screen">
      <Navbar /> {/* Include the Navbar component */}
      <div className="container mx-auto p-4">
        <h2 className="text-center text-5xl font-bold text-brown-light mb-12">
          Your Cart
        </h2>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border-b border-gray-300 bg-[#ffe5b6] rounded-lg shadow-md mb-3"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-2xl font-semibold">{item.name}</p>
                </div>
                <p className="text-2xl font-semibold">Rs. {item.price}</p>
                <button
                  onClick={() => handleRemoveFromCart(index)}
                  className="text-white font-bold text-xl py-4 px-6 rounded-full bg-brown-light hover:bg-yellow-400 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
