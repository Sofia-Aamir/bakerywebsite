import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Image1 from '../images/Image1.png';

const AboutUs = () => (
  <div>
    <Navbar />
    <div  className="max-w-screen-1xl mx-auto py-8 px-4 lg:py-16 lg:px-6 bg-[#cdac79] ">
      <div  style={{ marginTop: '-35px' }} className="text-center mb-10">
        <h2 className="text-center text-5xl font-bold text-brown-light mb-12">About Us</h2>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* can help image */}
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
    <img className="w-[400px] h-[400px] mx-auto" src={Image1} alt="can_help_banner" />
  </div>
        {/* end can help image */}

        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
          <div className="h-full py-4 px-6 border border-[#ffe5b6] border-t-0 border-l-0 rounded-br-xl">
  <h3 className="text-2xl font-bold text-md mb-6">Freshly Baked Goods</h3>
  <p className="text-sm">At Bake Bliss, we pride ourselves on offering freshly baked goods made with the finest ingredients. Our bakery is dedicated to delivering delicious, handcrafted treats that bring joy to every bite.</p>
</div>

          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
  <div className="h-full py-4 px-6 border border-[#ffe5b6] border-t-0 border-l-0 rounded-br-xl">
    <h3 className="text-2xl font-bold text-md mb-6">Easy Online Ordering</h3>
    <p className="text-sm">Our website allows you to easily browse our menu and place orders online. Whether you're craving fresh bread, pastries, or custom cakes, you can order your favorite baked goods with just a few clicks and pick them up at your convenience.</p>
  </div>
</div>


          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-[#ffe5b6] border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">24/7 Customer Support</h3>
              <p className="text-sm">Our U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions. Whether it's through email, phone, or live chat, we're always here to support you.</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-[#ffe5b6] border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">Secure Payment Processing</h3>
              <p className="text-sm">We use cutting-edge security measures to protect our customers' sensitive information and ensure the safety of all transactions made on our site.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutUs;
