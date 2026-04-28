import { useState } from 'react'
import HeroImage from './assets/thumb-figma 1.png'
import BrandLogo from './assets/brand_logo.png'

function App() {
  return (
    <div className='min-h-screen bg-gray-200'>
      <nav className='px-10 h-[95px] bg-white border-b border-gray-300 flex items-center justify-between'>
        <div className='border-b border-gray-100 h-20 w-40 '><img src={BrandLogo} alt="Brand Logo" className='h-full w-full object-contain' /></div>
                <div className='border-b border-gray-100 h-20 w-40 bg-red-900'></div>

        <div className='border-b border-gray-100 h-20 w-90 flex items-centre justify-between'>
          <div className='h-20 w-20 bg-yellow-200'></div>
          <div className='h-20 w-20 bg-yellow-200'></div>
          <div className='h-20 w-20 bg-yellow-200'></div>
          <div className='h-20 w-20 bg-yellow-200'></div>
          
        </div>

           

      </nav>
    </div>
  );
};

export default App;