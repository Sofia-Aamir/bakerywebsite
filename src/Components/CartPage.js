import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Updated import

const CartPage = () => {
  const location = useLocation(); // Get location state
  const { cartItems } = location.state || { cartItems: [] };
  const navigate = useNavigate(); // Use navigate instead of useHistory

  const handleRemove = (id) => {
    // Handle removing item from the cart
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    navigate('/cart', { state: { cartItems: updatedCartItems } }); // Use navigate instead of history.replace
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-xl">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">Rs. {item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
