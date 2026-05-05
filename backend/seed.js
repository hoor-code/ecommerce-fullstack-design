const mongoose = require('mongoose');
const Product = require('./models/Product');
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
require('dotenv').config();

const products = [
  {
    name: "Classic Polo Shirt",
    price: 98.00,
    image: ShirtImg,
    description: "Cotton base layer slim muscle fit.",
    category: "Clothing",
    stock: 50
  },
  {
    name: "Smart Watch Series 5",
    price: 120.00,
    image: WatchImg,
    description: "High-tech wearable with health tracking.",
    category: "Electronics",
    stock: 30
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB for seeding...");
    await Product.deleteMany(); // Clears out old products
    await Product.insertMany(products);
    console.log("✅ Data Seeded Successfully!");
    process.exit();
  })
  .catch(err => console.log(err));