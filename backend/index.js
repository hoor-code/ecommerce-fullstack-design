const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// --- Middleware ---
// Note: When you deploy, replace '*' with your actual Vercel URL for better security
app.use(cors()); 
app.use(express.json());

// --- Static Assets ---
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// --- Import Models ---
const Product = require('./models/Product');
const User = require('./models/User');

// --- API Routes ---

// 1. Register Route
app.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ firstName, lastName, email, password, role: 'user' });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Login Route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (user && (await user.comparePassword(password))) {
      const token = jwt.sign(
        { id: user._id, role: user.role }, 
        process.env.JWT_SECRET || 'secret_fallback_key'
      );
      
      res.json({ 
        token, 
        user: { name: user.firstName, role: user.role, email: user.email } 
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error during login" });
  }
});

// 3. POST a new product (Admin Functionality)
app.post('/api/products', async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;

    const newProduct = new Product({ 
      name, 
      price, 
      description, 
      image, 
      category 
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(400).json({ message: "Failed to create product. Check all required fields." });
  }
});

// 4. GET all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 5. GET single product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Invalid ID format" });
  }
});

// Base route for health check
app.get('/', (req, res) => {
  res.send("Server is running correctly!");
});

// --- Database Connection ---
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { tlsAllowInvalidCertificates: true })
.then(() => console.log("✅ MongoDB Connected!"))
.catch(err => console.log("❌ MongoDB Connection Error:", err));

// --- Server Listener ---
// Render and other services require the host to be '0.0.0.0'
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});