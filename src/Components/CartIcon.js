import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartIcon = ({ itemCount, cartItems }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart', { state: { cartItems } });
  };

  return (
    <div className="absolute top-5 right-8"> {/* Adjusted the right position to move the entire div slightly right */}
      <button onClick={handleClick} className="relative flex items-center justify-center">
        {/* Increase the size of the cart icon and move it slightly to the right */}
        <span role="img" aria-label="cart" style={{ fontSize: '2rem', marginLeft: '0.8rem', color: 'brown' }}> 🛒 </span>
        
        {itemCount > 0 && (
          <span
            className="absolute bg-yellow-400 text-black text-sm rounded-full px-2"
            style={{
              top: '-10px',  // Position the item count at the top of the cart
              right: '-10px',
              transform: 'translateX(-50%)', // Center the item count horizontally on top of the cart
            }}
          >
            {itemCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartIcon;
