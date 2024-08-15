import React, { useState, useEffect } from 'react';
import homepage from '../images/homepage.png';
import Navbar from './Navbar';
import CartIcon from './CartIcon';
import Footer from './Footer';
import cake from '../images/cake.png';
import biscuit from '../images/biscuits.png';
import pizza from '../images/pizza.png';
import sandwich from '../images/sandwich.png';
import donut from '../images/donuts.png';
import pastry from '../images/pastry.png';
import muffin from '../images/muffins.png';
import croissant from '../images/croissant.png';

const HomePage = () => {
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

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4;

  // Load cart items from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return savedCartItems;
  });

  useEffect(() => {
    // Save cart items to localStorage whenever they change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, product];
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow >= products.length ? 0 : prevIndex + itemsToShow
    );
  };

  const displayedProducts = products.slice(
    startIndex,
    startIndex + itemsToShow
  );

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
        <Navbar itemCount={cartItems.length} cartItems={cartItems} />
        <CartIcon itemCount={cartItems.length} cartItems={cartItems} />

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
            <div className="mt-8 flex justify-center">
              <a
                href="#explore"
                className="inline-flex items-center px-6 py-3 text-white text-2xl font-semibold bg-brown-light rounded-full transform hover:scale-105 transition-transform"
                style={{ backgroundColor: '#3e1f1c' }}
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-7" style={{ marginTop: '-20px', backgroundColor: '#ffe5b6' }}>
        <h2 className="text-center text-5xl font-bold text-brown-light mb-12">
          Special Products
        </h2>
        <div className="flex justify-center items-center space-x-8 overflow-x-auto">
          {displayedProducts.map((product) => (
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
            </div>
          ))}
          <button
            onClick={handleNextClick}
            className="text-brown-light text-3xl hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className="bg-white py-7" style={{ marginTop: '-20px', backgroundColor: '#cdac79' }}>
        <h2 className="text-center text-5xl font-bold text-brown-light mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-4 gap-5 px-10" style={{ marginTop: '-4px' }}>
          {products.slice(0, 4).map((product) => (
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
                <p className="text-2xl text-brown-light">
                  Rs. {product.price}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="text-white font-bold py-2 px-4 rounded-full bg-brown-light hover:bg-yellow-400 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default HomePage;
