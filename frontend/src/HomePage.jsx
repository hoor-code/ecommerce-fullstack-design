import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Asset Imports
import BrandLogo from './assets/brand_logo.png';
import ProfileIcon from './assets/ProfileIcon.png';
import MsgIcon from './assets/MsgIcon.png';
import OrdersIcon from './assets/OrdersIcon.png';
import CartIcon from './assets/CartIcon.png';
import UserIcon from './assets/user.png';
import Banner from './assets/Banner.png';
import Camera from './assets/camera.png';
import Watch from './assets/watch.png';
import Headphone from './assets/headphone.png';
import Laptop from './assets/Laptop.png';
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
import ShirtImg from './assets/shirt.png';
import JacketImg from './assets/jacket.jpg';
import SuitImg from './assets/suit.png';
import WalletImg from './assets/wallet.png';
import BagImg from './assets/bag.png';
import ShortsImg from './assets/shorts.png';
import HeadsetImg from './assets/headset.png';
import TechBagImg from './assets/bag.png';
import KettleImg from './assets/kettle.png';
import Service1 from './assets/service1.png';
import Service2 from './assets/service2.png';
import Service3 from './assets/service3.png';
import Service4 from './assets/service4.png';
import SearchIcon from './assets/search-icon.png';
import BoxIcon from './assets/box-icon.png';
import SendIcon from './assets/send-icon.png';
import ShieldIcon from './assets/shield-icon.png';
import FlagUAE from './assets/uae.png';
import FlagAUS from './assets/aus.png';
import FlagUSA from './assets/usa.png';
import FlagRUS from './assets/rus.png';
import FlagITA from './assets/ita.png';
import FlagDNK from './assets/dnk.png';
import FlagFRA from './assets/fra.png';
import FlagCHN from './assets/chn.png';
import FlagGBR from './assets/gbr.png';
import FacebookIcon from './assets/fb.png';
import TwitterIcon from './assets/twitter.png';
import LinkedInIcon from './assets/linkedin.png';
import InstaIcon from './assets/insta.png';
import YoutubeIcon from './assets/youtube.png';
import AppStore from './assets/appstore.png';
import GooglePlay from './assets/googleplay.png';

