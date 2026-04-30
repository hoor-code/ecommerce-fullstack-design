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

const HomePage = () => {
  return (
   
    <><div className='min-h-screen bg-gray-200'>
      <nav className='px-4 md:px-10 h-[95px] bg-white border-b border-gray-300 flex items-center justify-between gap-4'>
        <div className='h-20 w-32 md:w-40 flex-shrink-0'>
          <img src={BrandLogo} alt="Brand Logo" className='h-full w-full object-contain' />
        </div>

        <div className='flex-1 max-w-2xl hidden md:block'>
          <div className='relative flex items-center w-full h-12 bg-white border-2 border-blue-600 rounded-lg overflow-hidden'>
            <input
              type="text"
              placeholder="Search"
              className='w-full h-full px-4 outline-none text-gray-700' />
            <select className='h-full bg-gray-100 px-3 text-sm text-gray-600 border-l border-gray-300 cursor-pointer hover:bg-gray-200'>
              <option value="all">All Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Kitchen</option>
            </select>
            <button className='bg-blue-600 h-full px-6 text-white font-bold hover:bg-blue-700 transition-colors flex-shrink-0'>
              Search
            </button>
          </div>
        </div>

        <div className='flex items-center gap-2 md:gap-5 flex-shrink-0'>
          <Link to="/profile" className='h-12 w-12 md:h-16 md:w-16 cursor-pointer'>
            <img src={ProfileIcon} alt="Profile" className='h-full w-full object-contain' />
          </Link>
          <Link to="/messages" className='h-12 w-12 md:h-16 md:w-16 cursor-pointer'>
            <img src={MsgIcon} alt="Messages" className='h-full w-full object-contain' />
          </Link>
          <Link to="/orders" className='h-12 w-12 md:h-16 md:w-16 cursor-pointer'>
            <img src={OrdersIcon} alt="Orders" className='h-full w-full object-contain' />
          </Link>
          <Link to="/cart" className='h-12 w-12 md:h-16 md:w-16 cursor-pointer'>
            <img src={CartIcon} alt="Cart" className='h-full w-full object-contain' />
          </Link>
        </div>
      </nav>

      <nav>
        <div className='flex items-center h-12 bg-white border-b border-gray-300 overflow-x-auto whitespace-nowrap px-4 md:px-10'>
          <ul className='flex space-x-6 text-sm font-medium text-gray-700'>
            <li className='cursor-pointer hover:text-blue-600 transition-colors'>All category</li>
            <li className='cursor-pointer hover:text-blue-600 transition-colors'>Hot offers</li>
            <li className='cursor-pointer hover:text-blue-600 transition-colors'>Gift boxes</li>
            <li className='cursor-pointer hover:text-blue-600 transition-colors'>Projects</li>
            <li className='cursor-pointer hover:text-blue-600 transition-colors'>Menu item</li>
            <li className='cursor-pointer hover:text-blue-600 transition-colors'>Help</li>
          </ul>
        </div>
      </nav>

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
            <li className='text-gray-600 p-2 text-sm font-medium hover:bg-blue-50 rounded-md'>More category</li>
          </ul>
        </div>

        <div className='w-full lg:flex-1 h-64 md:h-96 rounded-sm overflow-hidden'>
          <img className='w-full h-full object-cover' src={Banner} alt="Banner Image" />
        </div>

        <div className='w-full lg:w-64 flex flex-col gap-2'>
          <div className='bg-blue-100 rounded-md p-4 shadow-sm'>
            <div className='flex items-center gap-3 mb-3'>
              <img className='h-12 w-12 rounded-full object-cover' src={User} alt="User" />
              <p className='font-medium text-gray-800 leading-tight text-sm'>Hi, user <br /> let’s get started</p>
            </div>
<Link to="/join">
        <button className='w-full bg-blue-600 rounded-md text-white py-2 text-sm font-semibold cursor-pointer hover:bg-blue-700 mb-2'>
          Join Now
        </button>
      </Link>
                  <button className='w-full bg-white border border-gray-200 rounded-md text-blue-600 py-2 text-sm font-semibold hover:bg-gray-50'>Login</button>
          </div>
          <div className='h-24 bg-orange-500 rounded-md p-4 text-white text-lg leading-tight'>Get US $10 off with a new supplier</div>
          <div className='h-24 bg-teal-500 rounded-md p-4 text-white text-lg leading-tight'>Send quotes with supplier preferences</div>
        </div>
      </div>

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
            <div key={index} className='flex flex-col items-center justify-center p-6 hover:bg-gray-50 cursor-pointer transition-colors'>
              <div className='h-28 w-28 mb-4'>
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

      <div className='my-5 mx-4 md:mx-10 bg-white border border-gray-200 rounded-md flex flex-col md:flex-row overflow-hidden'>
        <div className='relative w-full md:w-64 h-48 md:h-auto flex-shrink-0'>
          <img src={BannerImg} alt="Banner" className='w-full h-full object-cover -scale-x-100' />
          <div className='absolute top-5 left-5'>
            <h3 className='text-lg font-bold w-32'>Home and outdoor</h3>
            <button className='mt-4 bg-white px-4 py-2 rounded-md text-sm font-semibold shadow-md'>
              Source now
            </button>
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
              <img src={item.img} className='w-16 h-16 object-contain self-end' />
            </div>
          ))}
        </div>
      </div>

      <div
        className='my-8 mx-4 md:mx-10 min-h-[380px] rounded-md flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 gap-10'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 100, 255, 0.9), rgba(0, 100, 255, 0.5)), url(${InquiryBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='w-full lg:max-w-md text-white text-center lg:text-left'>
          <h2 className='text-2xl md:text-3xl font-bold leading-tight'>
            An easy way to send requests to all suppliers
          </h2>
          <p className='mt-4 text-sm opacity-90 hidden md:block'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className='bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-[480px]'>
          <h3 className='text-lg font-bold text-gray-800 mb-5'>Send quote to suppliers</h3>
          <div className='flex flex-col gap-4'>
            <input type="text" placeholder="What item you need?" className='border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500' />
            <textarea placeholder="Type more details" rows="3" className='border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500' />
            <div className='flex gap-3'>
              <input type="text" placeholder="Quantity" className='flex-1 border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500' />
              <select className='border border-gray-300 rounded-md p-3 text-gray-500 outline-none w-28'>
                <option>Pcs</option><option>Kg</option><option>Liters</option>
              </select>
            </div>
            <button className='bg-blue-600 text-white font-bold py-3 px-8 rounded-md w-full sm:w-max hover:bg-blue-700 transition-all'>
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </div><h2 className='font-bold ml-10 mb-2 text-[25px]'>Recommended items</h2><div className='flex items-center justify-between mx-25'>
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
     <div className='my-10 mx-4 md:mx-10'>
  <h2 className='text-2xl font-bold mb-5'>Our extra services</h2>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
    <div className='bg-white border border-gray-200 rounded-md overflow-hidden relative'>
      <img src={Service1} className='w-full h-32 object-cover brightness-75' />
      <div className='p-5 pr-12'><p className='font-medium text-sm'>Source from <br /> Industry Hubs</p></div>
      <div className='absolute right-4 top-24 bg-blue-100 p-2 rounded-full border-4 border-white'>
        <img src={SearchIcon} className='w-5 h-5' />
      </div>
    </div>
    <div className='bg-white border border-gray-200 rounded-md overflow-hidden relative'>
      <img src={Service2} className='w-full h-32 object-cover brightness-75' />
      <div className='p-5 pr-12'><p className='font-medium text-sm'>Customize Your <br /> Products</p></div>
      <div className='absolute right-4 top-24 bg-blue-100 p-2 rounded-full border-4 border-white'>
        <img src={BoxIcon} className='w-5 h-5' />
      </div>
    </div>
    <div className='bg-white border border-gray-200 rounded-md overflow-hidden relative'>
      <img src={Service3} className='w-full h-32 object-cover brightness-75' />
      <div className='p-5 pr-12'><p className='font-medium text-sm'>Fast, reliable shipping <br /> by ocean or air</p></div>
      <div className='absolute right-4 top-24 bg-blue-100 p-2 rounded-full border-4 border-white'>
        <img src={SendIcon} className='w-5 h-5' />
      </div>
    </div>
    <div className='bg-white border border-gray-200 rounded-md overflow-hidden relative'>
      <img src={Service4} className='w-full h-32 object-cover brightness-75' />
      <div className='p-5 pr-12'><p className='font-medium text-sm'>Product monitoring <br /> and inspection</p></div>
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
      </div><div className='bg-[#eff2f4] py-12 flex flex-col items-center justify-center text-center'>

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
            className='flex-1 p-3 rounded-md border border-gray-300 outline-none bg-white focus:border-blue-500' />
          <button className='bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-md'>
            Subscribe
          </button>
        </div>

     
      </div>
     <footer className='bg-white pt-10 border-t border-gray-200'>
  <div className='mx-4 md:mx-10 flex flex-col lg:flex-row justify-between gap-10 pb-10'>
        <div className='w-full lg:max-w-[280px]'>
      <div className='flex items-center gap-2 mb-4'>
        <img src={BrandLogo} className='w-8 h-8' alt="Logo" />
        <span className='text-blue-500 font-bold text-xl'>Brand</span>
      </div>
      <p className='text-gray-500 text-sm leading-relaxed'>
        Best information about the company gies here but now lorem ipsum is
      </p>
      <div className='flex gap-3 mt-4'>
        {[FacebookIcon, TwitterIcon, LinkedInIcon, InstaIcon, YoutubeIcon].map((icon, i) => (
          <div key={i} className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors'>
            <img src={icon} className='w-4 h-4' />
          </div>
        ))}
      </div>
    </div>

    <div className='flex-1 grid grid-cols-2 md:grid-cols-4 gap-8'>
      <div>
        <h4 className='font-bold text-gray-900 mb-3'>About</h4>
        <ul className='text-gray-500 text-sm space-y-2'>
          <li className='cursor-pointer hover:text-blue-600'>About Us</li>
          <li className='cursor-pointer hover:text-blue-600'>Find store</li>
          <li className='cursor-pointer hover:text-blue-600'>Categories</li>
          <li className='cursor-pointer hover:text-blue-600'>Blogs</li>
        </ul>
      </div>
      <div>
        <h4 className='font-bold text-gray-900 mb-3'>Partnership</h4>
        <ul className='text-gray-500 text-sm space-y-2'>
          <li className='cursor-pointer hover:text-blue-600'>About Us</li>
          <li className='cursor-pointer hover:text-blue-600'>Find store</li>
          <li className='cursor-pointer hover:text-blue-600'>Categories</li>
          <li className='cursor-pointer hover:text-blue-600'>Blogs</li>
        </ul>
      </div>
      <div>
        <h4 className='font-bold text-gray-900 mb-3'>Information</h4>
        <ul className='text-gray-500 text-sm space-y-2'>
          <li className='cursor-pointer hover:text-blue-600'>Help Center</li>
          <li className='cursor-pointer hover:text-blue-600'>Money Refund</li>
          <li className='cursor-pointer hover:text-blue-600'>Shipping</li>
          <li className='cursor-pointer hover:text-blue-600'>Contact us</li>
        </ul>
      </div>
      <div>
        <h4 className='font-bold text-gray-900 mb-3'>For users</h4>
        <ul className='text-gray-500 text-sm space-y-2'>
          <li className='cursor-pointer hover:text-blue-600'>Login</li>
          <li className='cursor-pointer hover:text-blue-600'>Register</li>
          <li className='cursor-pointer hover:text-blue-600'>Settings</li>
          <li className='cursor-pointer hover:text-blue-600'>My Orders</li>
        </ul>
      </div>
    </div>

    <div className='w-full lg:w-40'>
      <h4 className='font-bold text-gray-900 mb-3'>Get app</h4>
      <div className='flex lg:flex-col gap-2'>
        <img src={AppStore} className='h-10 w-auto cursor-pointer object-contain' alt="App Store" />
        <img src={GooglePlay} className='h-10 w-auto cursor-pointer object-contain' alt="Google Play" />
      </div>
    </div>
  </div>

  <div className='bg-gray-100 py-4 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600'>
    <p>© 2023 Ecommerce.</p>
    <div className='flex items-center gap-2 cursor-pointer'>
      <img src={FlagUSA} className='w-5 h-3' alt="Language" />
      <span>English</span>
    </div>
  </div>
</footer>
      </>
      
   
  );
};

export default HomePage;