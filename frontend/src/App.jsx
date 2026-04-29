import { useState } from 'react'
import { Link } from 'react-router-dom';
import HeroImage from './assets/thumb-figma 1.png'
import BrandLogo from './assets/brand_logo.png'
import ProfileIcon from './assets/ProfileIcon.png'
import MsgIcon from './assets/MsgIcon.png'
import OrdersIcon from './assets/OrdersIcon.png'
import CartIcon from './assets/CartIcon.png'
import User from './assets/user.png'
import Banner from './assets/Banner.png'
import Camera from './assets/camera.png'
import Watch from './assets/watch.png'
import Headphone from './assets/headphone.png'
import Laptop from './assets/laptop.png'
import Mobile from './assets/mobile.png'
import ChairImg from './assets/chair.png';
import SofaImg from './assets/sofa.png';
import DishImg from './assets/dishes.png';
import PotImg from './assets/pot.png';
import MixerImg from './assets/mixer.png';
import BlenderImg from './assets/blender.png';
import ApplianceImg from './assets/appliance.jpg';
import PlantImg from './assets/plant.png';
import BannerImg from './assets/home-banner.jpg';
import InquiryBanner from './assets/inquiry-bg.png';
import ShirtImg from './assets/shirt.png'
import JacketImg from './assets/jacket.jpg'
import SuitImg from './assets/suit.png'
import WalletImg from './assets/wallet.png'
import BagImg from './assets/bag.png'
import ShortsImg from './assets/shorts.png'
import HeadsetImg from './assets/headset.png'
import TechBagImg from './assets/bag.png'
import KettleImg from './assets/kettle.png'
import Service1 from './assets/service1.png'
import Service2 from './assets/service2.png'
import Service3 from './assets/service3.png'
import Service4 from './assets/service4.png'
import SearchIcon from './assets/search-icon.png'
import BoxIcon from './assets/box-icon.png'
import SendIcon from './assets/send-icon.png'
import ShieldIcon from './assets/shield-icon.png'
import FlagUAE from './assets/uae.png'
import FlagAUS from './assets/aus.png'
import FlagUSA from './assets/usa.png'
import FlagRUS from './assets/rus.png'
import FlagITA from './assets/ita.png'
import FlagDNK from './assets/dnk.png'
import FlagFRA from './assets/fra.png'
import FlagCHN from './assets/chn.png'
import FlagGBR from './assets/gbr.png'
import FacebookIcon from './assets/fb.png'
import TwitterIcon from './assets/twitter.png'
import LinkedInIcon from './assets/linkedin.png'
import InstaIcon from './assets/insta.png'
import YoutubeIcon from './assets/youtube.png'
import AppStore from './assets/appstore.png'
import GooglePlay from './assets/googleplay.png'
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
        <div className='my-5 w-60 h-90 bg-white'>
          <ul className='p-5 flex flex-col gap-2 cursor-pointer'>
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
        <div className='my-5 w-190 h-90 border-b border-gray-300 '>
          <img className='w-full h-full object-cover' src={Banner} alt="Banner Image" />
        </div>
        <div className='my-5 w-65 h-90 flex flex-col items-center justify-between'>
          <div className='h-40 w-full bg-blue-100 rounded-md text-left text-[14px] p-3 shadow-sm'>
            <div className='flex items-center gap-3 mb-2'>
              <img className='h-12 w-12 rounded-full object-cover' src={User} alt="User" />
              <p className='font-medium text-gray-800 leading-tight'>Hi, user <br /> let’s get started</p></div>
            <button className='w-full bg-blue-600 rounded-md text-white py-1.5 text-sm font-semibold cursor-pointer hover:bg-blue-700 transition-colors'>Join Now</button>
            <button className='w-full bg-white border border-gray-200 rounded-md text-blue-600 py-1.5 text-sm font-semibold mt-2 cursor-pointer hover:bg-gray-50'>Login</button></div>
          <div className='h-28 w-65 bg-orange-500 rounded-sm mt-2 text-white text-left text-[24px] p-3'>Get US $10 off with a new supplier</div>
          <div className='h-28 w-65 bg-teal-500 rounded-sm mt-2 mb-2 text-white text-left text-[24px] p-3'>Send quotes with supplier preferences</div>
        </div>


      </div>

      <div className='my-5 mx-10 bg-white border border-gray-200 rounded-md flex overflow-hidden'>
        <div className='p-5 w-72 border-r border-gray-200'>
          <h3 className='text-xl font-bold text-gray-900'>Deals and offers</h3>
          <p className='text-gray-400 text-sm mb-4'>Hygiene equipments</p>

          <div className='flex gap-2'>
            {[['04', 'Days'], ['13', 'Hour'], ['34', 'Min'], ['56', 'Sec']].map(([val, unit]) => (
              <div key={unit} className='bg-gray-600 text-white w-12 h-12 flex flex-col items-center justify-center rounded-md'>
                <span className='text-sm font-bold'>{val}</span>
                <span className='text-[10px]'>{unit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 divide-x divide-gray-200'>
          {[
            { name: "Smart watches", discount: "-25%", img: Watch },
            { name: "Laptops", discount: "-15%", img: Laptop },
            { name: "GoPro cameras", discount: "-40%", img: Camera },
            { name: "Headphones", discount: "-25%", img: Headphone },
            { name: "Canon cameras", discount: "-25%", img: Camera },
          ].map((item, index) => (
            <div key={index} className='flex-1 flex flex-col items-center justify-center p-4 hover:bg-gray-50 cursor-pointer transition-colors'>
              <div className='h-32 w-32 mb-3'>
                <img src={item.img} alt={item.name} className='h-full w-full object-contain' />
              </div>
              <p className='text-sm text-gray-700 mb-2'>{item.name}</p>
              <span className='bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold'>
                {item.discount}
              </span>
            </div>
          ))}
        </div>

      </div>

      <div className='my-5 mx-10 bg-white border border-gray-200 rounded-md flex h-[257px] overflow-hidden'>
        <div className='relative w-64 h-full border-r border-gray-200'>
          <img src={BannerImg} alt="Banner" className='w-full h-full object-cover -scale-x-100' />
          <div className='absolute top-5 left-5'>
            <h3 className='text-lg font-bold w-24'>Home and outdoor</h3>
            <button className='mt-4 bg-white px-4 py-2 rounded-md text-sm font-semibold shadow-md cursor-pointer'>
              Source now
            </button>
          </div>
        </div>
        <div className='flex-1 flex flex-wrap'>
          <div className='w-1/4 h-1/2 border-r border-b border-gray-100 p-4 flex justify-between'>
            <div>
              <p className='text-sm'>Soft chairs</p>
              <p className='text-xs text-gray-400'>From <br /> USD 19</p>
            </div>
            <img src={ChairImg} className='w-16 h-16 object-contain self-end' />
          </div>

          <div className='w-1/4 h-1/2 border-r border-b border-gray-100 p-4 flex justify-between'>
            <div>
              <p className='text-sm'>Sofa & chair</p>
              <p className='text-xs text-gray-400'>From <br /> USD 19</p>
            </div>
            <img src={SofaImg} className='w-16 h-16 object-contain self-end' />
          </div>

          <div className='w-1/4 h-1/2 border-r border-b border-gray-100 p-4 flex justify-between'>
            <div>
              <p className='text-sm'>Kitchen dishes</p>
              <p className='text-xs text-gray-400'>From <br /> USD 19</p>
            </div>
            <img src={DishImg} className='w-16 h-16 object-contain self-end' />
          </div>

          <div className='w-1/4 h-1/2 border-b border-gray-100 p-4 flex justify-between'>
            <div>
              <p className='text-sm'>Smart watches</p>
              <p className='text-xs text-gray-400'>From <br /> USD 19</p>
            </div>
            <img src={PotImg} className='w-16 h-16 object-contain self-end' />
          </div>

          <div className='w-1/4 h-1/2 border-r border-gray-100 p-4 flex justify-between'>
            <div>
              <p className='text-sm'>Kitchen mixer</p>
              <p className='text-xs text-gray-400'>From <br /> USD 100</p>
            </div>
            <img src={MixerImg} className='w-16 h-16 object-contain self-end' />
          </div>
          <div className='w-1/4 h-1/2 border-r border-gray-100 p-4 flex justify-between'>
            <div>
              <p className='text-sm'>Blenders</p>
              <p className='text-xs text-gray-400'>From <br /> USD 39</p>
            </div>
            <img src={BlenderImg} className='w-16 h-16 object-contain self-end' />
          </div>
          <div className='w-1/4 h-1/2 border-r border-gray-100 p-4 flex justify-between'>
            <div>
              <p className='text-sm'>Home appliance</p>
              <p className='text-xs text-gray-400'>From <br /> USD 19</p>
            </div>
            <img src={ApplianceImg} className='w-16 h-16 object-contain self-end' />
          </div>
          <div className='w-1/4 h-1/2 p-4 flex justify-between'>
            <div>
              <p className='text-sm'>Coffee maker</p>
              <p className='text-xs text-gray-400'>From <br /> USD 10</p>
            </div>
            <img src={PlantImg} className='w-16 h-16 object-contain self-end' />
          </div>

        </div>
      </div>

      <div 
  className='my-5 mx-10 h-96 rounded-md flex items-center justify-between px-10'
  style={{ 
    backgroundImage: `linear-gradient(to right, rgba(0, 100, 255, 0.8), rgba(0, 100, 255, 0.4)), url(${InquiryBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <div className='max-w-md text-white'>
    <h2 className='text-3xl font-bold leading-tight'>
      An easy way to send <br /> requests to all suppliers
    </h2>
    <p className='mt-4 text-sm opacity-90'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
    </p>
  </div>

  <div className='bg-white p-6 rounded-lg shadow-lg w-[440px]'>
    <h3 className='text-lg font-bold text-gray-800 mb-4'>Send quote to suppliers</h3>
    
    <div className='flex flex-col gap-4'>
      <input 
        type="text" 
        placeholder="What item you need?" 
        className='border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500'
      />
      
      <textarea 
        placeholder="Type more details" 
        rows="3"
        className='border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500'
      />

      <div className='flex gap-3'>
        <input 
          type="text" 
          placeholder="Quantity" 
          className='flex-1 border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500'
        />
        <select className='border border-gray-300 rounded-md p-2 text-gray-500 outline-none'>
          <option>Pcs</option>
          <option>Kg</option>
          <option>Liters</option>
        </select>
      </div>

      <button className='bg-blue-600 text-white font-bold py-2 px-6 rounded-md w-max hover:bg-blue-700 transition-colors'>
        Send inquiry
      </button>
    </div>
  </div>
</div>
<h2 className='font-bold ml-10 mb-2 text-[25px]'>Recommended items</h2>
<div className='flex items-center justify-between mx-25'>  
  <div className='flex flex-wrap gap-4'>
        <div className='w-[225px] bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:border-blue-400 transition-all'>
      <div className='h-40 w-full flex items-center justify-center mb-3'><img src={ShirtImg} className='h-full object-contain' /></div>
      <p className='font-bold text-gray-900'>$10.30</p>
      <p className='text-sm text-gray-500 mt-1'>T-shirts with multiple colors, for men</p>
    </div>
    <div className='w-[225px] bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:border-blue-400 transition-all'>
      <div className='h-40 w-full flex items-center justify-center mb-3'><img src={JacketImg} className='h-full object-contain' /></div>
      <p className='font-bold text-gray-900'>$10.30</p>
      <p className='text-sm text-gray-500 mt-1'>Jeans shorts for men blue color</p>
    </div>
    <div className='w-[225px] bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:border-blue-400 transition-all'>
      <div className='h-40 w-full flex items-center justify-center mb-3'><img src={SuitImg} className='h-full object-contain' /></div>
      <p className='font-bold text-gray-900'>$12.50</p>
      <p className='text-sm text-gray-500 mt-1'>Brown winter coat medium size</p>
    </div>

    <div className='w-[225px] bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:border-blue-400 transition-all'>
      <div className='h-40 w-full flex items-center justify-center mb-3'><img src={WalletImg} className='h-full object-contain' /></div>
      <p className='font-bold text-gray-900'>$34.00</p>
      <p className='text-sm text-gray-500 mt-1'>Jeans bag for travel for men</p>
    </div>

    <div className='w-[225px] bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:border-blue-400 transition-all'>
      <div className='h-40 w-full flex items-center justify-center mb-3'><img src={BagImg} className='h-full object-contain' /></div>
      <p className='font-bold text-gray-900'>$99.00</p>
      <p className='text-sm text-gray-500 mt-1'>Leather wallet for men</p>
    </div>


    <div className='w-[225px] bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:border-blue-400 transition-all'>
      <div className='h-40 w-full flex items-center justify-center mb-3'><img src={ShortsImg} className='h-full object-contain' /></div>
      <p className='font-bold text-gray-900'>$9.99</p>
      <p className='text-sm text-gray-500 mt-1'>Canon camera black, 100x zoom</p>
    </div>


    <div className='w-[225px] bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:border-blue-400 transition-all'>
      <div className='h-40 w-full flex items-center justify-center mb-3'><img src={HeadsetImg} className='h-full object-contain' /></div>
      <p className='font-bold text-gray-900'>$8.99</p>
      <p className='text-sm text-gray-500 mt-1'>Headset for gaming with mic</p>
    </div>

    <div className='w-[225px] bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:border-blue-400 transition-all'>
      <div className='h-40 w-full flex items-center justify-center mb-3'><img src={TechBagImg} className='h-full object-contain' /></div>
      <p className='font-bold text-gray-900'>$10.30</p>
      <p className='text-sm text-gray-500 mt-1'>Smartwatch silver color modern</p>
    </div>

    <div className='w-[225px] bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:border-blue-400 transition-all'>
      <div className='h-40 w-full flex items-center justify-center mb-3'><img src={PotImg} className='h-full object-contain' /></div>
      <p className='font-bold text-gray-900'>$10.30</p>
      <p className='text-sm text-gray-500 mt-1'>Blue wallet for men leather material</p>
    </div>

    <div className='w-[225px] bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:border-blue-400 transition-all'>
      <div className='h-40 w-full flex items-center justify-center mb-3'><img src={KettleImg} className='h-full object-contain' /></div>
      <p className='font-bold text-gray-900'>$80.95</p>
      <p className='text-sm text-gray-500 mt-1'>Jeans bag for travel for men</p>
    </div>

  </div>
</div>
<div className='mx-10 my-10'>
  <h2 className='text-2xl font-bold mb-5'>Our extra services</h2>
  <div className='flex gap-4'>
    
   <div className='flex-1 bg-white border border-gray-200 rounded-md overflow-hidden relative'>
      <img src={Service1} className='w-full h-32 object-cover brightness-75' />
      <div className='p-5 pr-12'><p className='font-medium text-sm'>Source from <br/> Industry Hubs</p></div>
      <div className='absolute right-4 top-24 bg-blue-100 p-2 rounded-full border-4 border-white'>
        <img src={SearchIcon} className='w-5 h-5' />
      </div>
    </div>
    <div className='flex-1 bg-white border border-gray-200 rounded-md overflow-hidden relative'>
      <img src={Service2} className='w-full h-32 object-cover brightness-75' />
      <div className='p-5 pr-12'><p className='font-medium text-sm'>Customize Your <br/> Products</p></div>
      <div className='absolute right-4 top-24 bg-blue-100 p-2 rounded-full border-4 border-white'>
        <img src={BoxIcon} className='w-5 h-5' />
      </div>
    </div>
    <div className='flex-1 bg-white border border-gray-200 rounded-md overflow-hidden relative'>
      <img src={Service3} className='w-full h-32 object-cover brightness-75' />
      <div className='p-5 pr-12'><p className='font-medium text-sm'>Fast, reliable shipping <br/> by ocean or air</p></div>
      <div className='absolute right-4 top-24 bg-blue-100 p-2 rounded-full border-4 border-white'>
        <img src={SendIcon} className='w-5 h-5' />
      </div>
    </div>
    <div className='flex-1 bg-white border border-gray-200 rounded-md overflow-hidden relative'>
      <img src={Service4} className='w-full h-32 object-cover brightness-75' />
      <div className='p-5 pr-12'><p className='font-medium text-sm'>Product monitoring <br/> and inspection</p></div>
      <div className='absolute right-4 top-24 bg-blue-100 p-2 rounded-full border-4 border-white'>
        <img src={ShieldIcon} className='w-5 h-5' />
      </div>
    </div>

  </div>
</div>

<div className='mx-10 my-10'>
  <h2 className='text-2xl font-bold mb-5'>Suppliers by region</h2>
  <div className='grid grid-cols-5 gap-y-6'>
    
    <div className='flex items-center gap-3'>
      <img src={FlagUAE} className='w-6 h-4' />
      <div><p className='text-sm leading-none'>Arabic Emirates</p><p className='text-[11px] text-gray-400'>shopname.ae</p></div>
    </div>

    <div className='flex items-center gap-3'>
      <img src={FlagAUS} className='w-6 h-4' />
      <div><p className='text-sm leading-none'>Australia</p><p className='text-[11px] text-gray-400'>shopname.ae</p></div>
    </div>

    <div className='flex items-center gap-3'>
      <img src={FlagUSA} className='w-6 h-4' />
      <div><p className='text-sm leading-none'>United States</p><p className='text-[11px] text-gray-400'>shopname.ae</p></div>
    </div>

    <div className='flex items-center gap-3'>
      <img src={FlagRUS} className='w-6 h-4' />
      <div><p className='text-sm leading-none'>Russia</p><p className='text-[11px] text-gray-400'>shopname.ru</p></div>
    </div>

    <div className='flex items-center gap-3'>
      <img src={FlagITA} className='w-6 h-4' />
      <div><p className='text-sm leading-none'>Italy</p><p className='text-[11px] text-gray-400'>shopname.it</p></div>
    </div>

    <div className='flex items-center gap-3'>
      <img src={FlagDNK} className='w-6 h-4' />
      <div><p className='text-sm leading-none'>Denmark</p><p className='text-[11px] text-gray-400'>denmark.com.dk</p></div>
    </div>

    <div className='flex items-center gap-3'>
      <img src={FlagFRA} className='w-6 h-4' />
      <div><p className='text-sm leading-none'>France</p><p className='text-[11px] text-gray-400'>shopname.com.fr</p></div>
    </div>

    <div className='flex items-center gap-3'>
      <img src={FlagCHN} className='w-6 h-4' />
      <div><p className='text-sm leading-none'>China</p><p className='text-[11px] text-gray-400'>shopname.ae</p></div>
    </div>

    <div className='flex items-center gap-3'>
      <img src={FlagGBR} className='w-6 h-4' />
      <div><p className='text-sm leading-none'>Great Britain</p><p className='text-[11px] text-gray-400'>shopname.co.uk</p></div>
    </div>

  </div>
</div>

<div className='bg-[#eff2f4] py-12 flex flex-col items-center justify-center text-center'>
  
  <h2 className='text-xl font-bold text-gray-900'>
    Subscribe on our newsletter
  </h2>
  
  <p className='text-gray-500 mt-2 mb-6 text-sm'>
    Get daily news on upcoming offers from many suppliers all over the world
  </p>
  <div className='flex gap-2 w-full max-w-md px-4'>
    <input 
      type="email" 
      placeholder="Email" 
      className='flex-1 p-3 rounded-md border border-gray-300 outline-none bg-white focus:border-blue-500'
    />
    <button className='bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-md'>
      Subscribe
    </button>
  </div>

</div>
<footer className='bg-white pt-10 border-t border-gray-200'>
    <div className='mx-10 flex justify-between gap-10 pb-10'>
        <div className='max-w-[280px]'>
      <div className='flex items-center gap-2 mb-4'>
        <img src={BrandLogo} className='w-8 h-8' alt="Logo" />
        <span className='text-blue-500 font-bold text-xl'>Brand</span>
      </div>
      <p className='text-gray-500 text-sm leading-relaxed'>
        Best information about the company gies here but now lorem ipsum is
      </p>
      <div className='flex gap-3 mt-4'>
        {[FacebookIcon, TwitterIcon, LinkedInIcon, InstaIcon, YoutubeIcon].map((icon, i) => (
          <div key={i} className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400'>
            <img src={icon} className='w-4 h-4' />
          </div>
        ))}
      </div>
    </div>
    <div className='flex-1 flex justify-around'>
      <div>
        <h4 className='font-bold text-gray-900 mb-3'>About</h4>
        <ul className='text-gray-500 text-sm space-y-2 cursor-pointer'>
          <li>About Us</li><li>Find store</li><li>Categories</li><li>Blogs</li>
        </ul>
      </div>
      <div>
        <h4 className='font-bold text-gray-900 mb-3'>Partnership</h4>
        <ul className='text-gray-500 text-sm space-y-2 cursor-pointer'>
          <li>About Us</li><li>Find store</li><li>Categories</li><li>Blogs</li>
        </ul>
      </div>
      <div>
        <h4 className='font-bold text-gray-900 mb-3'>Information</h4>
        <ul className='text-gray-500 text-sm space-y-2 cursor-pointer'>
          <li>Help Center</li><li>Money Refund</li><li>Shipping</li><li>Contact us</li>
        </ul>
      </div>
      <div>
        <h4 className='font-bold text-gray-900 mb-3'>For users</h4>
        <ul className='text-gray-500 text-sm space-y-2 cursor-pointer'>
          <li>Login</li><li>Register</li><li>Settings</li><li>My Orders</li>
        </ul>
      </div>
    </div>

    <div className='w-40'>
      <h4 className='font-bold text-gray-900 mb-3'>Get app</h4>
      <img src={AppStore} className='mb-2 cursor-pointer' alt="App Store" />
      <img src={GooglePlay} className='cursor-pointer' alt="Google Play" />
    </div>
  </div>

  <div className='bg-gray-100 py-4 px-10 flex justify-between items-center text-sm text-gray-600'>
    <p>© 2023 Ecommerce.</p>
    <div className='flex items-center gap-2 cursor-pointer'>
       <img src={FlagUSA} className='w-5 h-3' />
       <span>English</span>
    </div>
  </div>

</footer>
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