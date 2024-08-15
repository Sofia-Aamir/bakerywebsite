import React, { useState } from 'react';
import homepage from '../images/homepage.png';
import Navbar from './Navbar';
import CartIcon from './CartIcon';
import { useNavigate } from 'react-router-dom'; // Updated import

// Example images for products (Replace these with actual image imports)
import cake from '../images/cake.png';
import biscuit from '../images/biscuits.png';
import pizza from '../images/pizza.png';
import sandwich from '../images/sandwich.png';
import donut from '../images/donuts.png';
import pastry from '../images/pastry.png';
import muffin from '../images/muffins.png';
import croissant from '../images/croissant.png';

const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Use navigate instead of useHistory

  const products = [
    { id: 1, name: 'Cake', image: cake, price: '500' },
    { id: 2, name: 'Biscuit', image: biscuit, price: '200' },
    { id: 3, name: 'Pizza', image: pizza, price: '1200' },
    { id: 4, name: 'Sandwich', image: sandwich, price: '350' },
    { id: 5, name: 'Donut', image: donut, price: '150' },
    { id: 6, name: 'Pastry', image: pastry, price: '450' },
    { id: 7, name: 'Muffin', image: muffin, price: '300' },
    { id: 8, name: 'Croissant', image: croissant, price: '250' },
  ];

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const goToCart = () => {
    navigate('/cart', { state: { cartItems } }); // Use navigate instead of history.push
  };

  return (
    <div>
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
        <Navbar />
        <CartIcon itemCount={cartItems.length} onClick={goToCart} />

        {/* Tree Form Sentence */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/3 text-5xl font-bold text-brown-light">
          <div className="flex flex-col items-start">
            <div className="relative">Freshly Baked Delights,</div>
            <div className="relative mt-2">Every Day ...</div>
            <div className="relative mt-5 text-base text-black max-w-lg">
              <p className="leading-tight">
                Delicious treats for you. Crafted with love and care. Perfect for every occasion.
                <br />
                Enjoy our wide selection of baked goods, made from the finest ingredients.
                <br />
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

      {/* Special Products Section */}
      <div className="bg-white py-7" style={{ marginTop: '-20px', backgroundColor: '#ffe5b6' }}>
        <h2 className="text-center text-5xl font-bold text-brown-light mb-12">
          Special Products
        </h2>
        <div className="flex justify-center items-center space-x-8 overflow-x-auto">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="text-center flex-shrink-0">
              <div
                className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg hover:animate-vibrate"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <p className="mt-4 text-2xl font-semibold text-brown-light">
                {product.name}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 px-4 py-2 text-white bg-red-500 rounded transition-colors duration-300 ease-in-out hover:bg-[#cdac79]"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Our Products Section */}
      <div className="bg-white py-7" style={{ marginTop: '-20px', backgroundColor: '#cdac79' }}>
        <h2 className="text-center text-5xl font-bold text-brown-light mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-4 gap-5 px-10" style={{ marginTop: '-4px' }}>
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 p-4 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:translate-y-[-5px]"
              style={{ backgroundColor: '#ffe5b6' }}
            >
              <div
                className="w-full h-48 mx-auto overflow-hidden rounded-md"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <p className="mt-4 text-3xl font-semibold text-brown-light">
                {product.name}
              </p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-2xl font-bold text-gray-700">
                  Rs. {product.price}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 text-white bg-red-500 rounded transition-colors duration-300 ease-in-out hover:bg-[#cdac79]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
