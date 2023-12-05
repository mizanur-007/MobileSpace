import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-xl mb-12 mt-5"  style={{backgroundImage: 'url(https://i.ibb.co/NsVsCT1/rsz-1rsz-modern-stationary-collection-arrangement.jpg)'}}>
  <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
  <div className="hero-content flex-col md:flex-row">
    <img src="https://i.ibb.co/CwqPqS2/mobile.png" className="max-w-sm rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold text-white">Galaxy of Gadgets</h1>
      <p className="py-6 text-white">Experience Tomorrow’s Technology Today. Empower Your Lifestyle with Smart Gadgets for Every Need. Transform Your Ordinary Tasks into Extraordinary Experiences. Stay Connected, Stay Inspired – Gadgets for the Modern You.</p>
      <Link to='/products'><button className="btn btn-error text-white font-bold">Get Started</button></Link>
    </div>
  </div>
</div>
    );
};

export default Banner;