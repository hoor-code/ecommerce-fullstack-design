import React from 'react';
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

const ProductList = () => {
  const products = [
    { id: 1, name: "Canon Camera EOS 2000, Black 10x zoom", price: "998.00", oldPrice: "1128.00", rating: 4.5, orders: 154, shipping: "Free Shipping", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: ShirtImg },
    { id: 2, name: "GoPro HERO6 4K Action Camera - Black", price: "998.00", oldPrice: null, rating: 4.8, orders: 154, shipping: "Free Shipping", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.", img: TechBagImg },
    { id: 3, name: "GoPro HERO6 4K Action Camera - Black", price: "998.00", oldPrice: null, rating: 4.5, orders: 154, shipping: "Free Shipping", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.", img: SuitImg },
    { id: 4, name: "GoPro HERO6 4K Action Camera - Black", price: "998.00", oldPrice: null, rating: 4.5, orders: 154, shipping: "Free Shipping", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.", img: KettleImg },
    { id: 5, name: "GoPro HERO6 4K Action Camera - Black", price: "998.00", oldPrice: "1128.00", rating: 4.5, orders: 154, shipping: "Free Shipping", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.", img: TechBagImg },
    { id: 6, name: "GoPro HERO6 4K Action Camera - Black", price: "998.00", oldPrice: null, rating: 4.5, orders: 154, shipping: "Free Shipping", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.", img: HeadsetImg },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="px-10 py-4 flex items-center gap-2 text-sm text-gray-500">
        <span>Home</span> <span>&gt;</span> <span>Clothings</span> <span>&gt;</span> <span>Men's wear</span> <span>&gt;</span> <span className="font-medium text-gray-800">Summer clothing</span>
      </div>

      <div className="px-10 flex gap-6 pb-10">
        <aside className="w-60 flex-shrink-0">
          <div className="border-t border-gray-300 py-3">
            <h4 className="font-bold text-sm mb-2">Category</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="cursor-pointer hover:text-blue-600">Mobile accessory</li>
              <li className="cursor-pointer hover:text-blue-600">Electronics</li>
              <li className="cursor-pointer hover:text-blue-600">Smartphones</li>
              <li className="cursor-pointer hover:text-blue-600">Modern tech</li>
              <li className="text-blue-600 cursor-pointer">See all</li>
            </ul>
          </div>

          <div className="border-t border-gray-300 py-3">
            <h4 className="font-bold text-sm mb-2">Brands</h4>
            <div className="space-y-2 text-sm text-gray-600">
              {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map(brand => (
                <label key={brand} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" /> {brand}
                </label>
              ))}
              <p className="text-blue-600 cursor-pointer">See all</p>
            </div>
          </div>

          <div className="border-t border-gray-300 py-3">
            <h4 className="font-bold text-sm mb-2">Price range</h4>
            <input type="range" className="w-full h-1 bg-blue-200 rounded-lg appearance-none cursor-pointer" />
            <div className="flex gap-2 mt-3">
              <div className="flex flex-col">
                <label className="text-xs text-gray-500">Min</label>
                <input type="number" placeholder="0" className="border border-gray-300 rounded p-1 w-20 text-sm" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-gray-500">Max</label>
                <input type="number" placeholder="999999" className="border border-gray-300 rounded p-1 w-20 text-sm" />
              </div>
            </div>
            <button className="w-full mt-3 bg-white border border-gray-300 text-blue-600 py-1 rounded text-sm font-bold shadow-sm">Apply</button>
          </div>
        </aside>

        <main className="flex-1">
          <div className="bg-white border border-gray-200 rounded-md p-4 mb-4 flex justify-between items-center text-sm">
            <p>12,911 items in <span className="font-bold">Mobile accessory</span></p>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Verified only</label>
              <select className="border border-gray-300 rounded p-1">
                <option>Featured</option>
                <option>Price: Low to High</option>
              </select>
              <div className="flex border border-gray-300 rounded overflow-hidden">
                <button className="p-2 bg-gray-100 border-r border-gray-300"><i className="grid-icon"></i></button>
                <button className="p-2 bg-white"><i className="list-icon"></i></button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {products.map(product => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-md p-4 flex gap-6 hover:shadow-md transition-shadow">
                <div className="w-48 h-48 flex-shrink-0">
                  <img src={product.img} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer">{product.name}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    {product.oldPrice && <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-orange-400">★★★★☆</span>
                    <span className="text-orange-400 font-medium">7.5</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500">{product.orders} orders</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-green-500 font-medium">{product.shipping}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-2xl">
                    {product.desc}
                  </p>
                  <button className="mt-4 text-blue-600 font-bold text-sm hover:underline">View details</button>
                </div>
                <button className="h-10 w-10 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50">
                  <span className="text-blue-600 text-xl">♡</span>
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-6">
            <div className="flex border border-gray-300 rounded overflow-hidden bg-white">
              <button className="px-3 py-2 border-r border-gray-300 hover:bg-gray-50">&lt;</button>
              <button className="px-3 py-2 border-r border-gray-300 bg-gray-100 font-bold">1</button>
              <button className="px-3 py-2 border-r border-gray-300 hover:bg-gray-50">2</button>
              <button className="px-3 py-2 border-r border-gray-300 hover:bg-gray-50">3</button>
              <button className="px-3 py-2 hover:bg-gray-50">&gt;</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;