const HomePage = () => {
  const navigate = useNavigate();
  
  // States
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [user, setUser] = useState(null);

  // 1. Auth Check (Week 3)
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  // 2. Fetch products for Search functionality
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Search fetch error:", err));
  }, []);

  // 3. Search Logic
  useEffect(() => {
    if (query.trim() === "") {
      setFilteredResults([]);
    } else {
      const results = allProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results.slice(0, 6));
    }
  }, [query, allProducts]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredResults.length > 0) {
      navigate(`/product-details/${filteredResults[0]._id}`);
      setQuery("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className='min-h-screen bg-gray-200'>
      {/* TOP NAV */}
      <nav className='px-4 md:px-10 h-[95px] bg-white border-b border-gray-300 flex items-center justify-between gap-4'>
        <div className='h-20 w-32 md:w-40 flex-shrink-0'>
          <img src={BrandLogo} alt="Brand Logo" className='h-full w-full object-contain' />
        </div>

        {/* SEARCH BAR SECTION */}
        <div className='flex-1 max-w-2xl hidden md:block relative'>
          <form 
            onSubmit={handleSearchSubmit}
            className='relative flex items-center w-full h-12 bg-white border-2 border-blue-600 rounded-lg overflow-hidden'
          >
            <input
              type="text"
              placeholder="Search products..."
              className='w-full h-full px-4 outline-none text-gray-700'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select className='h-full bg-gray-100 px-3 text-sm text-gray-600 border-l border-gray-300 cursor-pointer'>
              <option value="all">All Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
            </select>
            <button type="submit" className='bg-blue-600 h-full px-6 text-white font-bold hover:bg-blue-700 transition-colors'>
              Search
            </button>
          </form>

          {/* SEARCH DROPDOWN */}
          {filteredResults.length > 0 && (
            <div className="absolute z-50 w-full bg-white border border-gray-200 mt-1 rounded-md shadow-2xl max-h-80 overflow-y-auto">
              {filteredResults.map((product) => (
                <div 
                  key={product._id}
                  onClick={() => {
                    navigate(`/product-details/${product._id}`);
                    setQuery("");
                  }}
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center gap-4 border-b last:border-0 transition-all"
                >
                  <img src={`http://localhost:5000${product.image}`} alt={product.name} className="w-10 h-10 object-contain rounded" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">{product.name}</p>
                    <p className="text-xs text-blue-600">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ICONS & ADMIN BUTTON */}
        <div className='flex items-center gap-2 md:gap-5 flex-shrink-0'>
          {/* Admin Button - ONLY visible if user.role === 'admin' */}
          {user && user.role === 'admin' && (
            <Link 
              to="/admin" 
              className='hidden lg:block bg-red-600 text-white px-4 py-2 rounded-md text-xs font-bold uppercase shadow-sm hover:bg-red-700 transition-all'
            >
              Admin Panel
            </Link>
          )}

          <Link to="/profile" className='h-12 w-12 md:h-16 md:w-16'>
            <img src={ProfileIcon} alt="Profile" className='h-full w-full object-contain' />
          </Link>
          <Link to="/messages" className='h-12 w-12 md:h-16 md:w-16'>
            <img src={MsgIcon} alt="Messages" className='h-full w-full object-contain' />
          </Link>
          <Link to="/products" className='h-12 w-12 md:h-16 md:w-16'>
            <img src={OrdersIcon} alt="Orders" className='h-full w-full object-contain' />
          </Link>
          <Link to="/cart" className='h-12 w-12 md:h-16 md:w-16'>
            <img src={CartIcon} alt="Cart" className='h-full w-full object-contain' />
          </Link>
        </div>
      </nav>

      {/* SECOND NAV */}
      <nav>
        <div className='flex items-center h-12 bg-white border-b border-gray-300 overflow-x-auto whitespace-nowrap px-4 md:px-10'>
          <ul className='flex space-x-6 text-sm font-medium text-gray-700'>
            <li className='cursor-pointer hover:text-blue-600'>All category</li>
            <li className='cursor-pointer hover:text-blue-600'>Hot offers</li>
            <li className='cursor-pointer hover:text-blue-600'>Gift boxes</li>
            <li className='cursor-pointer hover:text-blue-600'>Projects</li>
            <li className='cursor-pointer hover:text-blue-600'>Help</li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className='my-5 mx-4 md:mx-10 p-5 bg-white flex flex-col lg:flex-row items-start justify-between gap-5 border border-gray-300 rounded-md'>
        <div className='w-full lg:w-60 flex-shrink-0 hidden lg:block'>
          <ul className='flex flex-col gap-1 cursor-pointer'>
            <li className='text-gray-600 p-2 text-sm font-medium hover:bg-blue-50 rounded-md'>Automobiles</li>
            <li className='text-gray-600 p-2 text-sm font-medium hover:bg-blue-50 rounded-md'>Clothes and wear</li>
            <li className='text-gray-600 p-2 text-sm font-medium hover:bg-blue-50 rounded-md'>Home interiors</li>
            <li className='text-gray-600 p-2 text-sm font-medium hover:bg-blue-50 rounded-md'>Computer and tech</li>
            <li className='text-gray-600 p-2 text-sm font-medium hover:bg-blue-50 rounded-md'>Tools, equipments</li>
            <li className='text-gray-600 p-2 text-sm font-medium hover:bg-blue-50 rounded-md'>Sports and outdoor</li>
            <li className='text-gray-600 p-2 text-sm font-medium hover:bg-blue-50 rounded-md'>Animal and pets</li>
            <li className='text-gray-600 p-2 text-sm font-medium hover:bg-blue-50 rounded-md'>Machinery tools</li>
          </ul>
        </div>

        <div className='w-full lg:flex-1 h-64 md:h-96 rounded-sm overflow-hidden'>
          <img className='w-full h-full object-cover' src={Banner} alt="Banner" />
        </div>

        {/* AUTH CARD */}
        <div className='w-full lg:w-64 flex flex-col gap-2'>
          <div className='bg-blue-100 rounded-md p-4 shadow-sm'>
            <div className='flex items-center gap-3 mb-3'>
              <img className='h-12 w-12 rounded-full object-cover' src={UserIcon} alt="User" />
              <p className='font-medium text-gray-800 leading-tight text-sm'>
                {user ? `Hi, ${user.name}` : "Hi, user \n let's get started"}
              </p>
            </div>
            
            {!user ? (
              <>
                <Link to="/login">
                  <button className='w-full bg-blue-600 rounded-md text-white py-2 text-sm font-semibold hover:bg-blue-700 mb-2'>
                    Join Now
                  </button>
                </Link>
                <Link to="/login">
                  <button className='w-full bg-white border border-gray-200 rounded-md text-blue-600 py-2 text-sm font-semibold hover:bg-gray-50'>
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <button 
                onClick={handleLogout}
                className='w-full bg-red-500 rounded-md text-white py-2 text-sm font-semibold hover:bg-red-600'
              >
                Logout
              </button>
            )}
          </div>
          <div className='h-24 bg-orange-500 rounded-md p-4 text-white text-lg leading-tight'>Get US $10 off with a new supplier</div>
          <div className='h-24 bg-teal-500 rounded-md p-4 text-white text-lg leading-tight'>Send quotes with supplier preferences</div>
        </div>
      </div>

      {/* DEALS AND OFFERS */}
      <div className='my-5 mx-4 md:mx-10 bg-white border border-gray-200 rounded-md flex flex-col md:flex-row overflow-hidden'>
        <div className='p-6 w-full md:w-72 border-b md:border-b-0 md:border-r border-gray-200 flex-shrink-0'>
          <h3 className='text-xl font-bold text-gray-900'>Deals and offers</h3>
          <p className='text-gray-400 text-sm mb-4'>Hygiene equipments</p>
          <div className='flex gap-2'>
            {[['04', 'Days'], ['13', 'Hour'], ['34', 'Min'], ['56', 'Sec']].map(([val, unit]) => (
              <div key={unit} className='bg-gray-700 text-white w-12 h-12 flex flex-col items-center justify-center rounded-md'>
                <span className='text-sm font-bold'>{val}</span>
                <span className='text-[10px]'>{unit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y md:divide-y-0 divide-gray-100'>
          {[
            { name: "Smart watches", discount: "-25%", img: Watch },
            { name: "Laptops", discount: "-15%", img: Laptop },
            { name: "GoPro cameras", discount: "-40%", img: Camera },
            { name: "Headphones", discount: "-25%", img: Headphone },
            { name: "Canon cameras", discount: "-25%", img: Camera },
          ].map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center p-6 hover:bg-gray-50 cursor-pointer'>
              <div className='h-28 w-28 mb-4'>
                <img src={item.img} alt={item.name} className='h-full w-full object-contain' />
              </div>
              <p className='text-sm text-gray-700 mb-2'>{item.name}</p>
              <span className='bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold'>{item.discount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* HOME AND OUTDOOR */}
      <div className='my-5 mx-4 md:mx-10 bg-white border border-gray-200 rounded-md flex flex-col md:flex-row overflow-hidden'>
        <div className='relative w-full md:w-64 h-48 md:h-auto flex-shrink-0'>
          <img src={BannerImg} alt="Banner" className='w-full h-full object-cover -scale-x-100' />
          <div className='absolute top-5 left-5'>
            <h3 className='text-lg font-bold w-32'>Home and outdoor</h3>
            <button className='mt-4 bg-white px-4 py-2 rounded-md text-sm font-semibold shadow-md'>Source now</button>
          </div>
        </div>
        <div className='flex-1 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-gray-100'>
          {[
            { title: "Soft chairs", img: ChairImg, price: "19" },
            { title: "Sofa & chair", img: SofaImg, price: "19" },
            { title: "Kitchen dishes", img: DishImg, price: "19" },
            { title: "Smart watches", img: PotImg, price: "19" },
            { title: "Kitchen mixer", img: MixerImg, price: "100" },
            { title: "Blenders", img: BlenderImg, price: "39" },
            { title: "Home appliance", img: ApplianceImg, price: "19" },
            { title: "Coffee maker", img: PlantImg, price: "10" },
          ].map((item, idx) => (
            <div key={idx} className='p-4 flex justify-between gap-2 hover:bg-gray-50'>
              <div>
                <p className='text-sm text-gray-800'>{item.title}</p>
                <p className='text-xs text-gray-400 mt-1'>From <br /> USD {item.price}</p>
              </div>
              <img src={item.img} className='w-16 h-16 object-contain self-end' alt={item.title} />
            </div>
          ))}
        </div>
      </div>

      {/* RECOMMENDED ITEMS */}
      <h2 className='font-bold ml-10 mb-2 text-[25px] mt-10'>Recommended items</h2>
      <div className='mx-4 md:mx-10 mb-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {[
            { img: ShirtImg, price: "10.30", text: "T-shirts for men" },
            { img: JacketImg, price: "10.30", text: "Jeans shorts blue" },
            { img: SuitImg, price: "12.50", text: "Winter coat" },
            { img: WalletImg, price: "34.00", text: "Jeans bag" },
            { img: BagImg, price: "99.00", text: "Leather wallet" },
            { img: ShortsImg, price: "9.99", text: "Canon camera" },
            { img: HeadsetImg, price: "8.99", text: "Gaming headset" },
            { img: TechBagImg, price: "10.30", text: "Smartwatch silver" },
            { img: PotImg, price: "10.30", text: "Blue wallet" },
            { img: KettleImg, price: "80.95", text: "Travel bag" },
          ].map((item, i) => (
            <div key={i} className='bg-white border border-gray-200 rounded-md p-4 flex flex-col hover:border-blue-400 transition-all cursor-pointer'>
              <div className='h-40 w-full flex items-center justify-center mb-3'>
                <img src={item.img} className='h-full object-contain' alt="product" />
              </div>
              <p className='font-bold text-gray-900'>${item.price}</p>
              <p className='text-sm text-gray-500 mt-1 line-clamp-2'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className='bg-white pt-10 border-t border-gray-200'>
        <div className='mx-4 md:mx-10 flex flex-col lg:flex-row justify-between gap-10 pb-10'>
          <div className='w-full lg:max-w-[280px]'>
            <div className='flex items-center gap-2 mb-4'>
              <img src={BrandLogo} className='w-8 h-8' alt="Logo" />
              <span className='text-blue-500 font-bold text-xl'>Brand</span>
            </div>
            <p className='text-gray-500 text-sm leading-relaxed'>Ecommerce information summary goes here.</p>
            <div className='flex gap-3 mt-4'>
              {[FacebookIcon, TwitterIcon, LinkedInIcon, InstaIcon, YoutubeIcon].map((icon, i) => (
                <div key={i} className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer'>
                  <img src={icon} className='w-4 h-4' alt="social" />
                </div>
              ))}
            </div>
          </div>
          <div className='flex-1 grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div>
              <h4 className='font-bold text-gray-900 mb-3'>About</h4>
              <ul className='text-gray-500 text-sm space-y-2'>
                <li>About Us</li>
                <li>Find store</li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold text-gray-900 mb-3'>Information</h4>
              <ul className='text-gray-500 text-sm space-y-2'>
                <li>Help Center</li>
                <li>Shipping</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 py-4 px-4 md:px-10 flex justify-between items-center text-sm text-gray-600'>
          <p>© 2026 Ecommerce.</p>
          <div className='flex items-center gap-2'>
            <img src={FlagUSA} className='w-5 h-3' alt="Language" />
            <span>English</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;