import React from 'react';

const CartIcon = ({ itemCount, onClick }) => {
  return (
    <div className="absolute top-8 right-8">
      <button
        onClick={onClick}
        className="relative text-3xl text-white bg-red-500 rounded-full p-4 hover:bg-red-400"
      >
        🛒
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 bg-yellow-400 text-black text-sm rounded-full px-2">
            {itemCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartIcon;
