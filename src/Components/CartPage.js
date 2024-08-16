import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const CartPage = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return savedCartItems;
  });

  useEffect(() => {
    // Save cart items to localStorage whenever they change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem.quantity > 1) {
        // Decrement the quantity if it's greater than 1
        return prevItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Remove the item completely if quantity is 1
        return prevItems.filter(item => item.id !== productId);
      }
    });
  };
  

  return (
    <div className="bg-[#cdac79] min-h-screen">
      <Navbar itemCount={cartItems.length} />
      <div className="container mx-auto p-4">
        <h2 className="text-center text-5xl font-bold text-brown-light mb-12">
          Your Cart
        </h2>
        {cartItems.length > 0 ? (
          <div>
           {cartItems.map((item) => (
  <div
    key={item.id}
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
      <p className="text-2xl font-semibold">{item.name} (x{item.quantity})</p>
    </div>
    <p className="text-2xl font-semibold">Rs. {item.price * item.quantity}</p>
    <button
      onClick={() => handleRemoveFromCart(item.id)}
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
