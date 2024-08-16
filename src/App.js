import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';
import AboutUs from './Components/AboutUs';
import Categories from './Components/Categories';
import ContactUs from './Components/ContactUs';
// import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
   {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
