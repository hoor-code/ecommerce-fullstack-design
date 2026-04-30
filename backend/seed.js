const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  {
    name: "Classic Polo Shirt",
    price: 98.00,
    image: "https://via.placeholder.com/150",
    description: "Cotton base layer slim muscle fit.",
    category: "Clothing",
    stock: 50
  },
  {
    name: "Smart Watch Series 5",
    price: 120.00,
    image: "https://via.placeholder.com/150",
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