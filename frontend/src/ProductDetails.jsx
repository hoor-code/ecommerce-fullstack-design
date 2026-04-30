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
import FlagGER from './assets/gbr.png'
import FacebookIcon from './assets/fb.png'
import TwitterIcon from './assets/twitter.png'
import LinkedInIcon from './assets/linkedin.png'
import InstaIcon from './assets/insta.png'
import YoutubeIcon from './assets/youtube.png'
import AppStore from './assets/appstore.png'
import GooglePlay from './assets/googleplay.png'

const ProductDetails = () => {

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <div className="px-4 md:px-10 py-4 text-sm text-gray-500">
        Home {'>'} Clothings {'>'} Men's wear {'>'} Summer clothing
      </div>

      <main className="mx-4 md:mx-10 bg-white border border-gray-200 rounded-md p-5 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="lg:w-1/3">
            <div className="border border-gray-200 rounded-md p-5 flex justify-center mb-4">
              <img src={ShirtImg} alt="Main" className="h-80 object-contain" />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {[ShirtImg, ShirtImg, ShirtImg, ShirtImg, ShirtImg].map((img, i) => (
                <div key={i} className="w-16 h-16 border border-gray-300 rounded p-1 cursor-pointer hover:border-blue-500">
                  <img src={img} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:flex-1">
            <p className="text-green-500 text-sm font-medium">✓ In stock</p>
            <h1 className="text-2xl font-bold text-gray-800 mt-1">
              Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </h1>
            <div className="flex items-center gap-4 mt-2 text-sm">
              <span className="text-orange-400">★★★★☆ 9.3</span>
              <span className="text-gray-400">32 reviews</span>
              <span className="text-gray-400">154 sold</span>
            </div>

            <div className="grid grid-cols-3 bg-red-50 p-4 mt-4 rounded">
              <div><p className="text-red-500 font-bold">$98.00</p><p className="text-xs text-gray-500">50-100 pcs</p></div>
              <div className="border-l border-red-200 pl-4"><p className="font-bold">$90.00</p><p className="text-xs text-gray-500">100-700 pcs</p></div>
              <div className="border-l border-red-200 pl-4"><p className="font-bold">$78.00</p><p className="text-xs text-gray-500">700+ pcs</p></div>
            </div>

            <div className="mt-4 space-y-3 text-sm border-b pb-5">
              <div className="flex"><span className="w-24 text-gray-400">Price:</span><span>Negotiable</span></div>
              <div className="flex"><span className="w-24 text-gray-400">Type:</span><span>Classic shoes</span></div>
              <div className="flex"><span className="w-24 text-gray-400">Material:</span><span>Plastic material</span></div>
              <div className="flex"><span className="w-24 text-gray-400">Design:</span><span>Modern nice</span></div>
            </div>
          </div>

          <div className="lg:w-64 border border-gray-200 rounded-md p-4 shadow-sm h-fit">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded text-blue-400 flex items-center justify-center font-bold text-xl">R</div>
              <div><p className="text-sm font-medium">Supplier</p><p className="text-xs text-gray-500">Guanjoi Trading LLC</p></div>
            </div>
            <div className="space-y-2 text-xs text-gray-500 mb-4 border-t pt-3">
              <div className="flex gap-2"><img src={FlagGER} className="w-4 h-3" /> Germany, Berlin</div>
              <p>✓ Verified Seller</p>
              <p>🌐 Worldwide shipping</p>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-2 text-sm font-semibold">Send Inquiry</button>
            <button className="w-full border border-gray-200 text-blue-600 py-2 rounded-md text-sm font-semibold">Seller's profile</button>
          </div>
        </div>
      </main>

      <div className="mx-4 md:mx-10 mt-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white border border-gray-200 rounded-md p-6">
          <div className="flex gap-8 border-b border-gray-200 mb-5 pb-2 font-medium text-gray-400">
            <span className="text-blue-600 border-b-2 border-blue-600 pb-2 cursor-pointer">Description</span>
            <span className="hover:text-gray-600 cursor-pointer">Reviews</span>
            <span className="hover:text-gray-600 cursor-pointer">Shipping</span>
            <span className="hover:text-gray-600 cursor-pointer">About seller</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <table className="mt-5 w-full max-w-md text-sm text-gray-600 border border-gray-100">
            <tbody>
              <tr className="bg-gray-50 border-b"><td className="p-2 font-medium">Model</td><td className="p-2">#8786867</td></tr>
              <tr className="border-b"><td className="p-2 font-medium">Style</td><td className="p-2">Classic style</td></tr>
              <tr className="bg-gray-50"><td className="p-2 font-medium">Memory</td><td className="p-2">36GB RAM</td></tr>
            </tbody>
          </table>
        </div>

        <div className="lg:w-72 bg-white border border-gray-200 rounded-md p-4">
          <h3 className="font-bold mb-4">You may like</h3>
          {[
            { name: "Men Blazers Sets", img: ShirtImg, price: "$7.00 - $99.50" },
            { name: "Apple Watch Series", img: Watch, price: "$7.00 - $99.50" },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 mb-4 cursor-pointer group">
              <img src={item.img} className="w-14 h-14 object-contain border rounded p-1 group-hover:border-blue-400" />
              <div>
                <p className="text-xs font-medium text-gray-700">{item.name}</p>
                <p className="text-xs text-gray-400">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;