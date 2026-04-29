import { useState } from 'react'
import HeroImage from './assets/thumb-figma 1.png'
import BrandLogo from './assets/brand_logo.png'
import ProfileIcon from './assets/ProfileIcon.png'
import MsgIcon from './assets/MsgIcon.png'
import OrdersIcon from './assets/OrdersIcon.png'
import CartIcon from './assets/CartIcon.png'
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='min-h-screen bg-gray-200'>
      <nav className='px-10 h-[95px] bg-white border-b border-gray-300 flex items-center justify-between'>
        <div className='h-20 w-40 '><img src={BrandLogo} alt="Brand Logo" className='h-full w-full object-contain' /></div>

        <div className='flex-1 max-w-[600px] mx-10'>
          <div className='relative flex items-center w-full h-12 bg-white border-2 border-blue-600 rounded-lg overflow-hidden'>
            <input
              type="text"
              placeholder="Search"
              className='w-full h-full px-4 outline-none text-gray-700'
            />
            <select className='h-full bg-gray-100 px-3 text-sm text-gray-600 border-black cursor-pointer hover:bg-gray-200'>
              <option value="all">All Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Kitchen</option>
            </select>
            <button className='bg-blue-600 h-full px-6 text-white font-bold hover:bg-blue-700 transition-colors'>
              Search
            </button>
          </div>
        </div>
        <div className='h-20 w-90 flex items-center justify-between'>
          <Link to="/profile" className='h-20 w-20 pb-2 cursor-pointer'>
            <img src={ProfileIcon} alt="Profile" className='h-full w-full object-contain' />
          </Link>
          <Link to="/messages" className='h-25 w-22 pt-1 cursor-pointer'>
            <img src={MsgIcon} alt="Messages" className='h-full w-full object-contain' />
          </Link>
          <Link to="/orders" className='h-20 w-20 pb-1 cursor-pointer'>
            <img src={OrdersIcon} alt="Orders" className='h-full w-full object-contain' />
          </Link>
          <Link to="/cart" className='h-20 w-20 cursor-pointer'>
            <img src={CartIcon} alt="Cart" className='h-full w-full object-contain' />
          </Link>
        </div>
      </nav>

      <nav1>
        <div className='flex items-center justify-between h-10 bg-white border-b border-gray-300'>
          <ul className='p-12 flex space-x-6 text-sm font-medium text-gray-700'>
            <li className='cursor-pointer hover:text-blue-600 transition-colors'>All category</li>
            <li className='cursor-pointer hover:text-blue-600 transition-colors'>Hot offers</li>
            <li className='cursor-pointer hover:text-blue-600 transition-colors'>Gift boxes</li>
            <li className='cursor-pointer hover:text-blue-600 transition-colors'>Projects</li>
            <li className='cursor-pointer hover:text-blue-600 transition-colors'>Menu item</li>
            <li className='cursor-pointer hover:text-blue-600 transition-colors'>Help</li>
          </ul>
        </div>
      </nav1>

      <div className='my-5 mx-10 p-5 bg-white flex items-center justify-between gap-5 h-96 border-b border-gray-300'>
        <div className='my-5 w-60 h-90 border-b border-gray-300 bg-white'>
          <ul>
            <li className='text-black text-sm font-medium mb-2 hover:bg-blue-50'>Automobiles</li>
            <li className='text-black text-sm font-medium mb-2 hover:bg-blue-50'>Clothes and wear</li>
            <li className='text-black text-sm font-medium mb-2 hover:bg-blue-50'>Home interiors</li>
            <li className='text-black text-sm font-medium mb-2 hover:bg-blue-50'>Computer and tech</li>
            <li className='text-black text-sm font-medium mb-2 hover:bg-blue-50'>Tools, equipments</li>
            <li className='text-black text-sm font-medium mb-2 hover:bg-blue-50'>Sports and outdoor</li>
            <li className='text-black text-sm font-medium mb-2 hover:bg-blue-50'>Animal and pets</li>
            <li className='text-black text-sm font-medium mb-2 hover:bg-blue-50'>Machinery tools</li>
            <li className='text-black text-sm font-medium mb-2 hover:bg-blue-50'>More category</li>
          </ul>
        </div>
        <div className='my-5 w-190 h-90 border-b border-gray-300 bg-black'></div>
        <div className='my-5 w-60 h-90 border-b border-gray-300 bg-black'></div>
      </div>

      <Routes>
        <Route path="/profile" element={<div className="p-10">Welcome to your Profile</div>} />
        <Route path="/messages" element={<div className="p-10">Your Messages</div>} />
        <Route path="/orders" element={<div className="p-10">Your Orders</div>} />
        <Route path="/cart" element={<div className="p-10">Your Cart</div>} />
      </Routes>
    </div>
  );
};

export default App;