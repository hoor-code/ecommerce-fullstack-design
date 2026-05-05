const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Static Assets Bridge ---
// Serves images from the 'assets' folder at the /assets URL path
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Import Product Model
const Product = require('./models/Product');

// --- API Routes ---

// 1. GET all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. GET single product by ID
// This route must be defined before app.listen
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found in database" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Invalid ID format or Server Error" });
  }
});

// 3. Base route for testing
app.get('/', (req, res) => {
  res.send("Server is running and assets are linked!");
});

// --- Database Connection ---
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  // Bypasses the SSL/TLS certificate error shown in Atlas
  tlsAllowInvalidCertificates: true, 
})
.then(() => console.log("✅ MongoDB Connected!"))
.catch(err => console.log("❌ MongoDB Connection Error:", err));

// --- Server Listener ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});