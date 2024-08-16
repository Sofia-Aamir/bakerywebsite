import React, { useState, useEffect } from 'react';
import cake1 from '../images/cake1.png';
import cake2 from '../images/cake2.png';
import cake3 from '../images/cake3.png';
import cake4 from '../images/cake4.png';
import pizza1 from '../images/pizza1.png'; // Replace with actual image paths
import pizza2 from '../images/pizza2.png'; // Replace with actual image paths
import pizza3 from '../images/pizza3.png'; // Replace with actual image paths
import pizza4 from '../images/pizza4.png'; // Replace with actual image paths
import donut1 from '../images/donut1.png'; // Replace with actual image paths
import donut2 from '../images/donut2.png'; // Replace with actual image paths
import donut3 from '../images/donut3.png'; // Replace with actual image paths
import donut4 from '../images/donut4.png'; // Replace with actual image paths
import croissant1 from '../images/croissant1.png'; // Replace with actual image paths
import croissant2 from '../images/croissant2.png'; // Replace with actual image paths
import croissant3 from '../images/croissant3.png'; // Replace with actual image paths
import croissant4 from '../images/croissant4.png'; // Replace with actual image paths
import Navbar from './Navbar';
import Footer from './Footer';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Cakes',
      products: [
        { id: 1, name: 'Chocolate Cake', image: cake1, price: '600' },
        { id: 2, name: 'Vanilla Cake', image: cake2, price: '550' },
        { id: 3, name: 'Red Velvet Cake', image: cake3, price: '750' },
        { id: 4, name: 'Fruit Cake', image: cake4, price: '700' },
      ],
    },
    {
      id: 2,
      name: 'Pizza',
      products: [
        { id: 1, name: 'Pepperoni Pizza', image: pizza1, price: '800' },
        { id: 2, name: 'Margarita Pizza', image: pizza2, price: '750' },
        { id: 3, name: 'BBQ Chicken Pizza', image: pizza3, price: '850' },
        { id: 4, name: 'Veggie Pizza', image: pizza4, price: '700' },
      ],
    },
    {
      id: 3,
      name: 'Donuts',
      products: [
        { id: 1, name: 'Glazed Donut', image: donut1, price: '200' },
        { id: 2, name: 'Chocolate Donut', image: donut2, price: '250' },
        { id: 3, name: 'Strawberry Donut', image: donut3, price: '230' },
        { id: 4, name: 'Cinnamon Donut', image: donut4, price: '220' },
      ],
    },
    {
      id: 4,
      name: 'Croissants',
      products: [
        { id: 1, name: 'Butter Croissant', image: croissant1, price: '300' },
        { id: 2, name: 'Chocolate Croissant', image: croissant2, price: '350' },
        { id: 3, name: 'Almond Croissant', image: croissant3, price: '370' },
        { id: 4, name: 'Cheese Croissant', image: croissant4, price: '340' },
      ],
    },
    // Add more categories here if needed
  ];

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return savedCartItems;
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="bg-[#ffe5b6] min-h-screen">
      <Navbar itemCount={cartItems.length} />
      <div className="min-h-screen mx-auto py-7" style={{ backgroundColor: '#cdac79' }}>
        <h2 className="text-center text-5xl font-bold text-brown-light mb-12">
          Categories
        </h2>
        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            <h3
              className="text-4xl font-bold text-brown-light mb-6"
              style={{ paddingLeft: '20px', marginTop: '-40px' }}
            >
              {category.name}
            </h3>
            <div className="grid grid-cols-4 gap-5 px-10" style={{ marginTop: '-4px' }}>
              {category.products.map((product) => (
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
            <hr className="my-8 border-t-2 border-brown-light mx-10" />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Categories;
