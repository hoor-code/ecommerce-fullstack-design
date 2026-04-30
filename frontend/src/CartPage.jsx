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

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      title: "T-shirts with multiple colors, for men and lady",
      price: 78.99,
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      image: ShirtImg,
      qty: 9
    },
    {
      id: 2,
      title: "T-shirts with multiple colors, for men and lady",
      price: 39.00,
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Best factory LLC",
      image: BagImg,
      qty: 3
    },
    {
      id: 3,
      title: "T-shirts with multiple colors, for men and lady",
      price: 170.50,
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      image: PotImg,
      qty: 1
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">My cart ({cartItems.length})</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* LEFT: Cart Items List */}
        <div className="flex-1 bg-white border border-gray-200 rounded-md overflow-hidden">
          <div className="p-5 space-y-5">
            {cartItems.map((item, index) => (
              <div key={item.id} className={`flex flex-col md:flex-row gap-4 pb-5 ${index !== cartItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className="w-20 h-20 border border-gray-200 rounded flex-shrink-0 p-2">
                  <img src={item.image} alt="Product" className="w-full h-full object-contain" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800 max-w-md">{item.title}</h3>
                    <p className="font-semibold text-gray-800">${item.price.toFixed(2)}</p>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Size: {item.size}, Color: {item.color}, Material: {item.material}
                  </p>
                  <p className="text-sm text-gray-400">Seller: {item.seller}</p>
                  
                  <div className="flex gap-2 mt-3">
                    <button className="text-red-500 border border-gray-200 px-3 py-1 rounded text-xs font-medium hover:bg-red-50">Remove</button>
                    <button className="text-blue-500 border border-gray-200 px-3 py-1 rounded text-xs font-medium hover:bg-blue-50">Save for later</button>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <select className="border border-gray-300 rounded p-1 text-sm bg-gray-50 outline-none" defaultValue={`Qty: ${item.qty}`}>
                    <option>Qty: 1</option>
                    <option>Qty: 3</option>
                    <option>Qty: 9</option>
                  </select>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="p-5 bg-white border-t border-gray-100 flex justify-between items-center">
            <Link to="/" className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold flex items-center gap-2">
              <span>←</span> Back to shop
            </Link>
            <button className="text-blue-600 border border-gray-200 px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-50">
              Remove all
            </button>
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <div className="w-full lg:w-80 space-y-4">
          {/* Coupon Section */}
          <div className="bg-white border border-gray-200 rounded-md p-5">
            <p className="text-gray-600 text-sm mb-3">Have a coupon?</p>
            <div className="flex border border-gray-200 rounded-md overflow-hidden">
              <input type="text" placeholder="Add coupon" className="flex-1 p-2 outline-none text-sm" />
              <button className="text-blue-600 font-semibold px-4 py-2 border-l border-gray-200 text-sm hover:bg-gray-50">Apply</button>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white border border-gray-200 rounded-md p-5 shadow-sm">
            <div className="space-y-2 text-gray-600 text-sm border-b pb-4">
              <div className="flex justify-between"><span>Subtotal:</span><span>$1403.97</span></div>
              <div className="flex justify-between text-red-500"><span>Discount:</span><span>- $60.00</span></div>
              <div className="flex justify-between text-green-500"><span>Tax:</span><span>+ $14.00</span></div>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-xl">$1357.97</span>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-md font-bold hover:bg-green-600 transition-colors mb-4">
              Checkout
            </button>
            <div className="flex justify-center gap-2 opacity-60">
                {/* Placeholder for payment icons */}
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
